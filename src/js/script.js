
/* ハンバーガーメニューの操作 */
document.addEventListener("DOMContentLoaded", function () {
  const ham = document.querySelector(".ham");
  const nav = document.querySelector(".nav");

  ham.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    ham.classList.toggle("ham-active");
  });
});
