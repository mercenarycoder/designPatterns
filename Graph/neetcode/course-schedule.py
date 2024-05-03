class Solution:
    def canFinish(self, numCourses: int, prerequist: list[list[int]]) -> bool:
        preMap = {i: [] for i in range(numCourses)}
        for crs, pre in prerequist:
            preMap[crs].append(pre)

        visitSet = set()

        def dfs(crs):
            if crs in visitSet:
                return False
            if preMap[crs] == []:
                return True

            visitSet.add(crs)
            for pre in preMap[crs]:
                if not dfs(pre):
                    return False
            visitSet.remove(crs)
            preMap[crs] = []
            return True

        for crs in range(numCourses):
            if not dfs(crs):
                return False
        return True


def canFinish(numCourses: int, lis: list[list[int]]) -> list[int]:
    obj = {i: [] for i in range(numCourses)}

    for crs, pre in lis:
        obj[crs].append(pre)

    def dfs(crs, visitSet=set(),traverse = set())->set[int]:
        if crs in visitSet:
            return []
        traverse.add(crs)
        if obj[crs] == []:
            return list(traverse)

        visitSet.add(crs)
        for pre in obj[crs]:
            if len(dfs(pre, visitSet)) <=0:
                return []
        visitSet.remove(crs)
        return list(traverse)

    order = []
    for crs in range(numCourses):
        outcome = dfs(crs)
        print(outcome)
        if(len(outcome)==numCourses):
            order = outcome
    return order


# lis = [[1, 0], [2, 0], [3, 1], [3, 2]]
lis = [[0,1]]
print(lis)
num = 2
print(canFinish(num, lis))
