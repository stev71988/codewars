const isLanguageDiverse = (array) => {
    let languageCount = {};
    array
        .map(dev => dev.language)
        .forEach(dev => (languageCount[dev] === undefined) ? languageCount[dev]=1 : languageCount[dev]+= 1)

    let max = 0;
    let min = 100;
    for (let key in languageCount) {
        if (languageCount[key] > max) {
            max = languageCount[key]
        }
        if (languageCount[key] < min) {
            min = languageCount[key]
        }
    }
    console.log(languageCount)
    console.log(max)
    console.log(min)
    return max <= (2*min) ? true : false;
    
    // let maxLanguage = languageCount.reduce((a,b) => languageCount[a] > languageCount[b] ? a : b)
    // let minLanguage = languageCount.reduce((a,b) => languageCount[a] < languageCount[b] ? a : b)

        
}


var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];
  
  var list2 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];
  
  var list3 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];
  
  var list4 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];
  
  let list5 = [
      {"firstName":"Mariam","lastName":"B.","country":"Egypt","continent":"Africa","age":89,"language":"Python"},
      {"firstName":"Krishna","lastName":"G.","country":"Nepal","continent":"Asia","age":22,"language":"Python"},
      {"firstName":"Noah","lastName":"M.","country":"Switzerland","continent":"Europe","age":19,"language":"Python"},
      {"firstName":"Agustin","lastName":"V.","country":"Uruguay","continent":"Americas","age":19,"language":"Ruby"},
      {"firstName":"Odval","lastName":"F.","country":"Mongolia","continent":"Asia","age":38,"language":"Python"},
      {"firstName":"Luke","lastName":"V.","country":"Malta","continent":"Europe","age":29,"language":"JavaScript"},
      {"firstName":"Fatima","lastName":"H.","country":"Pakistan","continent":"Asia","age":28,"language":"Ruby"},
      {"firstName":"Jakub","lastName":"Z.","country":"Czech Republic","continent":"Europe","age":42,"language":"Ruby"},
      {"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},
      {"firstName":"Fatemeh","lastName":"Z.","country":"Iran","continent":"Asia","age":29,"language":"Python"},
      {"firstName":"Precious","lastName":"G.","country":"South Africa","continent":"Africa","age":22,"language":"JavaScript"},
      {"firstName":"Yusuf","lastName":"N.","country":"Turkey","continent":"Europe","age":22,"language":"Ruby"},
      {"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":30,"language":"JavaScript"},
      {"firstName":"Ellen","lastName":"E.","country":"Finland","continent":"Europe","age":55,"language":"Python"},
      {"firstName":"Shufen","lastName":"L.","country":"Taiwan","continent":"Asia","age":35,"language":"JavaScript"},
      {"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},
      {"firstName":"Nikau","lastName":"R.","country":"New Zealand","continent":"Oceania","age":39,"language":"Ruby"},
      {"firstName":"Maria","lastName":"Y.","country":"Cyprus","continent":"Europe","age":30,"language":"Python"},
      {"firstName":"Sebastian","lastName":"W.","country":"Venezuela","continent":"Americas","age":28,"language":"JavaScript"},
      {"firstName":"Zahra","lastName":"S.","country":"Azerbaijan","continent":"Europe","age":22,"language":"Python"},
      {"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},
      {"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"JavaScript"},
      {"firstName":"Laia","lastName":"P.","country":"Andorra","continent":"Europe","age":55,"language":"Ruby"}
    ]
  console.log(isLanguageDiverse(list1)) //, false);
  console.log(isLanguageDiverse(list2)) //, false);
  console.log(isLanguageDiverse(list3)) //, true);
  console.log(isLanguageDiverse(list4)) //, true);
  console.log(isLanguageDiverse(list5)) //, true);
  