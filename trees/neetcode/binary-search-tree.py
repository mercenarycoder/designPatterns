class Node:
    def __init__(self,value) -> None:
        self.value = value
        self.left = None
        self.right = None
    
class binarySearchTree:
    def __init__(self):
        self.root = None
    
    def insert(self, value):
        if self.root is None:
            self.root = Node(value)
        else:
            def searchNInsert(node):
                if value < node.value:
                    if node.left == None:
                        node.left = Node(value)
                    else:
                        searchNInsert(node.left)
                elif value > node.value:
                    if node.right == None:
                        node.right = Node(value)
                    else:
                        searchNInsert(node.right)
                else:
                    return None
            searchNInsert(self.root)     
    def traverse(self):
        node = self.root
        def dfs(node):
            if node == None:
                return
            if node.left: dfs(node.left)
            if node.right: dfs(node.right)
            print(node.value)
        dfs(node)
    
    def isBalanced(self):
        node = self.root
        def dfs(node):
            if node is None: return [True,0]
            left, right = dfs(node.left), dfs(node.right)
            balanced = ((left[0]) and (right[0]) and abs(left[1]-right[1]) <=1)
            return [balanced,1+max(left[1],right[1])]
        return dfs(node)
        
    def remove(self,value):
        node = self.root
        if node is None:
            return None
        def removeNode(value,node):
            if node is None:
                return None
            if value == node.data:
                if node.left is None and node.right is None:
                    return None
                
                if node.left is None:
                    return node.right
                if node.right is None:
                    return node.left
                
                temp = node.right
                while(temp.left is not None):
                    temp = temp.left
                node.value = temp.value
                node.right = removeNode(temp.value,node.right)
                return node
            elif value < node.value:
                node.left = removeNode(value, node.left)
            else:
                node.right = removeNode(value,node.right)
        removeNode(value,node)

        
arr = [3,9,20,15,7]
bst = binarySearchTree()
for i in arr:
    bst.insert(i)

print(bst.isBalanced())

