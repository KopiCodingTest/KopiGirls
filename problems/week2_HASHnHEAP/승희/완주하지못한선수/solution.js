function solution(participant, completion) {
    var answer = '';
    
    let count = participant.length;
    
    participant.sort();
    completion.sort();

    for (let i=0; i<count-1; i++) {
        if (participant[i] === completion[i]) continue;
        answer = participant[i];
        break;      // 주의하자! 
    }
    
    if (answer === '') answer = participant[count-1];
    
    return answer;
}