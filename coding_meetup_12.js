const findAdmin = (array, code) => {
    return array.filter(dev => dev.language === code)
                .filter(dev => dev.githubAdmin === 'yes')
}