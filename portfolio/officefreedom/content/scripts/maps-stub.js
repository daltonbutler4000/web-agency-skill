// Portfolio copy: the live site used Google Maps with a private API key.
// This stand-in absorbs the map calls so the rest of the page scripts run, and the
// map areas show a static image instead (see portfolio.css).
(function () {
  var absorb = new Proxy(function () {}, {
    get: function (t, k) { return k === Symbol.toPrimitive ? function () { return 0; } : absorb; },
    apply: function () { return absorb; },
    construct: function () { return absorb; }
  });
  window.google = { maps: absorb };
  window.MarkerClusterer = absorb;
})();
