function sortedFrequency(arr, val) {
    let firstIndex = findFirstVal(arr, val);
    if(firstIndex >= 0) {
       let lastIndex = findLastVal(arr, val, firstIndex);
       return lastIndex - firstIndex +  1
    } 
    return -1;
}


function findFirstVal(arr, val, lowerBound = 0, upperBound = arr.length - 1) {
    if(upperBound >= lowerBound) {
        let center = lowerBound + Math.floor((upperBound - lowerBound) / 2) // find point between the two bounds to test
        if(arr[center] === val && (center === 0 || arr[center-1] < val)){ // first val found
            return center;
        } else { //continue searching
            if(arr[center] < val) { // look in back half
                return findFirstVal(arr, val, center + 1, upperBound);
            } // look in front half
            return findFirstVal(arr, val, lowerBound, center - 1);
        }
    }
    return -1;
}

function findLastVal(arr, val, lowerBound = 0, upperBound = arr.length - 1) {
    if(upperBound >= lowerBound) {
        let center = lowerBound + Math.floor((upperBound - lowerBound) / 2) // find point between the two bounds to test
        if(arr[center] === val && (center === (arr.length - 1) || arr[center+1] > val)){ // last val found
            return center;
        } else { //continue searching
            if(arr[center] === val) { // look in back half
                return findLastVal(arr, val, center + 1, upperBound);
            } // look in front half
            return findLastVal(arr, val, lowerBound, center - 1);
        }
    }
    return -1;
}

module.exports = sortedFrequency