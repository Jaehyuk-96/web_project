#### Web_Project
---
#### 프로젝트 설명
---
Html+Css+자바스크립트 책을 참고하여 포트폴리오 웹페이지를 만들어 보았습니다. 클론코딩한 내용들에 대해서는 주석을 추가했습니다.

### 기술스택
---
![image](https://github.com/Jaehyuk-96/web_project/assets/145963663/559ad2bc-be19-497c-9528-3cf32d4b80bb)<br><br>
![image](https://github.com/Jaehyuk-96/web_project/assets/145963663/8443ce9f-7b8c-4ede-ae03-f56173f890e1)<br><br>
![image](https://github.com/Jaehyuk-96/web_project/assets/145963663/84defd1f-0420-438c-9670-55cab5a534b6)<br><br>



### 주요기능
---
 <details>
    <summary>
     각각의 영역안에서 CSS를 적용하여 여러박스들을 자유자재로 배치시켜서 페이지 구현
    </summary> 
  
```html
    <!-- portfolio 컨테이너안에 항상 들어가는 제목과 div 박스 6개를 만들고 각각의 박스안에 이미지 글을 넣음 -->
    <section id="portfolio" class="portfolio">
        <div class="container">
            <div class="title">
                <h4>PORTFOLIOBACK</h4>
                <h2>PortFolio</h2>
            </div>
            <div class="portfolio-me">
                <div class="portfolio-inner">
                    <img src="https://pensive-kowalevski-fdf325.netlify.app/images/mock1.png" alt="샘플이미지">
                    <strong>Branding</strong>
                    <h3>Package Design</h3>
                </div>
                <div class="portfolio-inner">
                    <img src="https://pensive-kowalevski-fdf325.netlify.app/images/mock2.png" alt="샘플이미지">
                    <strong>Developement</strong>
                    <h3>Tablet App DEV</h3>
                </div>
                <div class="portfolio-inner">
                    <img src="https://pensive-kowalevski-fdf325.netlify.app/images/mock3.png" alt="샘플이미지">
                    <strong>Marketing</strong>
                    <h3>Coca Cola</h3>
                </div>
                <div class="portfolio-inner">
                    <img src="https://pensive-kowalevski-fdf325.netlify.app/images/mock4.png" alt="샘플이미지">
                    <strong>App</strong>
                    <h3>FaceBook Clone</h3>
                </div>
                <div class="portfolio-inner">
                    <img src="https://pensive-kowalevski-fdf325.netlify.app/images/mock5.png" alt="샘플이미지">
                    <strong>App</strong>
                    <h3>Netflix</h3>
                </div>
                <div class="portfolio-inner">
                    <img src="https://pensive-kowalevski-fdf325.netlify.app/images/mock6.png" alt="샘플이미지">
                    <strong>Web</strong>
                    <h3>FirmBee Web</h3>
                </div>
            </div>
        </div>
    </section>
```

```css
/* section의 포트폴리오에 float 초기화 */

section.portfolio::after {
  content: "";
  display: block;
  clear: both;
}

/* portfolio-inner div박스에 넓이 margin-right(간격조정) float-left(왼쪽정렬), 
배경색, 테투리색, 아래쪽 여백 지정*/
section.portfolio .portfolio-inner {
  width: 30%;
  margin-right: 5%;
  padding: 1rem 1rem 1.5rem 1rem;
  float: left;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  margin-bottom: 3rem;
}

/* portfolio- inner의 3번째 6번째 박스에 오른쪽 여백 0지정 간격조정을 위해서*/
section.portfolio .portfolio-inner:nth-child(3n) {
  margin-right: 0;
}

/* portfolio-inner에 이미지 넓이를 100%로 지정 block으로 수직배열*/
section.portfolio .portfolio-inner img {
  width: 100%;
  display: block;
}

/* portfoloio-inner의 strong 색상 간격 조정 block으로 수직배열 */
section.portfolio .portfolio-inner strong {
  color: #ff6a6a;
  margin: 0.5rem 0;
  display: block;
}
```

 </details>
 
 <details>
   <summary>
    아이콘에 애니메이션 효과 적용
   </summary>
  
```html
  <!-- main에 소개페이지를 만들고 다운로드 버튼과 마우스 아이콘을 만듬 -->
    <main id="main">
        <div class = "container">
            <h4>Welcome</h4>
            <h2>I'M A <span></span></h2>
            <p>Lorem ipsum dolor sit amet consecteutr adipisicing elit. Paraesentium dolor quas nulla unde ea officiis?</p>
            <button class="download">DOWNLOAD CV</button>
            <button class="mouse"><i class="fa-solid fa-computer-mouse"></i></button>
        </div>
    </main>
  ```

```css
/* 가져온 마우스 아이콘을 새로운 속성들로 설정 */
main button.mouse {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  position: absolute;
  bottom: 1rem;
  /*위아래로 무한으로 움직이게 애니메이션 설정 */
  left: 50%;
  transform: translateX(-50%);
  animation: upDown 1s ease-in-out infinite;
  cursor: pointer;
}

@keyframes upDown {
  0% {
    bottom: 1rem;
  }
  50% {
    bottom: 1.5rem;
  }
  100% {
    bottom: 1rem;
  }
}
```
  </details>
  
  <details>
   <summary>
    자바스크립트를 사용해서 텍스트를 움직이게하는 기능 구현
   </summary>
   
 ```html
   <!-- main에 소개페이지를 만들고 다운로드 버튼과 마우스 아이콘을 만듬 -->
    <main id="main">
        <div class = "container">
            <h4>Welcome</h4>
            <h2>I'M A <span></span></h2>
 ```

```javascript
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
```
         
  </details>
  
  <details>
   <summary>
    자바스크립트를 사용해서 네비게이션바 항목 클릭시 연결된 영역으로 부드럽게 이동하는 기능 구현
   </summary>

```html
<!-- Header에 about, features portfolio contact 버튼을 만듬 -->
    <header>
        <div class ="container">
            <h1>
                <button data-animation-scroll="true" data-target="#main">Jae</button>
            </h1>
            <nav>
                <ul>
                    <li>
                        <button data-animation-scroll="true" data-target="#about">About</button>
                    </li>
                    <li>
                        <button data-animation-scroll="true" data-target="#features">Features</button>
                    </li>
                    <li>
                        <button data-animation-scroll="true" data-target="#portfolio">Portfolio</button>
                    </li>
                    <li>
                        <button data-animation-scroll="true" data-target="#contact">Contact</button>
                    </li>
                </ul>
            </nav>
        </div>
    </header>    
```

```javascript
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
```
  </details>
  
  <details>
   <summary>
    자바스크립트를 사용해서 네비게이션바 스크롤시 특정 구간에서 색상변화 기능 구현
   </summary>
   
```html
   <!-- Header에 about, features portfolio contact 버튼을 만듬 -->
    <header>
        <div class ="container">
            <h1>
                <button data-animation-scroll="true" data-target="#main">Jae</button>
            </h1>
            <nav>
                <ul>
                    <li>
                        <button data-animation-scroll="true" data-target="#about">About</button>
                    </li>
                    <li>
                        <button data-animation-scroll="true" data-target="#features">Features</button>
                    </li>
                    <li>
                        <button data-animation-scroll="true" data-target="#portfolio">Portfolio</button>
                    </li>
                    <li>
                        <button data-animation-scroll="true" data-target="#contact">Contact</button>
                    </li>
                </ul>
            </nav>
        </div>
    </header>  
```

```javascript

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

```
  </details>
  
  <details>
   <summary>
    미디어 쿼리를 사용해서 반응형 웹 구현
   </summary>

```css
@media screen and (max-width: 1140px) {
  /* 화면 너비가 1140px 이하일 때의 메인과 섹션 영역의 너비 설정 */
  main .container {
    width: 992px;
  }
  section .container {
    width: 600px;
  }
  section .about-self .left {
    /* 너비 및 여백 조정 */
    width: 100%;
    margin-bottom: 1.5rem;
  }
  section .about-self .right {
    /* 너비 및 여백 조정 */
    width: 100%;
    padding: 0;
  }
  section.do .do-me .do-inner {
    /* 화면이 줄어들 때의 너비 및 여백 조정 (두줄로 보이도록) */
    width: 48%;
    margin-bottom: 1.5rem;
    margin-right: 0;
  }
  section.do .do-me .do-inner:nth-child(2n + 1) {
    /* 1, 3, 5,....번째 본문 사각형에 오른쪽 마진영역 여백 4% 적용 */
    margin-right: 4%;
  }
  section.portfolio .portfolio-me .portfolio-inner {
    /* 화면이 줄어들 때의 너비 및 여백 조정 (두줄로 보이도록) */
    width: 48%;
    margin-right: 0;
  }
  section.portfolio .portfolio-me .portfolio-inner:nth-child(2n + 1) {
    /* 1, 3, 5,....번째 본문 사각형에 오른쪽 마진영역 여백 4% 적용 */
    margin-right: 4%;
  }
  section.contact .contact-me .left {
    /* 화면 비율에 맞게 줄어듬  */
    width: 100%;
    margin-left: 0;
  }
  section.contact .contact-me .right {
    /* 화면 비율에 맞게 줄어듬  */
    width: 100%;
    margin-left: 0;
  }
}
@media screen and (max-width: 992px) {
  html {
    /* 다른 영역들의 rem은 root em이기에 html속성값에 영향받음. 따라서 font size를 따로 설정해주어야 함 */
    font-size: 14px;
  }
  /* 화면 너비가 992px 이하일 때의 메인 영역 너비 설정 */
  main .container {
    width: 768px;
  }
  section.portfolio .portfolio-me .portfolio-inner {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 13px;
  }
  /* 화면 너비가 768px 이하일 때의 메인 영역 너비 설정 */
  main .container {
    width: 576px;
  }
  section .container {
    width: 400px;
  }
  section.do .do-me .do-inner {
    width: 100%; /* 768px 이하일 때에는 한 줄에 박스 한 개씩 나오도록 설정 */
    margin-right: 0;
  }
}
@media screen and (max-width: 576px) {
  html {
    font-size: 12px;
  }
  /* 화면 너비가 576px 이하일 때의 메인과 섹션 영역의 너비 설정 */
  main .container {
    width: 400px;
  }
  section .container {
    width: 360px;
  }
}
@media screen and (max-width: 400px) {
  html {
    font-size: 11px;
  }
  /* 화면 너비가 400px 이하일 때의 메인과 섹션 영역의 너비 설정 */
  main .container {
    width: 320px;
  }
  section .container {
    width: 320px;
  }
  main h4 {
    font-size: 1.5rem;
  }
  section .table h2 {
    font-size: 3rem;
  }
}
```
  </details>













###웹페이지 구현
---
* <h3>기본페이지</h3>
<img src="https://github.com/Jaehyuk-96/web_project/assets/145963663/7c6c25f7-43b8-491b-b515-de34dc794013" height="250px" width="400px">
<img src="https://github.com/Jaehyuk-96/web_project/assets/145963663/f64b730b-d1e6-480f-937b-2a763bbc66dd" height="250px" width="400px">
<img src="https://github.com/Jaehyuk-96/web_project/assets/145963663/ea3d08b7-0520-4263-8f6c-af0b5df82ed6" height="250px" width="400px">
<img src="https://github.com/Jaehyuk-96/web_project/assets/145963663/dd36ab2e-67b7-4594-ac7f-72c5eb8d035e" height="250px" width="400px">
<img src="https://github.com/Jaehyuk-96/web_project/assets/145963663/f273a93b-469f-4172-923b-0897a8a91ddc" height="250px" width="400px">

* <h3>반응형 웹페이지</h3>
 <img src="https://github.com/Jaehyuk-96/web_project/assets/145963663/7a577bad-6b90-4148-a7e9-9d38f7283e90" height="500px" width="250px">
 <img src="https://github.com/Jaehyuk-96/web_project/assets/145963663/1ddcbefb-c564-4d7c-88a1-4f366150df7d" height="500px" width="250px">
 <img src="https://github.com/Jaehyuk-96/web_project/assets/145963663/2386f16e-3e71-426c-8ce0-ee02e948a61e" height="500px" width="250px">
 <img src="https://github.com/Jaehyuk-96/web_project/assets/145963663/42598466-5229-4346-9131-2acb3afab447" height="500px" width="250px">
 <img src="https://github.com/Jaehyuk-96/web_project/assets/145963663/b06cd38b-93ba-4ce5-bf6c-3d0f057717c1" height="500px" width="250px">

###프로젝트후 느낀점
 ---
 프로젝트를 시작하기전에 Html을 조정할때 CSS에서 모두 세밀하게 조정하는줄 알았는데 클론코딩을 해보면서 클래스와 ID를 잘 설정하고 float을 잘초기화시키고 왼쪽정렬 , display flex,block , position 등만 잘활용하면 정말 깔끔한 페이지가 만들어진다는 것을 알았다. 아이콘들도 내가 세부 조정할수있고 미디어 쿼리와를 이용해서 반응형 웹사이트를 만드는 것도 알게 되었다. 웹페이지를 동적으로 만들때 javascript를 사용한다는데 어떻게 사용하는지 잘몰랐는데 이번 프로젝트를 통해서 배우게 되었다. 앞으로 실력을 더 쌓아서 더 나은 웹사이트를 만들어 보고 싶다.












