const addFoodBtn = document.querySelector(".add-food__btn")
const yourFoodContainer = document.querySelector(".your-food")
const body = document.querySelector("body")
const allFoodArray = []

addFoodBtn.addEventListener(
    "click",
    () => {
        const existingAddFoodContainer = document.querySelector(".add-food__wrapper");

        if (!existingAddFoodContainer) {
            const addFoodWrapper = document.createElement("div")
            addFoodWrapper.classList.add("display");
            addFoodWrapper.classList.add("add-food__wrapper")
            yourFoodContainer.appendChild(addFoodWrapper)

            const addFoodContainer = document.createElement("div")
            addFoodContainer.classList.add("add-food__container")
            addFoodWrapper.appendChild(addFoodContainer)

            const addFoodTitle = document.createElement("h3")
            addFoodTitle.classList.add("add-food__title")
            addFoodTitle.innerHTML = "Choose type"
            addFoodContainer.appendChild(addFoodTitle)

            const addFoodBreakfastBtn = document.createElement("button")
            addFoodBreakfastBtn.classList.add("btn")
            addFoodBreakfastBtn.classList.add("add-food__breakfast-btn")
            addFoodBreakfastBtn.innerHTML = "Breakfast"
            addFoodContainer.appendChild(addFoodBreakfastBtn)
            addFoodBreakfastBtn.addEventListener(
                "click",
                () => {
                    addFoodContainer.style.display = "none"
                    addFoodType("Breakfast", addFoodWrapper)
                }
            )

            const addFoodLunchBtn = document.createElement("button")
            addFoodLunchBtn.classList.add("btn")
            addFoodLunchBtn.classList.add("add-food__lunch-btn")
            addFoodLunchBtn.innerHTML = "Lunch"
            addFoodContainer.appendChild(addFoodLunchBtn)
            addFoodLunchBtn.addEventListener(
                "click",
                () => {
                    addFoodContainer.style.display = "none"
                    addFoodType("Lunch", addFoodWrapper)
                }
            )

            const addFoodDinnerBtn = document.createElement("button")
            addFoodDinnerBtn.classList.add("btn")
            addFoodDinnerBtn.classList.add("add-food__dinner-btn")
            addFoodDinnerBtn.innerHTML = "Dinner"
            addFoodContainer.appendChild(addFoodDinnerBtn)
            addFoodDinnerBtn.addEventListener(
                "click",
                () => {
                    addFoodContainer.style.display = "none"
                    addFoodType("Dinner", addFoodWrapper)
                }
            )

            const addFoodSnackBtn = document.createElement("button")
            addFoodSnackBtn.classList.add("btn")
            addFoodSnackBtn.classList.add("add-food__snack-btn")
            addFoodSnackBtn.innerHTML = "Snack"
            addFoodContainer.appendChild(addFoodSnackBtn)
            addFoodSnackBtn.addEventListener(
                "click",
                () => {
                    addFoodContainer.style.display = "none"
                    addFoodType("Snack", addFoodWrapper)
                }
            )

            const addFoodClose = document.createElement("span")
            addFoodClose.classList.add("add-food__close")
            addFoodClose.innerHTML = "\u00d7";
            addFoodWrapper.insertBefore(addFoodClose, addFoodWrapper.children[0]);

            addFoodClose.addEventListener(
                "click",
                () => {
                    addFoodWrapper.classList.remove("display")
                    addFoodContainer.style.display = "flex"
                    document.querySelector(".add-food__type-container").classList.remove("display")
                    document.querySelectorAll(".add-food__ingredients-input").forEach(input => {
                        input.remove()
                    })
                }
            )

        }
        else {
            document.querySelector(".add-food__container").style.display = "flex"
            existingAddFoodContainer.classList.add("display");
        }
    }
)

