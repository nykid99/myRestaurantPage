function createFooter(){
    const footerContainer = document.createElement("div")
    footerContainer.setAttribute("id", "footerContainer");
    const footerText = document.createElement("div");
    footerText.setAttribute("id", "footerText");
    const footerGithubIcon = document.createElement("img");
    footerGithubIcon.setAttribute("id", "footerGithubIcon");

    footerContainer.appendChild(footerText);
    footerContainer.appendChild(footerGithubIcon);

    return footerContainer;
}
export default createFooter();