const player = document.getElementById("player");
let spd = 200;

window.addEventListener("keydown", (w) => {
  switch (w.key) {
    case "ArrowUp":
      player.style.top = `${player.offsetTop - spd + 150}px`;
      console.log(player);

      break;

    case "ArrowLeft":
      player.style.left = `${player.offsetLeft - spd}px`;
      console.log(player);
      break;

    case "ArrowDown":
      player.style.top = `${player.offsetTop + spd - 150}px`;
      console.log(player);
      break;

    case "ArrowRight":
      player.style.left = `${player.offsetLeft}px`;
      console.log(player);
      break;
  }
});
