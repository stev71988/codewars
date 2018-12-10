const rapNameGen = (str) => {
    let rapName = [];
    let splitStr = str.toLowerCase().split('.');

    // Function that finds average
    let average = (arr) => {
        let splitVar = arr.split('');
        let sum = parseInt(splitVar[0]) + parseInt(splitVar[1]);

        return Math.round(sum/2)
    }

    let day = average(splitStr[0]);
    let year = average(splitStr[2]);

    let numberList = {
        0: '0ero',
        1: '1ne',
        2: '2wo',
        3: '3hree',
        4: '4our',
        5: '5ive',
        6: '6ix',
        7: '7even',
        8: '8ight',
        9: '9ine'
    }

    rapName.push(numberList[day])
    rapName.push(numberList[year])

    return rapName.join(' ');
}