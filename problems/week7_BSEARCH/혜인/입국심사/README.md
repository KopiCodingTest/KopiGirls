## 💻 Problem

n명이 입국심사를 위해 줄을 서서 기다리고 있습니다. 각 입국심사대에 있는 심사관마다 심사하는데 걸리는 시간은 다릅니다.

처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다. 가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다. 하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.

모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶습니다.

입국심사를 기다리는 사람 수 n, 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 매개변수로 주어질 때, 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return 하도록 solution 함수를 작성해주세요.
<br/>

## 💡 Solution

```
function solution(n, times) {
  times.sort((a, b) => a - b);

  let left = 1;
  let right = n * times[times.length-1];
  let answer = right;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    times.forEach((element) => {
      count += Math.floor(mid / element);
      if (count >= n) {
        answer = Math.min(mid, answer);
        return;
      }
    });
    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}
```

## 💭 이진탐색

<h4>가장 적게 걸리는 심사대부터 나열</h4>

```
times.sort((a, b) => a - b);
```

<h4>왼쪽, 오른쪽값 정하기</h4>

```
let left = 1;
  let right = n * times[times.length-1];
  let answer = right;
  ```

  <h4>이진탐색 조건을 충족시킬 때</h4>

  ```
   while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0; //얼마나 걸리는지
    times.forEach((element) => {
      count += Math.floor(mid / element);
      if (count >= n) {
        answer = Math.min(mid, answer); //최솟값
        return;
      }
    });
    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1; //이진탐색을 이어나감
    }
  }
  return answer;
}
```