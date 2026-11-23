#!/usr/bin/env bash
# Install the web-agency skill and its two specialist skills for Claude Code.
#
#   bash install.sh             # web-agency + visual-direction-research + Taste Skill
#   bash install.sh --no-taste  # skip Taste Skill (a ~40 MB clone)
#
# Safe to re-run. web-agency and visual-direction-research are refreshed from this repo.
# A specialist skill that is already installed some other way is left untouched.
# Never exits non-zero for an optional part: a failed setup script would block a cloud session.
set -u
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILLS="${CLAUDE_CONFIG_DIR:-$HOME/.claude}/skills"
TASTE_REPO="https://github.com/Leonxlnx/taste-skill"
TASTE_TAG="v2.5.1"
TASTE_COMMIT="f6b76575f949707b4e3c37cd86cb44b0b98643e8"   # what v2.5.1 pointed to when reviewed
MARK=".installed-by-web-agency"

mkdir -p "$SKILLS" || { echo "web-agency: cannot create $SKILLS"; exit 0; }

install_copy() {  # <source dir> <skill name>
  local src="$1" dest="$SKILLS/$2"
  if [ -e "$dest" ] && [ ! -e "$dest/$MARK" ]; then
    echo "web-agency: $2 already exists and was not installed by this script; left as is."
    return 0
  fi
  rm -rf "$dest" && cp -R "$src" "$dest" && touch "$dest/$MARK" && echo "web-agency: installed $2"
}

install_copy "$HERE/web-agency" web-agency
install_copy "$HERE/vendor/visual-direction-research" visual-direction-research

if [ "${1:-}" != "--no-taste" ]; then
  dest="$SKILLS/design-taste-frontend"
  if [ -e "$dest" ]; then
    echo "web-agency: design-taste-frontend already present; left as is."
  else
    tmp="$(mktemp -d)"
    if git clone -q --depth 1 --branch "$TASTE_TAG" "$TASTE_REPO" "$tmp/taste" 2>/dev/null; then
      got="$(git -C "$tmp/taste" rev-parse HEAD)"
      if [ "$got" = "$TASTE_COMMIT" ]; then
        cp -R "$tmp/taste/skills/taste-skill" "$dest" && touch "$dest/$MARK" && echo "web-agency: installed design-taste-frontend ($TASTE_TAG)"
      else
        echo "web-agency: Taste Skill $TASTE_TAG no longer matches the reviewed commit ($got); NOT installed. Review upstream and update install.sh."
      fi
    else
      echo "web-agency: could not fetch Taste Skill; skipped. web-agency falls back to Impeccable."
    fi
    rm -rf "$tmp"
  fi
fi
exit 0
