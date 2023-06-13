function solution(maps) {
	let answer = -1; //도달할 수 없는 경우 -1 반환
	const n = maps.length,
		m = maps[0].length;
	const direction = [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1],
	]; // 이동 가능한 방향 저장해두기
	const mapsQueue = [];

	maps[0][0] = 0;
	mapsQueue.push([0, 0, 1]);

	while (mapsQueue.length > 0) {
		const [x, y, distance] = mapsQueue.shift();

		if (x === n - 1 && y === m - 1) {
			answer = distance;
			break;
		}

		//한 번 이동시켜보고 맵을 벗어나거나 갈 수 없는 위치에 있으면 다른 방향으로 움직이기
		for (let i = 0; i < direction.length; i++) {
			const [nextX, nextY] = [x + direction[i][0], y + direction[i][1]];

			if (
				nextX < 0 ||
				nextX >= n ||
				nextY < 0 ||
				nextY >= m ||
				maps[nextX][nextY] === 0
			) {
				continue;
			}

			maps[nextX][nextY] = 0;
			mapsQueue.push([nextX, nextY, distance + 1]);
		}
	}
	return answer;
}
