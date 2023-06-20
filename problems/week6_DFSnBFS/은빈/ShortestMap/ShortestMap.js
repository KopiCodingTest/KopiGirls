
function solution(maps) {
    // 최단거리
    let answer = 1;
    // 방문여부
    let visited = maps;
    // 큐
    let queue = [];
    // 상하좌우
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    // 지도의 크기
    const n = maps.length;
    const m = maps[0].length;
    
    // 시작점
    queue.push([0, 0]);
    // 시작점 방문처리
    visited[0][0] = 0;
    
    while (queue.length > 0) {
        // 큐의 사이즈만큼 반복
        let size = queue.length;
        
        for (let i = 0; i < size; i++) {
            // 큐에서 꺼내옴
            let [x, y] = queue.shift();
            
            // 상하좌우 탐색
            for(let j = 0; j < 4; j++) {
                let nx = x + dx[j];
                let ny = y + dy[j];
                
                // 지도의 범위를 벗어나지 않고, 방문하지 않았다면
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
                    // 도착점이라면
                    if (nx == n - 1 && ny == m - 1) {
                        // 최단거리 반환
                        return ++answer;
                    }
                    // 큐에 추가
                    queue.push([nx, ny]);
                    // 방문처리
                    visited[nx][ny] = 0;
                }
            }
        }
        // 최단거리 증가
        answer++;
    }
    // 도착점에 도달하지 못했다면
    return -1;
}