const findOddNames = (array) => {
    let answer = [];
    let names = array
        .map(x => x.firstName)
        .map(x => x.split(''))
    
    let asciiiCount = names.map((x, index) => x.map(y => y.charCodeAt())
                .reduce((sum, val) => {
                    return sum + val
                }, 0));
    
    asciiiCount.forEach((x, index) => {
        if (x%2 !== 0) {
            answer.push(array[index])
        }
    })
    return answer;
}