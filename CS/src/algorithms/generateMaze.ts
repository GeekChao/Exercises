const randomizeDirection = ((dict) => () =>
  dict.sort(() => Math.random() - 0.5))(["n", "e", "s", "w"]);

const canMoveTo = (maze, [x, y]) => {
  // out of boundary
  if (x < 0 || x >= maze.length || y < 0 || y >= maze.length) return false;

  // visited
  if (maze[y][x].visited) return false;

  return true;
};

const getNextPoint = (direction, [x, y]) => {
  // "n"
  if (direction === "n") return [x, y + 1];

  // "e"
  if (direction === "e") return [x + 1, y];

  // "s"
  if (direction === "s") return [x, y - 1];

  // "w"
  if (direction === "w") return [x - 1, y];
};

const getPointInfoFromMaze = (maze, [x, y]) => maze[y][x];

const getOppositeDirection = ((dict) => (direction) => dict[direction])({
  n: "s",
  s: "n",
  e: "w",
  w: "e"
});

const moveToPoint = (maze, direction, currentPoint, nextPoint) => {
  // tear down the wall
  const currentPointInfo = getPointInfoFromMaze(maze, currentPoint);
  const nextPointInfo = getPointInfoFromMaze(maze, nextPoint);
  const oppositeDirection = getOppositeDirection(direction);

  currentPointInfo[direction] = false;
  nextPointInfo[oppositeDirection] = false;

  // mark it visited
  currentPointInfo.visited = true;
  nextPointInfo.visited = true;

  return maze;
};

// create a function that accepts two paraments: an empty maze and a starting coordinate
// the maze will be an array of arrays of objects. the objects will look like:
// {
//   "n": true,
//   "e": true,
//   "s": true,
//   "w": true,
//   "visited": false
// }
//
// the outer array (that contains arrays) represents the y axis. the inner arrays (that contains
// objects) are represent the x axis. maze[y][x]
//
// the starting coordinates will be a pair, an array of two numbers, [x, y]. the first
// number will be the x position and the second will be the y position

const generateMaze = (maze, [xStart, yStart]) => {
  // code goes here
  const directions = randomizeDirection();

  directions.forEach((direction) => {
    const nextPoint = getNextPoint(direction, [xStart, yStart]);

    if (canMoveTo(maze, nextPoint)) {
      moveToPoint(maze, direction, [xStart, yStart], nextPoint);
      generateMaze(maze, nextPoint);
    }
  });

  return maze;
};
