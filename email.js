// The address is not in the page source as one string; it is assembled here,
// so simple scrapers only see "name [at] domain". People get a normal link.
document.querySelectorAll('.email').forEach(function (el) {
  var a = el.dataset.u + '@' + el.dataset.d;
  var link = document.createElement('a');
  link.href = 'mailto:' + a;
  link.textContent = a;
  el.replaceWith(link);
});
