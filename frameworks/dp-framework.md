### Dynamic Programming Framework
Coins:
	a. Set dp[] + dp[0]
	b. 2 Loop (coins) (i = coin)
	c. dp.i =
	d. Return 

1. Coin Change
	a. dp[1 + n].fill(0), dp[0] = 1
	b. 2 Loop (coins) (i = coin)
	c. dp[i] + dp[i - coin]
	d. dp.pop()

2. Min Coin Change
	a. dp[1 + n].fill(Infinity), dp[0] = 0
	b. 2 Loop (coins) (i = coin)
	c. dp[i] = min(dp[i], dp[i - coin] + 1)
	d. dp[n] === Infinity ? -1 : dp.pop()

Basic:
	a. Set dp[] + dp[0, 1]
	b. Loop (i = 2)
	c. dp.i = 
	d. Return

1. House Robber
	a. dp[a[0], max(a[0], a[1])]
	b. Loop (i = 2)
	c. max(a[i] + dp[i - 2], dp[i - 1])
	d. dp.pop()

2. Fibonacci / Climb Stairs
	a. dp[0, 1]
	b. Loop (i = 2)
	c. dp[i - 1] + dp[i - 2]
	d. dp.pop()

3. Climbing Steps (1, 3, 5)
	a. dp[1 + n].fill(0), dp[0] = 1
	b. Loop (i = 0)
	c. if (i+1|3|5 in range) dp[i+1|3|5] += dp[i]
	d. dp.pop()