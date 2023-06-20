//input 받기
const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [N, arrayA, M, arrayM] = input.map((v) => v.split(" ").map((t) => +t));

//배열 정렬해주기
arrayA.sort();
//정답으로 0, 1 들 넣어줄 변수 선언
let answer = [];

for (i = 0; i <= N - 1; i++) {
	let low = 0;
	let high = N - 1;

	while (low <= high) {
		let mid = Math.floor(low + high / 2);
		if (arrayA[mid] === arrayM[i]) {
			answer.push(1);
			break;
		} else if (arrayA[mid] > arrayM[i]) {
			high = mid - 1;
		} else if (arrayA[mid] < arrayM[i]) {
			low = mid + 1;
		}
	}
	if (answer[i] != true) {
		answer.push(0);
	}
}
console.log(answer.join("\n"));
