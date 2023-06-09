let anchors = document.querySelectorAll('a[href^="#"]');
let button = document.querySelector(".scroll");
let header = document.querySelector(".header__block");
let modal = document.querySelector(".modal__block");

header.addEventListener("click", (ev) => {
  modal.classList.add("modal__add");
  body.style.filter = "blur(10px)";
});

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const goto = anchor.hasAttribute("href")
      ? anchor.getAttribute("href")
      : "body";
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
window.addEventListener("scroll", (el) => {
  let scrol = this.scrollY;
  if (this.scrollY >= 100) {
    button.classList.add("add");
  } else if (this.scrollY < 500) {
    button.classList.remove("add");
  }
});
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY >= 0);
});
button.addEventListener("click", () => {
  scrollTo(0, 0);
});
