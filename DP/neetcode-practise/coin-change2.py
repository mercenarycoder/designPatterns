class Solution:
    def change(self, amount, coins):
        dp = [0 * (len(coins) + 1) for i in range(amount + 1)]
        dp[0] = [1] * (len(coins) + 1)

        for a in range(1, amount + 1):
            for w in range(len(coins) - 1, -1, -1):
                dp[a][w] = dp[a][w + 1]
                if a - coins[w] >= 0:
                    dp[a][w] += dp[a - coins[w]][w]
        return dp[amount][0]


arr = [1, 2, 5]
Sum = 5
print(Solution().change(Sum, arr))
