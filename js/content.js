const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");
let number = 0;
// 버튼의 개수만큼 반복, 해당 요소 이벤트 등록

for(let i=0; i<btns.length; i++){
    // 각 버튼 클릭
    btns[i].addEventListener("click", (event) => {
        // on 클래스 추가 및 제거 로직
        btns[number].classList.toggle("on");
        boxs[number].classList.toggle("on");

        number = event.currentTarget.id.split("-")[1] - 1;

        btns[number].classList.toggle("on");
        boxs[number].classList.toggle("on");

    });
}
