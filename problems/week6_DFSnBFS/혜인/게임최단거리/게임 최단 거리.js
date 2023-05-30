function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const targetN = n - 1;
    const targetM = m - 1;
    const dy = [0, 0, 1, -1];
    const dx = [-1, 1, 0, 0];
    
    const queue = [];
    queue.push([0, 0, 1]);
    
    while(queue.length) {
        const [currentN, currentM, move] = queue.shift();
        if(currentN === targetN && currentM === targetM) return move;
        
        for(let i = 0; i < 4; i++) {
            const nowN = currentN + dy[i];
            const nowM = currentM + dx[i];
            if(nowN >= 0 && nowN < n && nowM >= 0 && nowM < m && maps[nowN][nowM] === 1) {
                queue.push([nowN, nowM, move + 1]);
                maps[nowN][nowM] = 0;
            }
        }
    }
    
    return -1;
}