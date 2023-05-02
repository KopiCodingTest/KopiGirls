## **💻 Problem**

### **문제 설명**

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

### 제한사항

- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

### 입출력 예

| participant | completion | return |
| --- | --- | --- |
| ["leo", "kiki", "eden"] | ["eden", "kiki"] | "leo" |
| ["marina", "josipa", "nikola", "vinko", "filipa"] | ["josipa", "filipa", "marina", "nikola"] | "vinko" |
| ["mislav", "stanko", "mislav", "ana"] | ["stanko", "ana", "mislav"] | "mislav" |

## **💡 Solution**

- 한명만 완주 실패 : participant.length-1 == completion.length
- participant의 길이는 100,000까지 가능하므로 **시간 복잡도 주의**
    - **participant의 각 요소를 completion을 순회하면서 각각 비교하면 안됨!! (이중for문 X)**
- 💡**logic**
    
    > participant와 completion을 알파벳순으로 정렬한 후, 앞에서부터 비교하여 달라지는 순간 return
    > 
- 🚨**주의**
    
    > 참가자중 동명이인 있을 수 있음
    > 
- **오류 코드**

처음에 이렇게 작성했지만, 공개된 입출력 예시만 맞고 미공개 테스트케이스는 모두 실패함

```jsx
function solution(participant, completion) {
    var answer = '';
    
    let count = participant.length; // 마라톤 참가자 수
    
    participant.sort(); // 비교할 두 배열을 알파벳순으로 정렬
    completion.sort();

    for (let i=0; i<count-1; i++) {
        if (participant[i] === completion[i]) continue; // 두 요소가 같으면 pass
        // 두 요소가 다르면 participant[i]가 완주 못한 사람 
        answer = participant[i];
    }
    
    // 만약 answer 없이 for문이 끝난다면, participant의 마지막 요소가 완주 못한 사람
    if (answer === '') {
        answer = participant[count-1];
    }
    
    return answer;
}
```

처음에 이렇게 했는데 공개 케이스만 맞고 다 틀림

**→ break를 안해서 그런거였다!!!** 

- 두 배열을 정렬하여 비교할 경우, 모든 요소가 동일하다가 participant에는 있지만, completion에는 없는 미완주 주자 요소가 particitpant[i]일때부터 두 배열의요소가 모두 달라지게 된다.
    - 그 지점부터 completion배열은 participant 배열보다 한칸씩 앞당겨지기 때문
- 따라서 두 배열의 요소가 달라지는 순간 미완주자를 찾아내고 for문을 벗어나야 한다.
    - 벗어나지 않으면 그 뒤의 요소들도 모두 다르기 때문에 잘못된 미완주자로 여겨져셔 answer가 마지막까지 계속 update된다

[ 최종 코드 ]

```jsx
function solution(participant, completion) {
    var answer = '';
    
    let count = participant.length;
    
    participant.sort();
    completion.sort();

    for (let i=0; i<count-1; i++) {
        if (participant[i] === completion[i]) continue;
        answer = participant[i];
        **break;      // 주의하자!** 
    }
    
    if (answer === '') answer = participant[count-1];
    
    return answer;
}
```