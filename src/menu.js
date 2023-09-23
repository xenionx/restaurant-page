import { bodyContainerLoad, mainContainerLoad } from "./page-load";

function ramen(){
    const ramenSection = document.createElement('div');
    const hokageClassicSection = document.createElement('div');
    const mangekyouSection = document.createElement('div');
    const sakuraSection = document.createElement('div')
    const sharinganSection = document.createElement('div');
    ramenSection.classList.add('menu-section');
    const Ramens = ['Hokage Classic Ramen', 'Mangekyou Madness Ramen', 'Sakura Ramen', 'Sharingan Ramen'];
    Ramens.forEach((ramen) => {
        const h4 = document.createElement('h4');
        h4.textContent = ramen;
        ramenSection.appendChild(h4);
        if(ramen == "Hokage Classic Ramen"){
            const hokageText = document.createElement('div');
            hokageText.classList.add('menu-text')
            const hokageDesc = document.createElement('p');
            hokageDesc.textContent = `Indulge in the Hokage Classic Ramen, a delightful bowl of savory broth, chashu pork, fresh vegetables, and Naruto-inspired fish cake—a flavorful homage to the ninja world`;
            const hokagePrice = document.createElement('p');
            hokagePrice.textContent = "$15";
            const hokageImage = document.createElement('img');
            hokageImage.src = "assets/img/hokage-classic.jpg"
            hokageText.appendChild(hokageDesc);
            hokageText.appendChild(hokagePrice);
            hokageClassicSection.append(hokageText);
            hokageClassicSection.appendChild(hokageImage);
            ramenSection.appendChild(hokageClassicSection);
        }else if(ramen == "Mangekyou Madness Ramen"){
            const mangekyouText = document.createElement('div');
            mangekyouText.classList.add('menu-text')
            const mangekyouDesc = document.createElement('p');
            mangekyouDesc.textContent = `Discover the Mangekyou Madness Ramen, a tantalizing blend of rich flavors and textures, featuring a symphony of ingredients that pay tribute to the Mangekyou Sharingan in a single delectable bowl.`;
            const mangekyouPrice = document.createElement('p');
            mangekyouPrice.textContent = "$14";
            const mangekyouImage = document.createElement('img');
            mangekyouImage.src = "assets/img/mangekyou-madness.jpg"
            mangekyouText.appendChild(mangekyouDesc);
            mangekyouText.appendChild(mangekyouPrice);
            mangekyouSection.appendChild(mangekyouImage);
            mangekyouSection.appendChild(mangekyouText);
            ramenSection.appendChild(mangekyouSection);
        }else if(ramen == "Sakura Ramen"){
            const sakuraDesc = document.createElement('p');
            const sakuraText = document.createElement('div');
            sakuraText.classList.add('menu-text')
            sakuraDesc.textContent = `Sakura Ramen is a delicate and delightful bowl that captures the essence of cherry blossoms, offering a harmonious fusion of flavors and aesthetics in each spoonful.`;
            const sakuraPrice = document.createElement('p');
            sakuraPrice.textContent = "$13";
            const sakuraImage = document.createElement('img');
            sakuraImage.src = "assets/img/sakura-ramen.jpg"
            sakuraText.appendChild(sakuraDesc);
            sakuraText.appendChild(sakuraPrice);
            sakuraSection.appendChild(sakuraText);
            sakuraSection.appendChild(sakuraImage);
            ramenSection.appendChild(sakuraSection);
        }else if(ramen == "Sharingan Ramen"){
            const sharinganText = document.createElement('div');
            const sharinganDesc = document.createElement('p');
            sharinganText.classList.add('menu-text');
            sharinganDesc.textContent = `
            Sharingan Ramen is an eye-catching masterpiece, blending bold, fiery flavors and captivating presentation that mirror the power and allure of the Sharingan.`;
            const sharinganPrice = document.createElement('p');
            sharinganPrice.textContent = "$18";
            const sharinganImage = document.createElement('img');
            sharinganImage.src = "assets/img/sharingan-ramen.jpg"
            sharinganText.appendChild(sharinganDesc);
            sharinganText.appendChild(sharinganPrice);
            sharinganSection.appendChild(sharinganImage);
            sharinganSection.appendChild(sharinganText);
            ramenSection.appendChild(sharinganSection);
        }
    })
    hokageClassicSection.classList.add('container-section', 'section-items');
    mangekyouSection.classList.add('container-section', 'section-items');
    sakuraSection.classList.add('container-section', 'section-items');
    sharinganSection.classList.add('container-section', 'section-items');
    return ramenSection;
}

