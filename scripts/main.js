const imgMenu = document.getElementById("menuOpen");
const mainMenu = document.getElementById("nav");

imgMenu.addEventListener('click', () => {
  mainMenu.classList.toggle("mainMenu-show");
})

