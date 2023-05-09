function solution(citations) {
    var answer = 0;
    //citations 내림차순 정렬해주기
    citations.sort((a,b) => b-a);
    // for문으로 citations의 길이만큼 
    for (let i=0; i<citations.length; i++) {
        // citations[i]가 i보다 크면 answer++
        if (citations[i] > i) {
            answer++;
        }
    }
    return answer;
}

solution([47, 42, 32, 28, 24, 22, 17,15,10,10,8])