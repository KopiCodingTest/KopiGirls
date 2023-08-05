function solution(name) {
  var answer = 0;
  let min_move = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    //아스키코드값 변환 : 현재 문자의 아스키코드 값 가져오기
    let tmpCode = name.charCodeAt(i);

    //78(N) 보다 작을 경우 그대로 카운트
    if (tmpCode < 78) {
      //A(65)보다 작을 경우 위로 이동
      answer += tmpCode % 65;
    }
    //78보다 클경우 이전 알파벳이 더 빠름
    else {
      answer += 91 - tmpCode;
    }

    //좌우 이동 인덱스
    let nextIndex = i + 1;

    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65)
      nextIndex += 1;
    //BBBAAAAAABA인 경우는 다시 왼쪽으로 돌아가는 것이 더 빠르다.
    //처음 위치로 돌아간 횟수(i*2) + 문자열길이 - A가 연속으로 나오는 지점의 다음값
    min_move = Math.min_move(min_move, i * 2 + name.length - nextIndex);
  }
  answer += min;
  return answer;
}
