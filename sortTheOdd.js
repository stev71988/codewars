const sortArray = (array) => {
    let odds = array.filter(x => x%2 !== 0).sort((a,b) => a-b);
    return array.map((x, ind) => x%2 ? odds.shift() : x)
}

