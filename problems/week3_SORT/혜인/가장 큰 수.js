function solution(numbers) {
  return numbers
    .map((number) => number.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer;
}
