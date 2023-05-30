function solution(n) {
    // 피보나치 수열 초기값 설정
    let fibo = [0, 1];
    for(let i=2; i<=n; i++) {
    // i번째 피보나치 수열 값을 구하기 위해 
    // (i-1)번째와 (i-2)번째 값을 더하고 1234567로 나눈 나머지를 저장
        fibo[i] = (fibo[i-1]+fibo[i-2])%1234567;
    }
    
    return fibo[n];
}