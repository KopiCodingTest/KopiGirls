function solution(arr) {
	let answer = [];

	answer = arr;
	let i = 0;
	while (i < arr.length - 1) {
		if (answer[i] === answer[i + 1]) {
			answer.splice(i + 1, 1);
		} else i += 1;
	}

	console.log(answer);
	return answer;
}
