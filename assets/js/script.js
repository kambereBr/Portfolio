const targetDiv = document.getElementById("web-nav");
const btn = document.getElementById("toggle");
const cancel = document.getElementById("cross");
const linkMenu = document.getElementsByClassName("menu-link");
targetDiv.style.display = "none";

function showMenuAction() {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
    document.body.style.overflowY = "hidden";
  } else {
    targetDiv.style.display = "block";
    document.body.style.overflowY = "hidden";
  }
}

function hideMenuAction() {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
    document.body.style.overflowY = "scroll";
  } else {
    targetDiv.style.display = "block";
    document.body.style.overflowY = "scroll";
  }
}

btn.addEventListener("click", showMenuAction);
cancel.addEventListener("click", hideMenuAction);

for (let i = 0; i < linkMenu.length; i += 1) {
  linkMenu[i].addEventListener("click", () => {
    targetDiv.style.display = "none";
    window.location.href = linkMenu[i].href;
    document.body.style.overflowY = "scroll";
  });
}

//main page setup
const tonicProject = {
  name: "Tonic",
  description:
    "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  image: "assets/images/Snapshoot Portfolio-1.png",
  technologies: ["html", "css", "javascript"],
  items: [
    "CANOPY",
    "assets/images/Counter.svg",
    "Back End Dev",
    "assets/images/Counter.svg",
    "2015",
  ],
  liveVersionLink: "https://kamberebr.github.io/Portfolio/",
  sourceLink: "https://github.com/kambereBr/Portfolio.git",
};
const multiPostProject = {
  name: "Multi-Post Stories",
  description:
    "Experimental content creation feature that allows users to add to an existant story over the course of a day without spamming their friends.",
  image: "assets/images/basket2015.png",
  technologies: ["html", "Ruby on rails", "css", "javascript"],
  items: [
    "FACEBOOK",
    "assets/images/Counter.svg",
    "Full Stack Dev",
    "assets/images/Counter.svg",
    "2015",
  ],
  liveVersionLink: "https://kamberebr.github.io/Portfolio/",
  sourceLink: "https://github.com/kambereBr/Portfolio.git",
};
const facebookProject = {
  name: "Facebook 360",
  description:
    "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and video on Gear VR.",
  image: "assets/images/Snapshoot Portfolio-4.png",
  technologies: ["html", "Ruby on rails", "css", "javascript"],
  items: [
    "FACEBOOK",
    "assets/images/Counter.svg",
    "Full Stack Dev",
    "assets/images/Counter.svg",
    "2015",
  ],
  liveVersionLink: "https://kamberebr.github.io/Portfolio/",
  sourceLink: "https://github.com/kambereBr/Portfolio.git",
};
const uberNavigationProject = {
  name: "Uber navigation",
  description:
    "A smart assistant to make driving more safe, efficient and fun by unlocking your most expensive computer, your car.",
  image: "assets/images/Snapshoot Portfolio.png",
  technologies: ["html", "Ruby on rails", "css", "javascript"],
  items: [
    "Uber",
    "assets/images/Counter.svg",
    "Lead Developer",
    "assets/images/Counter.svg",
    "2018",
  ],
  liveVersionLink: "https://kamberebr.github.io/Portfolio/",
  sourceLink: "https://github.com/kambereBr/Portfolio.git",
};
/* adding all project's object in the main project section */
let projectSectionData = [
  tonicProject,
  multiPostProject,
  facebookProject,
  uberNavigationProject,
];
buildProjectCard(projectSectionData);
function buildProjectCard(data) {
  const workSection = document.querySelector(".works-section");
  for (let cardData of data) {
    /* A Single row that represents the project's card */
    const rows = document.createElement("article");
    rows.className = "div-works";
    //Project's image-side
    let work1bImg = document.createElement("img");
    work1bImg.className = "article_img";
    work1bImg.src = cardData.image;
    //Project's details-side
    let work1b = document.createElement("div");
    let h2 = document.createElement("h2");
    work1b.className = "article_text";
    h2.innerHTML = cardData.name;
    h2.classList.add("product-title");
    work1b.appendChild(h2);
    let flex1Ul = document.createElement("ul");
    flex1Ul.className = "type_dev";
    //appends 5 li to Ul
    work1b.appendChild(loadPosition(cardData.items));
    let projectDescription = document.createElement("p"); //project description element
    projectDescription.classList.add("product-details");
    projectDescription.innerHTML = cardData.description;
    work1b.appendChild(projectDescription);
    let technologies = document.createElement("ul"); //tecnologies ul
    technologies.className = "product-categories";
    //build technologies li
    work1b.appendChild(
      buildTechnologyBloc(cardData.technologies, technologies)
    );
    let nav = document.createElement("nav");
    let buttonSeeProject = document.createElement("button");
    buttonSeeProject.classList.add("button-project");
    buttonSeeProject.type = "button";
    buttonSeeProject.innerHTML = "See project";
    buttonSeeProject.addEventListener("click", (event) => {
      showPopupWindow(cardData);
    });
    nav.appendChild(buttonSeeProject);
    work1b.appendChild(nav);
    rows.appendChild(work1bImg); //append image side to card
    rows.appendChild(work1b); //append details side to card
    workSection.appendChild(rows);
  }
}
/**
 * this function returns a built list (ul) of all technologies
 * @param {Array} technologyArray
 * @param {HTMLElement} technologyHtmlUl
 * @returns HTMLElement (<ul></ul>)
 */
function buildTechnologyBloc(technologyArray, technologyHtmlUl = null) {
  for (let techology of technologyArray) {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.classList.add("button-category");
    p.innerHTML = techology;
    li.appendChild(p);
    technologyHtmlUl.appendChild(li);
  }
  return technologyHtmlUl;
}
/**
 * this function returns a built list (ul) data of the specific position
 * @param {Array} data
 * @param {String} className
 * @returns HTMLElement (<ul></ul>)
 */
function loadPosition(data) {
  let flex1Ul = document.createElement("ul");
  flex1Ul.className = "type_dev";
  flex1Ul.replaceChildren();
  data.forEach((element, i) => {
    let li, node;
    li = document.createElement("li");
    if (i === 1 || i === 3) {
      node = document.createElement("img");
      node.src = element;
      li.appendChild(node);
    } else {
      li.className = i === 0 ? "li-color" : "product-info";
      li.innerHTML = element;
    }
    //for each iteration we append new item li to ul
    flex1Ul.appendChild(li);
  });
  return flex1Ul;
}
