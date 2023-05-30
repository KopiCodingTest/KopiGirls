# 1. 게임 맵 최단거리🎮

- BFS를 써야 하는 건 알겠는데 어떻게 풀어내야 할지 막막해서 여기저기 찾아본 풀이를 조합하는 방식으로 과제를 했습니다🥲

## 💻 Problem

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/1844?language=javascript)

### 문제 조건

1. maps는 n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열
2. n과 m은 각각 1 이상 100 이하의 자연수
3. n과 m은 서로 같을 수도, 다를 수도 있지만, n과 m이 모두 1인 경우는 입력으로 주어지지 않음
4. maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 자리, 1은 벽이 없는 자리
5. 처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치에 있으며, 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치에 있다.

### 유의사항

- 지나간 곳을 또 지나도 최단거리가 나올 수 있다.

### 문제에서 원하는 답

- 게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 **칸의 개수의 최솟값** 을 return 하도록 solution 함수를 완성해주세요. **단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return**

## 💡 Solution

- BFS를 활용해야 한다(한 가지를 깊게 도는 것이 아니라 전체를 보면서 갈 수 있는 경로를 찾아야 하므로!)
- BFS이므로 큐를 사용한다.
- 예외사항 처리를 꼼꼼하게 해준다.
- 이동할 수 있는 방향 4 가지를 고려하면서 이동시켜본다(위, 아래, 오른쪽, 왼쪽)

### 1. 배열 만들기

```javascript
const visited = Array.from(Array(maps.length), () =>
	Array(maps[0].length).fill(false)
);
```

- 2차원 배열 만드는 건 자주 쓸 것 같으니 방법을 기억하자!

### 2. 이동 가능한 경우에 대한 조건 걸어주기

```javascript
nextX < 0 || nextX >= n || nextY < 0 || nextY <= m || maps[nextX][nextY] === 0;
```

## 📚참고 자료

[[자바스크립트]프로그래머스 문제 풀이1](https://han-joon-hyeok.github.io/posts/programmers-game-map-shortest-path/)
[https://uic11.tistory.com/entry/프로그래머스-깊이너비-우선-탐색-게임-맵-최단거리-문제-풀이-featJS](https://uic11.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B9%8A%EC%9D%B4%EB%84%88%EB%B9%84-%EC%9A%B0%EC%84%A0-%ED%83%90%EC%83%89-%EA%B2%8C%EC%9E%84-%EB%A7%B5-%EC%B5%9C%EB%8B%A8%EA%B1%B0%EB%A6%AC-%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4-featJS)
