function solution(nums) {
    var answer = 0;
    
    let tempArr = [];
    let max = nums.length/2;
    
    for (let item of nums) {
        if (tempArr.includes(item)) continue;
        tempArr.push(item);
    }
        
    answer = (tempArr.length>max) ? max : tempArr.length;
    
    return answer;
}