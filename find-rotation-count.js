function findRotationCount(arr) {
    let lowerBound = 0;
    let upperBound = arr.length - 1;
    if(arr[lowerBound] < arr[upperBound] || arr.length === 1) return 0; // not rotated or too small
        
    while(lowerBound <= upperBound){
        let center = upperBound - Math.floor((upperBound - lowerBound) / 2);
        if(arr[center] > arr[center + 1])  return center + 1;
        if(arr[lowerBound] <= arr[center]){
            lowerBound = center + 1; // in back half
        } else {
            upperBound = center - 1; // in front half
        }
    }
}

module.exports = findRotationCount