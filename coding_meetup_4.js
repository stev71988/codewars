const getFirstPython = (array) => {
    let pythonDevs = array.find( dev => dev.language === 'Python')
    return pythonDevs ? `${pythonDevs.firstName}, ${pythonDevs.country}` : 'There will be no Python Developers';
}