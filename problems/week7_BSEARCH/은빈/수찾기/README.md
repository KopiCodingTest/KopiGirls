## 💻 Problem

## 문제

N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

## 입력

첫째 줄에 자연수 N(1 ≤ N ≤ 100,000)이 주어진다. 다음 줄에는 N개의 정수 A[1], A[2], …, A[N]이 주어진다. 다음 줄에는 M(1 ≤ M ≤ 100,000)이 주어진다. 다음 줄에는 M개의 수들이 주어지는데, 이 수들이 A안에 존재하는지 알아내면 된다. 모든 정수의 범위는 -231 보다 크거나 같고 231보다 작다.

## 출력

M개의 줄에 답을 출력한다. 존재하면 1을, 존재하지 않으면 0을 출력한다.

## 예제 입력 1

```
5
4 1 5 2 3
5
1 3 7 9 5

```

## 예제 출력 1

```
1
1
0
0
1
```

## 💡 Solution

-   탐색 대상 정렬
    ```jsx
    A.sort((a, b) => a - b);
    ```
-   이분탐색 알고리즘 적용
    ```jsx
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (target < A[mid]) {
            end = mid - 1;
        } else if (target > A[mid]) {
            start = mid + 1;
        } else {
            res = true;
            break;
        }
    }
    ```
-   값 출력
    ```jsx
    if (res === true) {
            answer.push(1);
        } else {
            answer.push(0);
        }
    });

    //
    console.log(answer.join('\n'));
    ```
