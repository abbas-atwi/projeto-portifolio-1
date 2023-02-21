let menu = document.querySelector(".menuMobile");
menu.addEventListener("click", () => {
  let open = document.querySelector(".menu ul");
  if (open.style.display == "none") {
    open.style.display = "flex";
  } else {
    open.style.display = "none";
  }
});
