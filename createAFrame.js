const frame = (text, char) => {
    let finalFrame = '';
    let maxLength = Math.max(...text.map(elem => elem.replace(elem, elem.length))) + 4;
    
    // Build the top and bottom frames
    let topBottom = char.repeat(maxLength);
    // for (let i=0; i<maxLength; i++) {
    //     topBottom += char;
    // }

    // Build the body of the frame
    let body = '';
    for (let j=0; j<text.length; j++) {
        let currentWord = text[j];
        let row = '';

        if (currentWord.length + 4 < maxLength) {
            let buffer = maxLength - (currentWord.length + 4);
            let space = ''
            for (let k=0; k<=buffer; k++) {
                space += ' ';
            }
            row = char + ' ' + currentWord + space + char + '\n';
        } else {
            row = char + ' ' + currentWord + ' ' + char + '\n';
        }
        body += row;
    }

    return topBottom + '\n' + body + topBottom;
};