function sides(){
    const sidesSection = document.createElement('div');
    const tempuraSection = document.createElement('div');
    const dumplingSection = document.createElement('div');
    const sides = ['Tempura no Jutsu', 'Shuriken Dumplings']
    sidesSection.classList.add('menu-section'); 
    sides.forEach((side) => {
        const h4 = document.createElement('h4');
        h4.textContent = side;
        sidesSection.appendChild(h4);
        if(side == "Tempura no Jutsu"){
            const tempuraText = document.createElement('div');
            const tempuraDesc = document.createElement('p');
            tempuraText.classList.add('menu-text');
            tempuraDesc.textContent = `Tempura no Jutsu" is a culinary transformation that conjures the irresistible magic of crispy tempura, a flavorful ninja artistry that adds a delicious twist to your ramen experience.`;
            const tempuraPrice = document.createElement('p');
            tempuraPrice.textContent = "$18";
            const tempuraImage = document.createElement('img');
            tempuraImage.src = "assets/img/tempura-jutsu.jpg"
            tempuraText.appendChild(tempuraDesc);
            tempuraText.appendChild(tempuraPrice);
            tempuraSection.appendChild(tempuraText);
            tempuraSection.appendChild(tempuraImage);
            sidesSection.appendChild(tempuraSection);
        }else{
            const dumplingText = document.createElement('div');
            const dumplingDesc = document.createElement('p');
            dumplingText.classList.add('menu-text');
            dumplingDesc.textContent = `Savor the excitement of ninja skills with our 'Shuriken Dumplings,' where each bite is a flavorful adventure inspired by the precision and sharpness of shurikens.`;
            const dumplingPrice = document.createElement('p');
            dumplingPrice.textContent = "$18";
            const dumplingImage = document.createElement('img');
            dumplingImage.src = "assets/img/ninja-star-dumplings.jpg"
            dumplingText.appendChild(dumplingDesc);
            dumplingText.appendChild(dumplingPrice);
            dumplingSection.appendChild(dumplingImage);
            dumplingSection.appendChild(dumplingText);
            sidesSection.appendChild(dumplingSection);
        }
    })

    tempuraSection.classList.add('container-section', 'section-items');
    dumplingSection.classList.add('container-section', 'section-items');
    return sidesSection;
}

function beverages(){
    const beveragesSection = document.createElement('div');
    const greenTeaSection = document.createElement('div');
    const lemonadeSection = document.createElement('div');
    const beverages = ['Konoha Green Tea', 'Lemonade Surge']
    beveragesSection.classList.add('menu-section'); 
    beverages.forEach((beverage) => {
        const h4 = document.createElement('h4');
        h4.textContent = beverage;
        beveragesSection.appendChild(h4);
        if(beverage == "Konoha Green Tea"){
            const greenTeaText = document.createElement('div');
            const greenTeaDesc = document.createElement('p');
            greenTeaText.classList.add('menu-text');
            greenTeaDesc.textContent = `A soothing brew that captures the essence of the Hidden Leaf Village, offering a refreshing and rejuvenating taste of nature's tranquility.`;
            const greenTeaPrice = document.createElement('p');
            greenTeaPrice.textContent = "$8";
            const greenTeaImage = document.createElement('img');
            greenTeaImage.src = "assets/img/konoha-green-tea.jpg"
            greenTeaText.appendChild(greenTeaDesc);
            greenTeaText.appendChild(greenTeaPrice);
            greenTeaSection.appendChild(greenTeaText);
            greenTeaSection.appendChild(greenTeaImage);
            beveragesSection.appendChild(greenTeaSection);
        }else{
            const lemonadeText = document.createElement('div');
            const lemonadeDesc = document.createElement('p');
            lemonadeText.classList.add('menu-text');
            lemonadeDesc.textContent = `A zesty delight that bursts with citrusy energy, quenching your thirst with a surge of lemony freshness that awakens your senses.`;
            const lemonadePrice = document.createElement('p');
            lemonadePrice.textContent = "$8";
            const lemonadeImage = document.createElement('img');
            lemonadeImage.src = "assets/img/lemonade-surge.jpg"
            lemonadeText.appendChild(lemonadeDesc);
            lemonadeText.appendChild(lemonadePrice);
            lemonadeSection.appendChild(lemonadeImage);
            lemonadeSection.appendChild(lemonadeText);
            beveragesSection.appendChild(lemonadeSection);

        }
    })
    greenTeaSection.classList.add('container-section', 'section-items');
    lemonadeSection.classList.add('container-section', 'section-items');
    return beveragesSection;
}

