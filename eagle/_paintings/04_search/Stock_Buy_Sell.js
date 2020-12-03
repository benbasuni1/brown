/*
	🕑 O(n) -- 🛰 O(1)
	Stock Buy Sell to Maximize Profit
	Input  : (<ArrayInt a>) 
	Output : (<ArrayInt>)
*/

stockBuySell() : <ArrayInt> {
	todaysGain = -Infinity
	maxProfit = a[1] - a[0]
	[buy, sell] = a[0, 1]

	(1; i < len(a)):
		todaysGain = a.i - buy
		if (todaysGain > maxProfit):
			maxProfit = todaysGain
			sell = a.i

		if (a.i < buy) buy = a.i
	
	∆ [sell - maxProfit, sell]
}
