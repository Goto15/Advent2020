const fs = require('fs')

fs.readFile('input.txt', (err, data) => {
  if (err) throw err;

  // Let's make a really long complicated one liner to parse our data
  data = data.toString().split('\n').map(parseFloat);

  console.log(findComplements(data))
})

// Oh boy a O(n) solution! We did so good!
function findComplements(array){
  let complements = {};
  let a = 0;
  let b = 0;

  // Create an object/hash with each number's complement as a key for that
  // noice O(1) look up time.
  array.forEach(element => {
    let complement = (2020 - element).toString();
    if(!complements[complement]) {
      complements[complement] = element;
    }
  })

  // Check each element for its complement. We could probably do it in
  // the above loop, but it's here, now.
  array.forEach(element => {
    if(complements[element.toString()]) {
      a = parseInt(element);
      b = parseInt(complements[element.toString()]);
    }
  })
  return a * b;
}