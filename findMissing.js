const findMissing = (arr) => {
    let step = (arr[arr.length-1] - arr[0]) / arr.length;
    return arr.filter((x, i) => x+step !== arr[i+1])[0] + step
}