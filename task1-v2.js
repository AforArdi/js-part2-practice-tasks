const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(arr){
    const minimum = Math.min(...arr);
    return minimum;
}

console.log(lowestNumber(heights2));