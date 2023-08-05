function solution(n, lost, reserve) {
    // n=> 전체 학생수,
    // lost => 체육복을 도난당한 학생들의 번호가 담긴 배열,
    // reserve => 여벌의 체육복을 가지고 있는 학생들의 번호가 담긴 배열

    // 학생들이 가지고 있는 체육복 수를 모두 1로 세팅
    const clothes = Array(n).fill(1);

    // 체육복을 도난당한 학생들의 체육복 수를 0으로
    lost.map((lost) => {
        // 학생들의 번호는 1번부터 시작하므로 -1
        clothes[lost - 1] = 0;
    });

    // 여벌을 가지고 있는 학생들의 체육복 수 1 증가
    reserve.map((reserve) => {
        // 학생들의 번호는 1번부터 시작하므로 -1
        clothes[reserve - 1] += 1;
    });

    for (let i = 0; i < n; i++) {
        // 체육복이 없고, 앞 사람은 체육복 여분이 있을 때
        if (clothes[i] === 0 && clothes[i - 1] === 2) {
            // 체유복이 생겼당
            clothes[i] = 1;
            // 체육복 빌려준 앞 사람은 이제 체육복 하나~
            clothes[i - 1] = 1;
        }

        // 체육복이 없고, 뒷 사람은 체육복 여분이 있을 때
        else if (clothes[i] === 0 && clothes[i + 1] === 2) {
            // 체유복이 생겼당
            clothes[i] = 1;
            // 체육복 빌려준 뒷 사람은 이제 체육복 하나~
            clothes[i + 1] = 1;
        }
    }

    // 체육복이 한개 이상인 학생들의 수
    return clothes.filter((c) => c > 0).length;
}
