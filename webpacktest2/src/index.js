var messages = require('./messages');

window.addEventListener('load', function () {
  document.getElementById('app');
  app.innerHTML = `<p>Hi ${messages.event} my friend, ${messages.hi}</p>`;
});