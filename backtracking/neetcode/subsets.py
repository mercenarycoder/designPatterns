class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        res = []
        subset = []

        def dfs(i):
            if i >= len(nums):
                res.append(subset.copy())
                return
            subset.append(nums[i])
            dfs(i + 1)

            # this over here is a backtracking step as it is removing the element from the given subset
            subset.pop()
            dfs(i+1)
        dfs(0)
        return res
print(Solution().subsets([1,2,3]))