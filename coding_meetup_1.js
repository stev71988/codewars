const countDevelopers = (array) => {
    return array.filter(dev => dev.continent === 'Europe' && dev.language === 'JavaScript').length
}