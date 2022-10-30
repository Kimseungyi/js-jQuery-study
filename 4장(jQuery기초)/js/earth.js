$(document).ready(function(){
  //지구이미지 웹요소(노드)를 찾아서 저장
  var $earth = $('#earth');
  //버튼에 이벤트 등록.(4초안에 left값 480px으로 설정하는 것이 곧 마치 움직이는 애니메이션 형태가 된다.)
  //버튼을 클릭하면 콜백함수가 실행된다.
  $('#btn').click(function(){
    $earth.animate({
      left : '480px'
    }, 4000);
  });
});