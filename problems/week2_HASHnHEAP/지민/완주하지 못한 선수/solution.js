function solution(participant, completion) {
	let answer = "";

	for (i = 0; i < completion.length; i++) {
		for (j = 0; j < participant.length; j++) {
			if (completion[i] === participant[j]) {
				participant.splice(j, 1);
				completion.splice(i, 1);
				i--;
				continue;
			}
		}
		continue;
	}
	//반환 형태가 문자열이 되도록 변환
	answer = participant.toString();
	return answer;
}
