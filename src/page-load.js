function bodyContainerLoad(){
    const bodyContainer = document.querySelector('div#content');
    return bodyContainer;
}

function mainContainerLoad(){
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    return mainContainer;
}

const headerLoad = () => {
    const header = document.createElement('div');
    header.classList.add('header');
    header.appendChild(leftHeader());
    header.appendChild(rightHeader().rightHeader);
    bodyContainerLoad().appendChild(header);
}


function leftHeader(){
    const leftHeader = document.createElement('div');
    const leftHeaderText = document.createElement('h2');
    const logo = document.createElement('img');
    leftHeader.classList.add('left-header');
    logo.src = './konoha.png'
    leftHeader.appendChild(logo);
    leftHeaderText.textContent = "Ichiraku Ramen"
    leftHeader.appendChild(leftHeaderText);

    return leftHeader;
}

function rightHeader(){
    const rightHeader = document.createElement('div');
    const rightHeaderNav = document.createElement('ul');
    const rightHeaderHome = document.createElement('li');
    const rightHeaderMenu = document.createElement('li');
    const rightHeaderContact = document.createElement('li');
    const rightHeaderHomeList = document.createElement('a');
    const rightHeaderMenuList = document.createElement('a');
    const rightHeaderContactList = document.createElement('a');
    rightHeaderHomeList.classList.add('home-nav');
    rightHeaderContactList.classList.add('contact-nav');
    rightHeaderMenuList.classList.add('menu-nav');
    rightHeader.classList.add('right-header');
    rightHeaderHomeList.textContent = "Home";
    rightHeaderMenuList.textContent = "Menu";
    rightHeaderContactList.textContent = "Contact";

    rightHeaderHome.appendChild(rightHeaderHomeList);
    rightHeaderContact.appendChild(rightHeaderContactList);
    rightHeaderMenu.appendChild(rightHeaderMenuList);
    rightHeader.appendChild(rightHeaderNav);
    rightHeaderNav.appendChild(rightHeaderHome);
    rightHeaderNav.appendChild(rightHeaderMenu);
    rightHeaderNav.appendChild(rightHeaderContact);
    return {rightHeader, rightHeaderHomeList, rightHeaderContactList, rightHeaderMenuList}
}


export { bodyContainerLoad , headerLoad, rightHeader, mainContainerLoad }



