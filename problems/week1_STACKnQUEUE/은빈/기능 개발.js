function solution(progresses, speeds) {
    // 답변 배열 , 배포까지 걸리는 일수를 담을 배열을 선언해준다.
    var answer = [];
    let days = [];

    // 배포까지 걸리는 일수를 구해서 days 배열에 넣기 위한 for문
    for(let i = 0; i<progresses.length; i++) {
        // 남은 작업량 / 하루 작업량 = 배포까지 걸리는 일
        let day = Math.ceil((100 - progresses[i]) / speeds[i]);
        days.push(day);
    }

    // 배포까지 걸리는 일수 중 가장 큰 수를 max 변수에 넣어주기 
    // days 배열의 첫번째 요소로 초기화 시켜준다.
    let max = days[0];

    //count 변수를 선언해준다. => 배포까지 걸리는 날이 크거나 같은 것을 세기 위함
    let count = 1;
    for(let i = 1; i<days.length; i++) {
     //  배포까지 걸리는 일수가 같거나 크면
        if(max >= days[i]) {
        //  count 변수를 증가시켜준다.
            count++;
        } else {
            // 배포까지 걸리는 일수가 작으면
            // answer 배열에 count 변수를 넣어준다.
            answer.push(count);
            // max 변수에 현재 배포까지 걸리는 일수를 넣어준다.
            max = days[i];
            // count 변수를 1로 초기화 시켜준다.
            // 다음 배포까지 걸리는 일수를 세기 위함
            count = 1;
        }
    }
    // 마지막 배포까지 걸리는 일수를 answer 배열에 넣어준다.
    // 위 반복문에서 마지막 배포까지 걸리는 일수를 넣어주지 못하므로!!
    answer.push(count);

    // 답변 배열을 반환한다.
    return answer;
}

