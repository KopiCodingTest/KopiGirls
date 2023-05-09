function solution(citations) {
    var answer = 0;
    
	  citations.sort((a,b)=>a-b);   // 1.
    let n = citations.length;
    
    for (let i=0; i<n; i++) {    // 2.
        if (citations[i]>=n-i) {    
            answer = n-i;
            break;
        }
    }
    
    return answer;
}