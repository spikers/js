for (var i = 0; getCondition(i); i++) {
  console.log('i is', i);
}

function getCondition(i) {
  if (i <= 100) {
    console.log('hi');
    return true;
  }
}