function solution(citations) {
	let answer = 0;

	//인용 횟수 기준으로 내림차순으로 정렬하고
	citations.sort((a, b) => b - a);

	let i = 0;
	//11, 13 테스트케이스 빼고 계속 실패가 떠서 한참 고쳤는데, h가 citation 원소일 필요가 없었다는 걸 뒤늦게 알았다..
	//     근데 새로 안 저 사실에 너무 매몰되어서 문제 잘못 이해하고 계속 잘못 접근했다가 원래 처음에 생각한 접근이 더 정답에 가깝다는 것을 알았다..!ㅠㅠ
	//뒤에서부터 차례로 정렬된 배열에서 h 이후에 오는 원소의 개수가 h개 이상인 첫 요소가 H-Index이다.
	while (i < citations.length) {
		if (citations[i] <= i + 1) {
			answer = citations[i];
			return answer;
		}
		i++;
	}
}
