## 💻 Problem

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

<br/>

## 💡 Solution

### 💭 모의고사1

```
let answers = [1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2];

function solution(answers) {

    let answer = [];
    // supo : 수포자 찍는 방식
    let supo = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    let score = [];
    for (let i = 0; i < supo.length; i++) {
        // ex) answers = [1,3,2,4,2,1,3,2,4,2 ...] / supo[i] = [1,2,3,4,5,1,2,3,4,5 ...]
        // 각 인덱스의 값 비교해서 일치하는 값(정답)만을 가진 배열을 반환
        // 정답 수 : filter 된 배열의 길이
        score[i] = answers.filter(
            (element, index) => element === supo[i][index % supo[i].length],
        ).length;
    }

    let max = Math.max(...score);

    if (score[0] === max) answer.push(1);
    if (score[1] === max) answer.push(2);
    if (score[2] === max) answer.push(3);

    return answer;
}

console.log(solution(answers));
```

* filter문 안에서 <br/>
supo[i] = 각 수포자의 list <br/>
❓ [index % supo[i].length] = 각 index를 각 수포자 list의 길이로 나눈 나머지값과 같다,,,? => 여기가 이해가 가지 않아서,,, 제가 패드에 써가면서 해봤는데여,,<br/> 일단 supo[i]가 첫번째 수포자의 경우, <br/>
supo[i].length = 5이고, 각 인덱스를 이 숫자로 나누면<br/>
0,1,2,3,4가 차례로 나오게 됩니다. 즉, 각 supo[i]의 인덱스가 차례대로 나오는 것과 같아여 그래서 supo[i][index % supo[i].length]는 각 비교하고 싶은 </br>
<b>찍은값</b>과 같게 된다는 것이더라구요 </br>
이렇게 하면, for문을 중첩하지 않아도 될 것 같아요!

* max를 각 수포자들의 score 중에서 최댓값으로 넣어주고,,,
<br/> 최대인 경우를 전에 정의한 answer리스트 안에 넣어줍니다! 


</br>

### 💭 모의고사2

```
function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
  const result = [0, 0, 0];
  const length = answers.length;
  for (let i = 0; i < length; i++) {
    if (one[i % 5] === answers[i]) result[0]++;
    if (two[i % 8] === answers[i]) result[1]++;
    if (three[i % 10] === answers[i]) result[2]++;
  }
  const answer = [];
  const maxValue = Math.max(...result);
  let index = 0;
  for (let i = 0; i < 3; i++) {
    if (maxValue === result[i]) {
      answer[index] = i + 1;
      index++;
    }
  }
  return result;
}
```
<b>📣지민이가 보여준 두번째 풀이는 런타임에러가 뜨더라구요? </br>
그래서 해당 풀이로 해결해보았습니다! </b>

```
function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [0, 0, 0];
  const length = answers.length;
  for (let i = 0; i < length; i++) {
    if (one[i % 5] === answers[i]) result[0]++;
    if (two[i % 8] === answers[i]) result[1]++;
    if (three[i % 10] === answers[i]) result[2]++;
  }
  const answer = [];
  const maxValue = Math.max(...result);

  for (let i = 0; i < 3; i++) {
    if (maxValue === result[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}
```
* 런타임에러가 나는 추측된 이유로는, </br>
1. answer를 return하는 게 아니라, result를 return해줌
2. for문 이후의 후속조치의 부재

</br>

#### 🤲  따라서

```
//인덱스를 삭제 
  for (let i = 0; i < 3; i++) {
    if (maxValue === result[i]) {
      answer.push(i + 1); 
      //answer에 최댓값에 해당하는 부분을 push해주었습니다
      (자동으로 오름차순 가능)
      //index가 아니라 수포자의 숫자?에 맞추어야 해서 +1을 해주었습니다.
    }
  }
  return answer;
}
```

</br>

