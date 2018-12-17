const orderFood = (array) => {
    let mealCount = {};
    array.forEach(x => mealCount[x.meal] = (mealCount[x.meal] || 0) +1)
    return mealCount
}