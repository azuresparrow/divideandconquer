function findRotatedIndex(arr, val) {
    let pivot = findPivot(arr);
    if(pivot > 0 && val >= arr[0] && val <= arr[pivot - 1]) {// pivot exists, number falls in range between start of array and max value
        return binarySearch(arr, val, 0, pivot - 1);
    }
    return binarySearch(arr, val, pivot, arr.length - 1); //pivot doesn't exist OR number falls in the lower range after it
}

function binarySearch(arr, val, lowerBound, upperBound){
    if(upperBound >= lowerBound) {
        let center = lowerBound + Math.floor((upperBound - lowerBound) / 2) // find point between the two bounds to test
        if(arr[center] === val){ // found
            return center;
        } else { //continue searching
            if(arr[center] < val) { // look in back half
                return binarySearch(arr, val, center + 1, upperBound);
            }
            // look in front half
            return binarySearch(arr, val, lowerBound, center - 1);
        }
    }
    return -1;
}

function findPivot(arr){ // Split looking for where the lowest number is 
    let lowerBound = 0;
    let upperBound = arr.length - 1;
    if(arr[lowerBound] < arr[upperBound] || arr.length === 1) // not rotated or too small
        return 0;
    while(lowerBound <= upperBound){
        let center = Math.floor((upperBound - lowerBound) / 2);
        if(arr[center] > arr[center + 1]) return center + 1;
        if(arr[lowerBound] <= arr[center]){
            lowerBound = center + 1; // in back half
        } else {
            upperBound = center - 1; // in front half
        }
    }
}

module.exports = findRotatedIndex