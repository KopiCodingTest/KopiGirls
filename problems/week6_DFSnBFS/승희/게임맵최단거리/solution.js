function solution(maps) {
    let answer = 1;
    let visited = maps;             // 방문 여부를 기록하는 배열도 maps 크기와 동일하게 만들기 
    let queue = [];                 // BFS를 위한 큐 
    const dx = [-1, 1, 0, 0];       //이동 가능 경로 탐색 후보 중 x좌표의 이동 (왼쪽, 오른쪽)
    const dy = [0, 0, -1, 1];       //이동 가능 경로 탐색 후보 중 y좌표의 이동 (위쪽, 아래쪽)
    const n = maps.length;          // maps 배열의 행 수
    const m = maps[0].length;       // maps 배열의 열 수 
    
    queue.push([0, 0]);             // 현재 좌표 큐에 추가 
    visited[0][0] = 0;              // 현재 좌표 표시 ! (중복 방문하지 않도록)
    
    while(queue.length > 0) {       // 큐에 좌표가 남아있는 한 while 내부문 반복 
        let size = queue.length;    
        
        for(let i = 0; i < size; i++) { // 큐에 담겨있는 좌표를 순회하면서    
            let [x, y] = queue.shift(); // 맨 앞 좌표를 [x,y]로 꺼내기 
            
            for(let j = 0; j < 4; j++) { // 상하좌우 순회 
                let nx = x + dx[j];      // x좌표 이동
                let ny = y + dy[j];      // y좌표 이동 
                
                // maps 사이즈 내부에서만 이동할 수 있도록 & 방문 안한 곳으로 
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
                    if(nx == n - 1 && ny == m - 1) {    // 적팀 진영에 도착하면 
                        return ++answer;                // 지나간 칸 수 return 
                    }
                    queue.push([nx, ny]);               // 이동한 현재 좌표 새로 큐에 삽입
                    visited[nx][ny] = 0;                // visited 배열에도 방문한 표시 
                }
            }
        }
        answer++;
    }
    
    return -1;          // 최종 진영에 도달하지 못했다면 -1 리턴 
}       