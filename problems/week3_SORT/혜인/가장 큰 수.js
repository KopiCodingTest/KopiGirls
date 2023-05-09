function solution(numbers) {
  let answer = numbers
    .map((number) => number.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer;
}

solution([3, 30, 34, 5, 9]);
