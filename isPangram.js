const isPangram = (string) => {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    string = string.replace(/[^\w]/gi, '').toLowerCase()
    for (let char of letters) {
        if (string.indexOf(char) === -1) return false;
    }
    return true;
}



var string1 = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string1)) //, true)
var string2 = "This is not a pangram."
console.log(isPangram(string2)) //, false)

