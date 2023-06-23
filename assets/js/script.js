const targetDiv = document.getElementById('web-nav');
const btn = document.getElementById('toggle');
const cancel = document.getElementById('cross');
const linkMenu = document.getElementsByClassName('menu-link');
targetDiv.style.display = 'none';

function showMenuAction() {
  if (targetDiv.style.display !== 'none') {
    targetDiv.style.display = 'none';
    document.body.style.overflowY = 'hidden';
  } else {
    targetDiv.style.display = 'block';
    document.body.style.overflowY = 'hidden';
  }
}

function hideMenuAction() {
  if (targetDiv.style.display !== 'none') {
    targetDiv.style.display = 'none';
    document.body.style.overflowY = 'scroll';
  } else {
    targetDiv.style.display = 'block';
    document.body.style.overflowY = 'scroll';
  }
}

btn.addEventListener('click', showMenuAction);
cancel.addEventListener('click', hideMenuAction);

for (let i = 0; i < linkMenu.length; i += 1) {
  linkMenu[i].addEventListener('click', () => {
    targetDiv.style.display = 'none';
    window.location.href = linkMenu[i].href;
    document.body.style.overflowY = 'scroll';
  });
}

// main page setup
/* adding all project's object in the main project section */
const projectSectionData = [
  {
    name: 'Tonic',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'assets/images/Snapshoot Portfolio-1.png',
    technologies: ['html', 'css', 'javascript'],
    items: [
      'CANOPY',
      'assets/images/Counter.svg',
      'Back End Dev',
      'assets/images/Counter.svg',
      '2015',
    ],
    liveVersionLink: 'https://kamberebr.github.io/Portfolio/',
    sourceLink: 'https://github.com/kambereBr/Portfolio.git',
  },
  {
    name: 'Multi-Post Stories',
    description:
    'Experimental content creation feature that allows users to add to an existant story over the course of a day without spamming their friends.',
    image: 'assets/images/basket2015.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    items: [
      'FACEBOOK',
      'assets/images/Counter.svg',
      'Full Stack Dev',
      'assets/images/Counter.svg',
      '2015',
    ],
    liveVersionLink: 'https://kamberebr.github.io/Portfolio/',
    sourceLink: 'https://github.com/kambereBr/Portfolio.git',
  },
  {
    name: 'Facebook 360',
    description:
    "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and video on Gear VR.",
    image: 'assets/images/Snapshoot Portfolio-4.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    items: [
      'FACEBOOK',
      'assets/images/Counter.svg',
      'Full Stack Dev',
      'assets/images/Counter.svg',
      '2015',
    ],
    liveVersionLink: 'https://kamberebr.github.io/Portfolio/',
    sourceLink: 'https://github.com/kambereBr/Portfolio.git',
  },
  {
    name: 'Uber navigation',
    description:
    'A smart assistant to make driving more safe, efficient and fun by unlocking your most expensive computer, your car.',
    image: 'assets/images/Snapshoot Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    items: [
      'Uber',
      'assets/images/Counter.svg',
      'Lead Developer',
      'assets/images/Counter.svg',
      '2018',
    ],
    liveVersionLink: 'https://kamberebr.github.io/Portfolio/',
    sourceLink: 'https://github.com/kambereBr/Portfolio.git',
  },
];

/* FUNCTIONS SECTION */
function redirectToLink(link) {
  window.open(link, '_blank');
}
/**
 * this function returns a built list (ul) data of the specific position
 * @param {Array} data
 * @param {String} className
 * @returns HTMLElement (<ul></ul>)
 */
function loadPosition(data) {
  const flex1Ul = document.createElement('ul');
  flex1Ul.className = 'type_dev';
  flex1Ul.replaceChildren();
  data.forEach((element, i) => {
    const li = document.createElement('li');
    let node;
    if (i === 1 || i === 3) {
      node = document.createElement('img');
      node.src = element;
      li.appendChild(node);
    } else {
      li.className = i === 0 ? 'li-color' : 'product-info';
      li.innerHTML = element;
    }
    // for each iteration we append new item li to ul
    flex1Ul.appendChild(li);
  });
  return flex1Ul;
}

