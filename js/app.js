// App Startup
console.log("Calorie Tracker Started");

// Change Fitness Goal
function changeGoal() {

    const selectedGoal =
        document.getElementById("goalSelect").value;

    AppState.currentGoal = selectedGoal;

    updateDashboard();

}

// Mock Image Upload
function mockImageUpload() {

    document.getElementById("foodName").value =
        "Banana";

    document.getElementById("weight").value =
        120;

    alert("Food recognized successfully");

}

// Add Food
function addFood() {

    const foodName =
        document.getElementById("foodName").value;

    const weight =
        parseFloat(
            document.getElementById("weight").value
        );

    if (!foodName || !weight) {

        alert("Please enter food and weight");

        return;
    }

    const nutrition =
        calculateNutrition(
            foodName,
            weight
        );

    if (!nutrition) {

        alert(
            "Food not found. Use Chicken, Rice, Egg, Banana or Oats."
        );

        return;
    }

    const meal = {

        id: Date.now(),

        name: foodName,

        weight: weight,

        calories: nutrition.calories,

        protein: nutrition.protein,

        carbs: nutrition.carbs,

        fat: nutrition.fat

    };

    AppState.meals.push(meal);

    renderMeals();

    updateDashboard();

}

// Delete Meal
function deleteMeal(id) {

    AppState.meals =
        AppState.meals.filter(
            meal => meal.id !== id
        );

    renderMeals();

    updateDashboard();

}

// Render Table
function renderMeals() {

    const table =
        document.getElementById(
            "mealTable"
        );

    table.innerHTML = "";

    AppState.meals.forEach(meal => {

        table.innerHTML += `

        <tr>

            <td>${meal.name}</td>

            <td>${meal.weight}</td>

            <td>${meal.calories}</td>

            <td>${meal.protein}</td>

            <td>${meal.carbs}</td>

            <td>${meal.fat}</td>

            <td>
                <button
                    onclick="deleteMeal(${meal.id})"
                >
                    🗑
                </button>
            </td>

        </tr>

        `;
    });
}

// Dashboard Logic
function updateDashboard() {

    const totals =
        calculateTotals();

    const target =
        AppState.targets[
            AppState.currentGoal
        ];

    const status =
        getBudgetStatus();

    const caloriePercent =
        (totals.calories /
            target.calories) * 100;

    const proteinPercent =
        (totals.protein /
            target.protein) * 100;

    const carbPercent =
        (totals.carbs /
            target.carbs) * 100;

    const fatPercent =
        (totals.fat /
            target.fat) * 100;

    document.getElementById(
        "calorieBar"
    ).style.width =
        Math.min(caloriePercent, 100) + "%";

    document.getElementById(
        "proteinBar"
    ).style.width =
        Math.min(proteinPercent, 100) + "%";

    document.getElementById(
        "carbBar"
    ).style.width =
        Math.min(carbPercent, 100) + "%";

    document.getElementById(
        "fatBar"
    ).style.width =
        Math.min(fatPercent, 100) + "%";

    document.getElementById(
        "calorieText"
    ).innerHTML =
        `Calories: ${totals.calories.toFixed(1)} / ${target.calories}`;

    document.getElementById(
        "proteinText"
    ).innerHTML =
        `Protein: ${totals.protein.toFixed(1)} / ${target.protein}g`;

    document.getElementById(
        "carbText"
    ).innerHTML =
        `Carbs: ${totals.carbs.toFixed(1)} / ${target.carbs}g`;

    document.getElementById(
        "fatText"
    ).innerHTML =
        `Fat: ${totals.fat.toFixed(1)} / ${target.fat}g`;

    document.getElementById(
        "remainingCalories"
    ).innerHTML =
        `Remaining Calories: ${status.remainingCalories.toFixed(1)}`;

    const calorieBar =
        document.getElementById(
            "calorieBar"
        );

    if (
        status.budgetExceeded
    ) {

        calorieBar.classList.add(
            "warning"
        );

        openModal();

    } else {

        calorieBar.classList.remove(
            "warning"
        );

        closeModal();
    }
}
// Initial Load
updateDashboard();