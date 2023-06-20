// 백준 테스트 코드 넣긔
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

//
const A = input[1].split(' ').map((target) => +target);
//
const B = input[3].split(' ').map((target) => +target);

let answer = [];

// 값 정렬하기
A.sort((a, b) => a - b);

// 이진 탐색 알고리즘 ㄱㄱ
B.forEach((target) => {
    let start = 0;
    let end = A.length - 1;
    let res = false;

    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (target < A[mid]) {
            end = mid - 1;
        } else if (target > A[mid]) {
            start = mid + 1;
        } else {
            res = true;
            break;
        }
    }

    // 값 가져오기
    if (res === true) {
        answer.push(1);
    } else {
        answer.push(0);
    }
});

//
console.log(answer.join('\n'));
