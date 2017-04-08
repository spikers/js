const limit = 1000000; //Million

function sync() {
  let start = getNow();

  for (let i = 0; i < limit; i++) {
    Math.random();
  }

  for (let i = 0; i < limit; i++) {
    let sol2 = Math.random() + Math.random * 100;
  }

  let end = getNow() - start;
  console.log('End of Sync', end);
}

function prom() {
  let start = getNow();

  let prom1 = new Promise(function (resolve, reject) {
    for (let i = 0; i < limit; i++) {
      Math.random();
      resolve();
    }
  })
  
  let prom2 = new Promise(function (resolve, reject) {
    for (let i = 0; i < limit; i++) {
      let sol2 = Math.random() + Math.random * 100;
      resolve();
    }
  })


  Promise.all([prom1, prom2]).then(function (values) {
    let end = getNow() - start;
    console.log('End of Prom', end);
  })
}

function stimeout() {
  let start = getNow();

  let prom1 = new Promise(function (resolve, reject) {
    window.setTimeout(function() {
      for (let i = 0; i < limit; i++) {
        Math.random();
        resolve();
      }  
    }, 0)
  })
  
  let prom2 = new Promise(function (resolve, reject) {
    window.setTimeout(function() {
      for (let i = 0; i < limit; i++) {
        let sol2 = Math.random() + Math.random * 100;
        resolve();
      }
    })
  })


  Promise.all([prom1, prom2]).then(function (values) {
    let end = getNow() - start;
    console.log('End of Prom', end);
  })
}

function getNow() {
  return window.performance.now();
}

//sync();
stimeout();

