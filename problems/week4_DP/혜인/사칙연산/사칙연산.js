function solution(arr) {
  const operandsCount = Math.ceil(arr.length / 2);
  //피연산자의 개수, 배열 'arr'의 길이를 2로 나눈 값을 올림
  const max_dp = new Array(operandsCount)
    .fill()
    .map((_) => new Array(operandsCount).fill(-Infinity)); //최대값 DP 배열
  const min_dp = new Array(operandsCount)
    .fill()
    .map((_) => new Array(operandsCount).fill(Infinity)); //최소값 DP 배열

  for (let i = 0; i < operandsCount; i++) {
    //max_dp, min_dp 배열의 초기값을 설정, 피연산자 자체가 최대값, 최소값
    max_dp[i][i] = +arr[i * 2]; //i번째 피연산자부터 j번째 피연산자까지 최대값
    min_dp[i][i] = +arr[i * 2]; //i번째 피연산자부터 j번째 피연산자까지 최소값
  }

  //반복문을 통해 max_dp, min_dp 배열을 채움
  for (let cnt = 1; cnt < operandsCount; cnt++) {
    for (let i = 0; i < operandsCount - cnt; i++) {
      const j = i + cnt;
      for (let k = i; k < j; k++) {
        //i부터 j까지의 범위에서 연산자를 기준으로 최대값과 최소값을 갱신
        if (arr[k * 2 + 1] === "+") {
          max_dp[i][j] = Math.max(
            max_dp[i][j],
            max_dp[i][k] + max_dp[k + 1][j]
          ); //덧셈
          min_dp[i][j] = Math.min(
            min_dp[i][j],
            min_dp[i][k] + min_dp[k + 1][j]
          ); //뺄셈
        } else {
          max_dp[i][j] = Math.max(
            max_dp[i][j],
            max_dp[i][k] - min_dp[k + 1][j]
          );
          min_dp[i][j] = Math.min(
            min_dp[i][j],
            min_dp[i][k] - max_dp[k + 1][j]
          );
        }
      }
    }
  }

  return max_dp[0][operandsCount - 1];
}
