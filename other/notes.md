# README

## Chapter 1: Arrays
* 2 Pointer problems - O(n) time / O(1) space
* Hashmap Problems - O(n) time / O(n) space
* Partition Problems - O(n) time / O(1) space
* Binary Search - O(log n) time / O(1) space
* Kadane's  - O(n) time / O(1) space

## Chapter 2: Strings

### Notes
* **Sorted Array**, think **Binary Search** / **Two Pointers**
* **Positive Integer Inputs** think **Sliding Window** 
* When you "store" an item in a **Hashmap**, you save it as the **KEY** and put the index of the array as the **VALUE**

## Common String Questions
* What is the most common character in the string?
* Does A have the same characters as B (anagram?)
* Does the given string have any repeated characters in it?

## Runtime Complexity
* 1 for loop through single collection - O(n)
* For loop through half a collection - O(n)
* Iterating 2 different collections - O(n + m)
* 2 Nested for loops over 1 collection - O(n^2)
* 2 Nested for loop over 2 collections - O(n * m)
* Sorting - O(n log n)
* Searching a sorted array - O(log n)

## Queues
* Enqueue => Unshift
* Dequeue => Pop

## 6.6 Search Array of Unknown Length (01)
> You are given an array, but you don't know the length. Write a program to find a target element in the array.

* Actively catch exceptions and use them in the algorithm.   
* Most obvious solution is Linear Search O(n)

### Solution
1. query 1, 2, 4, 8, 16, 32.
2. When encountered an exception, we do a binary search to find the last index
3. When last index is found, do a binary search from 0, to last index to find x

ex: x = 30, do (01) between 16 and 32

## 8.1 Combinations

* There are 3 pointers you need to pay attention to:
	> aIndex
	> bIndex
	> i

* Whatever goes into i is what goes into the buffer
* aIndex is a placeholder for where you are at in your array
* bIndex keeps track of your bufferIndex

i + 1 => right
i - 1 => left
j + 1 => up
j - 1 => down

## Hash maps
"item.hasOwnProperty(a)" is the same as "(a in item)"

## Top-Down Tree
* Can you determine parameters to help the node know its answer? 
* Can you use these parameters and the value of the node to determine what should be the parameters passed to its children?