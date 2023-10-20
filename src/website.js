import loadHomeDescription from "./home";
import loadContactDescription from "./contact";
import loadMenuDescription from "./menu";
function createHeader(){
    const homepageHeader = document.createElement("div")
    homepageHeader.setAttribute("id", "header");
    homepageHeader.textContent = "BugTopia";
    return homepageHeader;
}

function createNavBar(){
    //creating navbar Contents
    const navBarLinks = document.createElement("nav");
    navBarLinks.setAttribute("class", "navbar-links");

    //creating unordered list
    const unorderedList = document.createElement("ul");
    unorderedList.setAttribute("class", "navbarList");
        
    //home list item
    const homeListItem = document.createElement("li");
    const homeAnchor = document.createElement("a");
    homeAnchor.textContent = "Home";
    homeAnchor.setAttribute("class", "navAnchor-link");
    homeAnchor.setAttribute("href", "#");
    homeListItem.appendChild(homeAnchor);
    //about list item
    const menuListItem = document.createElement("li");
    const menuAnchor = document.createElement("a");
    menuAnchor.textContent = "Menu";
    menuAnchor.setAttribute("class", "navAnchor-link");
    menuAnchor.setAttribute("href", "#");
    menuListItem.appendChild(menuAnchor);
    //contact list item
    const contactListItem = document.createElement("li");
    const contactAnchor = document.createElement("a");
    contactAnchor.textContent = "Contact";
    contactAnchor.setAttribute("class", "navAnchor-link");
    contactAnchor.setAttribute("href", "#");
    contactListItem.appendChild(contactAnchor);
        
    unorderedList.appendChild(homeListItem);
    unorderedList.appendChild(menuListItem);
    unorderedList.appendChild(contactListItem);
    navBarLinks.appendChild(unorderedList);

    homeAnchor.addEventListener("click" ,(e) => {
        if(e.target.classList.contains("active")) return;
        setActiveButton(homeAnchor);
        loadHomeDescription();
    })
    menuAnchor.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveButton(menuAnchor);
        loadMenuDescription();
    })
    contactAnchor.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        console.log("anchor clicked");
        setActiveButton(contactAnchor);
        loadContactDescription();
        
    })
    return navBarLinks;
}

function createMainDescriptionContainer(){
    const mainDescriptionContainer = document.createElement("main");
    mainDescriptionContainer.setAttribute("id", "main");
    return mainDescriptionContainer;
}
function createFooter(){
    const footerContainer = document.createElement("div")
    footerContainer.setAttribute("id", "footerContainer");
    const footerText = document.createElement("div");
    footerText.textContent = "© 2023 Kenneth Cho";
    footerText.setAttribute("id", "footerText");
    const footerGithubIcon = document.createElement("img");
    footerGithubIcon.setAttribute("src", "./images/github-mark-white.png"); 
    footerGithubIcon.setAttribute("id", "footerGithubIcon");
    footerContainer.appendChild(footerGithubIcon);
    footerContainer.appendChild(footerText);




    return footerContainer;
}


function setActiveButton(button) {
    const buttons = document.querySelectorAll(".navAnchor-link");
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
    button.classList.add("active");
  }


function initializeWebsite(){
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createNavBar());
    content.appendChild(createMainDescriptionContainer());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".navAnchor-link"));   
    
    loadHomeDescription();

};
export default initializeWebsite;