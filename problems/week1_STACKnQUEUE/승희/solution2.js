function solution(progresses, speeds) {
    var answer = [];
    
    // 남은작업량 / 하루작업량 = 며칠 걸리는지를 큐에 넣어주기 
    // 큐 앞에서부터 빼줄때, 뒤에 애가 자신 일수보다 적으면 다 빼주기 -> count 세기
    // 나보다 큰 작업일수 만나면 그때 count 새로 세고 push 
    
    var leftDays = [];
    for (var i = 0; i<progresses.length; i++) {
        leftDays.push((100-progresses[i])/speeds[i]);
    }
    var count = 1;
    var max = leftDays[0];
    for (var i = 1; i<leftDays.length; i++) {
        if (leftDays[i]<=max) {
            count++;
        } else if (leftDays[i]>max) {
            answer.push(count);
            count = 1;
            max = leftDays[i];
        }
    }
    answer.push(count);
    
    return answer;
}