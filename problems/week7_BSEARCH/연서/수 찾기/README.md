## 💻 Problem

### 문제

: N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

### 입력

: 첫째 줄에 자연수 N(1 ≤ N ≤ 100,000)이 주어진다. 다음 줄에는 N개의 정수 A[1], A[2], …, A[N]이 주어진다. 다음 줄에는 M(1 ≤ M ≤ 100,000)이 주어진다. 다음 줄에는 M개의 수들이 주어지는데, 이 수들이 A안에 존재하는지 알아내면 된다. 모든 정수의 범위는 -231 보다 크거나 같고 231보다 작다.

### 출력

M개의 줄에 답을 출력한다. 존재하면 1을, 존재하지 않으면 0을 출력한다

### 입출력 예제

- 입력

```
5
4 1 5 2 3
5
1 3 7 9 5
```

- 출력

```
1
1
0
0
1
```

<br/>

## 💡 Solution

```js
//백준 입력 형식(파일 시스템 사용)
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// N개의 정수의 배열인 A 배열에서 M개의 정수의 배열인 B 배열 값이 있는지 확인해야 한다.
// string 형태로 들어오는 input을 number type으로 바꿔준다.
const A = input[1].split(" ").map((t) => +t);
const B = input[3].split(" ").map((t) => +t);

// 이분 탐색을 위한 정렬
A.sort((a, b) => a - b);
let answer = [];

B.forEach((t) => {
  let low = 0;
  let high = A.length - 1;
  let find = false;
  // 이분 탐색
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // mid 값이 target 값보다 큰 경우 왼쪽에서 다시 탐색
    if (A[mid] > t) {
      high = mid - 1;
      // mid 값이 target 값보다 작은 경우 오른쪽에서 다시 탐색
    } else if (A[mid] < t) {
      low = mid + 1;
      // mid 값과 target 값이 같은 경우, find flag를 true로 변경
    } else {
      find = true;
      break;
    }
  }

  if (find) {
    answer.push(1);
  } else {
    answer.push(0);
  }
});

console.log(answer.join("\n"));
```

### 코드 설명 :

- 한 줄 정리 : 넷째 줄의 입력값들을 둘째 줄의 입력값에서 찾아서 존재 여부를 출력하면 되는 문제. 전형적인 **이분 탐색** 문제이다! 이분 탐색으로 풀지 않으면 시간 초과가 발생한다. (set의 has 메서드를 사용해도 되지만, 이번 주차에 이분 탐색 개념을 배웠으므로 이분 탐색 방법으로 해결했다!)
  <br/>

1. N개의 정수의 배열인 A 배열, M개의 정수의 배열인 B 배열을 선언한다. -> 이 때, string 형태의 input을 number로 바꿔준다(+ 사용)
2. B 배열의 각 요소에 대해 forEach로 이분 탐색을 수행한다.
   - 이분 탐색을 위한 low, high, mid 값을 정의해주고, 값을 찾았을 때의 플래그 find의 default 값을 false로 설정한다.
   - mid 값을 기준으로 이분 탐색을 수행한다.
     - 1. mid 값이 t보다 큰 경우, t가 현재 mid보다 왼쪽에 위치한다는 의미이므로 high 값을 재정의 후 왼쪽 구간에서 다시 탐색을 진행한다.
     - 2. mid 값이 t보다 작은 경우, t가 현대 mid보다 오른쪽에 위치한다는 의미이므로 low 값을 재정의 후 오른쪽 구간에서 다시 탐색을 진행한다.
     - 3. mid 값이 t와 같은 경우, 탐색을 종료하고 find 플래그를 true 값으로 바꿔준다.
3. find 값에 따라 answer 배열에 0(find === false) 혹은 1(find === true) 값을 넣어준다.
4. answer 배열에 있는 값을 출력해준다. (백준에선 출력이 console.log로!)
