const countLanguages = (array) => {
    let count = {};
    for (let developer of array) {
        count[developer.language] = (count[developer.language] || 0) + 1;
    }
    return count;
}