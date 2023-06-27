function solution(name) {
  let answer = 0;
  let min_move = name.length - 1;

  // 상하 최소 조작 횟수 구하기
  [...name].map((n, i) => {
    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
    let idx = i + 1;

    // 연속되는 A의 개수 count
    while (idx < name.length && name[idx] === "A") {
      idx++;
    }

    // 좌우 최소 조작 횟수 구하기
    min_move = Math.min(
      min_move,
      i * 2 + name.length - idx,
      i + 2 * (name.length - idx)
    );
  });

  return answer + min_move;
}