function desserts(){
    const dessertsSection = document.createElement('div');
    const chocolateSection = document.createElement('div');
    const puddingSection = document.createElement('div');
    const desserts = ['Chunin Chocolate Cake', 'Shadow Pudding']
    dessertsSection.classList.add('menu-section');
    desserts.forEach((dessert) => {
        const h4 = document.createElement('h4');
        h4.textContent = dessert;
        dessertsSection.appendChild(h4);
        if(dessert == "Chunin Chocolate Cake"){
            const chocolateText = document.createElement('div');
            const chocolateDesc = document.createElement('p');
            chocolateText.classList.add('menu-text');
            chocolateDesc.textContent = `A decadent dessert that embodies the Chunin spirit with layers of rich chocolate goodness, making it a sweet triumph for your taste buds`;
            const chocolatePrice = document.createElement('p');
            chocolatePrice.textContent = "$20";
            const chocolateImage = document.createElement('img');
            chocolateImage.src = "assets/img/chocolate-cake.jpg"
            chocolateText.appendChild(chocolateDesc);
            chocolateText.appendChild(chocolatePrice);
            chocolateSection.appendChild(chocolateImage);
            chocolateSection.appendChild(chocolateText);
            dessertsSection.appendChild(chocolateSection);
        }else{
            const puddingText = document.createElement('div');
            const puddingDesc = document.createElement('p');
            puddingText.classList.add('menu-text');
            puddingDesc.textContent = `A mysterious delight, shrouded in darkness and filled with velvety layers of indulgence that reveal a hidden world of flavors with every spoonful.`;
            const puddingPrice = document.createElement('p');
            puddingPrice.textContent = "$15";
            const puddingImage = document.createElement('img');
            puddingImage.src = "assets/img/shadow-pudding.jpg"
            puddingText.appendChild(puddingDesc);
            puddingText.appendChild(puddingPrice);
            puddingSection.appendChild(puddingImage);
            puddingSection.appendChild(puddingText);
            dessertsSection.appendChild(puddingSection);
        }
    })
    chocolateSection.classList.add('container-section', 'section-items');
    puddingSection.classList.add('container-section', 'section-items');
    return dessertsSection;
}

function menuLoad(){
    const bodyContainer = bodyContainerLoad();
    const mainContainer = mainContainerLoad();
    
    const menuHeadings = ['Ramen', 'Sides', 'Beverages', 'Desserts'];
    menuHeadings.forEach((item) => {
        const h3 = document.createElement('h3');
        h3.classList.add('menu-headings');
        h3.textContent = item;
        mainContainer.appendChild(h3);  
        if(item == "Ramen"){
            mainContainer.appendChild(ramen());
        }
        else if(item == "Sides"){
            mainContainer.appendChild(sides());
        }
        else if(item == "Beverages"){

            mainContainer.appendChild(beverages());
        }
        else{
            mainContainer.appendChild(desserts());
        }
    })
    bodyContainer.appendChild(mainContainer);

}

export { menuLoad } 

