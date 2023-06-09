## 💻 Problem

H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

제한사항

- 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
- 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

입출력 예
| citations | return |
|----------------| ------- |
| [3, 0, 6, 1, 5] | 3 |

입출력 예 설명

이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.

<hr>

### 📍 **한 줄 정리** : 논문 인용 수 배열을 큰 수부터 내림차순으로 정리해주고, 피인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자가 H-Index 수가 된다.

<hr>

<br/>

## 💡 Solution

```js
function solution(citations) {
  var answer = 0;

  // 논문 인용횟수를 내림차순으로 정렬 (인용 횟수가 큰 수부터 찾아야 함)
  citations.sort((a, b) => b - a);

  // 논문 인용횟수 배열만큼 for문을 돌린다
  for (let i = 0; i < citations.length; i++) {
    // 피인용수가 논문 수와 같거나 많으면 answer를 1증가시킨다.
    // 피인용수가 논문 수보다 작아지기 시작하는 숫자가 answer가 된다.
    if (citations[i] >= answer + 1) {
      answer++;
    }
  }
  return answer;
}
```

- 문제 푸는 과정은 막 어렵지는 않았는데 문제 이해하는게 제일!! 어려웠습니다.. 역시 코테는 독해력 싸움 ,,
- 이해가 정말 정말 정말 안돼서 참고자료에 있는 H-Index 구하는 방법 보고 풀었습니다
- 1. 논문 인용 횟수를 내림차순으로 정렬한다.
- 2. 논문 인용 횟수 배열의 길이만큼 for문을 돌린다.
- 3. 피인용 수가 논문 수와 같거나 많으면 answer(= H-Index)를 1 증가시킵니다.
  - 이때, 논문 수는 1부터 시작하므로 answer+1과 비교를 해줍니다.
- 4. 피인용 수가 논문 수보다 같거나 작아 더 이상 answer가 증가되지 않는 시점의 숫자가 answer(= H-Index)가 되어, for문을 빠져나와 정답으로 return 된다.

<br/>

- 참고 자료
  - [H-Index](https://www.ibric.org/myboard/read.php?Board=news&id=270333) 구하는 방법!
    <img width="722" alt="image" src="https://user-images.githubusercontent.com/77691829/237016750-49e772c9-5af9-4ea4-85de-359272d8b952.png">
