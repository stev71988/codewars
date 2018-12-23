const orderFood = (array) => {
    let mealCount = {};
    array.forEach(x => mealCount[x.meal] = (mealCount[x.meal] || 0) +1)
    return mealCount
}

// // same function using reduce method
// const orderFood = (array) => {
//     return array.reduce((meals, dev) => {
//         meals[dev.meal] = (meals[dev.meal] || 0) +1;
//         return meals
//     }, {})
// }