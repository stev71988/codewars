const isLanguageDiverse = (array) => {
    let languages = array.map(x => x.language)
    let count = languages.map(x => languages.filter(y => y === x).length)
    
    return Math.max(...count) <= Math.min(...count)*2 ? true : false
}