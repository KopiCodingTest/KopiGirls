## 💻 Problem

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, `완주하지 못한 선수의 이름을 return` 하도록 solution 함수를 작성해주세요.

### 제한사항

- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 `1 작습니다`.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 `동명이인이 있을 수 있습니다.`

## 💡 Solution

- 모든 마라톤에서 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주했으므로 
1) **`정렬 했을 때`** 2)`같지 않은 값을 가지는 순간의 participant`가 완주하지 못한 유일한 참가자이다!!
1. 정렬 했을 때
    
    ```jsx
    participant.sort();
    completion.sort();
    ```
    
2. 같지 않은 값을 가지는 순간의 participant
    
    ```jsx
    
        for(i=0; i<participant.length; i++){
            if(participant[i] !== completion[i]){
                answer = participant[i];
                break
    ```
    

## 🤔 사견

- 앞에서 includes를 써서 값 비교를 해서 포함 여부로 문제를 풀려고 시도 
⇒ 그럴 경우 동명이인을 걸러 낼 수 가 없다.
- 손글씨로 문제를 이리저리 적어보다가 유레카처럼 같지 않다 ! = 가 떠오름…..!!!!
- 디버깅을 해볼 수 있는 환경이라 이런 저런 시도가 가능한거니 최대한 한큐에 풀고, 테스트 하도록 노력하기

## TRY1

```jsx
function solution(participant, completion) {
    let FailRunner = []
    for (i=0; i<participant.length; i++ ) {
        if(!completion.includes(participant[i])) {
            FailRunner.push(participant[i])
        }
    }
    return FailRunner[0]
}
```