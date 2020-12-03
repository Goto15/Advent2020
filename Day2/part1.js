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

    // Keeps track of the number of occurances of the correct char
    let charCount = 0;

    // Check for the count of the reqChar in the string
    for(let j = 0; j < password.length; j += 1){
      if(password[j] === reqChar) charCount += 1;
    }

    if((range[0] <= charCount) && (charCount <= range[1])){
      validCount += 1;
    }
  }

  console.log(validCount);
})