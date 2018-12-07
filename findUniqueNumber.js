const findUniq = (array) => {
    let unique = {};

    // Create an object where the key = number and value = the count
    for (let number of array) {
        if (unique[number] === undefined) {
            unique[number] = 1;
        } else {
            unique[number] += 1;
        }
    }
    // Search through object and return the key where value === 1
    for (let key in unique) {
        if (unique[key] === 1) {
            
            return parseFloat(key)
        }
    }
}