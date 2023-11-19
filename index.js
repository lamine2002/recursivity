// Fibonacci iterative and recursive in array

// Iterative
const fibIterative = (n) => {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
};

// console.log(fibIterative(8));

// Recursive with array
const fibRecursive = (n, arr = [0,1]) => {
  
    if (n === 1) {
        return arr;
    }
    
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return fibRecursive(n - 1, arr);

}

console.log(fibRecursive(8));