const getAverageAge = (array) => {
    return Math.round(array.reduce(function(sum, value) {
        return sum + value.age
    }, 0) / array.length)
}


var list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' }
  ];
  
console.log(getAverageAge(list1)) //, 50)

var list2 = [
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
  ];
  
console.log(getAverageAge(list2)) //, 21);
  