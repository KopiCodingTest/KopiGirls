## 💻 Problem

아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.

12 = 5 + 5 + (5 / 5) + (5 / 5)
12 = 55 / 5 + 5 / 5
12 = (55 + 5) / 5

5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.

제한사항
N은 1 이상 9 이하입니다.
number는 1 이상 32,000 이하입니다.
수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
최솟값이 8보다 크면 -1을 return 합니다.
<br/>

## 💡 Solution

1. set() : 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장
   `set.add()` : set 개체 맨 뒤에 주어진 `value` 새 요소 추가
   `set.has()` : set 객체에 주어진 요소가 존재하는 지 여부 판별
   일단 N을 반복하는 값을 저장하는 용도로 사용!! -> 일단 N을 반복시키기

2.`list[i]`에 i+1번 반복된 N으로 생성할 수 있는 숫자들을 저장, 3. 이중 for문을 사용하여 가능한 조합 계산
각각의 조합을 계산하여 `list[i]`에 저장, `number`가 존재하면, `i+1`반환 (목표 숫자를 만들기 위해 반복된 n의 사용횟수)
