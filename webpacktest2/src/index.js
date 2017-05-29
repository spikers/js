var style = require('./style/globalStyle.css');

import $ from 'jquery';

// var messages = require('./messages');
// import Button from './button';
// import Kitten from './image';
// import Curbstore from './Curbstore';

// // let newMessage = () => (`
// //   <p>
// //     ${messages.event}
// //     ${Kitten}
// //     ${Curbstore}
// //   </p>
// // `);

// import { multiply } from './mathStuff';

// // const newMessage = () => (multiply(3, 4));
// const newMessage = () => (`
//   <div class="${style.box}">
//     DEV: ${DEVELOPMENT.toString()}<br>
//     PROD: ${PRODUCTION.toString()}<br>
//   </div>
//   `);

var app = document.getElementById('app');
app.innerHTML = `
  <div id="menu">
    <button id="loadPage1">Load Page 1</button>
    <button id="loadPage2">Load Page 2</button>
  </div>
  <div id="content">
    <h1>Home</h1>
  </div>
`;

// Button.attachEl();

document.getElementById('loadPage1').addEventListener('click', () => {
  System.import('./page1')
      .then(pageModule => {
        document.getElementById('content').innerHTML = pageModule.default;
      })
})

document.getElementById('loadPage2').addEventListener('click', () => {
  System.import('./page2')
      .then(pageModule => {
        document.getElementById('content').innerHTML = pageModule.default;
      })
})

$('#app').css('background-color', 'yellow');

if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept();
  }
}