let menuActivated = false;
let menuHamburguer = document.querySelector("div.menu-hamburguer");
let activeClass = document.createAttribute("class");
const body = document.querySelector("body");
let index = 0;

document.getElementById("menu").addEventListener("click", () => {
  let menuBars = document.querySelectorAll("header .links #menu .bars");
  console.log(menuBars);
  if (index === 0) {
    let menu = document.getElementById("menu");
    menuBars[1].style.opacity = index;
    menuBars[0].style.transform = "rotate(52deg) translateX(-5px)";
    menuBars[2].style.transform = "rotate(-55deg) translate(18px, -15px)";
    menu.style.marginTop = "40px";
    menu.style.zIndex = 999;
    activeClass.value = "menu-hamburguer active";
    menuHamburguer.setAttributeNode(activeClass);
    console.log(menuActivated);
    body.style.overflowY = "hidden";
    index = 1;
  } else {
    menuBars[1].style.opacity = index;
    menuBars[0].style.transform = "none";
    menuBars[2].style.transform = "none";
    menu.style.marginTop = "25px";

    let hamburguerClass = menuHamburguer.getAttributeNode("class");
    menuHamburguer.removeAttributeNode(hamburguerClass);
    activeClass.value = "menu-hamburguer";
    menuHamburguer.setAttributeNode(activeClass);
    body.style.overflowY = "initial";
    index = 0;
  }
});
