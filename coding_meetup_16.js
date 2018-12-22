const askForMissingDetails = (array) => {
    return array.filter(dev => {

        for (let keys in dev) {
            if (!dev[keys]) {
                dev['question'] = `Hi, could you please provide your ${keys}.`;
                return dev;
            }
        }
    })
}

