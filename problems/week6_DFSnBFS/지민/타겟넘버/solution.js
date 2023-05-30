function solution(numbers, target) {
	let answer = 0;

	dfs(0, 0);

	function dfs(level, sum) {
		if (level === numbers.length) {
			// 끝까지 연산 결과 타겟넘버와 같다면 답이므로 answer를 늘려준다.
			if (sum === target) {
				answer += 1;
			}
			return;
		}
		//아직 주어진 숫자들을 모두 연산한 것이 아니라면 덧셈과 뺄셈의 경우를 모두 돌려보며 답이 나오는 경우를 찾는다.
		dfs(level + 1, sum + numbers[level]);
		dfs(level + 1, sum - numbers[level]);
	}

	return answer;
}
