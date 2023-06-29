let answers = [1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2];

function solution(answers) {
  let answer = [];
  // supo : 수포자 찍는 방식
  let supo = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let score = [];

  for (let i = 0; i < supo.length; i++) {
    // ex) answers = [1,3,2,4,2,1,3,2,4,2 ...] / supo[i] = [1,2,3,4,5,1,2,3,4,5 ...]
    // 각 인덱스의 값 비교해서 일치하는 값(정답)만을 가진 배열을 반환
    // 정답 수 : filter 된 배열의 길이
    score[i] = answers.filter(
      (element, index) => element === supo[i][index % supo[i].length]
    ).length;
  }

  let max = Math.max(...score);

  if (score[0] === max) answer.push(1);
  if (score[1] === max) answer.push(2);
  if (score[2] === max) answer.push(3);

  return answer;
}
