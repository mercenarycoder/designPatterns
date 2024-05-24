class Solution:
    def combinationSum2(self, candidates: list[int], target: int) -> list[list[int]]:
        candidates.sort()
        res = []
        def checkSum(sum,check,pos):
            if sum == target:
                print(check)
                res.append(check.copy())
            
            prev = -1    
            for i in range(pos,len(candidates)):
                if prev == candidates[i]:
                    continue
                print(candidates[i])
                check.append(candidates[i])
                checkSum(sum+candidates[i],check,i+1)
                check.pop()
                prev = candidates[i]
        checkSum(0,[],0)
        return res

# leetcode 40 
print(Solution().combinationSum2([1,2,4,7,3,1],8))