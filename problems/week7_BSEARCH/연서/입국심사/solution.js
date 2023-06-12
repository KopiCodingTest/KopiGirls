function solution(n, times) {
  let low = 1; //최소로 걸릴 시간
  let high = n * Math.max(...times); //최대로 걸릴 시간
  let answer;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let count = 0;
    times.forEach((time) => {
      count += Math.floor(mid / time); // 한 사람당 몇명 할 수 있는지
      if (count >= n) {
        answer = Math.min(mid, answer); // 최솟값을 answr로
        return;
      }
    });
    if (count >= n) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return answer;
}
