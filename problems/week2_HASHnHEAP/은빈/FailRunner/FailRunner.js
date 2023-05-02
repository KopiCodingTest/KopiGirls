function solution(participant, completion) {
    var answer = '';
    // 배열을 정렬해서 순서를 맞춰주기
    participant.sort();
    completion.sort();
    // 반복문 돌려서 참가자와 완주자를 비교 
    // => 같지 않은 요소가 정답
    for(i=0; i<participant.length; i++){
        // 참가자와 완주자가 다를 때
        if(participant[i] !== completion[i]){
            // 다른 순간의 참가자가 완주하지 못한 선수.
            answer = participant[i];
            break
        }
    }
    return answer;
}