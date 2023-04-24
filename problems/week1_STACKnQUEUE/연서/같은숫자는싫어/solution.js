function solution(arr) {
  var answer = [];
  //solution 1 : for문으로 조건 검사 후 answer에 push
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }

  //solution 2 : filter 사용
  // answer = arr.filter((target, index) => target != arr[index+1])

  return answer;
}
