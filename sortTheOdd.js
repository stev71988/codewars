const sortArray = (array) => {
    let newArray = [];

    for (let currentNum of array) {
        if (currentNum % 2 !== 0) newArray.push(currentNum)
    }
    newArray.sort((a,b) => a-b)

    for (let i=0; i<array.length; i++) {
        let currentNum = array[i];
        if (currentNum % 2 === 0) {
            let currentInd = i;
            newArray.splice(i, 0, currentNum)
        }
    }

    return newArray
}