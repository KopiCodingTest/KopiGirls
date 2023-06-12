const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');   // 백준 input 받아오는 방식

const [N, A, M, B] = input.map(v => v.split(" "));  

const array = new Set(A);   // 이진탐색 정렬 없이 has 메소드를 사용할 수 있는 Set 사용

const result = B.map(v => array.has(v) ? 1 : 0);    // B 배열의 각각 요소를 A배열 Set에서 찾기 -> 있으면 1, 없으면 0

console.log(result.join("\n")); // 백준 output 출력 방식 