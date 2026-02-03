// Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallName(arr){
    let small = arr[0];

    for (let i = 1; i<arr.length; i++){ // looping from 1, cause 0 index is already stored in small to compare with
        if(arr[i].length < small.length){
            small = arr[i];
        }
    }
    return small;
}

console.log(smallName(heights2));