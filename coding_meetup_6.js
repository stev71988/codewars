const isSameLanguage = (array) => {
    let filteredArr = array.filter(dev => dev.language === array[0].language)
    return (filteredArr.length === array.length)
}