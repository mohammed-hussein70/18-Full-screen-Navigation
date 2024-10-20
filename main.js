function animation() {
  let openBtn = document.querySelector("button");
  let links = document.querySelector(".links");
  let closeBtn = document.querySelector(".close");
  // hide button close
  closeBtn.style.display = "none";
  // click button open
  openBtn.addEventListener("click", function () {
    links.style.width = "100%";
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
  });
  // click button close
  closeBtn.addEventListener("click", function () {
    links.style.width = "0";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
  });
}
window.onload = animation;
