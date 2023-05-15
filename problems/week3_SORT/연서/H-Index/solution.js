function solution(citations) {
  var answer = 0;

  // 논문 인용횟수를 내림차순으로 정렬 (인용 횟수가 큰 수부터 찾아야 함)
  citations.sort((a, b) => b - a);

  // 논문 인용횟수 배열만큼 for문을 돌린다
  for (let i = 0; i < citations.length; i++) {
    // 피인용수가 논문 수와 같거나 많으면 answer를 1증가시킨다.
    // 즉, 피인용수가 논문 수보다 같아지거나 작아지기 시작하는 숫자가 answer가 된다.
    if (citations[i] >= answer + 1) {
      answer++;
    }
  }
  return answer;
}
