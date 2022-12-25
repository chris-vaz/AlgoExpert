// Given two non empty arrays of integers, write a function that
// determines whether the second array is a subsequence of the first one

//A subsequence of an array is a set of numbers that aren't necessarily
// adjacent in the array but that are in the same order as they appear in the array 

//Note: A single number in an array and the array itself are both valid
// subsequences of an array. 

// Example: array=[5,1,22,25,6,-1,8,10]
// sequence = [1,6,-1,10]
//Sample output should be - true

function isValidSubsequence(array, sequence) {
    // Write your code here.
    let arrcount = 0;
    let seqcount = 0;
    while (arrcount < array.length && seqcount < sequence.length) {
        if (array[arrcount] == sequence[seqcount]) {
            seqcount++;
        }
        arrcount++;
    }
    if (seqcount == sequence.length) {
        return true
    }
    else return false
}

array=[5,1,22,25,6,-1,8,10]
sequence=[1,6,-1,10]
console.log(isValidSubsequence(array, sequence));