/**
 * this function returns a built list (ul) of all technologies
 * @param {Array} technologyArray
 * @param {HTMLElement} technologyHtmlUl
 * @returns HTMLElement (<ul></ul>)
 */
function buildTechnologyBloc(technologyArray, technologyHtmlUl = null) {
  technologyArray.forEach((techology) => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.classList.add('button-category');
    p.innerHTML = techology;
    li.appendChild(p);
    technologyHtmlUl.appendChild(li);
  });
  return technologyHtmlUl;
}
function showPopupWindow(data) {
  // Get the modal
  const modal = document.getElementById('myModal');
  const span = document.getElementsByClassName('close')[0];
  const popupDescription = document.querySelector('.product-details-popup');
  const productTitle = document.querySelector('.popup-title');
  const imageSource = document.querySelector('.popup-image');
  const popupTechnology = document.querySelector('.popup-technologies');
  const popupPosition = document.querySelector('.popup-position');
  const liveLinkBtn = document.querySelector('.see-live-btn');
  const githubLinkBtn = document.querySelector('.see-github-btn');
  popupTechnology.replaceChildren();
  popupPosition.replaceChildren();

  // When the user clicks the button see project, open the modal
  popupDescription.innerHTML = data.description;
  productTitle.innerHTML = data.name;
  popupPosition.appendChild(loadPosition(data.items));
  imageSource.src = data.image;
  data.technologies.forEach((element) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.classList.add('button-category');
    button.innerHTML = element;
    li.appendChild(button);
    popupTechnology.appendChild(li);
  });
  modal.style.display = 'block';

  // redirect either to github source or to live demo
  liveLinkBtn.addEventListener('click', () => {
    redirectToLink('https://kamberebr.github.io/Portfolio/');
  });
  githubLinkBtn.addEventListener('click', () => {
    redirectToLink('https://github.com/kambereBr/Portfolio.git');
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
  };
}

function buildProjectCard(data) {
  const workSection = document.querySelector('.works-section');
  data.forEach((cardData) => {
    /* A Single row that represents the project's card */
    const rows = document.createElement('article');
    rows.className = 'div-works';
    // Project's image-side
    const work1bImg = document.createElement('img');
    work1bImg.className = 'article_img';
    work1bImg.src = cardData.image;
    // Project's details-side
    const work1b = document.createElement('div');
    const h2 = document.createElement('h2');
    work1b.className = 'article_text';
    h2.innerHTML = cardData.name;
    h2.classList.add('product-title');
    work1b.appendChild(h2);
    const flex1Ul = document.createElement('ul');
    flex1Ul.className = 'type_dev';
    // appends 5 li to Ul
    work1b.appendChild(loadPosition(cardData.items));
    const projectDescription = document.createElement('p'); // project description element
    projectDescription.classList.add('product-details');
    projectDescription.innerHTML = cardData.description;
    work1b.appendChild(projectDescription);
    const technologies = document.createElement('ul'); // tecnologies ul
    technologies.className = 'product-categories';
    // build technologies li
    work1b.appendChild(
      buildTechnologyBloc(cardData.technologies, technologies),
    );
    const nav = document.createElement('nav');
    const buttonSeeProject = document.createElement('button');
    buttonSeeProject.classList.add('button-project');
    buttonSeeProject.type = 'button';
    buttonSeeProject.innerHTML = 'See project';
    buttonSeeProject.addEventListener('click', () => {
      showPopupWindow(cardData);
    });
    nav.appendChild(buttonSeeProject);
    work1b.appendChild(nav);
    rows.appendChild(work1bImg); // append image side to card
    rows.appendChild(work1b); // append details side to card
    workSection.appendChild(rows);
  });
}

/* FUNCTIONS SECTION END */

buildProjectCard(projectSectionData);
