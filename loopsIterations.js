// level {1/2/3}

// Level 2

// Write a function in Javascript to print the sum of the first n fibonacci numbers.

// **Input:** 6

// **Output:**

// ```
// 1 1 2 3 5 8
// Sum: 20

let n = 6

function fibonacciSum(n) {
    let all_fib = [];

    if(n <=0) {
        return 0
    };
    all_fib[0] = 0;
    all_fib[1] = 1;

    let sum = all_fib[0] + all_fib[1];

    for(let i = 2; i <= n; i++) {
        all_fib[i] = all_fib[i -1] + all_fib[i -2];
        sum += all_fib[i];
    }
    return sum
}

console.log(fibonacciSum(n));