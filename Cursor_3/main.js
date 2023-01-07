document.querySelector("body").addEventListener("mousemove", eyeball);
function eyeball() {
  const box = document.querySelector(".box");
  let x = box.getBoundingClientRect().left + box.clientWidth / 2;
  let y = box.getBoundingClientRect().top + box.clientHeight / 2;

  let radian = Math.atan2(event.pageX - x, event.pageY - y);
  let rotation = radian * (180 / Math.PI) * -1 + 270;
  box.style.transform = "rotate(" + rotation + "deg)";
}
