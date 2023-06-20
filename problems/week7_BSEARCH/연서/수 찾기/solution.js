//백준 입력 형식(파일 시스템 사용)
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// N개의 정수의 배열인 A 배열에서 M개의 정수의 배열인 B 배열 값이 있는지 확인해야 한다.
// string 형태로 들어오는 input을 number type으로 바꿔준다.
const A = input[1].split(" ").map((t) => +t);
const B = input[3].split(" ").map((t) => +t);

// 이분 탐색을 위한 정렬
A.sort((a, b) => a - b);
let answer = [];

B.forEach((t) => {
  let low = 0;
  let high = A.length - 1;
  let find = false;
  // 이분 탐색
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // mid 값이 target 값보다 큰 경우 왼쪽에서 다시 탐색
    if (A[mid] > t) {
      high = mid - 1;
      // mid 값이 target 값보다 작은 경우 오른쪽에서 다시 탐색
    } else if (A[mid] < t) {
      low = mid + 1;
      // mid 값과 target 값이 같은 경우, find flag를 true로 변경
    } else {
      find = true;
      break;
    }
  }

  if (find) {
    answer.push(1);
  } else {
    answer.push(0);
  }
});

console.log(answer.join("\n"));
