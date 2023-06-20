## 💻 Problem
### **문제 설명**

조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.

ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

조이스틱을 각 방향으로 움직이면 아래와 같습니다.

`▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)`

예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

- `첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.`

만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

### 제한 사항

- name은 알파벳 대문자로만 이루어져 있습니다.
- name의 길이는 1 이상 20 이하입니다.

### 입출력 예

| name | return |
| --- | --- |
| "JEROEN" | 56 |
| "JAN" | 23 |

<br/>

## 💡 Solution
```jsx
/*
    - 알파벳 인덱스 처리 : (인덱스만큼 상하로 이동해야함)
        '글자'-'A' 를 했을 때 
        0~13 : '글자'-'A'가 인덱스 
        14~25 : 'A'-'글자'가 인덱스 

    - 앞에서부터 차례로 비교 : name.length 번 
    - 앞에서 가다가 A 뭉텅이 만나면 다시 돌아가는 법 : 
        (A뭉텅이 이전 글자 위치) * 2 + (name.length - (A뭉텅이 다음 글자의 위치))
    - 뒤로 가다가 A뭉텅이 만나면 다시 돌아와 앞으로 가는 법 : 
        (name.length - (A뭉텅이 다음 글자의 위치)) * 2 + (A뭉텅이 이전 글자 위치)
*/
function solution(name) {
    let move = 0;
    let leftRight = name.length - 1;

    for (alpha of name) {
        let i = name.indexOf(alpha);
        // 인덱스 찾기 - 상하 이동 횟수 
        move += (alpha - 'A' <= 13)? alpha - 'A' : 'A' - alpha;
        // 좌우 이동 횟수 
        while (alpha === 'A' && name.indexOf(alpha) < name.length) {
            i++;
        }

        leftRight = Math.min(
            name.length - 1,
            name.indexOf(alpha) * 2 + name.length - i,
            2 * (name.length - i) + name.indexOf(alpha)
        );
    }

    return move + leftRight;
}
```