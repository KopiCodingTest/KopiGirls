function solution(nums) {
	let answer = 0;
	//중복 제거해서 배열 새로 만들기
	let newNums = [...new Set(nums)];
	let type = newNums.length;
	if (type < parseInt(nums.length / 2)) {
		answer = type;
		return answer;
	}
	//타입 개수랑 nums.length//2 비교해서 타입 개수가 더 많으면 nums.length//2가 더 크면 얘가 되고 아니면 타입 개수가 되도록 한다.
	answer = parseInt(nums.length / 2);
	return answer;
}
