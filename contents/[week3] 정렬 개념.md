목차

- 정렬의 종류
- sort 메소드

## 정렬이란?

**특정한 기준**에 따라 데이터를 순서대로 나열하는 것

[ 3, 1, 5, 4, 7 ] → [ 1, 3, 4, 5, 7 ] or [ 7, 5, 4, 3, 1 ]

## 정렬 알고리즘의 종류

- **Insertion sort (삽입 정렬)**
- **Selection sort (선택 정렬)**
- **Bubble sort (버블 정렬)**
- Quick sort (퀵 정렬)
- **Merge sort (합병 정렬)**
- Heap sort (힙 정렬)

중요한 **시간 복잡도!**

> 💡 **시간 복잡도**를 고려한다?  
**⇒ 프로그램의 입력값과 연산 수행 시간의 상관관계를 나타내는 지표**


ex- O(n^2), O(nlogn)

> 💡 **빅오 표기법? 
👉 시간 복잡도를 표기하는 방법, “최악의 경우!!”**
<img width="500" alt="image" src="https://github.com/KopiCodingTest/KopiGirls/assets/81505421/6edb4680-55c7-4d36-b220-ff88005289f6">




## Insertion Sort

- 두번째 요소부터 시작
- 앞부분이 **정렬된 부분 배열**이 됨 (가장 초기에 첫번째 요소가 정렬된 배열이라고 여김)

