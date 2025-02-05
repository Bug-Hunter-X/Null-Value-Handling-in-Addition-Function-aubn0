function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values explicitly
  }

  return a + b; // Usual addition
}

// Test cases
console.log(foo(5, 10)); // Output: 15
console.log(foo(null, 10)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(null, null)); // Output: 0