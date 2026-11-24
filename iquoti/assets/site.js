// Scroll reveal (replaces the original animation library, which was not archived)
(function () {
  var els = document.querySelectorAll('[data-aos]');
  if (!('IntersectionObserver' in window)) { els.forEach(show); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -10% 0px' });
  els.forEach(function (el) { io.observe(el); });
  function show(el) { el.classList.add('aos-animate'); }
})();

// Category tabs: clicking a category shows its list of services
document.querySelectorAll('.main-nav a[data-index]').forEach(function (link) {
  link.addEventListener('click', function (ev) {
    ev.preventDefault();
    var scope = link.closest('.d-flex') || document;
    scope.querySelectorAll('.main-nav a').forEach(function (a) { a.classList.toggle('active', a === link); });
    scope.querySelectorAll('.sub-menu').forEach(function (m) { m.classList.toggle('active', m.dataset.index === link.dataset.index); });
  });
});
