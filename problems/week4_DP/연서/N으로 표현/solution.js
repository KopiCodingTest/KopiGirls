function solution(N, number) {
  // 1~9까지의 N개 개수에 따라 구할 연산의 수를 확인하기 위한 array. array의 각 요소는 Set으로 채워 중복을 배제한다.
  const nthNumList = new Array(9).fill(0).map((el) => new Set());

  // i는 nthNumList에 있는 집합 번호.
  // N이 1부터 시작하므로 0번째 집합은 사용하지 않고, 1번째 집합부터 loop를 돌려 집합 번호와 N을 맞춰준다.
  //(여기서 0부터 사용하고 싶으면 나중에 i=0부터 7까지, 8번 돌려주고 return i+1로 해주면 됨)
  for (let i = 1; i < 9; i++) {
    // 각 배열 요소 Set에 N을 i번 곱한 값을 미리 넣어준다.
    nthNumList[i].add("1".repeat(i) * N);
    // 여기서부터 DP 개념 사용 -> 이전에 구한 값을 저장한 Set을 사용하여, 다음 Set에 넣을 값을 구한다.
    for (let j = 1; j < i; j++) {
      for (const arg1 of nthNumList[j]) {
        for (const arg2 of nthNumList[i - j]) {
          // 사칙 연산 한 값을 Set에 넣어준다 (Set 자료형을 사용했으므로 중복이 제거 됨)
          nthNumList[i].add(arg1 + arg2);
          nthNumList[i].add(arg1 - arg2);
          nthNumList[i].add(arg1 * arg2);
          nthNumList[i].add((arg1 / arg2) >> 0);
        }
      }
    }
    //만들어진 숫자 중 타겟인 number이 발견되면 바로 집합 번호를 반환
    if (nthNumList[i].has(number)) return i;
  }
  // 8까지 순회했는데 number에 해당하는 값이 없다면, 이는 사용횟수가 8번을 초과한다는 뜻이므로 문제의 조건에 맞게 -1을 return
  return -1;
}

// 출처 : https://allo-ew.tistory.com/118
