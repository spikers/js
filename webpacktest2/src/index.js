var messages = require('./messages');

var newMessage = () => (`<p>message is this: ${messages.hi} heyo`);

document.getElementById('app');
app.innerHTML = newMessage();

if (module.hot) {
  module.hot.accept();
}