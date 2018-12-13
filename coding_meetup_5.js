const countLanguages = (array) => {
    let languageList = array.map( dev => dev.language)
    let totalCount = {}
    for (let language of languageList) {
        (totalCount[language] === undefined) ? totalCount[language] = 1 : totalCount[language] += 1;
    }
    return totalCount;
}


var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ];
  
  var answer = { C: 2, JavaScript: 1, Ruby: 1 };
  
  console.log(countLanguages(list1)) //