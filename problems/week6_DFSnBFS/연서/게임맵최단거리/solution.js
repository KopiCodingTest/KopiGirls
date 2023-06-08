function solution(maps) {
  // 1. n 과 m 을 설정함
  const n = maps.length;
  const m = maps[0].length;

  // 2. 정답 저장용
  let answer = -1;

  // 3. 방문을 체크할 배열
  let visited = Array.from(Array(n), () => Array(m).fill(false));

  // 4. BFS 를 하기 위한 queue, 초기 값을 저장해둠
  let queue = [[0, 0, 1]];

  // 5. queue 의 위치를 저장할 queueIndex
  let queueIndex = 0;

  // 6. x, y 가 움직일 배열을 저장함 (상, 우, 하, 좌)
  const moveX = [-1, 0, 1, 0];
  const moveY = [0, 1, 0, -1];

  // 7. BFS 진행할 while 문
  while (queue.length > queueIndex) {
    // 8. 일단 queue 에 있는 값을 꺼냄
    const now = queue[queueIndex];
    // 9. 값을 꺼냈으므로 index 를 +1 해줌
    queueIndex += 1;

    // 10. 만약 꺼낸 값이 정답 (도착지) 이면
    if (now[0] == n - 1 && now[1] == m - 1) {
      // 11. answer 에 답을 저장함 (now[2] 는 이동 거리)
      answer = now[2];
      break;
    }

    // 12. 만약 꺼낸 값이 방문하지 않은 값이라면
    if (!visited[now[0]][now[1]]) {
      // 13. 방문
      visit(now[0], now[1], now[2]);
    }
  }

  // 14. 방문 함수. x, y 좌표와 count (이동거리) 를 파라미터로 받음
  function visit(x, y, count) {
    // 15. 먼저 방문했다고 체크함
    visited[x][y] = true;

    // 16. 현재 x, y 위치에서 상, 하, 좌, 우 로 이동할 반복문
    for (let i = 0; i < moveX.length; i++) {
      // 17. movedX, Y 로 설정함.
      const movedX = x + moveX[i];
      const movedY = y + moveY[i];

      // 18. 만약, movedX, movedY 가 배열의 범위 안에 있고, 그 값 위치가 아직 방문하지 않았고, 그 위치를 방문할 수 있다면 (값이 1이라면)
      if (
        movedX >= 0 &&
        movedX < n &&
        movedY >= 0 &&
        movedY < m &&
        !visited[movedX][movedY] &&
        maps[movedX][movedY] == 1
      ) {
        // queue 에 그 값을 넣음
        queue.push([x + moveX[i], y + moveY[i], count + 1]);
      }
    }
  }

  return answer;
}
