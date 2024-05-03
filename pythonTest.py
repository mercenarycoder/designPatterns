str= "Hi I am kiran my personal email id is kiran@gmail.com my secondary email id is kiran@yahoo.co.in and my official email id is kiran@microsoft.com my phone number is 7389438159 "

def emailPhoneNumberFetcher(str):
    arr = str.split(" ")
    obj = {}
    analyse = ["email","phone","name"]
    for i in range(0,len(arr)):
        if(analyse):
            key = arr[i-1]
            value = arr[i+3]
            obj[key] = value
    print(obj)
    return obj

# emailPhoneNumberFetcher(str)
lis = []
for i in range(30):
    lis.insert(i,i)

#  1, 10, 20
print(lis[0:len(lis):10])

# frontend -> bff -> ngnix -> backend
class Node:
    def __init__(self,val) -> None:
        self.val = val
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self) -> None:
        self.root = None
    
    def add(self,value):
        node = self.root
        if(node == None):
            self.root = Node(value)
            return
        else:
            self.addingNode(node,value)
            pass

    def addingNode(self, node,value):
        if(value > node.val):
            if(node.right == None):
                node.right = Node(value)
                return
            else:
                self.addingNode(node.right,value)
        else:
            if(node.left == None):
                node.left = Node(value)
                return
            else:
                self.addingNode(node.left,value)