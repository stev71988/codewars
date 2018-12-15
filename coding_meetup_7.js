const findSenior = (array) => {
    let maxAge = Math.max(...array.map(dev => dev.age))
    return array.filter(dev => dev.age === maxAge)
}