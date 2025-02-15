function printNumbers(n: number): void {
  if (n < 1) {
    console.log('Input must be a positive integer.'); // Handle negative input
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works as expected
printNumbers(0); // Prints 'Input must be a positive integer.'
printNumbers(-5); // Prints 'Input must be a positive integer.' 