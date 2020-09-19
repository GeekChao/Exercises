const randomizeDirection = ((dict) => () =>
  dict[Math.floor(Math.random() * dict.length)])(["n", "e", "s", "w"]);

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
