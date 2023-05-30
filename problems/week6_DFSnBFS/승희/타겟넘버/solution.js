function solution(numbers, target) {
    var answer = 0;
    
    dfs(0,0);                   
    
    function dfs(level, sum) {      // DFS 문제 
        if (level === numbers.length) {     // 사용해야 하는 숫자들을 모두 썼을 때
            if (sum === target) {           // 총합이 타겟넘버에 도달했다면
                answer += 1;                // 방법의 수 (answer)을 1 증가 
            }
            return;                         
        }
        
        dfs(level+1, sum + numbers[level]); // 다음 숫자, 현재 숫자를 더한 총합으로 재귀호출
        dfs(level+1, sum - numbers[level]); // 다음 숫자, 현재 숫자를 뺀 총합으로 재귀 호출
    }
    return answer;
}