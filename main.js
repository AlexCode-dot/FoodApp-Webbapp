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