function findFloor(arr, val, lowerBound = 0, upperBound = arr.length - 1) {
    if(val >= arr[upperBound]) return arr[upperBound];

    if(upperBound >= lowerBound) {
        let center = lowerBound + Math.floor((upperBound - lowerBound) / 2) // find point between the two bounds to test
        if(arr[center] === val) { // val found
            return val;
        } else if(center > 0 && arr[center - 1] <= val && val < arr[center]) { // floor found
            return arr[center - 1];
        } else { //continue searching
            if(arr[center] < val) { // look in back half
                return findFloor(arr, val, center + 1, upperBound);
            } // look in front half
            return findFloor(arr, val, lowerBound, center - 1);
        }
    }
    return -1;
}

module.exports = findFloor