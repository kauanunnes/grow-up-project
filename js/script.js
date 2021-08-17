let menuActivated = false;
let menuHamburguer = document.querySelector("div.menu-hamburguer");
let activeClass = document.createAttribute("class");
const body = document.querySelector("body");

function showMenuHamburguer() {
  activeClass.value = "menu-hamburguer active";
  menuHamburguer.setAttributeNode(activeClass);
  console.log(menuActivated);
  body.style.overflowY = "hidden";
}

function hiddenMenuHamburguer() {
  let hamburguerClass = menuHamburguer.getAttributeNode("class");
  menuHamburguer.removeAttributeNode(hamburguerClass);
  activeClass.value = "menu-hamburguer";
  menuHamburguer.setAttributeNode(activeClass);
  body.style.overflowY = "initial";
}
