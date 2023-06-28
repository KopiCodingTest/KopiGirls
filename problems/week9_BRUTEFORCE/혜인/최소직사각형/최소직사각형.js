function solution(sizes) {
  const w = [];
  const h = [];
  for (i = 0; i < sizes.length; i++) {
    const max = Math.max(sizes[i][0], sizes[i][1]);
    const min = Math.min(sizes[i][0], sizes[i][1]);
    w.push(max);
    h.push(min);
  }
  const width = Math.max(...w);
  const height = Math.max(...h);
  return width * height;
}
