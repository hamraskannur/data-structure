class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    push(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
        
    }
    
    pop(){
        if(!this.head)return null
        let temp=this.head
        if(this.head===this.tail){
            this.tail=null
        }
        this.head=this.head.next
        return temp.value
    }

    console(){
        let cur=this.head
        while(cur){
            console.log(cur.value);
        cur=cur.next
        }
    }
}

const stack=new LinkedList()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(6)
stack.push(4)
stack.push(5)
console.log(stack.pop())
stack.console()

