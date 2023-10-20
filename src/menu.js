function createMenuDescription(){
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menuContainer");
    menuContainer.appendChild(createMenuItem("primal-future3", "Cricket Tomato Soup", "tomato, cricket flour croutons, butter, cream", "$13"));
    menuContainer.appendChild(createMenuItem("mealWorms", "Mealworm Medley", "mealworms, super mealworms, sunflower oil", "$12"));
    menuContainer.appendChild(createMenuItem("honeyToast", "Honeycomb Toast", "whole grain toast, honeycomb with honey", "$5"));
    menuContainer.appendChild(createMenuItem("primal-future4", "Cricket Flatbread", "cricket flour, garlic, rosemary", "$6"));
    menuContainer.appendChild(createMenuItem("primal-future2", "Cricket Buns", "cricket flour, sesame seeds", "$5"));
    menuContainer.appendChild(createMenuItem("casuMartzu", "Casu Martzu", "sheep cheese, maggots", "$20"));
    menuContainer.appendChild(createMenuItem("beondegi", "Beondegi", "silkworm pupa", "$4"));
    menuContainer.appendChild(createMenuItem("primal-future1", "Cricket Donuts", "cricket flour, granulated sugar, coconut sprinkles", "$6"));
    return menuContainer;
}

function createMenuItem(imageSRC, itemName, itemDescription, itemPrice){
    // dishName, imageURL, price, description
    const menuItemContainer = document.createElement("div");
    menuItemContainer.classList.add("menuItemContainer");
    const menuItemImage = document.createElement("img");
    menuItemImage.setAttribute("src", `./images/${imageSRC}.jpg`);
    menuItemImage.classList.add("menuItemImage");
    menuItemImage.setAttribute("id", "menuItemImage");
    const menuItemName = document.createElement("div");
    menuItemName.textContent = itemName;
    menuItemName.classList.add("menuItemName");
    const menuItemDescription = document.createElement("div");
    menuItemDescription.textContent = itemDescription;
    menuItemDescription.classList.add("menuItemDescription");
    const menuItemPrice = document.createElement("div");
    menuItemPrice.textContent = itemPrice;
    menuItemPrice.classList.add("menuItemPrice");
    menuItemContainer.appendChild(menuItemImage);
    menuItemContainer.appendChild(menuItemName);
    menuItemContainer.appendChild(menuItemDescription);
    menuItemContainer.appendChild(menuItemPrice);
    return menuItemContainer;

}

function loadMenuDescription(){
    const mainContainer = document.getElementById("main");
    mainContainer.textContent = "";
    mainContainer.appendChild(createMenuDescription());
}

export default loadMenuDescription;