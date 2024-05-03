class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        se = set()
        l=0
        maximum = 0
        # r=0
        
        for r in range(len(s)):
            while s[r] in se:
                se.remove(s[l])
                l+=1    
            se.add(s[r])
            length = r-l+1
            maximum = max(length,maximum)
        
        return maximum

print(Solution().lengthOfLongestSubstring("pwwkew"))