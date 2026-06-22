function calculateNutrition(foodName, weight) {

    const food = FOOD_DATABASE[foodName];

    if (!food) {
        return null;
    }

    const scalingFactor = weight / 100;

    return {

        calories:
            +(food.calories * scalingFactor).toFixed(2),

        protein:
            +(food.protein * scalingFactor).toFixed(2),

        carbs:
            +(food.carbs * scalingFactor).toFixed(2),

        fat:
            +(food.fat * scalingFactor).toFixed(2)
    };
}