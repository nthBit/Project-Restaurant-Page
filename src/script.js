import foodImg from "../images/food.jpeg";

const content = document.querySelector("#content");

const restaurantDiv = document.createElement("div");
restaurantDiv.id = "img-container";

const restaurantImg = document.createElement("img");
restaurantImg.src = foodImg;

const title = document.createElement("h1");
title.textContent = "Tauren Tables";

const paragraph = document.createElement("p");
paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export {content, restaurantImg, restaurantDiv, title, paragraph};
