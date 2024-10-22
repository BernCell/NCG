window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  //   console.log("YES !");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menuBtn = document.querySelector(".menu-btn");
const navElements = document.querySelector(".nav-elements");
menuBtn.addEventListener("click", (e) => {
  // const close = document.createElement('<i class="fas fa-times"></i>');
  const sideBar = document.querySelector(".side-bar");
  sideBar.classList.toggle("open");

  console.log("YES !");
});
