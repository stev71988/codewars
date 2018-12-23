const findMissing = (arr) => {
    let arrOfDiff = arr.map((num, i) => arr[i+1] - num).filter(num => !!num);

    for (let i=0; i<arr.length; i++) {
        let currentNum = arr[i];
        if (currentNum + arrOfDiff[i]*2 !== arr[i+2]) {
            return currentNum + arrOfDiff[i+1]
        }
    }
}



console.log(findMissing([1, 3, 5, 9, 11]))
// 7

console.log(findMissing([1, 3, 4]))
// 2