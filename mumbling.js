const accum = (array) => {
    // Split the array into individual characters and lowercase 
    let splitArr = array.toLowerCase().split('')

    // Replace each character with the dupicate version of each character
    let repeatLetter;
    let count = 1
    let mumbled = splitArr.map(function(letter) {
        repeatLetter = letter.repeat(count)
        count++
        return repeatLetter.replace(repeatLetter[0],repeatLetter[0].toUpperCase())
    })

    return console.log(mumbled.join('-'))
}
accum("abcbd")