// Code your solution here
function findMatching(array, driverName) {
    return array.filter(drivers => 
        drivers.toLowerCase() === driverName.toLowerCase()
        )
}
   
function fuzzyMatch(array, name) {
    return array.filter(driver => 
        driver.toLowerCase().indexOf(name.toLowerCase()) === 0
        )
}

 
function matchName(array, name) {
    return array.filter(driverAndName => 
        driverAndName.name === name)
}
