const getAverageAge = array => {
    return Math.round(array.reduce((sum, value) => sum + value.age, 0)/array.length)
}