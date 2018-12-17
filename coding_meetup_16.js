const askForMissingDetails = (array) => {
    // Array of devs who have missing info
    let missingDetailList = array.filter(dev => {
        for (let keys in dev) {
            if (!dev[keys]) {
                return dev;
            }
        }
    })
    
    // Add question to provide missing info
    missingDetailList.map(dev => {
        for (let keys in dev) {
            if (!dev[keys]) {
                dev.question = `Hi, could you please provide your ${keys}.`; 
            }
        }
    })
    
    return missingDetailList
}

