const allContinents = (array) => {
    let checkList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    return checkList.every(x => array.some(y => x===y.continent));

}