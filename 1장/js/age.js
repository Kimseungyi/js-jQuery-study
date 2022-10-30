function calc() {
  var currentYear = 2022;
  var birthYear = prompt("나이를 입력해주세요", "YYYY");
  var age = 0;
  age = currentYear - birthYear + 1;
  document.querySelector("#result").innerHTML =
    "현재 나이는 <b>" + age + "</b>세 입니다.";
}
