const shoppingListContainer = document.querySelector(".shopping-list__container")
const shoppingListItemContainer = document.querySelector(".shopping-list__item-container") 

document.querySelector(".shopping-list-add").addEventListener(
    "click",
    () => {
        const itemAddedArray = []
        const shoppingListInput = document.querySelector(".shopping-list__input")
        const warningTextExists = document.querySelector(".warning-text");

        if (shoppingListInput.value.trim() === "") {
            if (!warningTextExists) {
            const warningText = document.createElement("p")
            warningText.innerHTML = "Error, you have to write something!"
            warningText.classList.add("warning-text")
            shoppingListContainer.insertBefore(warningText, document.querySelector(".shopping-list__input-container"))
        }
        shoppingListInput.value = "";
    }
        else {
            if (warningTextExists) {
                warningTextExists.remove();
            }

            itemAddedArray.push(shoppingListInput.value.charAt(0).toUpperCase() + shoppingListInput.value.slice(1))
            addItemToDOM(itemAddedArray)
            countItemsLeft()
            shoppingListInput.value = "";
        }
    }
)

function addItemToDOM(itemAddedArray) {

    itemAddedArray.forEach( item => {
        const shoppingListItem = document.createElement("li")
        shoppingListItem.classList.add("shopping-list__item")
        shoppingListItem.innerHTML = item
        shoppingListItemContainer.appendChild(shoppingListItem)
      
        const shoppingListRemoveItem = document.createElement("span");
        shoppingListRemoveItem.classList.add("shopping-list__removeBtn")
        shoppingListRemoveItem.innerHTML = "\u00d7";
        shoppingListItem.appendChild(shoppingListRemoveItem);

        saveShoppingListToLocalStorage();
    })
}

shoppingListItemContainer.addEventListener("click", function(e)
{
    if (e.target.tagName === "LI")
        {
            e.target.classList.toggle("checked");
            countItemsLeft()
            saveShoppingListToLocalStorage();
        }
        else if (e.target.tagName === "SPAN")
        {
            e.target.parentElement.remove();
            countItemsLeft()
            saveShoppingListToLocalStorage();
        }
});

function countItemsLeft() {
    const itemsCounter = document.querySelector(".shopping-list__item-count")
    const items = document.querySelectorAll(".shopping-list__item");
    let uncheckedCount = 0;

    items.forEach(item => {
        if (!item.classList.contains("checked")) {
            uncheckedCount++;
        }
    });
    itemsCounter.innerHTML = uncheckedCount
}


//LOCAL STORAGE

function saveShoppingListToLocalStorage() {
    const items = Array.from(document.querySelectorAll(".shopping-list__item"))
        .map(item => ({
            text: item.textContent.replace("\u00d7", "").trim(),
            checked: item.classList.contains("checked")
        }));
    localStorage.setItem("shoppingList", JSON.stringify(items));
}

function loadShoppingListFromLocalStorage() {
    const storedItems = localStorage.getItem("shoppingList");
    if (storedItems) {
        const items = JSON.parse(storedItems);
        items.forEach(({ text, checked }) => {
            const shoppingListItem = document.createElement("li");
            shoppingListItem.classList.add("shopping-list__item");
            if (checked) shoppingListItem.classList.add("checked");
            shoppingListItem.innerHTML = text;

            const shoppingListRemoveItem = document.createElement("span");
            shoppingListRemoveItem.classList.add("shopping-list__removeBtn");
            shoppingListRemoveItem.innerHTML = "\u00d7";
            shoppingListItem.appendChild(shoppingListRemoveItem);

            shoppingListItemContainer.appendChild(shoppingListItem);
        });
    }
    countItemsLeft();
}

// Call this function on page load
loadShoppingListFromLocalStorage();