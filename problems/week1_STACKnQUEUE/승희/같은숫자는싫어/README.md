## **💻 Problem**

배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

- arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
- arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

### 제한사항

- 배열 arr의 크기 : 1,000,000 이하의 자연수
- 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

---

### 입출력 예

| arr | answer |
| --- | --- |
| [1,1,3,3,0,1,1] | [1,3,0,1] |
| [4,4,4,3,3] | [4,3] |

<br/>

## **💡 Solution**

```jsx
function solution(arr)
{
    var answer = [];    // 새로운 빈 배열을 생성 (정답 배열)

    for (let i=0; i<arr.length; i++) {  // 입력된 배열의 모든 요소를 순회 
        if (arr[i]!==arr[i+1]) {    // 현재 요소가 다음 요소와 값이 중복되지 않을 경우
            answer.push(arr[i]);    // 현재 요소를 정답 배열에 삽입
        }
    }
    
    return answer;                  // 정답 배열 반환
}
```

- 그런데 i가 `arr.length-1` 즉 반복문의 마지막 바퀴일 때, if 문에서 인덱스 에러가 나지 않길래 의아했다!
- `arr[i+1]` 가 존재하지 않는 인덱스를 가리킬 때(`arr[length]`), 인덱스 에러가 발생하는게 아니라 **undefined**로 반환되어서 조건문이 false 처리되고 무사히 지나가는 것 같다
    
    ![스크린샷 2023-04-26 오전 12.43.07.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eab3d015-8cc9-441c-8737-a47869ec0f22/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-04-26_%EC%98%A4%EC%A0%84_12.43.07.png)
    
    [https://shyunju7.tistory.com/14](https://shyunju7.tistory.com/14)