function solution(numbers, target) {
    let answer = 0;
  function dfs(currentNumber, sum) {
    if (currentNumber === numbers.length) {
      if (sum === target) {
        return answer ++;
      }
      return;
    }
    const plus = dfs(currentNumber + 1, sum + numbers[currentNumber]);
    const minus = dfs(currentNumber + 1, sum - numbers[currentNumber]);
    return plus + minus;
  }
 dfs(0, 0);
    return answer;
}
