function solution(array, commands) {
    var answer = [];
    
    commands.forEach(command => {
        let [start, end, index] = command;
        
        let portion = array.slice(start-1,end);         // 1.
        portion.sort((a,b) => a-b);               // 2.
        answer.push(portion[index-1]);    // 3.
    }) 
    
    
    return answer;
}