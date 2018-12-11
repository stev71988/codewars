const toCamelCase = (str) => {
    return str.split(/[-_]/).map((word, index) =>
    (index === 0) ? word : word.replace(word[0], word[0].toUpperCase())).join('')
}
// const toCamelCase = (str) => {
//     return str.split(/[-_]/).map((word, index) =>
//     index === 0 ? word : word.replace(word[0], word[0].toUpperCase()))
//     .join('')
// }

console.log(toCamelCase('the-stealth-warrior'))