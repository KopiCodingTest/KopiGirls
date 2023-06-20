/*
    - 알파벳 인덱스 처리 : (인덱스만큼 상하로 이동해야함)
        '글자'-'A' 를 했을 때 
        0~13 : '글자'-'A'가 인덱스 
        14~25 : 'A'-'글자'가 인덱스 

    - 앞에서부터 차례로 비교 : name.length 번 
    - 앞에서 가다가 A 뭉텅이 만나면 다시 돌아가는 법 : 
        (A뭉텅이 이전 글자 위치) * 2 + (name.length - (A뭉텅이 다음 글자의 위치))
    - 뒤로 가다가 A뭉텅이 만나면 다시 돌아와 앞으로 가는 법 : 
        (name.length - (A뭉텅이 다음 글자의 위치)) * 2 + (A뭉텅이 이전 글자 위치)
*/
function solution(name) {
    let move = 0;
    let leftRight = name.length - 1;

    for (alpha of name) {
        let i = name.indexOf(alpha);
        // 인덱스 찾기 - 상하 이동 횟수 
        move += (alpha - 'A' <= 13)? alpha - 'A' : 'A' - alpha;
        // 좌우 이동 횟수 
        while (alpha === 'A' && name.indexOf(alpha) < name.length) {
            i++;
        }

        leftRight = Math.min(
            name.length - 1,
            name.indexOf(alpha) * 2 + name.length - i,
            2 * (name.length - i) + name.indexOf(alpha)
        );
    }

    return move + leftRight;
}