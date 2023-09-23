import { bodyContainerLoad } from "./page-load";

function introLoad(){
    const homeIntroSection = document.createElement('div')
    const homeIntroText = document.createElement('div')
    const homeIntroImage = document.createElement('img')
    homeIntroSection.classList.add('container-section');
    homeIntroSection.classList.add('home-intro');
    homeIntroImage.src = "home-intro.jpeg"
    homeIntroText.textContent = "Experience the best ramen in town at Ichiraku Ramen! Our warm and welcoming atmosphere, combined with our exceptional customer service, will transport you straight to the heart of the Hidden Leaf Village. Indulge in delicious ramen dishes that will make you feel like you're dining alongside Naruto, Sasuke, and all your favorite ninja. At Ichiraku Ramen, we pride ourselves on serving ramen that's just as legendary as the stories of the Hokage";
    homeIntroSection.appendChild(homeIntroText);
    homeIntroSection.appendChild(homeIntroImage);
    return homeIntroSection;
}

function businessHoursLoad(){
    const homeBusinessHoursSection = document.createElement('div');
    const homeBusinessHoursList = document.createElement('ul');
    const homeBusinessHoursMonday = document.createElement('li');
    const homeBusinessHoursTuesday = document.createElement('li');
    const homeBusinessHoursWednesday = document.createElement('li');
    const homeBusinessHoursThursday = document.createElement('li');
    const homeBusinessHoursFriday = document.createElement('li');
    const homeBusinessHoursSaturday = document.createElement('li');
    const homeBusinessHoursSunday = document.createElement('li');

    homeBusinessHoursSection.classList.add('container-section');
    homeBusinessHoursSection.classList.add('business-hours');
    
    homeBusinessHoursMonday.textContent = "Monday: 11am - 8pm";
    homeBusinessHoursTuesday.textContent = "Tuesday: 11am - 8pm";
    homeBusinessHoursWednesday.textContent = "Wednesday: 11am - 8pm";
    homeBusinessHoursThursday.textContent = "Thursday: 11am - 10pm";
    homeBusinessHoursFriday.textContent = "Friday: 11am - 10pm";
    homeBusinessHoursSaturday.textContent = "Saturday: 11am - 10pm";
    homeBusinessHoursSunday.textContent = "Sunday: 11am - 8pm";

    homeBusinessHoursList.appendChild(homeBusinessHoursMonday);
    homeBusinessHoursList.appendChild(homeBusinessHoursTuesday);
    homeBusinessHoursList.appendChild(homeBusinessHoursWednesday);
    homeBusinessHoursList.appendChild(homeBusinessHoursThursday);
    homeBusinessHoursList.appendChild(homeBusinessHoursFriday);
    homeBusinessHoursList.appendChild(homeBusinessHoursSaturday);
    homeBusinessHoursList.appendChild(homeBusinessHoursSunday);
    homeBusinessHoursSection.appendChild(homeBusinessHoursList);

    return homeBusinessHoursSection;
}


function locationLoad(){
    const homeLocationSection = document.createElement('div');
    homeLocationSection.classList.add('home-location');
    homeLocationSection.classList.add('container-section');
    homeLocationSection.textContent = "123 Hidden Leaf Street, Konohagakure Village, Fire Country";
    return homeLocationSection;
}


function homeLoad(){
    const homeContainer = document.createElement('div');
    const homeContainerHeading = document.createElement('h3');
    const homeBusinessHoursHeading = document.createElement('h3');
    const homeLocationHeading = document.createElement('h3');
    homeContainer.classList.add('main-container');
    homeContainerHeading.textContent = "Welcome to Ichiraku Ramen";
    homeBusinessHoursHeading.textContent = "Business Hours";
    homeLocationHeading.textContent = "Location";
    homeContainer.appendChild(homeContainerHeading);
    homeContainer.appendChild(introLoad());
    homeContainer.appendChild(homeBusinessHoursHeading);
    homeContainer.appendChild(businessHoursLoad());
    homeContainer.appendChild(homeLocationHeading);
    homeContainer.appendChild(locationLoad());
    bodyContainerLoad().appendChild(homeContainer);
    console.log("test");
}



export { homeLoad }