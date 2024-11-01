function countZeroes(arr) {
    // find the point there's a transition from 1->0
    let first = findFirstZero(arr)
    if(first >= 0) return arr.length - first;
    return 0; 
}

function findFirstZero(arr, lowerBound = 0, upperBound = arr.length - 1) {
    if(upperBound >= lowerBound) {
        let center = lowerBound + Math.floor((upperBound - lowerBound) / 2) // find point between the two bounds to test
        if(arr[center] === 0 && (arr[center -1] === 1 || center === 0)){ // first 0 found
            return center;
        } else { //continue searching
            if(arr[center] === 1) { // look in back half
                return findFirstZero(arr, center + 1, upperBound);
            }
            // look in front half
            return findFirstZero(arr, lowerBound, center - 1);
        }
    }
    return -1;
}



module.exports = countZeroes