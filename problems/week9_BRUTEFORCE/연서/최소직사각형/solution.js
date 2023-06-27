function solution(sizes) {
  const width = [];
  const height = [];

  for (i = 0; i < sizes.length; i++) {
    let max = Math.max(sizes[i][0], sizes[i][1]);
    let min = Math.min(sizes[i][0], sizes[i][1]);

    width.push(max);
    height.push(min);
  }

  return Math.max(...width) * Math.max(...height);
}
