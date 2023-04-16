# 1. 같은 숫자는 싫어 😠

## 💻 Problem

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12906)

### 문제 조건
1. 배열 안에 있는 **연속된**
2. **중복** 요소를 제거
3. 제거 후 반환되는 배열은 **원래 배열 순서**에 맞아야 한다.

따라서 주어진 arr이 아닌 새로운 배열 answer에 값을 넣고 <br />
이 안의 요소들을 반복문을 통해 연속된 중복을 찾아 제거하고 반환해주는 것이 좋을 것 같다고 생각했다.<br/>
근데 또 굳이 answer라는 새로운 배열을 만들 필요가 없었을 것 같기도 하고..? <br/>
arr 배열만을 이용해서 푼 다른 풀이도 궁금하다!
<br/>

## 💡 Solution
- 먼저 answer 배열에 arr 원소들을 똑같이 넣어준다.
- 이후 while문을 이용해 앞에서부터 바로 뒤에 오는 인덱스의 값이 같은지 검사한다.
- 같다면 뒤에 있는 인덱스 요소를 제거한다.(`splice` 함수 사용 -> 인덱스로 배열 요소를 제거하거나 추가할 수 있기 때문에 선택)
- 다르다면 연속된 중복 요소가 아니므로 인덱스를 1 증가시켜 다음 요소를 검사한다.

**⚠️ 유의사항** : 중복되어서 요소를 삭제하고 인덱스를 증가시키면 중복 요소를 다 잡아내지 못함
- 예 : 4 4 4 3 3 이 arr라면 첫 번째 4와 두 번째 4가 같아서 뒤에 4를 삭제하면 4 4 3 3이 된다. <br/>
그 상태에서 인덱스를 증가시키면 두 번째 4와 뒤에 오는 3을 비교하는 걸로 시작해서 중복을 다 잡지 못함!<br/>
처음에 이거 때문에 테스트 케이스 통과 못 했다.

```javascript
function solution(arr)
{
    let answer = [];

    answer = arr;
    let i = 0;
    while (i < arr.length -1){
        if (answer[i] === answer[i + 1]){
            answer.splice(i+1, 1)}
        else i+=1;
    }
        
    console.log(answer);
    return answer;
}
```


## 📚참고 자료
[[자바스크립트]배열 요소 삭제 - pop, shift, splice, spice](https://velog.io/@seong-dodo/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EC%82%AD%EC%A0%9C-pop-shift-splice-slice)
<br />
[while문 사용법 - MDN 루프와 반복](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Loops_and_iteration#while_%EB%AC%B8)
