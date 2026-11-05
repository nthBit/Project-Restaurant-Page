import "../styles.css";
import {homeWrapper, restaurantImg, restaurantDiv, title, paragraph} from "./home.js";
import {menuWrapper, menuDiv, menuImg} from "./menu.js";

const content = document.querySelector("#content");

content.appendChild(homeWrapper);
homeWrapper.appendChild(restaurantDiv);
restaurantDiv.appendChild(restaurantImg);
homeWrapper.appendChild(title);
homeWrapper.appendChild(paragraph);

document.getElementById("home").addEventListener("click", function(event) {
    event.preventDefault;
    document.getElementById("content").replaceChildren();
    content.appendChild(homeWrapper);
    homeWrapper.appendChild(restaurantDiv);
    restaurantDiv.appendChild(restaurantImg);
    homeWrapper.appendChild(title);
    homeWrapper.appendChild(paragraph);
});

document.getElementById("menu").addEventListener("click", function(event) {
    event.preventDefault;
    document.getElementById("content").replaceChildren();
    content.appendChild(menuWrapper);
    menuWrapper.appendChild(menuDiv);
    menuDiv.appendChild(menuImg);
});
