var messages = require('./messages');
import Button from './button';
import Kitten from './image';

var newMessage = () => (`
  <p>
    ${messages.event}
    ${Kitten}
  </p>
`);

document.getElementById('app');
app.innerHTML = newMessage();

Button.attachEl();

if (module.hot) {
  module.hot.accept();
}