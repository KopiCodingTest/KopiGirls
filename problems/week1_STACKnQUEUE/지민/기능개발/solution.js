function solution(progresses, speeds) {
	let answer = [1];

	i = 0;
	while (i < progresses.length) {
		let rest = (100 - progresses[i]) / speeds[i];
		let rest_2 = (100 - progresses[i + 1]) / speeds[i + 1];

		if (rest < rest_2) {
			i += 1;
		} else {
			answer[i] += 1;
			i += 1;
		}
	}
	console.log(answer);
	return answer;
}
