function solution(N, number) {
     // s 배열 초기화: i 번째 원소는 N을 i번 사용해서 만들 수 있는 수의 집합(Set)
    const s = [new Set()] 
    // N의 사용 횟수를 1부터 8까지 반복
    for (let i = 1; i <= 8; i++) {  
        // i번 사용한 N의 조합을 구하고 s[i]에 추가
        s.push(new Set([new Array(i).fill(N).join('') * 1]))  
         // N의 사용 횟수를 j와 i-j로 나누는 모든 경우에 대해 반복
        for (let j = 1; j <= i; j++) { 
             // j번 사용한 N의 조합 x1을 반복
            for (const x1 of [...s[j]]) { 
                 // i-j번 사용한 N의 조합 x2를 반복
                for (const x2 of [...s[i-j]]) { 
                    s[i].add(x1 + x2)  // 덧셈
                    s[i].add(x1 - x2)  // 뺄셈
                    s[i].add(x1 * x2)  // 곱셈
                    if (x2) {  // 나눗셈은 0으로 나누는 것을 방지하기 위해 x2가 0이 아닐 때에만 수행
                        s[i].add((x1 / x2) - (x1 / x2) % 1)  // 몫을 구한 후 집합에 추가
                    }
                }
            }
        }
         // s[i]에 number가 있다면
        if (s[i].has(number)) { 
            // i를 반환
            return i  
        }
    }
      // 1부터 8까지 모든 조합에서 number를 만들지 못하면 -1을 반환
    return -1
}
