const rapNameGen = (str) => {
    const names = ['0ero', '1ne', '2wo', '3hree', '4our', '5ive', '6ix', '7even', '8ight', '9ine'];
    const [day, month, year] = str.split('.');
    const avg = num => Math.round((+num[0] + +num[1]) / 2)
    return names[avg(day)] + ' ' + names[avg(year)];
}