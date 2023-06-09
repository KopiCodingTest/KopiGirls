## 💻 Problem

ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.

지금부터 당신은 한 팀의 팀원이 되어 게임을 진행하려고 합니다. 다음은 5 x 5 크기의 맵에, 당신의 캐릭터가 (행: 1, 열: 1) 위치에 있고, 상대 팀 진영은 (행: 5, 열: 5) 위치에 있는 경우의 예시입니다.

위 그림에서 검은색 부분은 벽으로 막혀있어 갈 수 없는 길이며, 흰색 부분은 갈 수 있는 길입니다. 캐릭터가 움직일 때는 동, 서, 남, 북 방향으로 한 칸씩 이동하며, 게임 맵을 벗어난 길은 갈 수 없습니다.
아래 예시는 캐릭터가 상대 팀 진영으로 가는 두 가지 방법을 나타내고 있습니다.

- 첫 번째 방법은 11개의 칸을 지나서 상대 팀 진영에 도착했습니다.
- 두 번째 방법은 15개의 칸을 지나서 상대팀 진영에 도착했습니다.

위 예시에서는 첫 번째 방법보다 더 빠르게 상대팀 진영에 도착하는 방법은 없으므로, 이 방법이 상대 팀 진영으로 가는 가장 빠른 방법입니다.

만약, 상대 팀이 자신의 팀 진영 주위에 벽을 세워두었다면 상대 팀 진영에 도착하지 못할 수도 있습니다. 예를 들어, 다음과 같은 경우에 당신의 캐릭터는 상대 팀 진영에 도착할 수 없습니다.
게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요. 단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 해주세요.

**제한사항**

- maps는 n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열로, n과 m은 각각 1 이상 100 이하의 자연수입니다.
- n과 m은 서로 같을 수도, 다를 수도 있지만, n과 m이 모두 1인 경우는 입력으로 주어지지 않습니다.
- maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 자리, 1은 벽이 없는 자리를 나타냅니다.
- 처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치에 있으며, 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치에 있습니다.

**입출력 예**
| maps | answer |
| ----------------------- | ------ |
| [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]] | 11 |
| [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]] | -1 |

<hr>

### 📍 **정리** :

- maps 배열이 주어질때, (0, 0) 에서 출발해서 (n -1, m-1) 까지 최단거리를 찾아라.
- 최단거리가 없다면 -1 을 return 해라.
- "최단거리"이므로 **BFS**를 적용하는 문제이다!
- BFS -> 큐를 사용하므로 자스에서는 **shift & push**를 사용해 구현 가능하다!

<br/>

## 💡 Solution

```js
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
```

- 풀다가 모르겠어서 + 런타임 에러가 나서 모범 답안을 찾아 공부했습니다!

### 코드 설명 :

1. 2차원 배열인 maps의 행과 열인 n, m을 정의한다.
2. 정답 저장용 변수 answer를 만든다. 도달할 수 없는 경우 -1을 return 하므로 기본 값은 -1로 초기화한다.
3. 방문을 체크할 배열 visted를 만든다. 이때, visited는 maps와 동일한 크기이다.
4. BFS를 하기 위한 queue를 만들고, 초기 값을 저장한다. (BFS는 FIFO Queue를 사용해 구현한다!)
5. queue의 위치를 저장할 queueIndex 변수를 만든다.
6. x,y가 움직일 배열을 저장할 moveX, moveY 변수를 만든다.
7. While 문 ->
8. queue에 있는 값을 꺼내고,
9. QueueIndex를 1 증가시킨다.
10. 만약 꺼낸 값이 도착지이면,
11. answer에 값을 저장한다.
12. 만약 꺼낸 값이 방문하지 않은 값이라면, (visited 배열에 없다면)
13. 방문한다. (visit 함수)
    14~18. visit 함수 정의 : x,y의 좌표와 count(이동거리)를 파라미터로 받는 함수로, 방문을 체크하고 & moved X와 moved Y가 maps의 범위 안에 있어 그 위치를 방문할 수 있으며 아직 방문하지 않은 위치인 경우 queue에 그 값을 넣어준다.

### 궁금한점 :

이 답안 외에 다른 답안에서 효율성 검사에서 실패 뜨는 답안이 많던데 ([ex](https://velog.io/@leeeunbin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B2%8C%EC%9E%84-%EB%A7%B5-%EC%B5%9C%EB%8B%A8%EA%B1%B0%EB%A6%AC-JavaScript)) 어떤 점에서 실패가 뜨게 되는건지 궁금합니다!

### 참고자료 :

- [찾은 모범 답안](https://hogumachu.tistory.com/9)
