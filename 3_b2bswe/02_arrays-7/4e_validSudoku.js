// 1. Rotate 90 Degrees
size = len(a) - 1;

(layer = 0; layer < len(a) / 2) 
	(i = layer; i < size - layer) 
		top   = a[layer]        [i]
		right = a[i]            [size - layer]
		bot   = a[size - layer] [size - i]
		left  = a[size - i]     [layer]

		a[layer]        [i]            = left
		a[i]            [size - layer] = top
		a[size - layer] [size - i]     = right
		a[size - i]     [layer]        = bot

return a;

