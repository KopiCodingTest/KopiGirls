## 💻 Problem

## 문제

N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

## 입력

첫째 줄에 자연수 N(1 ≤ N ≤ 100,000)이 주어진다. 다음 줄에는 N개의 정수 A[1], A[2], …, A[N]이 주어진다. 다음 줄에는 M(1 ≤ M ≤ 100,000)이 주어진다. 다음 줄에는 M개의 수들이 주어지는데, 이 수들이 A안에 존재하는지 알아내면 된다. 모든 정수의 범위는 -231 보다 크거나 같고 231보다 작다.

## 출력

M개의 줄에 답을 출력한다. 존재하면 1을, 존재하지 않으면 0을 출력한다.

## 예제 입력 1

```
5
4 1 5 2 3
5
1 3 7 9 5

```

## 예제 출력 1

```
1
1
0
0
1

```

<br/>

## 💡 Solution

```jsx
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n"); // 백준 input 받아오는 방식

const [N, A, M, B] = input.map((v) => v.split(" "));

const array = new Set(A); // 이진탐색 정렬 없이 has 메소드를 사용할 수 있는 Set 사용

const result = B.map((v) => (array.has(v) ? 1 : 0)); // B 배열의 각각 요소를 A배열 Set에서 찾기 -> 있으면 1, 없으면 0

console.log(result.join("\n")); // 백준 output 출력 방식
```

- 사실 이진탐색을 사용하려고 했는데, 너무 간편한 방식을 발견해버려서 (이진탐색은 입국심사에서 사용하고) 더 효율적인 방법도 공유하면 좋을 것 같아서 골랐습니당
- has 메소드를 사용할 수 있는 Set을 사용하면, 정렬 후 탐색 이라는 과정을 거치지 않고도 존재여부를 판단할 수 있으니 다들 잘 알아두고 활용하면 좋을 것 같아요!!
