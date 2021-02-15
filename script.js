const menubar = document.querySelector(".menubar"),
  linksDiv = document.querySelector(".links");

menubar.addEventListener("click", () => {
  linksDiv.classList.toggle("show-navbar");
});
