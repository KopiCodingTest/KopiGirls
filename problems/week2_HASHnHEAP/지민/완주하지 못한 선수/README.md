# 2. 완주하지 못한 선수 🏃🏅

## 💻 Problem

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42576)

### 문제 조건

1. 미완주자 이름을 return
2. 동명이인 존재 가능

따라서 주어진 arr이 아닌 새로운 배열 answer에 값을 넣고 <br />
이 안의 요소들을 반복문을 통해 연속된 중복을 찾아 제거하고 반환해주는 것이 좋을 것 같다고 생각했다.<br/>
근데 또 굳이 answer라는 새로운 배열을 만들 필요가 없었을 것 같기도 하고..? <br/>
arr 배열만을 이용해서 푼 다른 풀이도 궁금하다!
<br/>

## 💡 Solution

- 먼저 참가자 명단에 완주자 명단 요소와 같은 이름이 있나 비교한다.
- 있다면 제거하고, 완주자 명단에서도 해당 선수를 찾았으니 원소를 제거해준다.
- 다만 없애주면 인덱스가 하나씩 당겨질 것이기 때문에 i--를 해준다.
- 모두 비교한 후에 남은 명단 배열인 participant를 문자열로 바꾸어 반환한다.

**⚠️ 유의사항** :

- 아직 반복문만 돌려쓰면서 풀고 있어서 많이 비효율적인 것 같아요ㅠ 다른 풀이 보면서 새롭게 풀어봐야 할 거 같습니다.
- 반복문 중첩이라 그런지 테스트 케이스는 모두 통과했지만 효율성 테스트에서 시간 초과가 떴습니다. 제 풀이는 그냥 참고만 하세요!🥲

```javascript
function solution(participant, completion) {
	let answer = "";

	for (i = 0; i < completion.length; i++) {
		for (j = 0; j < participant.length; j++) {
			//완주자 이름을 참가자 명단에서 제거하는 과정
			if (completion[i] === participant[j]) {
				participant.splice(j, 1);
				completion.splice(i, 1);
				i--;
				continue;
			}
		}
		continue;
	}
	answer = participant.toString();
	return answer;
}
```

## 📚참고 자료

[[자바스크립트]배열 요소 삭제 - pop, shift, splice, spice](https://velog.io/@seong-dodo/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EC%82%AD%EC%A0%9C-pop-shift-splice-slice
https://developer-talk.tistory.com/153)
<br />
