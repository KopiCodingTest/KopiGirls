function solution(n, times) {
	//우선 오름차순으로 정렬해준다.
	times.sort((a, b) => a - b);
	let low = 1;
	//최댓값을 가장 오래 걸리는 심사위원에게만 모두가 받는 경우 걸리는 시간을 계산
	let high = times[times.length - 1] * n;
	//중간값을 지정해서 해당 시간동안에는 몇 명까지 심사할 수 있는지를 기준으로 비교
	let mid = Math.floor((low + high) / 2);

	while (low <= high) {
		//중간값인 mid 시간 동안 각 심사위원이 몇 명이나 심사할 수 있는지를 비교한다.
		let people = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
		//비교했는데 전체 심사 대상자인 n명보다 많이 심사 가능하다면 mid시간보다 더 적은 시간 동안 n명을 심사할 수 있다. 따라서 최댓값을 mid -1로 설정해준다.
		if (people >= n) {
			high = mid - 1;
			//같은 원리로 반대의 경우에는 최솟값을 mid + 1시간으로 설정.
		} else if (people < n) {
			low = mid + 1;
		}
		//바뀐 최대 또는 최솟값을 기준으로 mid값 갱신해주기
		mid = Math.floor((low + high) / 2);
	}
	//그렇게 다 돌고 나서 low > high가 되면 최솟값 반환.
	return low;
}
