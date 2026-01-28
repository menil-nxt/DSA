// Rotting Oranges

var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let queue = [];

  // first add all the rotten range in queue
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  let maxMinutes = 0;

  // mark adj nodes as rotten ans push inside queue till queue is not empty
  while (queue.length) {
    console.log(grid[0]);
    console.log(grid[1]);
    console.log(grid[2]);
    console.log("------------");

    let [x, y, level] = queue.shift();
    if (x > 0 && grid[x - 1][y] === 1) {
      // left directionally adjacent
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, level + 1]); // every iiteration level incerse
    }
    if (x < m - 1 && grid[x + 1][y] === 1) {
      // right directionally adjacent
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, level + 1]);
    }
    if (y < n - 1 && grid[x][y + 1] === 1) {
      // Top directionally adjacent
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, level + 1]);
    }
    if (y > 0 && grid[x][y - 1] === 1) {
      // Bottom directionally adjacent
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, level + 1]);
    }
    maxMinutes = Math.max(level, maxMinutes);
  }

  // fillaly run over each element in check if any fresh is remamining than return -1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return maxMinutes;
};
