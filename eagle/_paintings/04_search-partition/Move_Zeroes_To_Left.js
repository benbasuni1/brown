/*
	🕑 O(n) -- 🛰 O(1)
	Move Zeroes To Left
	Input  : (<ArrayInt a>) 
	Output : (<ArrayInt>)
*/

moveZeroesToLeft() : <ArrayInt> {
	read = write = endPointer

	while (read >= 0):
		if (a.read !== 0):
			a.write = a.read
			write--
		read--
	
	while (write >= 0): a.write = 0; write--

	∆ a
}