var messages = require('./messages');
import Button from './button';

var newMessage = () => (Button.button);

document.getElementById('app');
app.innerHTML = newMessage();

Button.attachEl();

if (module.hot) {
  module.hot.accept();
}