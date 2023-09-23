import { homeLoad } from "./home.js";
import { bodyContainerLoad, headerLoad } from "./page-load.js";
import { contactLoad } from "./contact.js";
import { menuLoad } from "./menu.js";

const documentContainer = bodyContainerLoad();

window.addEventListener('load', () =>{
    headerLoad();
    homeLoad();
})


documentContainer.addEventListener('click', (item) => {
    if(item.target.classList.contains('menu-nav')){
        documentContainer.replaceChildren();
        headerLoad();
        menuLoad();
    }
    else if(item.target.classList.contains('home-nav')){
        documentContainer.replaceChildren();
        headerLoad();
        homeLoad();
    }
    else if(item.target.classList.contains('contact-nav')){
        documentContainer.replaceChildren();
        headerLoad();
        contactLoad();
    }
})
