/*----- Integers ------ */

// Get length of a number
xLength = floor(log10(x)) + 1

// Bit Mask
mask = (xLen-1)^10

// Get left/right
left = floor(x / mask)
right = x % 10;

// Remove left/right
left = x % mask
right = floor(x / 10)

/*----- Bits ------ */

// Halves x / pop binary()
x = x >> 1

// Add binary(0)
// x << 1

// See last()
// x & 1 