const toWeirdCase = (str) => {
    let words = str.toLowerCase().split(' ')
    let answer = [];
    for (let word of words) {
        let char = word.split('');
        answer.push(char.map((x, i) => (i%2 === 0) ? x.toUpperCase() : x).join('')) 
    }
    return answer.join(' ')
}

console.log(toWierdCase("This is a test"))