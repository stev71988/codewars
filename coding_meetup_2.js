const greetDevelopers = (array) => {
    array.map(dev => dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`)
    return array;
}