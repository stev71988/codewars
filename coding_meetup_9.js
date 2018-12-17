const isAgeDiverse = (list) => {
    let checkList = ['teens', 'twenties', 'thirties', 'forties', 'fifties', 'sixties', 'seventies', 'eighties', 'nineties', 'centenarian']

    let ageGroup = (age) => {
        if (age >= 10 && age <20) {
            return 'teens';
        } else if (age >= 20 && age <30) {
            return 'twenties';
        } else if (age >= 30 && age <40) {
            return 'thirties';
        } else if (age >= 40 && age <50) {
            return 'forties';
        } else if (age >= 50 && age <60) {
            return 'fifties';
        } else if (age >= 60 && age <70) {
            return 'sixties';
        } else if (age >= 70 && age <80) {
            return 'seventies';
        } else if (age >= 80 && age <90) {
            return 'eighties';
        } else if (age >= 90 && age <100) {
            return 'nineties';
        } else if (age > 100 ) {
            return 'centenarian';
        }
    }
    let developerAges = list.map(dev => ageGroup(dev.age))
    return checkList.every( checkAge => developerAges.some( devAge => checkAge === devAge))
}