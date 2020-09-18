// write in a function thats a X by X array of arrays of numbers
// as well two x/y combinations and have it return the shortest
// length (you don't need to track the actual path) from point A
// to point B.
//
// the numbers in the maze array represent as follows:
// 0 – open space
// 1 - closed space, cannot pass through. a wall
// 2 - one of the two origination points
//
// you will almost certainly need to transform the maze into your own
// data structure to keep track of all the meta data
const checkIfVisited = (point, path) => path.has(generateKeyFromPoint(point));

const getNeighbors = (maze, path, [xA, yA]) => {
  const neighbors = [
    [xA - 1, yA],
    [xA + 1, yA],
    [xA, yA - 1],
    [xA, yA + 1]
  ];

  return neighbors.filter(([xA, yA]) => {
    // edges
    if (xA < 0 || xA >= maze.length || yA < 0 || yA >= maze.length)
      return false;

    // wall
    if (maze[yA][xA] === 1) return false;

    // vistied
    if (checkIfVisited([xA, yA], path)) return false;

    return true;
  });
};

const generateKeyFromPoint = (point) => `${point[0]}${point[1]}`;

const getPointFromPath = (path, point) => path.get(generateKeyFromPoint(point));

const generatePath = (meetPoint, pathA, pathB) => {
  let pointA = meetPoint,
    pointB = meetPoint;
  const resultA = [],
    resultB = [];

  while (pointA) {
    const { point, prePoint } = getPointFromPath(pathA, pointA);

    resultA.unshift(point);
    pointA = prePoint;
  }

  while (pointB) {
    const { point, prePoint } = getPointFromPath(pathB, pointB);

    resultB.push(point);
    pointB = prePoint;
  }

  return [...resultA, ...resultB.slice(1, resultB.length - 1)];
};

const searchPath = (maze, queueA, queueB, pathA, pathB) => {
  while (queueA.length && queueB.length) {
    // Start from point A
    const neighborsA = queueA.reduce((accu, point) => {
      const neighbors = getNeighbors(maze, pathA, point);

      neighbors.forEach((neighbor) => {
        pathA.set(generateKeyFromPoint(neighbor), {
          point: neighbor,
          prePoint: point
        });
      });

      return accu.concat(neighbors);
    }, []);

    queueA = [];

    for (let neighbor of neighborsA) {
      if (checkIfVisited(neighbor, pathB)) {
        return generatePath(neighbor, pathA, pathB);
      } else {
        queueA.push(neighbor);
      }
    }

    // Start from point B
    const neighborsB = queueB.reduce((accu, point) => {
      const neighbors = getNeighbors(maze, pathB, point);

      neighbors.forEach((neighbor) => {
        pathB.set(generateKeyFromPoint(neighbor), {
          point: neighbor,
          prePoint: point
        });
      });

      return accu.concat(neighbors);
    }, []);

    queueB = [];

    for (let neighbor of neighborsB) {
      if (checkIfVisited(neighbor, pathA)) {
        return generatePath(neighbor, pathA, pathB);
      } else {
        queueB.push(neighbor);
      }
    }
  }

  return [];
};

export const findShortestPathLength = (maze, [xA, yA], [xB, yB]) => {
  const pathA = new Map(),
    pathB = new Map();

  pathA.set(generateKeyFromPoint([xA, yA]), {
    point: [xA, yA],
    prePoint: null
  });

  pathB.set(generateKeyFromPoint([xB, yB]), {
    point: [xB, yB],
    prePoint: null
  });

  const queueA = [[xA, yA]],
    queueB = [[xB, yB]];

  const path = searchPath(maze, queueA, queueB, pathA, pathB);

  return path.length || -1;
};
