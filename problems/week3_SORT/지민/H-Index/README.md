# 2. 완주하지 못한 선수 🏃🏅

## 💻 Problem

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42747)

### 문제 조건

1. n개의 배열 원소들이 있고 각 원소들은 인용 횟수를 의미힌다.
2. 인용 횟수가 h번 이상인 논문이 h개 이상 있고, 나머지 논문들은 h번 이하로 인용되었다.
3. h의 최댓값을 반환해야 한다.

## 💡 Solution

- 인용횟수 기준 내림차순으로 정렬한다.
- `인덱스 + 1`가 h번 이상 인용된 논문의 개수이므로 이 값이 h 이상인 첫 요소가 최댓값이 될 것이다.

**⚠️ 유의사항** :

- 대표 테스트 케이스랑 11, 16번 테케만 통과하고 있습니다.
- 풀이를 여러 번 엎었는데 계속 똑같아서 이후에 맞는 풀이를 찾아봤습니다.

```javascript
ffunction solution(citations) {
    let answer = 0;

    //인용 횟수 기준으로 내림차순으로 정렬하고
    citations.sort((a, b) => b - a);

    let i = 0;
    //11, 13 테스트케이스 빼고 계속 실패가 떠서 한참 고쳤는데, h가 citation 원소일 필요가 없었다는 걸 뒤늦게 알았다..
    //근데 새로 안 저 사실에 너무 매몰되어서 문제 잘못 이해하고 계속 잘못 접근했다가 원래 처음에 생각한 접근이 더 정답에 가깝다는 것을 알았다..!ㅠㅠ
    //정렬된 배열에서 h 이후에 오는 원소의 개수가 h개 이상인 첫 요소가 H-Index이다.
    while(i < citations.length){
        if(citations[i] <= i + 1){
            answer = citations[i];
            return answer;
        }
            i++;
    }
}
```
