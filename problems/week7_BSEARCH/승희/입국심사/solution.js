function solution(n, times) {
    times.sort((a,b) => a-b);   // 심사시간 배열을 오름차순으로 정렬 (이진탐색 전 필수코스)
    let left = 1;   // 최소 경우 : n명의 손님을 n명 이상의 심사관이 1분동안 처리
    let right = n * times[times.length -1]; // 최대 경우 : n명의 손님을 1명의 심사관이 최대시간동안 처리 
    let answer = right; 
    while(left <= right){   // 이진탐색 종료 조건 : left 포인터가 right 포인터를 넘어서는 순간
        let mid = Math.floor((left + right) / 2);   // 중간값 설정
        let count = 0   
        times.forEach(value => {    // 각 심사위원 심사 시간에 따라 
            count += Math.floor(mid / value); // 각 심사위원이 몇명을 심사할 수 있는지 count 
            if(count >= n) {    
                answer = Math.min(mid, answer); // 최솟값
                return;
            };
        });
        if (count >= n) {   // 중간값 기준 왼쪽 범위를 다시 이진탐색 
            right = mid - 1;
        }
        else {  // 중간값 기준 오른쪽 범위를 다시 이진탐색 
            left = mid + 1;
        }
    }
    return answer;
}