// player
const pikachu = document.getElementById("pikachu");
console.log(pikachu);

// 30px씩 이동시키기 위해 선언
const distanceUnit = 30;
/*

1. getElementById
2. getElementsByClassName
3. querySelector
4. querySelectorAll

문자열에 .찍으면 객체처럼 사용할 수 있다

*/
// 키를 누르면
document.addEventListener("keydown", (e) => {

    // 상수 key에 지금 누르는 키 값을 저장하고
  const key = e.code;

    // 만약 Arrow가 포함된 키를 눌렀다면
  if (key.includes("Arrow")) {

    // 함수를 사용하기위해 Arrow를 자르고 소문자 up, down, left, right로 저장
    const direction = key.replace("Arrow", "").toLowerCase(); // Arrow를 자르고 소문자로 변환

    // 그리고 move(up, down, left, right) 실행
    move(direction);

    // 만약 Space를 눌렀다면
  } else if (key === "Space") {

    // jump() 함수 실행
    jump();
  }
});

// direction : 'up', 'down', 'left', 'right' 방향키 함수
function move(direction) {
  const currentTop = Number(pikachu.style.top.replace("px", ""));
  const currentLeft = Number(pikachu.style.left.replace("px", ""));

  if (direction === "up" && currentTop > 0) {
    pikachu.style.top = currentTop - distanceUnit + "px";
  } else if (direction === "down" && currentTop < 240) {
    pikachu.style.top = currentTop + distanceUnit + "px";
  } else if (direction === "left" && currentLeft > 0) {
    pikachu.style.left = currentLeft - distanceUnit + "px";
    pikachu.style.transform = "rotateY(180deg)";
  } else if (direction === "right" && currentLeft < 270) {
    "abc".replace("c", "D"); // => abD

    pikachu.style.left = currentLeft + distanceUnit + "px";
    pikachu.style.transform = "rotateY(0deg)";
  }
}

function jump() {
  const currentTop = Number(pikachu.style.top.replace("px", ""));

  if (currentTop === 0) {
    return;
  }

  pikachu.style.top = currentTop - 15 + "px";
  setTimeout(() => {
    pikachu.style.top = currentTop + "px";
  }, 200);
}
