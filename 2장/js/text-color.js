// heading 이라는 변수 선언하고 h1 태그를 저장
var heading = document.querySelector("#heading");
// h1을 클릭하면 글자 색을 red로 바꿈
heading.onclick = function () {
  heading.style.color = "red";
};
