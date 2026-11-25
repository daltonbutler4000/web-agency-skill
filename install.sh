#!/usr/bin/env bash
# Install the web-agency skill and its specialist skills for Claude Code.
#
#   bash install.sh             # web-agency + visual-direction-research + Taste Skill + Emil Kowalski's animation skills
#   bash install.sh --no-taste  # skip Taste Skill (a ~40 MB clone)
#   bash install.sh --no-emil   # skip Emil Kowalski's animation skills
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
EMIL_REPO="https://github.com/emilkowalski/skills"
EMIL_COMMIT="64eb3deb9a5fbfa041faf783e0bc3fd635872e9c"    # reviewed 2026-11-25; MIT
# Web animation and interaction skills only. They link to each other by relative path, so they
# are installed side by side. Native (Swift, Expo, Apple) and unrelated skills are left out.
EMIL_SKILLS="animate choreograph gestures review-animations improve-animations animation-performance animation-vocabulary find-animation-opportunities remove-animations emil-design-eng pick-ui-library"
MARK=".installed-by-web-agency"
WANT_TASTE=1; WANT_EMIL=1
for a in "$@"; do
  case "$a" in --no-taste) WANT_TASTE=0 ;; --no-emil) WANT_EMIL=0 ;; esac
done

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

if [ "$WANT_TASTE" = 1 ]; then
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

if [ "$WANT_EMIL" = 1 ]; then
  tmp="$(mktemp -d)"
  # Fetch exactly the reviewed commit; anything else is not installed.
  if git init -q "$tmp/emil" 2>/dev/null \
     && git -C "$tmp/emil" fetch -q --depth 1 "$EMIL_REPO" "$EMIL_COMMIT" 2>/dev/null \
     && git -C "$tmp/emil" checkout -q FETCH_HEAD 2>/dev/null \
     && [ "$(git -C "$tmp/emil" rev-parse HEAD)" = "$EMIL_COMMIT" ]; then
    for s in $EMIL_SKILLS; do
      if [ -f "$tmp/emil/skills/$s/SKILL.md" ]; then
        install_copy "$tmp/emil/skills/$s" "$s"
      else
        echo "web-agency: Emil skill $s not found at the reviewed commit; skipped."
      fi
    done
    [ -f "$tmp/emil/LICENSE" ] && cp "$tmp/emil/LICENSE" "$SKILLS/emil-design-eng/LICENSE" 2>/dev/null
  else
    echo "web-agency: could not fetch Emil Kowalski's skills at the reviewed commit; skipped. web-agency falls back to impeccable animate."
  fi
  rm -rf "$tmp"
fi
exit 0
