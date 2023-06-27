//내 풀이 - 오류(시간 초과)
//아마 반복문이 중첩되어 여러 번 쓰이면서 효율성이 아주 떨어진 것 같다.
//반복문보다 map을 활용하려고 해보자
function solution(name) {
	let answer = 0;
	let min_move = name.length - 1;

	for (i = 0; i < name.length; i++) {
		let unicode = name[i].charCodeAt();
		let idx = i + 1;

		if (unicode < 78) {
			answer += unicode - 65;
		} else if (78 <= unicode && unicode < 91) {
			answer += 91 - unicode;
		}

		// 연속되는 A의 개수 count
		while (name[i] === "A") {
			idx++;
		}

		min_move = Math.min(
			//순서대로 움직이는 경우
			min_move,
			//뒤로 돌아가서 입력하는 경우
			i * 2 + name.length - idx,
			//뒷부분부터 입력하는 것
			i + 2 * (name.length - idx)
		);
	}
	return answer + min_move;
}

//정답 풀이
function solution(name) {
	let answer = 0;
	let min_move = name.length - 1;

	[...name].map((n, i) => {
		answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
		let idx = i + 1;

		// 연속되는 A의 개수 count
		while (idx < name.length && name[idx] === "A") {
			idx++;
		}

		min_move = Math.min(
			min_move,
			i * 2 + name.length - idx,
			i + 2 * (name.length - idx)
		);
	});

	return answer + min_move;
}
