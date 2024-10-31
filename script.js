function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = new Typed('.auto-type', {
  strings : ["Frontend Developer"],
  typeSpeed : 150,
  backSpeed : 150,
  loop : true
})