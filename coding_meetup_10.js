const addUsername = (list) => {
    let currentYear = new Date().getFullYear();
    
    list.map( x => x.username = x.firstName.toLowerCase() + x.lastName[0].toLowerCase() + (currentYear - x.age))
    return list
}