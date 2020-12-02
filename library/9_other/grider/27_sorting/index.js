// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
		}
	}

	return arr;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) minIndex = j;
		}

		[arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
	}

	return arr;
}

function mergeSort(arr) {
	if (arr.length === 1) return arr;

	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let result = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) 
			result.push(left.shift());
		else 
			result.push(right.shift());
	}

	return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
