const fs = require('fs')

fs.readFile('input.txt', (err, data) => {
  if (err) throw err;

  // Let's make a really long complicated one liner to parse our data
  data = data.toString().split('\n').map(parseFloat);

  console.log(checkForComplements(data));
})

function checkForComplements(array){
  // Don't forget your micro optimizations for your brute force method
  let length = array.length;

  // There is a way to make this much simpler with a smaller run time, but due to time
  // and attention constraints here is the brute force method
  for(let i = 0; i < length; i += 1){
    for(let j = 0; j < length; j += 1){
      for(let k = 0; k < length; k += 1){
        if((array[i] + array[j] + array[k]) === 2020) {
          return [array[i], array[j], array[k], (array[i] * array[j] * array[k])];
        }
      }
    }
  }
}
