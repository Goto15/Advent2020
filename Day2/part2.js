const fs = require('fs')

let validCount = 0;


fs.readFile('input.txt', (err, data) => {
  if (err) throw err;

  // As is tradition we make a single unreadable one liner to parse our data
  data = data.toString().split('\n').map(elem => elem.split(' '));

  for( let i = 0; i < data.length; i += 1){
    // Converts the number range into actual numbers
    let range = data[i][0].split('-').map(parseFloat);
    // Remove the colon from the char element
    let reqChar = data[i][1].replace(':', '');
    // Get the password to check.
    let password = data[i][2];

    // Check if the chars are in the correct positions
    let A = password[range[0] - 1] === reqChar;
    let B = password[range[1] - 1] === reqChar;

    // Make sure there's only one char in the right spot
    if(A ^ B) validCount += 1;
  }

  console.log(validCount);
})