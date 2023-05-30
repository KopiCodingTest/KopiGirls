# 2. 타겟넘버 🔫

- 가능한 연산자 조합을 모두 돌려서 타겟넘버가 나오는 경우를 확인해야 하므로 DFS를 써야 한다!

## 💻 Problem

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/43165)

### 문제 조건

1. n개의 음이 아닌 정수들이 입력된다
2. 정수들의 순서 바꾸지 않거 +, - 중에 골라서 넘버를 만든다
3. 주어지는 숫자의 개수는 2개 이상 20개 이하
4. 각 숫자는 1 이상 50 이하인 자연수
5. 타겟 넘버는 1 이상 1000 이하인 자연수

### 문제에서 원하는 답

- 타겟 넘버를 만드는 방법의 수를 return

## 💡 Solution

- DFS는 보통 재귀를 사용한다.
- 탈출 조건을 잘 생각해보자.

### 1. 탈출 조건 설정

- 연산을 **끝까지** 마쳤을 때 **타겟넘버와 연산결과가 같으면** 방법의 수를 하나 더해주고 끝내야 한다.

```javascript
if (level === numbers.length) {
	// 끝까지 연산 결과 타겟넘버와 같다면 답이므로 answer를 늘려준다.
	if (sum === target) {
		answer += 1;
	}
	return;
}
```

### 2. 재귀 사용

- 덧셈과 뺄셈이 모두 가능하므로 DFS를 쓰기 위해서 두 가지 경우를 모두 돌려봐야 한다.

```javascript
dfs(level + 1, sum + numbers[level]);
dfs(level + 1, sum - numbers[level]);
```

## 📚참고 자료

[[자바스크립트]프로그래머스 문제 풀이](https://seanb12.tistory.com/259)
