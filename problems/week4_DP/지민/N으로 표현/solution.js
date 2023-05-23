function solution(N, number) {
	var answer = -1;
	// 1. 각 N 개수마다 만들 수 있는 수를 저장하는 자료구조 생성
	const makeNumbeSet = [];

	if (N === number) {
		//2-1. N이랑 answer가 같은 수이면 그냥 N만 적어주면 되므로 1을 반환
		answer = 1;
	} else {
		//2-2. N의 개수를 하나씩 증가시키면서 갹갹의 N에 대해 N이 2 ~ 8일 때 각각의 경우에 대해 만들 수 있는 수 리스트를 Set에 저장한다.
		// count가 1이면 한 번만 사용된 경우이므로 N === number에 해당하고, 9 이상이면 -1이므로 2~8만큼 반복한다.
		makeNumbeSet[1] = new Set().add(N);
		for (let i = 2; i < 9; i++) {
			//2-3. N이 i개일 때 만들 수 있는 수 저장하기
			calculateResult(i);

			//3.만들 수 있는 수 리스트에 number가 있으면, 반복문을 탈출하고 최솟값인 현재 개수를 반환한다.
			//만약 만들지 못한다면 -1을 반환한다.
			if (makeNumbeSet[i].has(number)) {
				answer = i;
				break;
			}
		}
	}
	// 2-3. N 개수별 만들 수 있는 수 구해서 저장하기
	function calculateResult(count) {
		makeNumbeSet[count] = new Set();
		let connectValue = N.toString();

		for (let i = 1; i < count; i++) {
			connectValue += N.toString();
			//가능한 연산 방법 표를 보면 left 연산값과 right연산값을 조합하면 연산 가능한 모든 경우를 구할 수 있음을 알 수 있다.
			const [left, right] = [i, count - i];
			for (let leftValue of makeNumbeSet[left]) {
				for (let rightValue of makeNumbeSet[right]) {
					makeNumbeSet[count].add(leftValue + rightValue);
					makeNumbeSet[count].add(leftValue - rightValue);
					makeNumbeSet[count].add(leftValue * rightValue);
					//나눗셈은 0으로 나누는 경우는 빼고 처리해줘야 한다!
					if (rightValue !== 0) {
						makeNumbeSet[count].add(Math.floor(leftValue / rightValue));
					}
				}
			}
		}
		//2-4. 계산한 것들은 숫자로 바꿔서 저장해준다.
		makeNumbeSet[count].add(parseInt(connectValue));
	}
	return answer;
}
