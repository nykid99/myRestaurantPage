function createContactDescription(){
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");
    const contactHeaderContainer = document.createElement("div");
    contactHeaderContainer.textContent = "Contact Us!";
    contactHeaderContainer.setAttribute("id", "contactHeaderContainer");
    const contactNumberContainer = document.createElement("div");
    contactNumberContainer.setAttribute("id", "contactNumberContainer");
    contactNumberContainer.textContent = "123-456-7890";
    const contactAddressContainer = document.createElement("div");
    contactAddressContainer.textContent = "300 E. Chapman Ave. Orange, CA 92866";
    contactAddressContainer.setAttribute("id", "contactAddressContainer");
    const contactLocationContainer = document.createElement("iframe");
    contactLocationContainer.setAttribute("id", "contactLocationContainer");
    contactLocationContainer.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53042.86086595298!2d-117.85853853885499!3d33.80769854190374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd0a96b758aaf%3A0x22624f7280efd4be!2z7LqY66as7Y-s64uI7JWEIOyYpOugjOyngA!5e0!3m2!1sko!2sus!4v1697599478489!5m2!1sko!2sus");
    contactLocationContainer.setAttribute("width", "550");
    contactLocationContainer.setAttribute("height", "400");
    contactLocationContainer.setAttribute("style", "border:0:");
    contactLocationContainer.setAttribute("allowfullscreen", "");
    contactLocationContainer.setAttribute("loading", "lazy");
    contactLocationContainer.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    contactContainer.appendChild(contactHeaderContainer);
    contactContainer.appendChild(contactNumberContainer);
    contactContainer.appendChild(contactAddressContainer);
    contactContainer.appendChild(contactLocationContainer);
    
    return contactContainer;
    

}
function loadContactDescription(){
    const mainContainer = document.getElementById("main");
    mainContainer.textContent = "";
    mainContainer.appendChild(createContactDescription());
}
  
export default loadContactDescription;