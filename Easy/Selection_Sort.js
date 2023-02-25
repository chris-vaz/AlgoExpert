// Selection Sort

// Write a function that takes in an array of integers and returns 
// a sorted version of that array. Use the Selection Sort algorithm
// to sort the array

// If you're unfamiliar with Selection Sort, we recommend watching the
// Conceptual Overview section of this question's video explaination before
// starting to code. 

// Sample Input
// array=[8,5,2,9,5,6,3]

// Sample Output
// [2,3,5,5,6,8,9]

function selectionSort(array) {
    // Write your code here.
    function swap(i, j, array) {
        [array[i], array[j]] = [array[j], array[i]];
    }
    let currentId = 0
    while (currentId < (array.length - 1)) {
        let smallestId = currentId
        for (let i = currentId + 1; i < array.length; i++) {
            if (array[smallestId] > array[i]) {
                smallestId = i;
            }
        }
        swap(currentId, smallestId, array)
        currentId += 1
    }
    return array
}

array1 = [8, 5, 2, 9, 5, 6, 3]
console.log(selectionSort(array1));