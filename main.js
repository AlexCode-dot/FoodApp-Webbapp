const yourFoodBtn = document.querySelector(".header__menu-item--first")
const yourFood = document.querySelector(".your-food")
const info = document.querySelector(".info")

yourFoodBtn.addEventListener(
    "click",
    () => {
        yourFood.classList.add("display")
        info.classList.remove("display")
        shoppingList.classList.remove("display")

        yourFoodBtn.classList.add("active-btn")
        shoppingListBtn.classList.remove("active-btn")
    }
)

const shoppingListBtn = document.querySelector(".header__menu-item--second")
const shoppingList = document.querySelector(".shopping-list")

shoppingListBtn.addEventListener(
    "click",
    () => {
        shoppingList.classList.add("display")
        info.classList.remove("display")
        yourFood.classList.remove("display")

        shoppingListBtn.classList.add("active-btn")
        yourFoodBtn.classList.remove("active-btn")
    }
)

document.querySelector(".header__logo-title").addEventListener(
    "click",
    () => {
        info.classList.add("display")
        yourFood.classList.remove("display")
        shoppingList.classList.remove("display")

        shoppingListBtn.classList.remove("active-btn")
        yourFoodBtn.classList.remove("active-btn")
    }
)




const button = document.querySelector('.add-food__btn');
const container = document.querySelector('.add-food__btn__container');

window.addEventListener('scroll', () => {
  const containerRect = container.getBoundingClientRect();
  const isContainerVisible =
    containerRect.bottom >= window.innerHeight && containerRect.top <= window.innerHeight;

  if (!isContainerVisible) {
    // Fix the button to the viewport bottom
    button.classList.add('add-food__btn--fixed');
  } else {
    // Reset button to the container position
    button.classList.remove('add-food__btn--fixed');
  }
});

const inputs = document.querySelectorAll('.input');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        document.body.style.zoom = '1'; // Adjust zoom level to prevent auto zoom
    });

    input.addEventListener('blur', () => {
        document.body.style.zoom = ''; // Reset zoom level
    });
});



//CLEAR LOCAL STORAGE

function clearLocalStorage() {
    localStorage.removeItem("allFoodArray");

    allFoodArray.length = 0;

    const yourFoodContainer = document.querySelector(".your-food__container");
    while (yourFoodContainer.firstChild) {
        yourFoodContainer.removeChild(yourFoodContainer.firstChild);
    }

    console.log("Local storage and in-memory data cleared.");
}
