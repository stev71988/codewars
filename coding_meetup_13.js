// Count the languages using higher-order functions
const isLanguageDiverse = (array) => {
    let languages = array.map(x => x.language)
    let count = languages.map(x => languages.filter(y => y === x).length)
    
    return Math.max(...count) <= Math.min(...count)*2
}


// // Count the languages and put them into an object
// const isLanguageDiverse = (array) => {
//     let languageCount = {}
//     let max = 0;
//     let min = array.length;

//     for (let dev of array) {
//         languageCount[dev.language] = (languageCount[dev.language] || 0) + 1;
//     }
    
//     for (let lang in languageCount) {
//         max = Math.max(languageCount[lang], max)
//         min = Math.min(languageCount[lang], min)
//     }

//     return max <= min*2;
// }