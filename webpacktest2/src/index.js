var messages = require('./messages');
import Button from './button';
import Kitten from './image';
import Curbstore from './Curbstore';

var newMessage = () => (`
  <p>
    ${messages.event}
    ${Kitten}
    ${Curbstore}
  </p>
`);

document.getElementById('app');
app.innerHTML = newMessage();

// Button.attachEl();

if (module.hot) {
  module.hot.accept();
}