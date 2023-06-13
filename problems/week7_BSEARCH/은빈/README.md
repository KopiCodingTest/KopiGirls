## 💻 Problem

### [프로그래머스-입국심사](https://school.programmers.co.kr/learn/courses/30/lessons/43238)

---

n명이 입국심사를 위해 줄을 서서 기다리고 있습니다. 각 입국심사대에 있는 심사관마다 심사하는데 걸리는 시간은 다릅니다.

처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다.

가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다. **하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.**

### [백준-수찾기](https://www.acmicpc.net/problem/1920)

---

N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

<br/>

## 이진탐색 기본 템플릿

```jsx
const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  let start = 0;
  let end = arr.length-1
  let mid

  while(start<=end){ //점점 좁혀지다가 start와 end의 순서가 어긋나게 되면 반복을 종료한다

  mid = parseInt((start+end)/2)

  if(target === arr[mid]){
    return mid;
  } else{
    if(target<arr[mid]){
      end = mid-1
    }
    else{
      start = mid+1
    }
  }
  }
  return -1
```

-   이진 탐색은 이 기본 템플릿 안에서 움직이면 엔간하면 다 된다고..!!
