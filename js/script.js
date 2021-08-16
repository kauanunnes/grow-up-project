let menuActivated = false;
let menuHamburguer = document.querySelector("div.menu-hamburguer");
let activeClass = document.createAttribute("class");

function showMenuHamburguer() {
  activeClass.value = "menu-hamburguer active";
  menuHamburguer.setAttributeNode(activeClass);
  console.log(menuActivated);
}

function hiddenMenuHamburguer() {
  let hamburguerClass = menuHamburguer.getAttributeNode("class");
  menuHamburguer.removeAttributeNode(hamburguerClass);
  activeClass.value = "menu-hamburguer";
  menuHamburguer.setAttributeNode(activeClass);
}
