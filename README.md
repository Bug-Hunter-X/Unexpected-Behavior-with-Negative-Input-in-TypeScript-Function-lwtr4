# Unexpected Behavior with Negative Input in TypeScript Function

This repository demonstrates a subtle bug in a simple TypeScript function designed to print numbers from 1 to n. The function unexpectedly fails to print anything when a negative number is provided as input.

## Bug Description

The `printNumbers` function uses a `for` loop to iterate and print numbers.  The loop condition `i <= n` causes the loop to not execute when n is negative, resulting in no output.  Ideally, the function should either handle negative input gracefully (e.g., print nothing or throw an error) or explicitly prevent negative inputs.

## Solution

The solution involves adding an explicit check for negative input at the beginning of the function.