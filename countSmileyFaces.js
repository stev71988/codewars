const countSmileys = (arr) => {
    let total = 0;

    for (let faces of arr) {
        if (faces.length === 3) {
            if (faces[0] === ':' || faces[0] === ';') {
                if (faces[1] === '-' || faces[1] === '~') {
                    if (faces[2] === ')' || faces[2] === 'D') {
                        total += 1;
                    }
                }
            }
        } else if (faces.length === 2) {
            if (faces[0] === ':' || faces[0] === ';') {
                if (faces[1] === ')' || faces[1] === 'D') {
                    total += 1;
                }       
            }
        }
    }
    return total;
}