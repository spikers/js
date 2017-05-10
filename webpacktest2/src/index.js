var messages = require('./messages');
import Button from './button';
import Kitten from './image';
import Curbstore from './Curbstore';

// let newMessage = () => (`
//   <p>
//     ${messages.event}
//     ${Kitten}
//     ${Curbstore}
//   </p>
// `);

import { multiply } from './mathStuff';

const newMessage = () => (multiply(3, 4));

document.getElementById('app');
app.innerHTML = newMessage();

// Button.attachEl();

if (module.hot) {
  module.hot.accept();
}