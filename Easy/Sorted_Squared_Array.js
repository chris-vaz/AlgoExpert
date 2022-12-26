// Write a function that takes in a non empty array of inntegers
// that are sorted in ascending order and returns a new array
// of the same length with the squares of the original integers
// also sorted in ascending order

// Sample Input
// array = [1,2,3,5,6,8,9]

// Sample Output
// [1,4,9,25,36,64,81]

//My Passed all Test Cases Code
function sortedSquaredArray(array) {
    // Write your code here.
    let result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = array[i] * array[i];
    }
    result = result.sort(function (a, b) { return a - b });
    return result
}

array1 = [1,2,3,5,6,8,9]
console.log(sortedSquaredArray(array1))
array2 = [-4,-3,-2,-1,0,1,2,3,4]
console.log(sortedSquaredArray(array2))