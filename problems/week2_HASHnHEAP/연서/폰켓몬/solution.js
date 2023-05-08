function solution(nums) {
  var answer = 0;

  // 선택 된 폰켓몬을 담는 배열
  let select = [];

  for (let i = 0; i < nums.length; i++) {
    // 선택 된 폰켓몬의 수가 고를수 있는 폰켓몬의 수(n/2)보다 적을 때만 반복
    if (select.length < nums.length / 2) {
      // 선택된 배열에 폰켓몬이 없으면 추가해준다.
      if (!select.includes(nums[i])) {
        select.push(nums[i]);
      }
    }
  }

  // 배열에 담긴 폰켓몬의 수를 반환해준다.
  answer = select.length;

  return answer;
}
