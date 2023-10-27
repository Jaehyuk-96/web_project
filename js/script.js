//네비게이션바가 흰색화면일때 검은색으로 변하게 해주는 자바스크립트
const headerEl = document.querySelector('header'); //header를 가져오고 headerEl로 선언
window.addEventListener('scroll', function () {
    //eventLister 함수 추가
    requestAnimationFrame(scrollCheck); //requestanimation내장함수에 scrollcheck 받음
});
function scrollCheck() {
    //scrollcheck 함수선언
    let browserScrollY = window.scrollY; //BrowserScrollY에 document가 수직으로 얼마나 스크롤 됐는지 픽셀단위로 반환을 같은기능을 가진 세가지로 체크
    if (browserScrollY > 0) {
        //픽셀단위가 0보다 크면
        headerEl.classList.add('active'); //CSS active 실행
    } else {
        //픽셀단위가 0보다 작으면
        headerEl.classList.remove('active'); //CSS active 해제
    }
}

// 스크롤 이동 해주는 자바스크립트
const animationMove = function (selector) {
    const targetEl = document.querySelector(selector); //selector 매개변수로 이동할 대상 노드 가져옴
    const browserScrollY = window.scrollY; //웹브라우저의 스크롤정보를 windw.scrolY로 값으로 가져옴
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY; //이동할 대상의 위치를 구함
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' }); //smooth하게 대상으로 이동
};

//data-animation-scroll, data-target을 미리 각버튼마다 html에 작성
const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']"); //about features portfolio contact 를가져와서 scrollmoveel 로 선언
for (let i = 0; i < scrollMoveEl.length; i++) {
    //scrollmoveel 4개만큼 반복
    scrollMoveEl[i].addEventListener('click', function (e) {
        //scrollmoveEl로 클릭을 받음
        //
        const target = this.dataset.target; //target에 저장
        animationMove(target); //animationmove 함수에 target 대입
    });
}
