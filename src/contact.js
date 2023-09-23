import { mainContainerLoad, bodyContainerLoad } from "./page-load";

function contactLoad(){
    const teuchiSection = document.createElement('div');
    const ayameSection = document.createElement('div');
    const konohamaruSection = document.createElement('div');
    const bodyContainer = bodyContainerLoad();
    const mainContainer = mainContainerLoad();
    const contactLists = ['Teuchi Ichiraku', 'ayame Ichiraku', 'Konohamaru Sarutobi'];
    contactLists.forEach((contact) => {
        const h3 = document.createElement('h3');
        h3.textContent = contact;
        mainContainer.append(h3);
        if(contact == "Teuchi Ichiraku"){
            const teuchiText = document.createElement('div');
            const teuchiRole = document.createElement('p');
            teuchiRole.textContent = "Owner and Chef";
            const teuchiNumber = document.createElement('p');
            teuchiNumber.textContent  = "555-555-5554";
            const teuchiEmail = document.createElement('p');
            teuchiEmail.textContent = "teuchi@ichirakuramen.com"
            const teuchiPhoto = document.createElement('img');
            teuchiPhoto.src = "assets/img/teuchi.webp";
            teuchiText.appendChild(teuchiRole);
            teuchiText.appendChild(teuchiNumber);
            teuchiText.appendChild(teuchiEmail);
            teuchiSection.appendChild(teuchiPhoto);
            teuchiSection.appendChild(teuchiText);
            mainContainer.appendChild(teuchiSection);
        }else if(contact == "ayame Ichiraku"){
            const ayameText = document.createElement('div');
            const ayameRole = document.createElement('p');
            ayameRole.textContent = "Manager";
            const ayameNumber = document.createElement('p');
            ayameNumber.textContent  = "555-555-5555";
            const ayameEmail = document.createElement('p');
            ayameEmail.textContent = "ayame@ichirakuramen.com"
            const ayamePhoto = document.createElement('img');
            ayamePhoto.src = "assets/img/ayame.webp";
            ayameText.appendChild(ayameRole);
            ayameText.appendChild(ayameNumber);
            ayameText.appendChild(ayameEmail);
            ayameSection.appendChild(ayamePhoto);
            ayameSection.appendChild(ayameText);
            mainContainer.appendChild(ayameSection);
            

        }else{
            const konohamaruText = document.createElement('div');
            const konohamaruRole = document.createElement('p');
            konohamaruRole.textContent = "Waiter";
            const konohamaruNumber = document.createElement('p');
            konohamaruNumber.textContent  = "555-555-5556";
            const konohamaruEmail = document.createElement('p');
            konohamaruEmail.textContent = "konohamaru@ichirakuramen.com"
            const konohamaruPhoto = document.createElement('img');
            konohamaruPhoto.src = "assets/img/konohamaru.webp";
            konohamaruText.appendChild(konohamaruRole);
            konohamaruText.appendChild(konohamaruNumber);
            konohamaruText.appendChild(konohamaruEmail);
            konohamaruSection.appendChild(konohamaruPhoto);
            konohamaruSection.appendChild(konohamaruText);
            mainContainer.appendChild(konohamaruSection);
        }
    })
    teuchiSection.classList.add('container-section', 'section-items', 'contact');
    ayameSection.classList.add('container-section', 'section-items', 'contact');
    konohamaruSection.classList.add('container-section', 'section-items', 'contact');
    bodyContainer.appendChild(mainContainer);
}

export {contactLoad}