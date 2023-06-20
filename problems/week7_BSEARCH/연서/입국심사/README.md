## 💻 Problem

n명이 입국심사를 위해 줄을 서서 기다리고 있습니다. 각 입국심사대에 있는 심사관마다 심사하는데 걸리는 시간은 다릅니다.

처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다. 가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다. 하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.

모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶습니다.

입국심사를 기다리는 사람 수 n, 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 매개변수로 주어질 때, 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return 하도록 solution 함수를 작성해주세요.

**제한사항**

- 입국심사를 기다리는 사람은 1명 이상 1,000,000,000명 이하입니다.
- 각 심사관이 한 명을 심사하는데 걸리는 시간은 1분 이상 1,000,000,000분 이하입니다.
- 심사관은 1명 이상 100,000명 이하입니다.

**입출력 예**
| n | times | return
| ----- |-----| -----|
| 6| [7,10] | 28 |

<hr>

### 📍 **정리** :

- 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 구하는 문제
- 이분 탐색을 사용해서 푼다.

<br/>

## 💡 Solution

```js
function solution(n, times) {
  let low = 1; //최소로 걸릴 시간
  let high = n * Math.max(...times); //최대로 걸릴 시간
  let answer = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let count = 0;
    times.forEach((time) => {
      count += Math.floor(mid / time); // 한 사람당 몇명 할 수 있는지
      if (count >= n) {
        answer = Math.min(mid, answer); // 최솟값을 answr로
        return;
      }
    });
    if (count >= n) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return answer;
}
```

### 코드 설명 :

1. answer, low, high를 선언한다.

- low에는 최소로 걸릴 시간을 넣어준다.
- high에는 최고 오래 걸리는 사람이 n명을 다 검사했을 때의 값인 최대로 걸릴 시간을 넣어준다.

2. 이분 탐색을 수행한다.

- 이분 탐색을 위한 mid 값을 선언한다.
- times 배열의 크기만큼 반복문을 도는데, mid 값을 각각의 시간으로 나누어 해당 심사관이 검사할 수 있는 사람의 수 (= count)를 구한다.
- 모든 사람이 심사 받는 시간의 최솟값을 구하는 것이므로 answer와 mid값 중 더 작은 값을 answer에 저장한다.
- count >= n : mid 값보다 작은 값 중에서 탐색이 가능하다. (시간을 더 최소화하기 위해) => high = mid - 1
- count < n : mid 값보다 큰 값에서 탐색을 수행한다. (시간이 더 걸린다) => low = mid + 1

3. 이분 탐색을 모두 끝낸 후 마지막 최솟값이 answer에 저장되고, answer를 반환한다.

### 참고자료 :

- [찾은 모범 답안](https://velog.io/@ansrjsdn/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-level3-%EC%9E%85%EA%B5%AD%EC%8B%AC%EC%82%AC)
