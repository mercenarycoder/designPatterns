class Solution:
    def findAnagrams(self, s: str, p: str) -> list[int]:
        required = {}
        given = {}
        for i in range(len(p)):
            required[p[i]] = 1 + required.get(p[i],0)
            given[s[i]] = 1 + given.get(s[i],0) 
        
        res = [0] if required == given else []
        l = 0
        for r in range(len(p),len(s)):
            given[s[r]] = 1 + given.get(s[r],0)
            given[s[l]] -= 1
            if given[s[l]] == 0:
                given.pop(s[l])
            l+=1
            if given == required:
                res.append(l)
        return res

s = "cbaebabacd" 
p = "abc"
print(Solution().findAnagrams(s,p))