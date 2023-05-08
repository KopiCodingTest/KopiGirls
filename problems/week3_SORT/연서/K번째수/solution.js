function solution(array, commands) {
  var answer = [];

  // commands 중첩 배열 분리를 위한 반복문
  for (let i = 0; i < commands.length; i++) {
    // first : 자를 시작 인덱스
    // (인덱스를 1,2,3,.. 이렇게 1부터 셌으므로 slice에 넣을 때 +1로 생각)
    let first = commands[i][0];
    // last  : 자를 마지막 인덱스
    // (마찬가지로 인덱스를 1부터 셌으므로 slice에 넣을 때 +1을 안해줘도 last번째 요소까지 포함)
    let last = commands[i][1];
    // 정렬 후 찾을 index (target index)
    // (마찬가지로 인덱스를 1부터 셌으므로 index를 찾을 때 -1을 해야 함)
    let t = commands[i][2];

    // commands 안 각 원소에서의 정답 값을 저장할 변수 tempAnswer
    // slice: first번째 숫자부터 last번째 숫자까지 자른다
    // sort : 자른 배열을 "숫자 오름 차순으로 정렬(함수 이용)"
    // at: 자르고 정렬한 배열에서 t-1번째 요소를 찾는다
    let tempAnswer = array
      .slice(first - 1, last)
      .sort((a, b) => a - b)
      .at(t - 1);

    // 각 원소 별 정답을 answer에 push해 최종 정답을 answer 배열에 전달한다.
    answer.push(tempAnswer);
  }

  return answer;
}
