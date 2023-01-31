// Bubble Sort

// Write a function that takes in an array of integers and returns a sorted version of
// that array, Use the Bubble Sort algorithm to sort the array

// If you're unfamiliar with Bubble Sort, we reccomend watching the Conceptual Overview section
// of this question's video explaination before starting to code

function bubbleSort(array) {
    // Write your code here.
    let isSorted = false;
    while (!isSorted) {
        // isSorted is an indicator for stating whether it is sorted or not
        isSorted = true;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                // short cut method for switching values bw 2 variables
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                isSorted = false;
            }
        }
    }
    return array;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
