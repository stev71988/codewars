const countDevelopers = (array) => {
    return array.filter(x => x.continent === 'Europe' && x.language === 'JavaScript').length
}