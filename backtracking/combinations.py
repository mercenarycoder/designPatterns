class Solution:
    def combine(self, n: int, k: int) -> list[list[int]]:
        res = []
        def dfs(i,cur):
            if len(cur) == k:
                # print(cur)
                res.append(cur.copy())
                return 
            if i > n or i <= 0:
                return
            cur.append(i)
            dfs(i+1,cur)
            cur.pop()
            dfs(i+1,cur)
        dfs(1,[])
        return res

print(Solution().combine(4,2))