const findUniq = (array) => {
    array.sort((a,b) => a-b)
    return (array[0] === array[1]) ? array.pop() : array[0]
}