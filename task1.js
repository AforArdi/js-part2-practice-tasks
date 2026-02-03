// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(arr){
    let low = arr[0];

    for (let i = 0; i< arr.length; i++){
        if(arr[i] < low){
            low = arr[i];
        }
    }
    return low;
}

console.log(lowestNumber(heights2));