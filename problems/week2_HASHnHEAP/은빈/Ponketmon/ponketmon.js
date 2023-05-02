//[week2] 폰켓몬 

solution = (nums) => {
    // 중복 비교를 위한 배열 생성
    var filteredNums = [];
    // 비교를 위해 우선 첫번째 요소 넣어주기
    filteredNums.push(nums[0]);
    // 반복문 돌려서 중복되지 않는 요소(폰켓몬)만 넣어주기
    for(i=0; i<nums.length; i++){
        if(!filteredNums.includes(nums[i])) {
            filteredNums.push(nums[i]);
        }
    }
    // 조건 중 N/2 마리를 선택할 수 있기 때문에
    if(filteredNums.length > nums.length/2) {
    // 선택할 수 있는 폰켓몬의 최대 종류가 n/2보다 많을 때는 
    // n/2를 최대로 return
        return nums.length/2;
    }
    // 아닐 때는 계산한 값을 return
    return filteredNums.length;
}