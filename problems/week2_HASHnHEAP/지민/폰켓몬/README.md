# 1. 폰켓몬👾

## 💻 Problem

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/1845)

### 문제 조건

1. 같은 타입 여러 개 있을 수 있음
2. 최대 전체 폰켓몬 수의 절반 마리만 선택할 수 있다.
3. 선택 가능한 최대 폰켓몬 종류 개수만 반환한다.

<br/>

## 💡 Solution

- 타입 수와 고를 수 있는 폰켓몬 최대 마리 수를 비교해야 한다.
- 따라서 전체 폰켓몬 개수만 변수에 저장해놓고 nums 배열을 중복 제거한 배열로 수정한다.
- 중복 제거 후에 남은 애들은 폰켓몬 타입 종류만 나열한 배열이라고 볼 수 있다.
- 따라서 타입 개수가 뽑을 수 있는 최대 폰켓몬 수보다 많으면 뽑을 수 있는 최대 수가 answer가 되어야 하고, 아니라면 타입 개수가 answer가 된다.

**배운 내용** :

- 중복 제거해서 배열로 반환하는 방법이 여러 가지 있는데, 특히 `[...new Set(arr)]`이런 식으로 표현하는 게 제일 권장되는 것 같더라고요..!
- 파이썬에서의 `//`가 자스에 없는 걸 모르고 틀린 문법을 써서 여러 번 틀렸는데 기본적인 문법을 놓치지 않아야겠다고 생각했습니다.

```javascript
function solution(nums) {
	let answer = 0;
	//중복 제거해서 배열 새로 만들기
	let newNums = [...new Set(nums)];
	let type = newNums.length;
	if (type < parseInt(nums.length / 2)) {
		answer = type;
		return answer;
	}
	//타입 개수랑 nums.length//2 비교해서 타입 개수가 더 많으면 nums.length//2가 더 크면 얘가 되고 아니면 타입 개수가 되고
	answer = parseInt(nums.length / 2);
	return answer;
}
```

## 📚참고 자료

[[자바스크립트]배열에서 중복 요소 제거 방법들](https://sisiblog.tistory.com/313, https://hianna.tistory.com/422)
[[자바스크립트]나눗셈 몫, 나머지 구하는 방법] (https://chancoding.tistory.com/237)
<br />
