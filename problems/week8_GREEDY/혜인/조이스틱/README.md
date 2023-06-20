## 💻 Problem
조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

조이스틱을 각 방향으로 움직이면 아래와 같습니다.

▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

## 💡 Solution

### 문제 확인 조건

#### 좌우 조작 횟수
1. 조이스틱 오른쪽으로만 조작하기(`ZZZZAAAA`): 이때, 연속된 A는 조이스틱이 방문하지 않아도 됨 이때는 연속된 A의 개수를 name.length에서 빼주기 

2. 조이스틱 왼쪽으로만 조작하기 (AAAAZBZB): 시작 기준 오른쪽에 연속된 A의 개수가 왼쪽부분보다 많아서 왼쪽부터 시작하는 게 더 좋음 이 또한 연속된 A의 길이를 name.length에서 빼주기

3. 중간중간 왔다갔다하는 경우(BBAABABABAAAAAZA) : A가 연속된 개수가 가장 많은 부분을 구하고, 그 전까지는 오른쪽 그 이후 왼쪽으로 조작 따라서 문자열 시작~A의 부분 직전까지 조작 횟수 2배 + 이후 문자열 끝까지 조작 횟수 

5. BBBAABB: 
> 1) 왼쪽에서 오른쪽으로만 이동 === name.length -1
> 2) A를 만나기 전까지 이동 + 반대방향으로 다시 이동한 후 끝으로 돌아가서 A를 만나기 전까지 이동 

#### 상하 조작 횟수 
1. A부터 오름차순이 빠른지 Z부터 내림차순으로 찾는 게 빠른지
즉, 특정 알파벳에 대해 A로부터 얼마나 멀리 떨어져있는지 = 상하 조작 횟수 

Z는 A로부터 1만큼 떨어져 있는 것

#### 결론
A로부터의 거리 OR (Z로부터의 거리 +1) 중 작은 것 

즉, 연속된 A의 개수를 기준으로 고려해야함!!!!

###  💭 알고리즘

```
// 조이스틱의 상하 조작 횟수 구하기
    name.split("").forEach(e => {
        let time = e.charCodeAt(0)-65;
        if (time > 13) time = 26-time;
        arr.push(time);
    });
    let length = arr.length;
    answer = arr.reduce((pre, cur) => pre + cur);
```

```
   // 조이스틱의 좌우 조작 횟수 구하기
    answer += length-1;
    //// 조이스틱을 왼쪽으로만 조작하는 경우
    let temp = answer;
    for (let i = 1; i < length; i++) {
        if (arr[i] != 0) break;
        temp--;
    }
```

```
    //// 조이스틱을 오른쪽으로만 조작하는 경우
    let temp2 = answer;
    for (let i = length-1; i > 0; i--) {
        if (arr[i] != 0) break;
        temp2--;
    }
```
    
```    
    //// 조이스틱을 오른쪽으로 어느 정도 조작했다가 왼쪽으로만 조작하는 경우
    let temp3 = answer;
    let idx = 0;
    let curCount = 0;
    let count = 0;
    for (let i = 1; i < length; i++) {
        if (arr[i] != 0) {
            count = 0;
            continue;
        }
        count++;
        if (curCount < count) {
            idx = i;
            curCount = count;
        }
    }
    temp3 -= length-1;
    temp3 += (idx-curCount)*2;
    temp3 += length-idx-1;

    // 세 경우 중 가장 작은 경우가 좌우 조작 횟수가 최소가 된다.
    answer = Math.min(temp, temp2, temp3);
    return answer;
}
```



