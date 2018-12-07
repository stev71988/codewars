const frame = (text, char) => {
    let finalFrame = '';

    // Find the max width
    let maxWidth = 0;
    for (let word of text) {
        if (word.length > maxWidth) {
            maxWidth = word.length + 4
        }
    }

    // Build the top and bottom frames
    let topBottom = char.repeat(maxWidth);

    // Build the body of the frame
    let left = char + ' ';
    let right = ' ' + char + '\n';
    let body = ''
    for (let word of text) {
        let buffer = ' '.repeat(maxWidth - (word.length+4))
        body +=  left + word + buffer + right;
    }

    return topBottom + '\n' + body + topBottom;
};