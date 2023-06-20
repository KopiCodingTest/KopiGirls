function solution(numbers, target) {
    // 타겟 넘버
    let answer = 0;
    // 숫자의 개수
    const length = numbers.length;

    // 깊이 우선 탐색
    function dfs(count, sum) {
      // 숫자의 개수만큼 탐색했다면
        if (count === length) {
        // 타겟 넘버와 같다면
            if (target === sum) {
          // 정답 증가
        answer++;
      }
      // 탐색 종료
      return;
        }


        // 숫자를 더하거나 빼서 탐색
    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  }

//   탐색 시작
  dfs(0, 0);

  return answer;
}