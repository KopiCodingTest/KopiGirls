// 처음에 런타임에러 나왔던 풀이
// function solution(n) {
//     var answer = 0;
//     var temp = [0, 1];

//     answer = fibonacci(n, temp);
//     answer = answer % 1234567;

//     return answer;
// }

// function fibonacci(num, temp){
//     if (temp[num] === undefined){
//         temp[num] = fibonacci(num-2, temp) + fibonacci(num-1, temp);}
//     return temp[num];
// }

// 똑같이 오류 나온 풀이2 - 런타임에러
// function solution(n) {
//     var answer = 0;
//     var temp = [0, 1];

//     let fibonacci = (n) => {
//         if (temp[n] === undefined){
//         temp[n] = fibonacci(n-2, temp) + fibonacci(n-1, temp);}
//         return temp[n];
// };
//     answer = fibonacci(n) % 1234567;

//     return answer;
// }

// top-down으로 했는데도 틀린 세 번쨰 풀이 - 런타임은 안 뜸 => 힌트 찾아보니 오버플로우 때문이었다!
// function solution(n) {
//     var answer = 0;
//     var temp = [0, 1];

//     for (i = 2; i <= n; i ++){
//         temp[i] = temp[i-1] + temp[i-2]};
//     answer = temp[n] % 1234567;

//     return answer;
// }

function solution(n) {
	var answer = 0;
	var temp = [0, 1];
	// 힌트 링크에서 설명해준 나머지 연산의 특성 (a + b) % m = ((a % m) + (b % m)) % m을 활용해서 수정했다.
	for (var i = 2; i <= n; i++) {
		// temp에 1234567로 나눈 나머지를 저장한다.
		temp[i] = ((temp[i - 1] % 1234567) + (temp[i - 2] % 1234567)) % 1234567;
	}
	answer = temp[n];

	return answer;
}
