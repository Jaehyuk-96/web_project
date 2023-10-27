//main에 span에서 한글자씩 썻다가 문장완성후 지우고 다시쓰는걸 반복해주는 자바 스크립트
(function () {
    const spanEl = document.querySelector('main h2 span'); //main h2 span 가져와서 spanEl로 선언
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer']; //txtarr 작성
    let index = 0; //index 초기화
    let currentTxt = txtArr[index].split(''); //indextext를 한글자씩 쪼갠걸 currentTxt로 선언
    function writeTxt() {
        //글자 써주는 함수
        spanEl.textContent += currentTxt.shift(); //배열이 할당된 상태면 추출하고 추출한 요소를 원본 배열에서 삭제하는 식으로 하나씩 더해감
        if (currentTxt.length !== 0) {
            //배열의 길이가 0이아닌지 체크해서 모두 출력할떄까지 writetxt()반복
            setTimeout(writeTxt, Math.floor(Math.random() * 100)); //랜덤의 시간으로 writetext출력
        } else {
            //writeTxt() 함수 끝나면
            currentTxt = spanEl.textContent.split(''); //currenttxt에 txt[arr] 쪼갠걸 currenttxt로 선언
            setTimeout(deleteTxt, 3000); //deletetxt() 실행전3초동안쉼
        }
    }
    function deleteTxt() {
        currentTxt.pop(); //currentTxt에 할당된 글자를 가져와서 pop메서드로 마지막 한글자 삭제
        spanEl.textContent = currentTxt.join(''); //한글자 삭제된 요소 배열을 다시 합침
        if (currentTxt.length !== 0) {
            //배열의 길이가 0 이아닐떄까지 deleteTxt() 계속 실행
            setTimeout(deleteTxt, Math.floor(Math.random() * 100)); //없어지는 속도를 랜덤으로 정함
        } else {
            //deleteTxt()가 끝나면
            index = (index + 1) % txtArr.length; //
            currentTxt = txtArr[index].split(''); //index값의 txtarray를 하나씩 쪼개서 선언
            console.log(currentTxt); //출력
            writeTxt(); //writetxt함수 출력
        }
    }
    writeTxt();
})(); //자동으로 함수실행
