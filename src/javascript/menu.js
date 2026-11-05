import menuPicture from "../../images/menu.jpeg";

const menuWrapper = document.createElement("div");
menuWrapper.id = "menu-wrapper";

const menuDiv = document.createElement("div");
menuDiv.id = "menu-container";

const menuImg = document.createElement("img");
menuImg.src = menuPicture;

export {menuWrapper, menuDiv, menuImg};