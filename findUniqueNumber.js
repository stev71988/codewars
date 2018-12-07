const findUniq = (array) => {
    let unique = {};

    for (let number of array) {
        if (unique[number] === undefined) {
            unique[number] = 1;
        } else {
            unique[number] += 1;
        }
    }
    for (let key in unique) {
        if (unique[key] === 1) {
            return parseFloat(key)
        }
    }
}