## 💻 Problem

### **문제 설명**

피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를들어

- F(2) = F(0) + F(1) = 0 + 1 = 1
- F(3) = F(1) + F(2) = 1 + 1 = 2
- F(4) = F(2) + F(3) = 1 + 2 = 3
- F(5) = F(3) + F(4) = 2 + 3 = 5

와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

### 제한 사항

- n은 2 이상 100,000 이하인 자연수입니다.

### 입출력 예

| n   | return |
| --- | ------ |
| 3   | 2      |
| 5   | 5      |

<br/>

## 💡 Solution

## 🎀 logic

- f(0) = 0, f(1) = 1에 대한 데이터를 담아 배열을 생성
- n은 2이상이라고 주어졌기 때문에 i는 2부터 시작
- i를 2부터 n까지 늘려가면서
  - 만약 numArr[I]값이 존재한다면, 즉 이미 f(i)가 메모이제이션 된 상태라면 패스 (`continue`)
  - 아직 값이 없다면 f(i) = f(i-1) + f(i-2)로 numArr[I]값 채우기
    - 주의할 점은 %1234567로 나눠서 넣어줘야한다는 것 (주의 파트 참고)
- numArr[n]까지 구했다면 정답 반환

## 🎀 주의사항

- 자바스크립트는 재귀함수에 최적화되어있지 않다. 재귀함수로 런타임에러가 난다면 반복문으로 바꾸자!
  - Top-down → Bottom-up
- 자바스크립트의 int자료형 크기는 제한이 있다. 매우 빠른 속도로 증가하는 피보나치 문제를 자바스크립트로 풀 땐 반드시 overflow에 주의하자!
  - 나도 이것때문에 헤맸음. 하단의 실수로그 참고

## 🎀 실수로그

```jsx
function solution(n) {
  var answer = 0;

  let numArr = [0, 1];

  function fibo(i) {
    if (numArr[i] !== undefined) return numArr[i]; // undefined일 경우
    numArr[i] = fibo(i - 1) + fibo(i - 2);
    return numArr[i];
  }

  return fibo(n) % 1234567;
}
```

처음엔 이렇게 답안을 작성했고 테스트 케이스는 통과했다.

하지만 정답을 제출해보니 결과는…

<img src="https://file.notion.so/f/s/46e2f191-19fe-4271-9753-4b6b52212ec4/스크린샷_2023-05-16_오후_10.03.14.png?id=f03d3afd-b1d9-452a-bad8-5d36948e2075&table=block&spaceId=1d40a623-da7d-44e1-9004-b5b5a8861918&expirationTimestamp=1684330016517&signature=OI9ZilyVnqJkdpLBdrwxClfaSLrl-3BF7gKYA-Uzca0&downloadName=스크린샷+2023-05-16+오후+10.03.14.png"/>

테케 7번부터 에러가 났다. 고민을 하다가 질문게시판에 들어가보니 나처럼 테케 7번부터 문제가 생긴 사람이 많더라. 이유를 보니까 자료형 메모리 때문이라는 사실을 알고 그제서야 문제에 `%1234567`이 굳이 요구되어있는 이유를 깨달았다

- (A+B)%C === ((A%C)+(B%C))%C

해당 로직을 피보나치에 쓰면 오버플로우를 막을 수 있다!

따라서 최종 리턴 시에만 `%`를 해주는게 아니라, 재귀함수를 돌때마다 `%`해주도록 다시 구현했다

```jsx
function solution(n) {
  var answer = 0;

  let numArr = [0, 1];

  function fibo(i) {
    if (numArr[i] !== undefined) return numArr[i]; // undefined일 경우
    numArr[i] = fibo(i - 1) + fibo(i - 2);
    return numArr[i] % 1234567;
  }

  return fibo(n);
}
```

이렇게.

근데 그 결과는.

<img src="https://file.notion.so/f/s/dbd00993-653a-4879-9bc6-de99828926e7/스크린샷_2023-05-16_오후_10.05.49.png?id=bb39bbaa-130f-45d7-a50a-4a79a639b877&table=block&spaceId=1d40a623-da7d-44e1-9004-b5b5a8861918&expirationTimestamp=1684330053500&signature=ewvYlSEmnAhUARR7xaOrQbPJhikrMojpTGVeEt8D66M&downloadName=스크린샷+2023-05-16+오후+10.05.49.png"/>

막판에 런타임 에러가 났다. 테케는 실패없이 통과했지만…

뭔가 시간효율성이 박살나고 있구나 싶어서 재귀를 버리고 반복함수로 다시 구현해보았고,

```jsx
function solution(n) {
  var answer = 0;

  let numArr = [0, 1];
  let i = 2;

  while (i <= n) {
    if (numArr[i] !== undefined) continue;
    numArr[i] = (numArr[i - 1] + numArr[i - 2]) % 1234567;
    i++;
  }
  answer = numArr[n];

  return answer;
}
```

결과는 성공적이었다!

이후 찾아보니, **자바스크립트는 재귀함수를 최적화하지 않는다**고 하더라. 그래서 재귀함수로 구현했는데 런타임 에러가 발생한다? 싶으면 반복문으로 대체해서 구현해야한다는걸 새롭게 알게되었다

오늘도 수고링~ 🎀