function addFoodType(foodType, wrapper) {
    const existingAddFoodTypeContainer = document.querySelector(".add-food__type-container");

    if (!existingAddFoodTypeContainer) {
        const addFoodTypeContainer = document.createElement("div")
        addFoodTypeContainer.classList.add("add-food__type-container")
        addFoodTypeContainer.classList.add("display");
        wrapper.appendChild(addFoodTypeContainer)

        const addFoodTitleType = document.createElement("h3")
        addFoodTitleType.classList.add("add-food__title-type")
        if (foodType === "Breakfast") {
            addFoodTitleType.innerHTML = foodType
            addFoodTypeContainer.appendChild(addFoodTitleType)
        }
        if (foodType === "Lunch") {
            addFoodTitleType.innerHTML = foodType
            addFoodTypeContainer.appendChild(addFoodTitleType)
        }
        if (foodType === "Dinner") {
            addFoodTitleType.innerHTML = foodType
            addFoodTypeContainer.appendChild(addFoodTitleType)
        }
        if (foodType === "Snack") {
            addFoodTitleType.innerHTML = foodType
            addFoodTypeContainer.appendChild(addFoodTitleType)
        }

        const addFoodTitleLabel = document.createElement("label")
        addFoodTitleLabel.classList.add("add-food__title-label")
        addFoodTitleLabel.innerHTML = `Add ${foodType} title`
        addFoodTypeContainer.appendChild(addFoodTitleLabel)

        const addFoodTitleInput = document.createElement("input")
        addFoodTitleInput.classList.add("add-food__title-input")
        addFoodTitleInput.classList.add("input")
        addFoodTitleInput.setAttribute("placeholder", `${foodType}...`)
        addFoodTypeContainer.appendChild(addFoodTitleInput)

        const addFoodIngredientsTitle = document.createElement("label")
        addFoodIngredientsTitle.classList.add("add-food__Ingredients-label")
        addFoodIngredientsTitle.innerHTML = "Add ingredients"
        addFoodTypeContainer.appendChild(addFoodIngredientsTitle)

        const addFoodIngredientsBtn = document.createElement("button")
        addFoodIngredientsBtn.classList.add("add-food__Ingredients-btn")
        addFoodTypeContainer.appendChild(addFoodIngredientsBtn)
        addFoodIngredientsBtn.addEventListener(
            "click",
            () => {
                const addFoodIngredientsInput = document.createElement("input")
                addFoodIngredientsInput.classList.add("add-food__ingredients-input")
                addFoodIngredientsInput.classList.add("input")
                addFoodIngredientsInput.setAttribute("placeholder", "Add ingredient...")
                addFoodTypeContainer.insertBefore(addFoodIngredientsInput, addFoodIngredientsBtn);

            }
        )

        const addFoodConfirmBtn = document.createElement("button")
        addFoodConfirmBtn.classList.add("add-food__confirm-btn")
        addFoodConfirmBtn.innerHTML = "Confirm"
        addFoodTypeContainer.appendChild(addFoodConfirmBtn)
        addFoodConfirmBtn.addEventListener(
            "click",
            () => {
                const warningTextExists = document.querySelector(".warning-text");
                let foodType = document.querySelector(".add-food__title-type").innerHTML

                if (addFoodTitleInput.value.trim() === "") {
                    if (!warningTextExists) {
                        const warningText = document.createElement("p")
                        warningText.classList.add("warning-text")
                        warningText.innerHTML = "Error, your food must have a title!"
                        addFoodTypeContainer.insertBefore(warningText, addFoodTitleInput);
                    }
                    addFoodTitleInput.value = "";
                }
                else {
                    if (warningTextExists) {
                        warningTextExists.remove();
                    }
                    addFood(foodType)
                }
            }
        )
    }
    else {

        console.log(foodType)

        const addFoodTitleType = existingAddFoodTypeContainer.querySelector(".add-food__title-type");
        const addFoodTitleInput = existingAddFoodTypeContainer.querySelector(".add-food__title-input");
        const addFoodTitleLabel = existingAddFoodTypeContainer.querySelector(".add-food__title-label");
        const addFoodIngredientsInputs = existingAddFoodTypeContainer.querySelectorAll(".add-food__ingredients-input");

        addFoodTitleType.innerHTML = foodType;
        addFoodTitleInput.value = "";
        addFoodIngredientsInputs.forEach(input => input.value = "");
        addFoodTitleLabel.innerHTML = `Add ${foodType} title`
        addFoodTitleInput.setAttribute("placeholder", `${foodType}...`);
        existingAddFoodTypeContainer.classList.add("display");
    }

}

