# 2. 완주하지 못한 선수 🏃🏅

## 💻 Problem

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42748)

### 문제 조건

1. commands 원소는 항상 세 개의 원소가 들어온다.
2. 자른 후 배열 안에 정답 원소를 담아서 반환한다.

## 💡 Solution

- 먼저 구조분해할당으로 i, j, k 변수에 원소의 요소들을 담아준다.
- 조건에 맞게 slice()를 해준다.
- 정렬 후 조건에 맞는 원소를 정답 배열에 넣어준다.

**⚠️ 유의사항** :

- 수업시간에 배웠는데 그냥 sort()했을 때 사전식으로 정렬하게 된다는 것을 잊고 시간을 허비했습니다🥲

```javascript
function solution(array, commands) {
	let answer = [];

	for (idx = 0; idx < commands.length; idx++) {
		let temp = [];
		//구조분해 할당
		let [i, j, k] = commands[idx];

		//조건에 맞게  잘라서 저장해주고
		temp = array.slice(i - 1, j);

		//정렬해준다(temp 배열 자체가 정렬됨)
		//그냥 sort하면 사전식 정렬인데 잊고 한참 헤맸다!!
		temp.sort(function (a, b) {
			return a - b;
		});
		answer.push(temp[k - 1]);
	}
	return answer;
}
```
