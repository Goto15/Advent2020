const fs = require('fs')

let treesHit = 1

let slopes = [ [1,1], [3,1], [5,1], [7,1], [1,2] ]

fs.readFile('input.txt', (err, data) => {
  if (err) throw err;

  data = data.toString().split('\n');

  slopes.forEach( slope => treesHit *= treeCollisions(data, slope[0], slope[1]))

  console.log(treesHit);
})

function treeCollisions(mountain, xDistance, yDistance){
  let collisions = 0;

  for(let x = 0, y = 0; y < mountain.length; x += xDistance, y += yDistance){
    if(mountain[y][x % mountain[0].length] === '#') collisions += 1;
  }

  return collisions;
}
