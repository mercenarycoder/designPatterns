class minStack{
    constructor(){
        this.elements=[];
        this.min= [];
    }
    push(ele){
        if(this.getMinTop()>ele){
            this.min.push(ele);
        }
        this.elements.push(ele);
    }
    pop(){
        let element = this.elements.pop();
        if(this.getMinTop() === element){
            this.min.pop();
        }
        return element;
    }
    getMinTop(){
        let ele = this.min.pop();
        this.min.push(ele);
        return ele;
    }
}
//O(1)
//O(n)