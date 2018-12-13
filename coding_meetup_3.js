const isRubyComing = (array) => {
    return array.map( dev => !!(dev.language === 'Ruby')).includes(true)
}