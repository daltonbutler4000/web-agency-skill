// Booking and recording buttons. On the live site these opened Eventbrite checkout and a YouTube player;
// in this portfolio copy they open a short notice instead.
(function () {
  var copy = {
    tickets: ['Buy Tickets', 'Ticket sales for LionMan Talks were handled through Eventbrite. Booking is switched off in this portfolio version of the site.'],
    video: ['Watch the talk', 'Recordings of past talks were streamed from YouTube. Playback is switched off in this portfolio version of the site.']
  };
  var modal = document.createElement('div');
  modal.className = 'lm-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = '<div class="lm-modal__box"><button class="lm-modal__close" aria-label="Close">&times;</button><h3></h3><p></p><button class="lm-modal__ok">Close</button></div>';
  document.body.appendChild(modal);
  function close() { modal.classList.remove('is-open'); }
  modal.addEventListener('click', function (e) {
    if (e.target === modal || e.target.closest('.lm-modal__close, .lm-modal__ok')) close();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-lm-modal]');
    if (!t) return;
    e.preventDefault();
    var c = copy[t.getAttribute('data-lm-modal')];
    modal.querySelector('h3').textContent = c[0];
    modal.querySelector('p').textContent = c[1];
    modal.classList.add('is-open');
    modal.querySelector('.lm-modal__ok').focus();
  });
  document.querySelectorAll('form.maichimp-newsletter').forEach(function (f) {
    f.addEventListener('submit', function (e) { e.preventDefault(); });
  });
})();
