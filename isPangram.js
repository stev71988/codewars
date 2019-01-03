const isPangram = (string) => {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split('').every(x => {
        return string.indexOf(x) !== -1;
    })
}
