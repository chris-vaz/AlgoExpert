//Write a function that takes in a non empty array of distinct 
// integers and an integer representing a target sum. If any two numbers
// in the input array sum up to the target sum, the function should return them
// in an array. In any order, If no two numbers sum up to the target sum
// , the function should return an empty array. 

// Note that the target sum has to be obtained by summing two different integers
// in the array, you can't add a single integer to itself in order 
// to obtain a target sum. You can assume that there will be at most one
// pair of numbers summing up to the target sum.

//My solution -

function twoNumberSum(array, targetSum) {
    // Write your code here.
    let result = []
    for (let i = 0; i <= array.length; i++) {
        for (let j = 0; j <= array.length; j++) {
            if (array[i] + array[j] == targetSum) {
                if (array[i] > array[j]) {
                    result.push(array[i]);
                    result.push(array[j]);
                }
            }
        }
    }
    return result
}

//TestCase 
array = [3,5,-4,8,11,1,-1,6]
targetSum=10
console.log(twoNumberSum(array, targetSum));

// Expected Output, [-1,11]

