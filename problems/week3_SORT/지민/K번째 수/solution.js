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
