from tabulate import tabulate


def sumChecker(nums, target):
    space = [[[] for tar in range(target + 1)] for num in range(len(nums) + 1)]
    for i in range(1, len(nums) + 1):
        for w in range(1, target + 1):
            if w >= nums[i - 1]:
                item = []
                item.extend(space[i][w - nums[i - 1]])
                item.extend(space[i - 1][w])
                item.extend([nums[i - 1]])
                space[i][w] = item
            else:
                space[i][w] = space[i - 1][w]
    for i in range(len(nums) + 1):
        print(space[i][w])
    return


def sumBacktrack(nums, target):
    res = []
    def findSolutions(sum, i, list):
        if sum == target:
            res.append(list.copy()) if list not in res else None
            print(list)
            return
        if sum > target or i >= len(nums):
            return
        if sum + nums[i] <= target:
            # list.append(nums[i])
            findSolutions(sum + nums[i], i + 1, list+[nums[i]]) or findSolutions(
                sum + nums[i], i, list+[nums[i]]
            ) or findSolutions(sum, i + 1, list)
            list.pop() if list else None
        else:
            findSolutions(sum, i + 1, list)

    findSolutions(0, 0, [])
    # ans = set(res)
    # print(ans)
    return res


nums = [2, 3, 5, 7]
target = 7
print(sumBacktrack(nums, target))
