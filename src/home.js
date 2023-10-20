function createHomeDescription(){
    //creating the description container:
    const homeContainer = document.createElement("div");
    homeContainer.setAttribute("id", "description");
    
    //creating the main description text
    const descriptionText = document.createElement("div");
    descriptionText.setAttribute("id", "descriptionText");
    let descriptionString = "Welcome to BugTopia!" + "<br>" + "We serve sustainable bug dishes";
     descriptionText.innerHTML = descriptionString;
    
    //creating the description for open times
    const timeDescription = document.createElement("div");
    timeDescription.setAttribute("id", "timeDescription");
    timeDescription.innerHTML = "Hours of Operation: " + "<br>" + "Mon - Fri: 10am - 8pm" + "<br>" + "Sat - Sun : 10am - 11pm";
    
    homeContainer.appendChild(descriptionText);
    homeContainer.appendChild(timeDescription);
    return homeContainer
}

function loadHomeDescription(){
    const mainContainer = document.getElementById("main");
    mainContainer.textContent = "";
    mainContainer.appendChild(createHomeDescription());
}

export default loadHomeDescription;