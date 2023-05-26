const hamburgerMenu = document.querySelector('.image-icon');
const desktopMenu = document.querySelector('.name-1');
const clickButton = document.querySelector('#close_button');
const navigationNav = document.querySelectorAll('.mobile-Menu-list > li > a');

function clickOn() {
  desktopMenu.style.display = 'flex';
}

function closeMenu() {
  desktopMenu.style.display = 'none';
}

hamburgerMenu.addEventListener('click', clickOn);
clickButton.addEventListener('click', closeMenu);
navigationNav.forEach((each) => each.addEventListener('click', closeMenu));


/////////////////////////-----Popup--------////////////////////////////////

const popup = [
  {
    name:'Tonic',
    closeImage:'images/Icon-close.svg',
    short_description:['CANOPY','Back End Dev','2015'],
    mobileImage:'images/Snapshoot Portfolio.svg',
    desktopImage:'images/Snapshoot\ Portfolio1.svg',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies:['HTML','CSS','JavaScript'],
    liveLink:'https://markyegon7.github.io/Portfolio-Setup/',
    sourceLink:'https://github.com/MarkYegon7/Portfolio-Setup',
  },

  {
    name:'Multi-Post Stories',
    closeImage:'images/Icon-close.svg',
    short_description:['CANOPY','Back End Dev','2015'],
    mobileImage:'images/Snapshoot Portfolio (1).svg',
    desktopImage:'images/Snapshoot\ Portfolio2.svg',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies:['HTML','CSS','JavaScript'],
    liveLink:'https://markyegon7.github.io/Portfolio-Setup/',
    sourceLink:'https://github.com/MarkYegon7/Portfolio-Setup',
  },

  {
    name:'Tonic',
    closeImage:'images/Icon-close.svg',
    short_description:['CANOPY','Back End Dev','2015'],
    counterImage :'images/Counter.svg',
    mobileImage:'images/Snapshoot Portfolio (2).svg',
    desktopImage:'images/Snapshoot\ Portfolio3.svg',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies:['HTML','CSS','JavaScript'],
    liveLink:'https://markyegon7.github.io/Portfolio-Setup/',
    sourceLink:'https://github.com/MarkYegon7/Portfolio-Setup',
  },

  {
    name:'Multi-Post Stories',
    closeImage:'images/Icon-close.svg',
    short_description:['CANOPY','Back End Dev','2015'],
    mobileImage:'images/Snapshoot Portfolio (3).svg',
    desktopImage:'images/Snapshoot\ Portfolio4.svg',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies:['HTML','CSS','JavaScript'],
    liveLink:'https://markyegon7.github.io/Portfolio-Setup/',
    sourceLink:'https://github.com/MarkYegon7/Portfolio-Setup',
  },
]

// const projectHtml = createProjectHtml(project);
// const projectContainer = document.getElementById('works');
// projectContainer.innerHTML = projectHtml;



// function createProjectHtml(project) {
// projectHtml = `
// <div class="works works2">
// <section class="illustration">
// </section>
// <img src="${project.mobileImage}" alt="" class="image1">
// <div class="div1 w_ctn">
//     <h2 class="header">${project.name}</h2>

//     <ul class="description">
//         <li class="canopy">${project.short_description[0]}</li>
//         <li><img src="images/Counter.svg" alt="" id="counter"></li>
//         <li class="back">${project.short_description[1]}</li>
//         <li><img src="images/Counter.svg" alt="" id="counter"></li>
//         <li class="back">${project.short_description[2]}</li>
//     </ul>

//     <p class="more-info">${project.description}</p>

//     <ul class="languages">
//     ${project.technologies.map(tech => `<li><button class="pop_lang">${tech}</button></li>`).join('')}
//     </ul>

//     <button class="see" id="see-1">See Project</button>
// </div>   
// </div>
//   `;
//   return projectHtml;
// }

// const projectButtons = document.querySelectorAll('.see');
// const popUp = document.querySelector('.pop_works');
// // const projectHtml = document.querySelector('.works')

// projectButtons.forEach((button)=>{
//   button.addEventListener('click',()=>{
//     popUp.classList.remove('hidden')
//   })
// })


function createCards() {
  // Get the card container element
  const cardContainer = document.getElementById('works');

  // Iterate over the popup array
  popup.forEach(function (cardData) {
    // Create the card element
    const card = document.createElement('div');
    card.classList.add('card'); // Add a class to style the card if needed

    // Create the card content
    const cardContent = `
      <h2>${cardData.name}</h2>
      <img src="${cardData.mobileImage}" alt="Mobile Image">
      <ul class="description">
      <p class="canopy">${cardData.short_description[0]}</p>
      <p class="back">${cardData.short_description[1]}</p>
      <p class="back">${cardData.short_description[2]}</p>
      </ul>
      <p class="more-info">${cardData.description}</p>
      <ul <ul class="languages">
        ${cardData.technologies.map((technology) => `<li class="lang">${technology}</li>`).join('')}
      </ul>
      <button class="see" id="see-1">See Project</button>
    `;

    // Set the card content
    card.innerHTML = cardContent;

    // Append the card to the container
    cardContainer.appendChild(card);
  });
}

// Call the createCards() function to generate the cards
createCards();

const projectButtons = document.querySelectorAll('.see');
const popUp = document.querySelector('.pop_works');
// const projectHtml = document.querySelector('.works')

projectButtons.forEach((button)=>{
  button.addEventListener('click',()=>{
    popUp.classList.remove('hidden')
  })
})




// let projectContainer;

// function createSection() {
//   projectContainer = document.querySelector('.pop_w_ctn');

//   popup.forEach(project => {
//     const projectHtml = createProjectHtml(project);
//     projectContainer.innerHTML += projectHtml;
//   });
// }

// const SeeProject = document.querySelectorAll('.see');
// SeeProject.forEach(button => {
//   button.addEventListener('click', Openpopup);
// });

// const CloseButton = document.querySelector('.popup_xclose');
// CloseButton.addEventListener('click', Closepopup);

// function Openpopup() {
//   if (projectContainer) {
//     projectContainer.style.display = 'block';
//   }
// }

// function Closepopup() {
//   if (projectContainer) {
//     projectContainer.style.display = 'none';
//   }
// }
// createSection();
