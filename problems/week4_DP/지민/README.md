#1. N으로 표현🧮

## 💻 Problem

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42895)

### 문제 조건

1. N, 괄호와 사칙연산으로만 주어진 number를 표현 가능하다.
2. 최솟값이 8보다 크면 -1을 반환한다.
3. N은 1 이상 9 이하

## 💡 Solution

- 표현 가능한 모든 경우를 구한 다음 N의 최소 활용인 값을 구한다.
- 가능한 모든 경우는 자료구조 Set을 이용해 N 개수를 각각 저장해준다.
- N이 1부터 9까지 가능하므로 각 경우의 반환값을 모두 구해 저장해주고, 그 범위 이외의 N에 대해서는 -1을 반환하도록 한다.

### 1. 숫자 N 개수에 따라 가능한 연산 종류는 아래와 같다.

   <img width="563" alt="image" src="https://github.com/GO-SOPT-WEB/JiMinYu/assets/92876819/66843693-b93b-4da9-8e27-c061eddb7c21">
   <br/>
   표를 통해서 연산 가능한 모든 경우를 구하기 위해서는 N의 개수를 쪼개서 연산으로 연결해주면 된다는 것을 알 수 있다.
   이를 코드로 구현하면 아래와 같다.

```javascript
// 2-3. N 개수별 만들 수 있는 수 구해서 저장하기
function calculateResult(count) {
	makeNumbeSet[count] = new Set();
	let connectValue = N.toString();

	for (let i = 1; i < count; i++) {
		connectValue += N.toString();
		//가능한 연산 방법 표를 보면 left 연산값과 right연산값을 조합하면 연산 가능한 모든 경우를 구할 수 있음을 알 수 있다.
		const [left, right] = [i, count - i];
		for (let leftValue of makeNumbeSet[left]) {
			for (let rightValue of makeNumbeSet[right]) {
				makeNumbeSet[count].add(leftValue + rightValue);
				makeNumbeSet[count].add(leftValue - rightValue);
				makeNumbeSet[count].add(leftValue * rightValue);
				//나눗셈은 0으로 나누는 경우는 빼고 처리해줘야 한다!
				if (rightValue !== 0) {
					makeNumbeSet[count].add(Math.floor(leftValue / rightValue));
				}
			}
		}
	}
	//2-4. 계산한 것들은 숫자로 바꿔서 저장해준다.
	makeNumbeSet[count].add(parseInt(connectValue));
}
```

### 2. 저장한 가능한 모든 경우의 결과를 바탕으로 반복문을 활용해 결과가 number에 해당하는 경우 중 N의 최솟값을 찾아 반환한다.

```javascript
var answer = -1;
// 1. 각 N 개수마다 만들 수 있는 수를 저장하는 자료구조 생성
const makeNumbeSet = [];

if (N === number) {
	//2-1. N이랑 answer가 같은 수이면 그냥 N만 적어주면 되므로 1을 반환
	answer = 1;
} else {
	//2-2. N의 개수를 하나씩 증가시키면서 갹갹의 N에 대해 N이 2 ~ 8일 때 각각의 경우에 대해 만들 수 있는 수 리스트를 Set에 저장한다.
	// count가 1이면 한 번만 사용된 경우이므로 N === number에 해당하고, 9 이상이면 -1이므로 2~8만큼 반복한다.
	makeNumbeSet[1] = new Set().add(N);
	for (let i = 2; i < 9; i++) {
		//2-3. N이 i개일 때 만들 수 있는 수 저장하기
		calculateResult(i);

		//3.만들 수 있는 수 리스트에 number가 있으면, 반복문을 탈출하고 최솟값인 현재 개수를 반환한다.
		//만약 만들지 못한다면 -1을 반환한다.
		if (makeNumbeSet[i].has(number)) {
			answer = i;
			break;
		}
	}
}
```

## 📚참고 자료

[[자바스크립트]동적계획법으로 N으로 표현 문제 풀이](https://uic11.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8F%99%EC%A0%81%EA%B3%84%ED%9A%8D%EB%B2%95-N%EC%9C%BC%EB%A1%9C-%ED%91%9C%ED%98%84-%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4-featJS)
