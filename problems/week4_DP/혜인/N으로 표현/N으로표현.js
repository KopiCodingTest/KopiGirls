function solution(N, number) {
  const list = new Array(8).fill().map(() => new Set());
  // 반복될 N을 담는 list, 중복을 만들어서 여러번 계산할 필요를 줄임

  //8번까지인지 check
  for (let i = 0; i < 8; i++) {
    //1. N, NN, NNN, ... 의 경우
    list[i].add(parseInt(N.toString().repeat(i + 1)));
    //2. 가능한 set계산, (set[j] and set[i-j-1])
    for (let j = 0; j < i; j++) {
      for (const a of list[j]) {
        for (const b of list[i - j - 1]) {
          list[i].add(a + b);
          list[i].add(a - b);
          list[i].add(a * b);
          list[i].add(a / b);
        }
      }
    }
    if (list[i].has(number)) return i + 1;
  }

  return -1;
}
