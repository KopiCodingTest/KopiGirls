# 1주차 - 1. 같은 숫자는 싫어

## 💻 Problem

### 문제 설명

배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

- arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
- arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
  배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

제한사항

- 배열 arr의 크기 : 1,000,000 이하의 자연수
- 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

입출력 예
| arr | answer |
|-----| --------|
|[1,1,3,3,0,1,1] |[1,3,0,1]|
| [4,4,4,3,3]| [4,3] |

<br/>

## 💡 Solution

### `solution 1` : for문 조건 검사 후 push

```js
function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}
```

- for 문으로 입력 데이터 배열 arr에 있는 각 요소들을 검사한다
- 만약 arr[i]가 다음 요소인 arr[i+1]와 다른 수이면, 즉 연속적으로 나타나는 수가 아니라면 answer 배열에 push, 추가한다.

#### 참고사항

- [push() 메서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push) : 배열에 **하나 이상** 요소를 추가하고, 배열의 **새로운 길이!를 반환한다**

<br/>

### `solution 2` : **filter** 사용

```js
function solution(arr) {
  var answer = [];

  answer = arr.filter((target, index) => target != arr[index + 1]);

  return answer;
}
```

- filter 함수에 통과한 값을 answer에 넣어준다.
- filter 함수 : target - 요소 선택, index - 요소의 인덱스. 즉, 선택된 요소가 그 다음 인덱스의 요소와 다른 경우에만 true를 반환 해 filter에 의해 새롭게 만들어지는 배열에 추가된다.

#### 참고사항

- [filter 문법](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) : 주어진 함수를 통과하는 모든 요소를 모아 **새로운 배열!을 반환**한다
