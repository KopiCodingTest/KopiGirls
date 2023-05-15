## 💻 Problem

아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.

12 = 5 + 5 + (5 / 5) + (5 / 5)

12 = 55 / 5 + 5 / 5

12 = (55 + 5) / 5

5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.

### 제한사항

- N은 1 이상 9 이하입니다.
- number는 1 이상 32,000 이하입니다.
- 수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
- 최솟값이 8보다 크면 -1을 return 합니다.

### 입출력 예

| N   | number | return |
| --- | ------ | ------ |
| 5   | 12     | 4      |
| 2   | 11     | 3      |

### 입출력 예 설명

예제 #1
문제에 나온 예와 같습니다.

예제 #2
11 = 22 / 2와 같이 2를 3번만 사용하여 표현할 수 있습니다.

<hr>

### 📍 **한 줄 정리** : N을 사용하여 number를 구할 때 사용된 최소의 개수를 구하는 문제로, N이 1부터 9까찌 사용되는 경우에 대한 모든 연산 종류와 횟수를 체크하여, number가 만들어졌을 때 사용된 숫자 N의 개수fmf 반환하는 알고리즘.

(8개 이상 부터는 -1로 반환하며, N은 1이상 9이하라는 점을 주의하자.)

<hr>

<br/>

## 💡 Solution

```js
function solution(N, number) {
  // 1~9까지의 N개 개수에 따라 구할 연산의 수를 확인하기 위한 array. array의 각 요소는 Set으로 채워 중복을 배제한다.
  const nthNumList = new Array(9).fill(0).map((el) => new Set());

  // i는 nthNumList에 있는 집합 번호.
  // N이 1부터 시작하므로 0번째 집합은 사용하지 않고, 1번째 집합부터 loop를 돌려 집합 번호와 N을 맞춰준다.
  //(여기서 0부터 사용하고 싶으면 나중에 i=0부터 7까지, 8번 돌려주고 return i+1로 해주면 됨)
  for (let i = 1; i < 9; i++) {
    // 각 배열 요소 Set에 N을 i번 곱한 값을 미리 넣어준다.
    nthNumList[i].add("1".repeat(i) * N);
    // 여기서부터 DP 개념 사용 -> 이전에 구한 값을 저장한 Set을 사용하여, 다음 Set에 넣을 값을 구한다.
    for (let j = 1; j < i; j++) {
      for (const arg1 of nthNumList[j]) {
        for (const arg2 of nthNumList[i - j]) {
          // 사칙 연산 한 값을 Set에 넣어준다 (Set 자료형을 사용했으므로 중복이 제거 됨)
          nthNumList[i].add(arg1 + arg2);
          nthNumList[i].add(arg1 - arg2);
          nthNumList[i].add(arg1 * arg2);
          nthNumList[i].add((arg1 / arg2) >> 0);
        }
      }
    }
    //만들어진 숫자 중 타겟인 number이 발견되면 바로 집합 번호를 반환
    if (nthNumList[i].has(number)) return i;
  }
  // 8까지 순회했는데 number에 해당하는 값이 없다면, 이는 사용횟수가 8번을 초과한다는 뜻이므로 문제의 조건에 맞게 -1을 return
  return -1;
}

// 출처 : https://allo-ew.tistory.com/118
```

### 기본적으로 사용한 로직 : 숫자 N개의 개수에 따른 연산 방법

| N의 사용 개수 | 연산 종류                                                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 1             | N                                                                                                                          |
| 2             | NN, N+N, N-N, N\*N, N/N (NN + 사칙연산)                                                                                    |
| 2             | NNN, NN+N, NN-N, NN*N, NN/N, N+N+N, N+N-N, N+N*N,N+N/N, N-N\*N, N-N/N ... (1 결과와 2번 결과의 조합!! (순서 바뀌는거 포함) |
| ...           | ...                                                                                                                        |

### 코드 설명 :

- 1. Set으로 구성 된 배열 `nthNumList`만들기

  - `nthNumList`는 N을 i번 사용하여 만들 수 있는, Set 자료구조를 요소로 가지는 배열. 예를 들어, `nthNumList[1]`은 n을 1번 사용하여 만들 수 있는 수의 집합. 여기서 n이 1부터 시작하므로, `nthNumList[0]`의 값은 사용하지 않고 요소가 9개인 `nthNumList`를 만들어 사용한다.

  * Set을 사용하는 이유는 중복된 값을 배제해주는 자료구조이기 때문이다.

  - 이때, `new Array(num)`로 숫자형 인수 하나를 넣어 호출한 new Array 방식으로 만든 배열은 **길이만 num만큼의 배열이고, 요소는 모두 undefined로 만들어진다는 점을 주의해야 한다!**
    -> 그래서 fill() 메서드를 사용해 0으로 값들을 초기화 해 준 것!

- 2. for loop (1) : 각 요소인 Set에 N을 i번 곱한 값 추가
  - 예를 들어, `nthNumList[1]`인 Set에는 5, `nthNumList[2]`에는 55, `nthNumList[3]`에는 555와 같이 사칙 연산으로 만들 수 없는 N이 i번 곱해져 있는 값을 추가한다.

* 3. for loop (2) : DP 개념 사용 -> 이전에 구한 값을 저장한 Set을 사용하여, 다음 Set에 넣을 값을 구한다.

  - 여기서 DP 개념 사용 -> 이전에 구한 값을 저장한 Set을 사용하여, 다음 Set에 넣을 값을 구한다.
  - 이는 위에서 정리한 숫자 N개의 개수에 따른 연산 방법을 구현한 부분이다.

* 4. for loop (3) : number가 존재하는지 확인

  - 3에서 연산한 `nthNumList[i]` 집합에 number가 있는지 확인한다
  - 만들어진 숫자 중 타겟인 number이 발견되면 바로 집합 번호를 반환한다.

* 5. for loop를 돌아도 number가 없다면 -> 8번을 초과한 것이므로 문제의 조건대로 -1을 반환한다.

<br/>

### 느낀 점 : 대충 로직은 이해했는데,, 이걸 DP로 구현하는 방법을 모르겠어서 결국 모범 답안을 분석했습니다~! DP 어렵네요,, 흑흑🙊

<br/>

### 참고 자료

- [`fill()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
- [Array 초기화](https://velog.io/@lovelys0731/Javascript-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80-%EC%9E%90%EB%A3%8C%ED%98%95-1-5.4-%EB%B0%B0%EC%97%B4) -> 자스 스터디하면서 정리한 제 벨로그입니다 ㅎㅎ 궁금하면 조회수 높여주세요 컴온 컴온
- [풀이 참고](https://allo-ew.tistory.com/118)