![image-2](https://github.com/KopiCodingTest/KopiGirls/assets/81505421/a3c86b74-eb77-41e1-a042-df71f17c9c46)

## Selection Sort

- 배열 중 최솟값을 찾아서 맨앞 요소와 **교체**
![image-3](https://github.com/KopiCodingTest/KopiGirls/assets/81505421/49f80220-6537-4fc0-8bc7-9f0c85bf614b)


## Bubble sort

(오름차순 기준으로 정렬하고자 할 때)

- 인접한 두 원소를 비교
- (왼쪽 원소) > (오른쪽 원소) 일 경우 swap
- 가장 큰 원소가 오른쪽부터 정렬됨
- 데이터가 하나씩 정렬(완성)되면서 비교할 요소에서 제외됨

<img width="500" alt="image-4" src="https://github.com/KopiCodingTest/KopiGirls/assets/81505421/874cca7e-0f00-4f62-bd21-58942b71b736">

<img width="500" alt="image-5" src="https://github.com/KopiCodingTest/KopiGirls/assets/81505421/e92f5882-868d-4be6-a0d9-e1f3af804ef8">


### 버블 정렬의 한계점

- 가장 쉽지만, 비효율적인 알고리즘
- N개의 입력을 정렬하는 시간 복잡도 **O(N^2)**
  - 비교 횟수 (N-1) + (N-2) + … 1 = N(N-1)/2
- SWAP 행위 1번 = 요소 이동 3번 → **연산 횟수 UP!**
  - (x,y) 자리 바꾸기
    1. temp = x;
    2. x = y;
    3. y = temp;
- 하나의 요소가 가장 왼쪽에서 가장 오른쪽으로 이동하기 위해서는 배열의 모든 다른 요소들과 SWAP 돼야함.
- 특히, 이미 배열이 모두 정렬되어있는 상태이더라도 불필요한 회전을 수행하게 됨.
  - N-1, N-2, … 번의 비교

---

## Merge Sort

- **분할 정복** 방식 : Divide and Conquer

> 💡 **Divide & Conquer?** 
- 한번에 해결할 수 없는 문제를 작은 문제로 분할하여 해결하는 알고리즘
- 주로 재귀 함수로 구현
- 크게 3단계로 이루어짐 
  1. Divide : 문제 분할
  2. Conquer : 쪼개진 작은 문제 해결 
  3. Combine : 해결된 작은 문제들 다시 합침


- 분할
- <img width="400" alt="image-6" src="https://github.com/KopiCodingTest/KopiGirls/assets/81505421/da4fa512-d1d8-4d11-8066-c3e297bdb095">

- 정복
- <img width="400" alt="image-7" src="https://github.com/KopiCodingTest/KopiGirls/assets/81505421/b1596301-c7f6-458f-851e-cb484f7fabad">


- Divide : 하나의 입력 배열을 반으로 나눈다.
- **Conquer : 나눈 각 배열들을 정렬한다**
- **Merge : 다시 하나의 배열로 합친다**

### How to Merge?
<img width="500" alt="image-8" src="https://github.com/KopiCodingTest/KopiGirls/assets/81505421/f261a8e4-322f-4df3-b47c-e34822afc2fd">


### 합병 정렬의 시간 복잡도 → O(nlogn)
<img width="500" alt="image-9" src="https://github.com/KopiCodingTest/KopiGirls/assets/81505421/7f9c5d97-416a-4270-bda2-7f34ddfb54f3">

---

### 저 알고리즘 언제 다 구현하고있어!!!!!

# Sort 함수

[Array.prototype.sort() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

`Array.sort()` 메서드

- 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
- 기본 정렬 순서는 **문자열의 유니코드** 순을 따름

```jsx
const kopi = ["Seunghee", "Jimin", "Eunbean", "Yeonseo"];
kopi.sort();
console.log(kopi);
```

- 결과는? 먼저 말해보쇼
  `[Eunbean, Jimin, Seunghee, Yeonseo]`

```jsx
const num = [1, 30, 4, 21, 10000];
num.sort();
console.log(num);
```

- 결과는? 먼저 말해바
  [ 1, 10000, 21, 30, 4 ]
  **왤까???**

### 구문 형태

```jsx
arr.sort([compareFunction]);
```

- 매개변수 `compareFunction`
  - 정렬 순서(기준)를 정의하는 함수
  - 생략 시, default 기준 (각 요소 문자열 변환 → 유니코드 순으로 정렬)
- 반환 값
  - 정렬된 배열
  - **주의!! 원래 배열. 정렬 완성된 배열이 별개가 아니다! 원래 배열이 정렬됨!**
- compare함수
  - 함수의 반환 값에 따라 배열의 요소가 정렬됨
  - a, b가 비교 대상일 때,
    - 반환값이 음수일 경우, a가 b보다 먼저 온다.
    - 반환 값이 0일 경우, a랑 b는 같다
    - 반환 값이 양수일 경우, b가 a보다 먼저 온다. → switch
  ```jsx
  function compare(a, b) {
    if (a is less than b by some ordering criterion) {
      return -1;
    }
    if (a is greater than b by the ordering criterion) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  ```
- 문자열이 아닌 숫자를 비교하려면?

  ```jsx
  function compareNumbers(a, b) {
    return a - b;
  }
  ```

  → 이 compare 함수는 숫자 배열을 오름차순으로 정렬시켜준다!

- 함수식으로도 사용 가능

```jsx
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
```

- 결과

  `[1, 2, 3, 4, 5]`

- Object에서 하나의 속성을 기준으로 정렬할 수도 있다.
  - 각 요소 (a,b)는 하나의 Object가 될 것.

```jsx
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// value 기준으로 정렬
items.sort(function (a, b) {
  if (**a.value > b.value**) {
    return 1;
  }
  if (**a.value < b.value**) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

// name 기준으로 정렬
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // 대소문자 무시
  var nameB = b.name.toUpperCase(); // 대소문자 무시
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // 이름이 같을 경우
  return 0;
});
```

- 처음 value 기준으로 정렬했을 때 결과는 어떨까?
  [ The, Magnetic, Edward, Sharpe, Zeros, And ]
- name 기준으로 정렬했을 땐?
  [ And, Edward, Magnetic, Sharpe, The, Zeros]

[JavaScript Array - 배열 정렬(Array.sort) - 문자열 정렬, 숫자 정렬, 객체 정렬, Ascending(ASC), Descending(DESC)](https://carrotweb.tistory.com/185)

---

## 과제 문제

[](https://school.programmers.co.kr/learn/courses/30/parts/12198)

- K번째 수 (1레벨)
- H-Index (2레벨)

[Array.prototype.sort() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
