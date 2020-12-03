const fs = require('fs')

let treesHit = 0

fs.readFile('input.txt', (err, data) => {
  if (err) throw err;

  data = data.toString().split('\n');

  // data.length is vertical height
  let height = data.length
  // array[i].length is horiztonal looping width
  let width = data[0].length;

  // slope is y+1, x+3
  for(let x = 0, y = 0; y < height; x += 3, y += 1){
    if(data[y][x % width] === '#') treesHit += 1;
  }

  console.log(treesHit);
})
