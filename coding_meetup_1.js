const countDevelopers = (array) => {
    let count = 0;
    array.forEach((obj) => {if (obj.continent === 'Europe' && obj.language === 'JavaScript') {count++;}})
    return count;
}