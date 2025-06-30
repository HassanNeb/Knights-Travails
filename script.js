function knightMoves(start, end) {
    const moves = [
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2],
    ];

    const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const path = queue.shift();
        const [x, y] = path[path.length - 1];

        if (x === end[0] && y === end[1]) {
            console.log(
                `You made it in ${path.length - 1} moves! Here's your path:`
            );
            path.forEach((p) => console.log(`[${p[0]},${p[1]}]`));
            return path;
        }

        for (const [dx, dy] of moves) {
            const [nx, ny] = [x + dx, y + dy];
            const posStr = `${nx},${ny}`;
            if (isValid(nx, ny) && !visited.has(posStr)) {
                visited.add(posStr);
                queue.push([...path, [nx, ny]]);
            }
        }
    }

    return null; // In case no path is found (shouldn't happen on 8x8 board)
}
