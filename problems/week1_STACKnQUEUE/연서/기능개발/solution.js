function solution(progresses, speeds) {
  var answer = [];

  // 작업 진도에 남은 요소가 없을 때까지 반복
  while (progresses.length !== 0) {
    let cnt = 0;

    // 작업 진도와 속도를 더하는 작업
    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }
    // 작업 진도가 100 이상이면 배열에서 빼주고 cnt 증가
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt++;
    }
    // 증가된 cnt를 answer 배열에 추가
    if (cnt > 0) {
      answer.push(cnt);
    }
  }

  return answer;
}
