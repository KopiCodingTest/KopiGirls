function solution(n) {
    var answer = 0;
    
    let numArr = [0,1];
    let i = 2;
    
    while (i <= n) {
        if (numArr[i]!==undefined) continue;
        numArr[i] = ( numArr[i-1] + numArr[i-2] ) % 1234567;
        i++;
    }
    answer = numArr[n];
    
    return answer;
}