const validBraces = (braces) => {
    let brace = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let stack = [];

    for (let i=0; i<braces.length; i++) {
        let currentChar = braces[i];

        if (brace[currentChar]) {
            stack.push(currentChar)
        } else {
            if (currentChar !== brace[stack.pop()]){
                return false
            }
        }
    }
    return true
}

console.log(validBraces("(){}[]"))   //=>  True
// console.log(validBraces("([{}])"))   //=>  True
// console.log(validBraces("(}"))       //=>  False
// console.log(validBraces("[(])"))     //=>  False
// console.log(validBraces("[({})](]")) //=>  False


