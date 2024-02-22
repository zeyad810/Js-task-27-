const statusObj = {
    isActive: true,
    isUsed: false,
    isAvailable: true,
    isReady: false,
    inStock: true
}
function filterObjectValues(obj) {
    const filteredObj = {};
    for (const key in statusObj) {
        if (statusObj[key] === true) {
            filteredObj[key] = true;
        }
    }
    return filteredObj;
}
const product = filterObjectValues(statusObj);
console.log(product); 


