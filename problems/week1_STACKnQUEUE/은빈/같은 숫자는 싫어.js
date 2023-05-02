function solution(arr)
{
    // 답변 배열 선언해준당
    let answer = [];
    // 첫번째 요소는 우선 답변 배열에 넣어준다.=>  비교 하기 위함!!
    answer.push(arr[0]);
    
    // 두번째 요소부터 반복문을 돌리기
    for(let i = 1; i<arr.length; i++) {
        // 답변 배열의 마지막 요소와 현재 반복문에서 도는 요소가 같지 않으면
        if(answer[answer.length -1] !== arr[i]) {
            // 답변 배열에 현재 요소를 넣어준다!!
            answer.push(arr[i]);
        }
     // 같으면 넣어주지 않는다~,,
    }
    // 답변 배열을 반환한당
    return answer;
}