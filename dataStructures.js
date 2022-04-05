// level {1/2/3}

// level 2

// 1. Write a function to remove all even numbers from an Array.
// ```
// Input array: 
// [1, 3, 4, 6, 7, 8]

// ```
// ```
// Output should be array: [1, 3, 7]

let arr = [1, 3, 4, 6, 7, 8];

function removeEven(arr) {
    let new_arr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0) {
            new_arr.push(arr[i])
        }
    }
    return new_arr
}

console.log(removeEven(arr));


// ```
// 2. Replace all the vowels in a string with uppercase vowels.
// ```
// Input string: 'Elie'
// ```
// ```
// Output should be string: 'ElIE'
// ```
let string = "Elie"

function vowelstoUpeerCase(string) {
    let ans = ""
    for(let i = 0; i < string.length;i++) {
        if( (string[i] == "a")  || (string[i] == "e") || (string[i] == "i")  || (string[i] == "o")  || (string[i] == "u")) {
          ans += string[i].toUpperCase()
        } else {
            ans += string[i]
        }

    }
    return ans
}
console.log(vowelstoUpeerCase(string));


// 3. Write a function to find the maximum number in an array.
// ```
// Input array: [1, 3, 4, 6, 7, 8, 2, 5]
// ```
// ```
// Output should be a number: 8

let array = [1, 3, 4, 6, 7, 8, 2, 5];

function findMaximum(array) {
    let maximum = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] > maximum) {
            maximum = array[i]
        }
    }
    return maximum
}

console.log(findMaximum(array));