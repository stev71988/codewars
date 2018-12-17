const findOddNames = (array) => {
    let answer = [];
    let names = array
        .map(x => x.firstName)
        .map(x => x.split(''))
    
    let asciiiCount = names.map((x, index) => x.map(y => y.charCodeAt())
                .reduce((sum, val) => {
                    return sum + val
                }, 0));
    
    asciiiCount.forEach((x, index) => {
        if (x%2 !== 0) {
            answer.push(array[index])
        }
    })
    return answer;
}


var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ];
  
  var answer1 = [
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ];
  
  console.log(findOddNames(list1)) //, answer1);
  
  
  var list2 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  ];
  
  var answer2 = [];
  
  console.log(findOddNames(list2)) //, answer2);
  