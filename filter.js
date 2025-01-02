const currentFilters = {
    types: [],
    search: ""
}



const buttons = document.querySelectorAll('.your-food__filter-btn');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains("activated")) {
            btn.classList.remove("activated");
            const btnIndex = currentFilters.types.indexOf(btn.innerHTML);
            if (btnIndex !== -1) {
                currentFilters.types.splice(btnIndex, 1);
            }
        } else {
            btn.classList.add("activated");
            currentFilters.types.push(btn.innerHTML);
        }
        applyFilters();
    });
});

const searchInput = document.querySelector(".your-food__filter-input");
searchInput.addEventListener("keyup", (e) => {
    currentFilters.search = e.target.value.toLowerCase();
    applyFilters();
});


function applyFilters() {

    for (let i = 0; i < allFoodArray.length; i++) {
        const yourFoodContainer = document.querySelector(".your-food__container")
        const food = yourFoodContainer.children.item(i)

        const matchesSearch = allFoodArray[i].title.toLowerCase().includes(currentFilters.search)
        const matchesTags = currentFilters.types.length === 0 || currentFilters.types.includes(allFoodArray[i].type);

        if (matchesSearch && matchesTags) {
            food.style.display = "block";
        } else {
            food.style.display = "none";
        }
    }

}