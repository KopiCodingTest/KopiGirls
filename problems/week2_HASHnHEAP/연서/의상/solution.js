function solution(clothes) {
  var answer = 1;
  // object 객체 만들기
  let obj = new Object();

  for (let i = 0; i < clothes.length; i++) {
    // object 객체 안에 옷 종류가 있는지 확인하여 종류 별 개수를 세어준다. (옷 종류가 이미 object 안에 있으면 value 값을 +1, 없으면 value 값을 1로 설정)
    obj[clothes[i][1]] = obj[clothes[i][1]] ? obj[clothes[i][1]] + 1 : 1;
  }

  for (let key in obj) {
    // 종류 별 개수 + 1 (입지 않은 경우)를 각각 곱해준다.
    answer *= obj[key] + 1;
  }

  // 입지 않은 경우를 포함했으므로 모두 입지 않은 경우 한 케이스를 제외한다.
  answer -= 1;

  return answer;
}
