const sortArray = (array) => {
    let newArray = [];
    
    for (let currentNum of array) {
        if (currentNum % 2 !== 0) newArray.unshift(currentNum)
    }
    for (let currentNum of array) {
        if (currentNum % 2 === 0) {
            let currentInd = array.indexOf(currentNum)
            newArray.splice(currentInd,0,currentNum)
        }
    }
    return newArray
}

console.log(sortArray([5, 3, 2, 8, 1, 4])) //, [1, 3, 2, 8, 5, 4])
console.log(sortArray([5, 3, 1, 8, 0])) //, [1, 3, 5, 8, 0])
console.log(sortArray([])) //,[])