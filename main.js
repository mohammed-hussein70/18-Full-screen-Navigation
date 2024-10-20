function animation() {
  let openBtn = document.querySelector("button");
  let links = document.querySelector(".links");
  let closeBtn = document.querySelector(".close");
  // click button open
  openBtn.addEventListener("click", function () {
    links.style.width = "100%";
    closeBtn.style.display = "block";
  });
  // click button close
  closeBtn.addEventListener("click", function () {
    links.style.width = "0";
    openBtn.style.display = "block";
  });
}
window.onload = animation;
