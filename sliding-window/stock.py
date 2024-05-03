class Solution:
    def maxProfit(self,prices: list[int]) -> int:
        l = 0
        r = 0 #left = buy , right=sell
        maxP = 0
        while r<len(prices):
            #profitable
            if prices[l] < prices[r]:
                profit = prices[r] - prices[l]
                maxP = max(maxP,profit)
            else:
                 l = r
            r+=1
        return maxP
        
        
    def maxProfit2(self,prices: list[int]) -> int:
        pass
    
    def nextGreatest(self,arr):
        stack = []
        nextGreatest = []
        for i in range(len(arr)-1,0,-1):
            if(len(stack) == 0):
                nextGreatest.append({'key':arr[i],'value':-1}) # type: ignore
            elif(stack[len(stack)-1]>arr[i]):
                nextGreatest.append({'key':arr[i],'value':stack[len(stack)-1]}) #type: ignore
            else:
                while(len(stack)>0 and stack[len(stack)-1]<arr[i]):
                    stack.pop()
                if(len(stack) == 0):
                  nextGreatest.append({'key':arr[i],'value':-1}) # type: ignore
                else:
                  nextGreatest.append({'key':arr[i],'value':stack[len(stack)-1]})    
            stack.append(arr[i])
        nextGreatest =reversed(nextGreatest)
        print(nextGreatest)    
        
# Solution().nextGreatest([7,1,5,3,6,4])
print(Solution().maxProfit([7,1,5,3,6,4]))