function addFood(foodType) {
    const titleInput = document.querySelector(".add-food__title-input")
    const titleInputNew = titleInput.value.charAt(0).toUpperCase() + titleInput.value.slice(1)
    const ingredientsInput = document.querySelectorAll(".add-food__ingredients-input")

    const allFood = {
        id: allFoodArray.length + 1,
        title: titleInputNew,
        ingredients: [],
        type: foodType
    };

    ingredientsInput.forEach(ingredient => {
        if (ingredient.value) {
            allFood.ingredients.push(ingredient.value.charAt(0).toUpperCase() + ingredient.value.slice(1));
        }
    });

    allFoodArray.push(allFood);

    localStorage.setItem("allFoodArray", JSON.stringify(allFoodArray));

    console.log(allFoodArray);

    titleInput.value = "";
    ingredientsInput.forEach(input => {
        input.value = ""
    });

    document.querySelector(".add-food__close").click();

    ingredientsInput.forEach(input => {
        input.remove()
    });

    addFoodToDOM(allFood)
}

function addFoodToDOM(allFood) {
    const yourFoodContainer = document.querySelector(".your-food__container")

    const food = document.createElement("div")
    food.classList.add("food")
    yourFoodContainer.appendChild(food)
    food.setAttribute("id", allFood.id)

    const foodTitle = document.createElement("h4")
    foodTitle.classList.add("food__title")
    foodTitle.innerHTML = allFood.title
    food.appendChild(foodTitle)

    food.addEventListener(
        "click",
        () => {
            showFoodInfo(allFood)
        }
    )
}

