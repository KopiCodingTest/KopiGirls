## 💻 Problem
### **문제 설명**

H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과[1](https://school.programmers.co.kr/learn/courses/30/lessons/42747#fn1)에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 `n`편 중, `h`번 이상 인용된 논문이 `h`편 이상이고 나머지 논문이 h번 이하 인용되었다면 `h`의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

### 제한사항

- 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
- 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

### 입출력 예

| citations | return |
| --- | --- |
| [3, 0, 6, 1, 5] | 3 |
<br/>

## 💡 Solution
- 한줄 정리 : 논문 n편 중, h번 이상 인용된 논문이 h편이상 일때 h의 최댓값 구하기
- 문제가 이해가 되지 않아서 몇가지 테스트케이스 만들어서 직접 h를 구해봤습니다
- 정답 예시 생각하기 - 우선 citations[i]와 n-i가 같아지는 순간이 최대일거라는 생각으로 처음에 접근했습니다. (표에서 볼드처리한 부분)
1. **[0, 1, 2, 3]**

| citations[i] | n-i |  |
| --- | --- | --- |
| 0번 이상 인용 | 4개 (0개이상) |  |
| 1번 이상 인용  | 3개 (1개이상) | citations[I]<n-i |
| 2번 이상 인용 | 2개 (2개이상) | citations[I]==n-i |
| 3번 이상 인용 | 1개 (3개이상X) | citations[I]>n-i |
- 2번 이상 인용이 2개이상 : h-index = 2

1. **[0, 1, 100, 110, 120]**

| citations[i] | n-i |  |
| --- | --- | --- |
| 0번 이상 인용 | 5개 (0개이상) |  |
| 1번 이상 인용  | 4개 (1개이상) | citations[I]<n-i |
| 2번 이상 인용 | 3개 (2개이상) |  |
| 3번 이상 인용 | 3개 (3개이상) |  |
| 4번 이상 인용 | 3개 (4개이상X) |  |
| 100번 이상 인용 | 3개 (100개이상X) | citations[I]>n-i |
| 110번 이상 인용 | 2개 (110개이상X) |  |
- h-index = 2

- citations[0]≤x<citations[1] : n-i개
- citations[1]≤x<citations[2] : n-i개
- citations[2]≤x<citations[3] : n-i개
- citations[3]≤x<citations[4] : n-i개
- citations[4]≤x<citations[5] : n-i개

이런식이라서 

citation 요소인 두 값 **사이**에 n-i과 동일한 수가 존재할 경우, (즉 값이 동일한 경우가 citations 요소로 딱 떨어지지 않는 경우)

citation 요소가 n-i보다 커지는 **첫 순간의 n-i**과 같다. 

따라서

- citations[I]와 n-i가 같아지는 순간이나
- citations[I]가 n-i보다 커지는 가장 첫번째 순간

그때의 n-i가  h의 가능한 최댓값, 즉 h-index 이다. 

- **주의** : 처음엔 h의 가능 범위인 1000까지(최악의 경우) for문을 돌려야 하나 했지만, 생각해보니 h번 이상 인용된 논문이 **h편 이상!** 이라는 문제 조건 때문에 가능한 최대의 h값은 citation의 length가 된다. 따라서 최악의 경우를 고려했을 때 **0~length**까지만 순회해주면 된다.
- **logic :**
    - 1. citations 배열을 오름차순으로 정렬
        - length-요소index가 해당 요소 값 이상의 요소의 개수, 즉 x번 이상 인용한 논문 개수가 될 것이다.
    - 2. 0~length-1를 for문으로 순회하면서
        - citation[I] ≥ n-i가 되는 첫번째 순간에
        - answer = n-i, break (순회 종료!)

```jsx
function solution(citations) {
    var answer = 0;
    
	  citations.sort((a,b)=>a-b);   // 1.
    let n = citations.length;
    
    for (let i=0; i<n; i++) {    // 2.
        if (citations[i]>=n-i) {    
            answer = n-i;
            break;
        }
    }
    
    return answer;
}
```