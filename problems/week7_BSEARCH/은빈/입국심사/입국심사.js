function solution(n, times) {
    //이분탐색
    times.sort((a, b) => a - b);
    let res = -1;
    //최대 심사 시간
    let rt = times[times.length - 1] * n;
    //최소 심사 시간
    let lt = 0;
    //최소 시간부터 최대 시간까지 이분탐색

    while (lt <= rt) {
        //중간값
        let mid = Math.floor((rt + lt) / 2);
        //중간값을 기준으로 심사가 가능한 최대 인원
        let max = 0;
        //모든 심사관을 돌면서

        for (let e of times) {
            //times.forEach(value ⇒ { 로 작성도 가능

            //해당 시간에 모든 심사 관들이 최대로 할 수 있는 심사 횟수를 계산
            max += Math.floor(mid / e);
        }

        //최대 심사 횟수가 이미 n보다 크거나 같으면
        //심사 횟수가 승객 수에 근접하고 가장 시간이 적게 걸리는 경우
        if (max >= n) {
            res = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }
    //최소 시간을 반환
    return res;
}