function showFoodInfo(allFood) {
    let foodInfoContainer = document.querySelector(".food-info");

    if (!foodInfoContainer) {
        foodInfoContainer = document.createElement("div");
        foodInfoContainer.classList.add("food-info", "display");
        body.appendChild(foodInfoContainer);

        const foodInfoClose = document.createElement("span");
        foodInfoClose.classList.add("food-info__close");
        foodInfoClose.innerHTML = "\u00d7";
        foodInfoContainer.appendChild(foodInfoClose);

        foodInfoClose.addEventListener("click", () => {
            foodInfoContainer.classList.remove("display");
        });
    }

    foodInfoContainer.innerHTML = "";

    const foodInfoEdit = document.createElement("span");
    foodInfoEdit.classList.add("food-info__edit");
    foodInfoEdit.innerHTML = "Edit";
    foodInfoContainer.appendChild(foodInfoEdit);
    foodInfoEdit.addEventListener(
        "click",
        () => {
            if (!foodInfoEdit.classList.contains("activated-edit")) {
    
                foodInfoEdit.classList.add("activated-edit")
                foodInfoIngredients.innerHTML = "";
                allFood.ingredients.forEach((ingredient) => {
                    const ingredientInput = document.createElement("input");
                    ingredientInput.classList.add("food-info__ingredient-input");
                    ingredientInput.value = ingredient;
                    foodInfoIngredients.appendChild(ingredientInput);

                })

                const editBtnsContainer = document.createElement("div")
                editBtnsContainer.classList.add("food-info__edit-btns-container")
                foodInfoContainer.insertBefore(editBtnsContainer, foodInfoIngredients);

                const addIngredientBtn = document.createElement("button");
                addIngredientBtn.classList.add("food-info__add-ingredient-btn");
                addIngredientBtn.innerHTML = "Add";
                editBtnsContainer.appendChild(addIngredientBtn)

                addIngredientBtn.addEventListener("click", () => {
                    const newIngredientInput = document.createElement("input");
                    newIngredientInput.classList.add("food-info__ingredient-input", "input");
                    newIngredientInput.setAttribute("placeholder", "New Ingredient...");
                    foodInfoIngredients.appendChild(newIngredientInput);
                });

                const saveIngredientsBtn = document.createElement("button");
                saveIngredientsBtn.classList.add("food-info__save-ingredients-btn");
                saveIngredientsBtn.innerHTML = "Save";
                editBtnsContainer.appendChild(saveIngredientsBtn)

                saveIngredientsBtn.addEventListener("click", () => {
                    const updatedIngredients = Array.from(
                        foodInfoIngredients.querySelectorAll(".food-info__ingredient-input")
                    ).map(input => input.value.trim()).filter(input => input !== "");

                    // Update food object and DOM
                    allFood.ingredients = updatedIngredients;
                    localStorage.setItem("allFoodArray", JSON.stringify(allFoodArray));

                    // Re-render ingredient list
                    foodInfoIngredients.innerHTML = "";
                    allFood.ingredients.forEach((ingredient) => {
                        const foodInfoIngredient = document.createElement("li");
                        foodInfoIngredient.classList.add("food-info__ingredient");
                        foodInfoIngredient.innerHTML = ingredient;
                        foodInfoIngredients.appendChild(foodInfoIngredient);
                    });

                    foodInfoEdit.classList.remove("activated-edit")
                    addIngredientBtn.remove();
                    saveIngredientsBtn.remove();
                    editBtnsContainer.remove();
                });
            }
            else {
                console.log("hej")
            }
        });

    const foodInfoClose = document.createElement("span");
    foodInfoClose.classList.add("food-info__close");
    foodInfoClose.innerHTML = "\u00d7";
    foodInfoContainer.appendChild(foodInfoClose);

    const foodInfoTitle = document.createElement("h4");
    foodInfoTitle.classList.add("food-info__title");
    foodInfoTitle.innerHTML = allFood.title;
    foodInfoContainer.appendChild(foodInfoTitle);

    const foodInfoIngredients = document.createElement("ul");
    foodInfoIngredients.classList.add("food-info__ingredients");
    foodInfoContainer.appendChild(foodInfoIngredients);

    allFood.ingredients.forEach((ingredient) => {
        const foodInfoIngredient = document.createElement("li");
        foodInfoIngredient.classList.add("food-info__ingredient");
        foodInfoIngredient.innerHTML = ingredient;
        foodInfoIngredients.appendChild(foodInfoIngredient);
    });

    const foodInfoBtnContainer = document.createElement("div");
    foodInfoBtnContainer.classList.add("food-info__btn-container");
    foodInfoContainer.appendChild(foodInfoBtnContainer);

    const foodInfoDeleteBtn = document.createElement("button");
    foodInfoDeleteBtn.classList.add("food-info__delete-btn");
    foodInfoDeleteBtn.innerHTML = "Remove Food";
    foodInfoBtnContainer.appendChild(foodInfoDeleteBtn);
    foodInfoDeleteBtn.addEventListener("click", () => {
        deleteFood(allFood);
    });

    const foodInfoAddShopping = document.createElement("button");
    foodInfoAddShopping.classList.add("food-info__add-shopping");
    foodInfoAddShopping.innerHTML = "Add To Shopping List";
    foodInfoBtnContainer.appendChild(foodInfoAddShopping);
    foodInfoAddShopping.addEventListener("click", () => {
        addItemToDOM(allFood.ingredients);
        countItemsLeft();
        foodInfoContainer.classList.remove("display");
    });

    foodInfoClose.addEventListener("click", () => {
        foodInfoContainer.classList.remove("display");
    });

    foodInfoContainer.classList.add("display");
}


function deleteFood(allFood) {
    const foodIndex = allFoodArray.findIndex(food => food.id === allFood.id);

    if (foodIndex !== -1) {
        allFoodArray.splice(foodIndex, 1);

        const foodElement = document.getElementById(allFood.id);
        if (foodElement) {
            foodElement.remove();
        }

        updateFoodIDs();
        localStorage.setItem("allFoodArray", JSON.stringify(allFoodArray));

        const foodInfoContainer = document.querySelector(".food-info");
        if (foodInfoContainer) {
            foodInfoContainer.remove();
        }
        console.log(allFoodArray)
    }
}


function updateFoodIDs() {
    const foodElements = document.querySelectorAll(".food");
    allFoodArray.forEach((food, index) => {
        food.id = index + 1;

        const foodElement = foodElements[index];
        if (foodElement) {
            foodElement.setAttribute("id", food.id);
        }
    });
}


//LOCAL STORAGE


function loadFoodFromLocalStorage() {
    const storedFood = localStorage.getItem("allFoodArray");
    if (storedFood) {
        const foods = JSON.parse(storedFood);
        foods.forEach(food => {
            allFoodArray.push(food);
            addFoodToDOM(food);
        });
    }
}

loadFoodFromLocalStorage();