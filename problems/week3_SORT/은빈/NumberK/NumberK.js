let array = [1, 5, 2, 6, 3, 7, 4];
let commands =  [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
let answer = []
let slicedArr =[]
// commands의 길이(3)만큼 for문 돌리기 :
    for (i=0; i<commands.length; i++) {
        // 자를 시작 인덱스
        const startIdx = commands[i][0]-1;
        // 자를 끝 인덱스
        const endIdx = commands[i][1];
        // 자르고 정렬했을 때 k번째 수
        const k = commands[i][2]-1;
        // 자르기
        slicedArr = array.slice(startIdx, endIdx)
        // 숫자로 정렬하기
        slicedArr.sort((a,b) => a-b);
        // k번째 수 answer 넣기
        answer.push(slicedArr[k])
    }
    return answer;  
}

solution(array, commands);