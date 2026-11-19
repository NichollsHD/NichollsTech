// Mobile menu
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Demo forms: nothing is sent or stored. Validates, then shows a notice.
document.querySelectorAll('form.demo-form').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = form.querySelector('.form-status');
    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = 'Please fill in the required fields.';
      return;
    }
    status.textContent = 'Demo only: nothing was sent or saved. The live site will send this for real.';
    form.reset();
  });
});
