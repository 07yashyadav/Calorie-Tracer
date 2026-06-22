// let warningShown = false;

const AppState = {

    meals: [],

    currentGoal: "maintain",

    targets: {

        loss: {
            calories: 1800,
            protein: 120,
            carbs: 180,
            fat: 60
        },

        maintain: {
            calories: 2200,
            protein: 140,
            carbs: 250,
            fat: 70
        },

        gain: {
            calories: 2800,
            protein: 180,
            carbs: 320,
            fat: 90
        }
    }
};

function calculateTotals() {

    let totals = {

        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0

    };

    AppState.meals.forEach(meal => {

        totals.calories += meal.calories;
        totals.protein += meal.protein;
        totals.carbs += meal.carbs;
        totals.fat += meal.fat;

    });

    return totals;
}

function getBudgetStatus() {

    const totals =
        calculateTotals();

    const target =
        AppState.targets[
            AppState.currentGoal
        ];

    return {

        consumedCalories:
            totals.calories,

        remainingCalories:
            target.calories -
            totals.calories,

        budgetExceeded:
            totals.calories >
            target.calories

    };
}