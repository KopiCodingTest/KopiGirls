## 💻 Problem

문제 설명
n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

-1+1+1+1+1 = 3 <br/>
+1-1+1+1+1 = 3 <br/>
+1+1-1+1+1 = 3 <br/>
+1+1+1-1+1 = 3 <br/>
+1+1+1+1-1 = 3 <br/>
사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

<br/>

## 💡 Solution
<br/>
<h4>1. 현재 가리키고 있는 숫자가 입력한 numbers의 길이와 같으면 <br/>
sum (numbers의 각 요소들을 지지고 볶고 한 값)이 target과 같은지 확인, <br/>같으면 answer의 값을 1 증가</h4>

```
function dfs(currentNumber, sum) {
    if (currentNumber === numbers.length) {
        if (sum === target) {
            return answer ++;
        }
        return;
    }
```
<br/>
<h4>2. 문제에서 나타난 사칙연산(덧셈, 뺄셈) 구현, <br/>
현재 가리키는 숫자의 다음 값으로 넘기고 지지고 볶고 한,, sum에서 해당 숫자를 더할 지, 뺄 지</h4>

```
const plus = dfs(currentNumber + 1, sum + numbers[currentNumber]);
const minus = dfs(currentNumber + 1, sum - numbers[currentNumber]);
return plus + minus;
}
```

<br/>
<h4>그렇게 구현한 dfs 함수를 재귀용법으로 구현(첫 시작하는 부분과 합을 모두 0으로 넘겨줌)</h4>

```
dfs(0, 0);
return answer;
```