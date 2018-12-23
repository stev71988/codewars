const toWeirdCase = (str) => {
    return str.toLowerCase().split(' ').map(word => {
        return word.split('').map((char, index) => {
            return index % 2 == 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('')
    }).join(' ')
}