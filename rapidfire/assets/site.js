// Scroll reveal (replaces the original animation library, which was not archived)
(function () {
  var els = document.querySelectorAll('.wow');
  if (!('IntersectionObserver' in window)) { els.forEach(show); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -10% 0px' });
  els.forEach(function (el) { io.observe(el); });
  function show(el) { el.classList.add('animated'); }
})();

// Contact panel slide-out
(function () {
  var nav = document.getElementById('mySidenav'), btn = document.querySelector('.open-contact-btn');
  if (!nav || !btn) return;
  btn.addEventListener('click', function (e) { e.preventDefault(); nav.classList.toggle('is-open'); });
  var close = nav.querySelector('.closebtn');
  if (close) close.addEventListener('click', function () { nav.classList.remove('is-open'); });
})();
