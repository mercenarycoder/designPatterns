class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.root = null;
    }
    add(val){
        if(this.root === null){
            this.root = new Node(val);
            return;
        }
        let start = this.root;
        while(start.next!== null){
            start= start.next;
        }
        start.next = new Node(val);
        return;
    }
    remove(val){
        let start = this.root;
        if(start.val === val){
            this.root = start.next;
            return;
        }
        while(start.next!==null){
            if(start.next.val===val){
                start.next=start.next.next;
                return true;
            }
            start=start.next;
        }
        return false;
    }
    traverse(){
        let start = this.root;
        let answer = [];
        while(start!==null){
            answer.push(start.val);
            start = start.next;
        }
        console.log(answer);
        return;
    }
    deleteDuplicates = function(head = this.root) {
        while(head!==null){
            if(head.next!==null && head.val === head.next.val){
                head.next = head.next.next;
                continue;
            }
            head = head.next;
        }
    };
    //use normal 2 pointer approach to solve this
    middleNode = function(head = this.root,prev=null) {
        let slow = head;
        let fast = head;
        console.log(prev);
        while(fast!==prev && fast.next!==prev){
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log(slow.val);
        return slow;
    };
   
    mergeSorted = function(head1,head2){
        let result = new LinkedList();
        while(head1!==null && head2!== null){
            if(head1.val > head2.val){
                result.add(head2.val);
                head2 = head2.next;
            }
            else if(head1.val <= head2.val){
                result.add(head1.val);
                head1 = head1.next;
            }
        }
        while(head1!==null){
            result.add(head1.val);
            head1 = head1.next;
        }
        while(head2!==null){
            result.add(head2.val);
            head2 = head2.next;
        }
        result.traverse();
        return result;
    }

    sortList(head,prev=null){
        if(head == null || head.next == null){
            return head;
        }
        let middle = this.middleNode(head,prev);
        console.log(middle.val);
        let left  = this.sortList(head,middle);
        let right = this.sortList(middle,null);
        return this.mergeSorted(left,right);
    }
    reverseLinkedList(head = this.root){
        let prev = null;
        let curr = head;
        let next = head;
        while(next!==null){
            console.log(next.val);
            curr = next;
            next = next.next;
            curr.next = prev;
            prev = curr;
        }
        this.root=prev;
        this.traverse();
    }
    palindrome(head = this.root){
        if(head.next==null){
            return true;
        }
        let queue = [];
        let prev = null;
        let curr = head;
        let next = head;
        while(next!==null){
            queue.push(next.val);
            curr = next;
            next = next.next;
            curr.next = prev;
            prev = curr;
        }
        //now to linked list has reversed
        while(prev!==null){
            let element = queue.shift();
            if(element == prev.val){
                prev = prev.next;
            } else{
                return false;
            }
        }
        return true;
    }
    reverseLinkedBetween(head = this.root, start, end){
        
    }
}


let elements = [1,2,2,4];
let element2 = [3,6,8];
let list = new LinkedList();
let list2 = new LinkedList();
for(let i=0; i<elements.length; i++){
    list.add(elements[i]);
}
for(let i=0; i<element2.length; i++){
    list2.add(element2[i]);
}
// list.sortList(list.root);
// list.reverseLinkedList();
console.log(list.palindrome());
// list.traverse();
// list.traverse();
// list.deleteDuplicates();
// list.traverse();
// list.middleNode();
// let merged = new LinkedList().mergeSorted(list.root,list2.root);
// merged.traverse();