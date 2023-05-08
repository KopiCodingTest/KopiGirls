# Review (+Deque)

![Stack: LIFO (Last In First Out)](https://scaler.com/topics/images/stack-in-c.webp)

Stack: LIFO (Last In First Out)

![Queue : FIFO (First In First Out)](https://scaler.com/topics/images/queue-in-javascript.webp)

Queue : FIFO (First In First Out)

### Deque (덱)

> `Deque` = Doubled-Ended **Queue!**

![image](https://user-images.githubusercontent.com/77691829/236864409-7b08f843-d06a-4e61-bbed-e8753d6141b3.png)

- 스택과 큐의 성질을 모두 가지고 있다. (스택과 큐의 연산이 모두 가능하다)
- **앞(Front)과 뒤(Rear), 양쪽 모두**에서 삽입과 삭제가 가능한 자료구조. 두 개의 포인터를 사용한다.

  - Deque의 연산 - **addFront(x)** : 요소 x를 덱의 맨 앞에 추가 - **addRear(x)** : 요소 x를 덱의 맨 뒤에 추가 - **deleteFront()** : 큐의 맨 앞의 요소를 삭제하고 반환 - **deleteRear()** : 큐의 맨 뒤의 요소를 삭제하고 반환 - **getFront()** : 큐의 맨 앞의 요소를 삭제하지 않고 반환 - **getRear()** : 큐의 맨 뒤의 요소를 삭제하지 않고 반환 - isEmpty() : 큐가 비어있으면 true 아니면 false 반환 - isFull() : 큐가 가득 차 있으면 true 아니면 false 반환 - size() : 큐 내의 모든 요소 개수를 반환 - display() : 큐 내의 모든 요소 출력

    <br/>

- Deque의 구현 (Javascript)
  출처 : [https://hokeydokey.tistory.com/45](https://hokeydokey.tistory.com/45)

  ```jsx
  class DeckType {
    constructor(size) {
      this.maxQueueSize = size;
      this.array = [];
      this.front = 0;
      this.rear = 0;
    }

    isEmpty() {
      return this.front == this.rear;
    }

    isFull() {
      return (this.rear + 1) % this.maxQueueSize == this.front;
    }

    addFront(item) {
      if (this.isFull()) {
        console.log(new Error("큐가 포화상태입니다."));
      } else {
        this.array[this.front] = item;
        this.front = (this.front - 1 + this.maxQueueSize) % this.maxQueueSize;
      }
    }

    deleteFront() {
      if (this.isEmpyt) {
        console.log(new Error("큐가 비었습니다."));
      } else {
        const prev = this.front;
        this.front = (this.front + 1) % this.maxQueueSize;
        return this.array[prev];
      }
    }

    addRear(item) {
      if (this.isFull()) {
        console.log(new Error("큐가 포화상태입니다."));
      } else {
        this.rear = (this.rear + 1) % this.maxQueueSize;
        this.array[this.rear] = item;
      }
    }

    deleteRear() {
      if (this.isEmpyt()) {
        console.log(new Error("큐가 비었습니다."));
      } else {
        const prev = this.rear;
        this.rear = (this.rear - 1 + this.maxQueueSize) % this.maxQueueSize;
        return this.array[prev];
      }
    }

    print() {
      if (this.isEmpty()) {
        console.log(new Error("큐가 비었습니다."));
      }
      let string = "";
      let i = this.front;
      do {
        i = (i + 1) % this.maxQueueSize;
        string += this.array[i] + "|";
        if (i == this.rear) {
          console.log(string);
          break;
        }
      } while (i != this.rear);
    }
  }

  const deck = new DeckType(10);

  deck.addRear(1);
  deck.addRear(2);
  deck.addFront(3);
  deck.addFront(4);
  deck.addFront(5);
  deck.addFront(6);

  deck.print(); // 6|5|4|3|1|2|
  ```

<br/>
<hr>

# 1. Hash

### Hash (Hash Table) 구성

![image](https://user-images.githubusercontent.com/77691829/236864901-fd88adc2-ffa9-4e55-842a-d52f5015ba63.png)

- 예를 들어 우리가 (Key, Value)가 ("John Smith", "521-1234")인 데이터를 크기가 16인 해시 테이블에 저장한다고 하자. 그러면 먼저 index = hash_function("John Smith") % 16 연산을 통해 index 값을 계산한다. 그리고 array[index] = "521-1234" 로 전화번호를 저장하게 된다

<br/>

1. `**Hash**`

- **key - value**로 이루어진 자료구조
- Hash table의 **인덱스**가 되는 자료구조.

1. **`Hash Function (해시 함수)`**

- **key를 고정된 길이의 hash로 변경**해주는 역할을 한다.
- 이러한 과정을 **hasing**이라고 한다.
- 다시 말해, Hash Function은 key로 해시를 만들어내는 함수이다. key를 해시함수라는 함수에 Input으로 넣어 Output으로 나오는 것이 Hash이고, Hash가 저장 위치가 된다.
- 입력을 key로 받고, 0부터 [배열의 크기]-1 사이의 값을 출력한다.

1. `**Hash Table**`

- Hash Function에 의해 매핑 된 key 값의 결과 값인 **해시를 배열의 인덱스로 사용하여 key 값을 저장하는 테이블 형태의 자료구조**이다.
- 기본연산으로는 **탐색(Search), 삽입(Insert), 삭제(Delete)**가 있다.

<br/>

### 장단점

**장점**

- key-value가 1:1로 매핑되어 있기 때문에 삽입, 삭제, 검색의 과정에서 모두 평균적으로 `O(1)`의 시간복잡도를 가지고 있다.
  - _O(1) : 일정한 복잡도. 입력 값의 크기와 관계 없이 즉시 출력 값을 얻어낼 수 있는 매우 적은 시간 복잡도._

**단점**

- 해시 충돌이 발생할 수 있다.
  - 체이닝, 개방 주소법과 같은 기법으로 해결해 줘야 한다.
- 순서/관계가 있는 배열에는 어울리지 않는다.
- Hash Function의 의존도가 높다. (만약 해시 함수가 복잡하다면 hash를 만들어 내는데 오래 걸린다.)

<br/>

### 해시 충돌

해시 함수를 사용할 때, 데이터가 아주 많이 있는 경우라면 충돌이 어느 정도 일어날 가능성이 높다. 또는 데이터 저장 공간이 아주 크고 해시 함수가 아주 좋은 것일지라도 여전히 충돌은 발생할 확률이 있다.

이를 해결하는 방법은 다음과 같다.

_이미지 출처 : [https://velog.io/@jangws/19.-해시-테이블Hash-Table-JS](https://velog.io/@jangws/19.-%ED%95%B4%EC%8B%9C-%ED%85%8C%EC%9D%B4%EB%B8%94Hash-Table-JS)_

**방법1. `Separte Chaining(개별 체이닝)`**
![image](https://user-images.githubusercontent.com/77691829/236865125-1b15733c-eaba-4681-b03b-f95152035cdf.png)

- 개별 체이닝은 같은 장소에 여러 데이터를 저장할 때, 충돌하는 데이터를 같은 인덱스에 중첩하여 사용할수 있는 **배열이나 연결 리스트 등과 같은 중첩 데이터 구조를 쓰는 것이다**.
- 개별 체이닝을 사용하면, 테이블의 길이보다 더 많은 데이터를 저장할 수 있다.

**방법2. `개방 주소 방법(개방형 주소 지정)`**

- **해시 충돌이 발생했을 시** **각 위치에 하나의 데이터만 저장한다는 정해진 규칙에 따라, 비어있는 다른 버킷을 정해서 그 버킷에 데이터를 보관하는 방법**
  이다. 개방 주소법은 대표적으로 3가지가 있다.
  ![image](https://user-images.githubusercontent.com/77691829/236865217-f016555d-dfe4-4633-a349-081e02826741.png) - `선형 탐색(Linear Probing)` : 해시 충돌 시 다음 버킷 또는 비어있지 않다면 몇 개 건너뛰어 데이터 삽입 - `제곱 탐색(Quadratic Probing)` : 해시 충돌 시 제곱만큼 건너뛴 버킷에 데이터 삽입 - `이중 해시(Double Hashing)` : 해시 충돌 시 해시를 한번 더 적용해서 나온 버킷에 데이터 삽입선형 탐색

### Javascript와 Hash

- JS에서 해시테이블은 대표적으로 `**Object`, `Map`, `Set`\*\*이 있다. JS에서 key-value로 이루어진 자료구조는 Object가 대표적이였지만, ES6에서 Map과 Set이 추가되었다.
- JS에서 해시테이블 구현하기
  _출처 : [https://bamtory29.tistory.com/entry/Javascript-해시테이블](https://bamtory29.tistory.com/entry/Javascript-%ED%95%B4%EC%8B%9C%ED%85%8C%EC%9D%B4%EB%B8%94)_

  ```jsx
  class HashTable {
    constructor(size) {
      this.size = size;
      this.table = [];
    }

    //해시함수
    //입력받은 키를 ASCII 코드에 100을 곱한 값을 테이블 크기로 나머지 연산해서 나온 값을 id로 씀
    hash(key) {
      let id = 0;

      for (let i = 0; i < key.length; i++) {
        id += key.charCodeAt(1) * 100;
      }
      return id % this.size;
    }

    //삽입
    //key를 해시함수에 통과시켜 나온 id값을 토대로 해시 테이블에 value를 저장
    insert(key, value) {
      const id = this.hash(key);

      this.table[id] = value;
    }

    //검색
    //해시함수에 통과시켜 나온 id를 토대로 value를 해시 테이블에서 찾아내어 반환
    search(key) {
      const id = this.hash(key);
      const value = this.table[id];

      if (value) {
        return value;
      } else {
        return console.log("검색 실패");
      }
    }
  }
  ```

<br/>
<hr>

# 2. Heap

### Heap (=Binary Heap)

_Heap : 무언가 차곡차곡 쌓아 올린 더미_

- 최댓값 혹은 최솟값을 찾아내는 연산을 하는 `Priority Queue(우선순위 Queue) 구현`에 사용되는 자료구조.
  - Priority Queue(우선순위 큐)
    - **우선 순위 값이 높은 것(혹은 낮은것)부터 처리되는 큐.**
    - 같은 우선순위인 경우, 먼저 Queue에 들어 온 element를 우선적으로 처리한다. ⇒ `FCFS(First Come First Served)`
    - Priority Queue는 Array, Linked List로도 구현이 가능하나 **Heap을 이용해 구현하는 것이 가장 효율적이다.**
      → Heap의 complexity가 `O(log n)` 으로 가장 적기 때문
    - 이용 사례 :
      - 네트워크 트래픽 제어
      - 운영 체제에서의 작업 스케쥴링
- `Complete Binary Tree(완전이진트리)` 형태의 자료구조.

  - Complete Binary Tree(완전이진트리)

        - 이진 트리에 노드를 삽입할 때 왼쪽부터 차례대로 삽입하는 트리이다.
        - Complete Binary Tree의 표현

    ![image](https://user-images.githubusercontent.com/77691829/236865428-38490020-10d2-422f-8fd0-0e1c41a34d7b.png)
    💡 Complete Binary Tree에서의 **index**

          - 부모의 index = Math.floor(자식의 index / 2)
          - 왼쪽 자식의 index = 부모 index \* 2
          - 오른쪽 자식의 index = (부모 index \* 2) + 1

- Root node가 **최대 혹은 최소 값**을 가진다.
- Array(배열)를 이용해서 힙 구조를 구현할 수 있다.

<Br/>

### Heap의 종류

1. `**Max Heap(최대 힙)**`

   ![image](https://user-images.githubusercontent.com/77691829/236865747-d70618b5-36ea-4eeb-8969-13bc95842851.png)

- 부모 key 값이 자식노드 key 값보다 큰 힙
  - Max-Heap Property : **key(parent) ≥ key(child)**
- 가장 큰 값이 루트 노드에 있음

2. `**Min Heap(최소 힙)**`

   ![image](https://user-images.githubusercontent.com/77691829/236865777-c88e7ff1-67ec-4d5a-bb70-c03b919e09f8.png)

- 부모 key 값이 자식노드 key 값보다 작은 힙
  - Min-Heap Property : **key(parent) ≤ key(child)**
- 가장 작은 값이 루트 노드에 있음

<br/>

### Heap의 연산

(Max-Heap 기준!)

_이미지 출처 : [https://velog.io/@gnwjd309/data-structure-heap](https://velog.io/@gnwjd309/data-structure-heap)_

1. **`Heapify`**

- 이진트리에서 위에서 아래로 내려가며 힙 속성을 유지하는 작업을 한다.
- max heap에서 heapify의 작업 과정은 다음과 같다.
  ![image](https://user-images.githubusercontent.com/77691829/236865983-6c1eeacc-2687-49c2-992e-0f6fed48ddae.png)
  - (1) 요소 값과 자식 노드 값을 비교한다.
  - (2) 만약 자식 노드 값이 크다면 자식 중 가장 큰 값으로 교환한다.
  - (3) 힙 속성이 유지될 때까지 1,2번 과정을 반복한다.

1. `**삽입**`

- (1) 원소를 **맨 마지막**에 넣는다.
- (2) 부모의 노드와 비교해 더 크다면 자리를 바꾼다.
- (3) 현재 노드가 부모 노드보다 작거나 가장 위에 도달하지 않을 때까지 (2)의 과정을 반복한다.

1. **`삭제`**

- **루트 노드를 삭제한다.**
  - Heap은 우선 순위 큐이므로 루트 노드 = 최댓값, 최솟값 삭제 연산이 이루어진다!
- **마지막 노드를 루트노드로 바꾼다.**
- 다시 최대 힙을 만족시키는 과정을 진행한다.
  - 왼쪽 자식노드와 오른쪽 자식노드 중 더 큰 값을 구한다.
  - 그 값과 현재 노드를 비교해서 연산을 수행한다.

<Br/>

### Heap의 구현

자바스크립트에서는 내장 라이브러리에 Heap 구조가 없기 때문에(🥹…) 직접 구현해야 한다.

_출처 : [https://after-newmoon.tistory.com/103](https://after-newmoon.tistory.com/103)_

1. **기본적으로 사용할 메서드들 (`heapify & swap`)**

   ```jsx
   function heapify(arr) {
     const length = arr.length;
     if (length <= 1) return;
     for (let i = Math.floor(length / 2); i >= 0; i--) {
       max_heapify(arr, i, length);
     }
   }

   function max_heapify(a, i, length) {
     let left = i * 2 + 1; //왼쪽 자식 노드
     let right = i * 2 + 2; // 오른쪽 자식 노드
     let parent = i;

     if (left < length && a[left] > a[parent]) {
       // 왼쪽 자식의 값이 부모 노드보다 크면 자리를 바꿔준다.
       parent = left;
     }

     if (right < length && a[right] > a[parent]) {
       // 오른쪽 자식의 값이 부모 노드보다 크면 자리를 바꿔준다.
       parent = right;
     }

     if (i != parent) {
       // 부모 노드의 값이 자식 노드 중 큰 값과 바뀌었으면 swap 함수를 통해 교환 한다.
       swap(a, i, parent);
       // heap 속성이 유지될 때 까지 heapify 작업을 반복한다.
       max_heapify(a, parent, length);
     }
   }

   function swap(a, i, j) {
     let tmp = a[i];
     a[i] = a[j];
     a[j] = tmp;
   }
   ```

2. **`삽입` 연산**

   ```jsx
   function _insert(arr, data) {
     // 삽입한 값(data)를 가장 마지막 노드에 추가한다.
     arr.push(data);
     let i = arr.length - 1;
     // 마지막 노드와 부모의 값을 비교해서
     while (i > 0) {
       const parent = Math.floor((i - 1) / 2);
       //추가한 노드의 값이 부모 노드의 값보다 크면
       if (arr[parent] > arr[i]) break;
       // 위치를 바꿔준다.
       swap(arr, i, parent);
       // 추가한 노드 값이 부모 노드의 값보다 작을 때까지 반복한다.
       i = parent;
     }
     return arr;
   }
   ```

3. **`삭제` 연산**

   ```jsx
   function _delet(arr) {
     // root 노드(0)과 최말단 노드(arr.length - 1)를 바꿔준다.
     swap(arr, 0, arr.length - 1);
     // 최말단으로 옮겨진 최댓값을 빼낸다. (pop- 맨 마지막 요소 제거 후 그 요소 반환)
     const max = arr.pop();

     // 다시 heapify를 호출하여 heap 성질을 만족하도록 재정렬한다.
     heapify(arr);

     return max;
   }
   ```

- 다른 방식의 구현 (최대 힙, 최소 힙 모두)

  ```jsx
  class Heap {
    #heap;
    #type = "min"; // 최대, 최소 구분
    constructor(type) {
      this.#heap = [];
      this.#type = type;
    }

    // 부모 정점
    parentIndex = (index) => Math.floor((index - 1) / 2);
    // 왼쪽 자식
    leftChildIndex = (index) => 2 * index + 1;
    // 오른쪽 자식
    rightChildIndex = (index) => 2 * index + 2;

    // 위치 변경
    swap = (a, b) => {
      let temp = this.#heap[a];
      this.#heap[a] = this.#heap[b];
      this.#heap[b] = temp;
    };

    // 힙구조로 만들기
    insert = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        this.#heap.push(arr[i]);
        var index = this.#heap.length - 1;
        var parent = this.parentIndex(index);

        // 최대힙 > 큰 값이 root
        if (this.#type === "max") {
          while (this.#heap[parent] < this.#heap[index]) {
            this.swap(parent, index);
            index = this.parentIndex(index);
            parent = this.parentIndex(index);
          }
        }
        // 최소힙 > 작은 값이 root 또는 기본값
        else {
          while (this.#heap[parent] > this.#heap[index]) {
            this.swap(parent, index);
            index = this.parentIndex(index);
            parent = this.parentIndex(index);
          }
        }
      }
    };

    delete = () => {
      // 가장 마지막 값을 처음으로 이동
      var item = this.#heap.shift();
      this.#heap.unshift(this.#heap.pop());

      // 다시 힙 구조로 만들기 Start
      var index = 0;
      var leftChild = this.leftChildIndex(index);
      var rightChild = this.rightChildIndex(index);

      // 최대힙 > 큰 값이 root
      if (this.#type === "max") {
        while (
          this.#heap[leftChild] > this.#heap[index] ||
          this.#heap[rightChild] > this.#heap[index]
        ) {
          var min = leftChild;
          if (this.#heap[rightChild] > this.#heap[min]) {
            min = rightChild;
          }
          this.swap(min, index);
          index = min;
          leftChild = this.leftChildIndex(min);
          rightChild = this.rightChildIndex(min);
        }
      }
      // 최소힙 > 작은 값이 root
      else {
        while (
          this.#heap[leftChild] < this.#heap[index] ||
          this.#heap[rightChild] < this.#heap[index]
        ) {
          var min = leftChild;
          if (this.#heap[rightChild] < this.#heap[min]) {
            min = rightChild;
          }
          this.swap(min, index);
          index = min;
          leftChild = this.leftChildIndex(min);
          rightChild = this.rightChildIndex(min);
        }
      }

      return item;
    };
  }

  // 힙 정렬
  const heapSort = (arr, type) => {
    var result = [];
    var heap = new Heap(type);

    heap.insert(arr);
    for (let i = 0; i < arr.length; i++) {
      result.push(heap.delete());
    }
    return result;
  };

  // 임의 배열 생성
  const makeRandomValueArr = (length) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(i);
    }

    for (let i = 0; i < arr.length; i++) {
      const randomNum = Math.floor(Math.random() * arr.length);
      [arr[i], arr[randomNum]] = [arr[randomNum], arr[i]];
    }

    return arr;
  };

  // 결과

  const minArr = makeRandomValueArr(10);
  console.log("minArr==", minArr);
  // minArr== (10) [2, 1, 8, 4, 6, 7, 3, 0, 9, 5]
  console.time("min Heap");
  const minResult = heapSort(minArr, "min");
  console.timeEnd("min Heap");
  console.log("minResult==", minResult);
  // minResult== (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const maxArr = makeRandomValueArr(10);
  console.log("maxArr==", maxArr);
  // maxArr== (10) [8, 1, 0, 5, 2, 6, 7, 9, 4, 3]
  console.time("max Heap");
  const maxResult = heapSort(maxArr, "max");
  console.timeEnd("max Heap");
  console.log("maxResult==", maxResult);
  // maxResult== (10) [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  ```

  [https://after-newmoon.tistory.com/103](https://after-newmoon.tistory.com/103)

- 참고 자료
  [https://velog.io/@jangws/19.-해시-테이블Hash-Table-JS](https://velog.io/@jangws/19.-%ED%95%B4%EC%8B%9C-%ED%85%8C%EC%9D%B4%EB%B8%94Hash-Table-JS)
  [https://velog.io/@93minki/JavaScript-해시-테이블Hash-Table](https://velog.io/@93minki/JavaScript-%ED%95%B4%EC%8B%9C-%ED%85%8C%EC%9D%B4%EB%B8%94Hash-Table)
  [https://bamtory29.tistory.com/entry/Javascript-해시테이블](https://bamtory29.tistory.com/entry/Javascript-%ED%95%B4%EC%8B%9C%ED%85%8C%EC%9D%B4%EB%B8%94)
  [https://sewonzzang.tistory.com/71](https://sewonzzang.tistory.com/71)
  [https://gmlwjd9405.github.io/2018/05/10/data-structure-heap.html](https://gmlwjd9405.github.io/2018/05/10/data-structure-heap.html)
  _[https://velog.io/@gnwjd309/data-structure-heap](https://velog.io/@gnwjd309/data-structure-heap)_
