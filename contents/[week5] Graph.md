w# 그래프란?

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/92494cc6-214b-4d42-ade1-3d60024b947e/Untitled.png)

- 일반적으로 정점(노드)와 간선(엣지)로 이루어진 자료구조
- 집합 G(V, E)의 형태로 정의함.
- `정점` (Vertex)
  - 그래프에서는 정점(=노드)를 `Vertex`라고 칭한다.
  - 어떠한 상태 혹은 객체
  - 그래프에서 원으로 표시 된다.
- `간선` (Edge)
  - 정점관의 관계(연결성)을 표현하는 요소
- `차수` (Degree)
  - 정점 하나에 연결된 간선의 수
  - V개의 정점을 갖는 그래프의 최대 간선의 수는 `V *(V-1)/2`
    $$
    V *(V-1) / 2
    $$

## 구분

### 간선 방향 유무에 따라

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c431433-3f2f-4f6a-a30e-fcb1aa284cd5/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6cf98def-fbcf-4c40-81c4-f0cdf18b1168/Untitled.png)

- **단방향 그래프 (directed graph)**
  - 각 간선이 방향을 가지는 그래프
  - 두 정점에 순서가 있다
  - `<u, v> ≠ <v, u>`
    - u → v 여도 v → u 는 성립하지 않음.
    - `u는 v에 인접한다`. `v는 u로부터 인접하다` 라고 표현할 수 있음.
- **무방향 그래프 ( (양방향 그래프) undirected graph)**
  - 모든 간선이 양방향으로 연결된 그래프
  - `<u, v> = <v, u>`
    - u → v 라면 v → u 가 성립한다.

### 관계의 정도에 따라

- **가중치 그래프 (Weighten Graph)**
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dbcfb17b-73e9-49da-9067-ff7d7918a2b5/Untitled.png)
  - 그래프 간선에 가중치라는 정보가 추가된 형태의 관계를 나타내는 그래프
  - 해당 간선을 타고 이동할 때 필요한 비용 등을 표현하는 것에 사용된다.

### 연결 정도에 따라

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/85e83d5f-c27f-4a2a-8430-389a24258378/Untitled.png)

- 완전그래프
  - 정점에 대해 가능한 모든 간선을 가진 그래프

# 그래프의 표현

- 그래프는 정점 관 연결 관계를 설명하기 위함으로 이 관계를 `행렬` `리스트`로 나타낼 수 있다!
- 자바스크립트에는 행렬과 리스트(데이터 타입)의 개념이 없으므로
- 행렬 ⇒ 2차원 배열
- 리스트 ⇒ 객체

## 1. 인접 행렬(Adjacency Matrix)

- 두 정점이 간선으로 이루어진 상태 ⇒ 인접하다(adjacent)
- 2차원 배열로 표현
- 행렬 상의 원소들에 쉽게 접근 가능
- n개의 정점을 가지는 그래프는 n\*n 정방 행렬이 됨
- 두 정점이 인접되어 있으면 1, 인접되어 있지 않으면 0으로 표현

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a1ab0b21-7bb6-43e0-a387-bbae577d5b9f/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/276a69d9-71c9-4701-86a4-75ccb2e13c06/Untitled.png)

### 1.1. 다섯개의 정점을 가지는 그래프를 0으로 처음 세팅

```jsx
let max = 5; // 정점의 개수
let matrix = new Array(max).fill(0).map((row) => new Array(max).fill(0))3
```

![스크린샷 2023-05-17 10.30.21.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20d1738d-c0f0-48a3-93c4-74204dea4dfc/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-17_10.30.21.png)

### 1.2. 직관적으로 인접 행렬 구현

```jsx
let graph = [
  [0, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

// 정점 0과 정점 1 사이의 간선 여부 출력
console.log(graph[0][1]); // 1
```

## 2. 인접 리스트 (Adjacency List)

- 정접들간의 연결 상황을 인접 행렬보다는 좀 더 라이트하게 볼 수 있는 표현 방법!
- 자바스크립트에는 리스트 데이터 형태가 없어 객체로 대체 (map을 사용하기도)
- 인접 행렬에 비해 메모리가 적게 든다.

### 2.1. 인접 리스트 표현 방식

```jsx
let graph = {
  // 정점 A는 ['B', 'C']와 연결되어 있음
  A: ["B", "C"],
  B: ["A", "C", "D"],
  C: ["A", "B", "D"],
  D: ["B", "C"],
};

// 정점 A와 연결된 정점들 출력
console.log(graph["A"]); // ['B', 'C']
```

## 인접 행렬 VS 인접 리스트

1️⃣ : `인접 행렬`은 이어지지 않은 점 까지 배열에 포함하므로 메모리 공간을 더 많이 쓰게 됨 (N^2)

2️⃣ : `인접 행렬` 은 정점의 갯수가 많을 경우에는 탐색하는데에 시간이 많이 들게 됨

➡️ : 구현이 쉽고, 정점 간의 가중치를 표현하는 것이 수월함.

1️⃣ : `인접 리스트`는 두 정점간의 관계(연결 여부)를 확인해보기 위해서 해당 정점에 연결된 정점 리스트 전체를 탐색하게 될 수도 있음

❗ 인접 행렬 ⇒ 두 정점간의 관계 확인에 있어서 좋은 효율

❗ 인접 리스트 ⇒ 그래프를 전체적으로 탐색할 때 유리

### 문제

https://www.acmicpc.net/workbook/view/306

1. [9079] 동전 게임 : 정답률 65.130%
   1. https://www.acmicpc.net/problem/9079
2. [10159] 저울 : 정답률 66.011%
   1. https://www.acmicpc.net/problem/10159

## 참고링크

🔗 : \***\*[[자료구조] Graph 그래프](https://hanamon.kr/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-graph-%EA%B7%B8%EB%9E%98%ED%94%84/)\*\***

🔗 : [[Data Structure] Graph (그래프)](https://sophia2730.tistory.com/entry/Data-Structure-Graph-%EA%B7%B8%EB%9E%98%ED%94%84)

🔗 : **[그래프 - 아녀 뚱인데요?? - 티스토리](https://devel-yong.tistory.com/13)**

🔗 : **[[JavaScript] 자료구조 (3-3): 그래프(Graph) 검색 알고리즘 - velog](https://velog.io/@porupit0122/JavaScript-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-3-3-%EA%B7%B8%EB%9E%98%ED%94%84Graph-%EA%B2%80%EC%83%89-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)**

🔗 : \***\*[[자료구조] 그래프](https://velog.io/@tomato2532/%EA%B7%B8%EB%9E%98%ED%94%84)\*\***

🔗 : **[[자료구조] 그래프(Graph)란?](https://ongveloper.tistory.com/165)**

🔗 : \***\*[인접행렬과 인접리스트](https://charlie-junbeom-94043.tistory.com/37)**
