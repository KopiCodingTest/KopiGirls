## 💻 Problem

### **문제 설명**

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
| 2   | 11     |        |

<br/>

## 💡 Solution

> 코드랑 설명 분리했어용 설명 아래 참고!

```jsx
function solution(N, number) {
  const set = new Array(8).fill().map(() => new Set());
  for (let i = 0; i < 8; i++) {
    set[i].add(Number(`${N}`.repeat(i + 1)));
    for (let j = 0; j < i; j++) {
      for (const arg1 of set[j]) {
        for (const arg2 of set[i - j - 1]) {
          set[i].add(arg1 + arg2);
          set[i].add(arg1 - arg2);
          set[i].add(arg1 * arg2);
          set[i].add(Math.floor(arg1 / arg2));
        }
      }
    }

    if (set[i].has(number)) {
      return i + 1;
    }
  }
  return -1;
}
```

## 🎀 짚고 갈 메소드!

- `[arr.fill()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)` : 배열 전체를 정적인 값으로 채우기
- `[set.add()](https://wikidocs.net/1015#1-add)` : set에 값 1개 추가하기 (배열의 push와 구분!)
- `[string.repeat(count)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)` : count 만큼 string 반복하기
- `[set.has(x)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/has)` : x요소가 set에 있는지 확인. 있으면 true 없으면 false

## 🎀 logic

1. 각 요소가 set 객체인 빈 배열 8칸을 생성한다. (set은 중복을 제거하기 위해)
2. 각 i 인덱스 칸마다 N을 i+1만큼 사용해서 생성할 수 있는 수를 set에 추가한다.
   1. 사칙연산 없이 N만 x번 반복한 수 추가 (x는 N을 사용하는 수, 즉 i+1이다)
   2. N을 x-n번 사용해서 만든 수들과 N을 n번 사용해서 만든 수들의 사칙연산 결과물도 x칸에 추가 한다. ([i+1])
3. 배열이 완성되면 앞에서부터 돌면서 number가 가장 먼저 발견되는 배열의 i+1을 정답으로 도출한다.
   1. 가능한 최솟값을 구해야 하기 때문에!

## 🎀 코드 뜯어보기

- `const set = new Array(8).fill().map(() => new Set());`
  > 빈 배열 8칸을 생성한 후, 각 칸에 Set 객체를 할당한다. (중복되는 요소를 제거하기 위해 set 사용)
- `for (let i = 0; i < 8; i++) {`
  > 각 배열의 칸을 순회하면서 i 칸 Set마다 **N을 `i+1`번 사용해서 만들어진 수**를 넣을 것이다.
- `set[i].add(Number(`${N}`.repeat(i + 1)));`
  > 사칙연산을 전혀 사용하지 않고 N을 오로지 i+1번 반복해서 만들어진 수를 우선적으로 Set에 추가한다.
  >
  > - ex : set[**2**]칸에는 `NNN` (**3**번 반복)
- `for (let j = 0; j < i; j++) {`
  > 이제 N을 i+1번째 반복하는 것 말고,
  >
  > N을 **j번** 사용한 경우 & N을 **(i+1)-j번** 사용한 경우의 **사칙연산** 결과로 채워야 한다.
- `for (const arg1 of set[j]) {`
  > 각 j에 대해서, N을 j번 사용한 모든 경우들과
- `for (const arg2 of set[i - j - 1]) {`
  > N을 (i+1)-j 번 사용한 모든 경우들을 짝지어서 연산 해본다.
  >
  > → (N을 j번 사용) _?_ (N을 (i+1)-j번 사용)
  >
  > 가운데에 어떠한 사칙연산자가 들어가도 해당 결과물은 N을 (i+1)번 사용한 수가 된다!
- `set[i].add(arg1 + arg2);`
  `set[i].add(arg1 - arg2);`
  `set[i].add(arg1 * arg2);`
  `set[i].add(Math.floor(arg1 / arg2));`
  > 모든 사칙연산의 경우를 set[i]에 추가해준다.
  >
  > 여기서 중복되는 값은 알아서 Set 객체가 삭제해주니 걱정말자!
  >
  > - 또 유의할 사항, 나눗셈은 몫만 살린다고 했으니 버림(floor)처리도 잊지 말자
- `if (set[i].has(number)) {
  return i + 1;
}`
      > 앞에서부터 순차적으로 각 i번째 Set에 찾고자하는 number가 있는지 탐색한다.
      >
      >
      > 즉 N을 (i+1)번 사용했을 때 원하는 number가 완성되었는지 0번째부터 체크한다.
      >
      > 만약 number가 들어있는 Set을 발견하면 즉시 (i+1)을 정답으로 반환하며 코드를 종료한다.
      >
      > 왜냐하면 number를 만들 수 있는 횟수**(i+1)** 중 **최솟값**(빠르게 return)을 구해야 하기 때문이다.
      >
- `return -1;`
  > 처음에 배열을 8칸만 만들었었는데 그 이유는 가능한 **최솟값의 범위가 8까지**였기 때문에!
  >
  > 만약 1번 사용([0])부터 8번 사용([7])까지 돌면서 정답이 나오지 않았다면, 그것은 number를 만들기 위해 사용해야 하는 **N의 최소 개수가 8보다 크다는 것**을 의미!
  >
  > 따라서 for문에서 리턴을 하지 못하고 **밖으로 나와버리면** 문제에서 제시된 조건에 따라 **-1**을 리턴해야 한다.

## 🎀 이게 왜 DP?

- 큰 문제를 `사전에 해결한 작은 문제`로 해결하는 형태이기 때문이다!
- 특히 N을 x번 사용한 경우의 Set을 채우는 과정에서
  x번 사용하는 모든 경우를 새로이 따져보는 것이 아니라,
  - 1. 사칙연산 없이 N을 x번 반복하는 경우
  - 2. `N을 j번 반복하는 경우` 와 `N을 x-j번 반복하는 경우`의 연산 결과
  이렇게 나눠서 문제를 **분할 정복 방식**으로 해결했기 때문에 DP의 형태를 띈다!
