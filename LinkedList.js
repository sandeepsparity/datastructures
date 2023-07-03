class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  
class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  addNode(value){
     const newNode = new Node(value);
     if(this.head === null){
        this.head = newNode; 
        this.tail = newNode; 
     } else {
        this.tail.next = newNode;
        this.tail = newNode;
     }
  }

  printList(){
    let current = this.head;
    const values = []
    while(current !== null){
        values.push(current.value);
        current = current.next
    }
   return values;
  }

  search(target){
    let current = this.head;

    while(current !== null){
        if(target === current.value){
           return current;
        }
        current = current.next
    }

    return null;
  }

  removeNode(value){
    let current = this.head;
    if(current === null){
        return null;
    }

    if(current.value === value){
        this.head = this.head.next;
        if(this.head === null){
            this.tail = null; 
        }
        return value;
    }

    while(current.next !== null){
        if(value === current.next.value){
            current.next = current.next.next;
            if (current.next === null) {
                this.tail = current;
            }
            return value;
        }
        current = current.next
    }
  }
   
  reverse(){
    let prev = null;
    let current = this.head;
    console.log('current', current.value);
    let next = null;
    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      // Swap head and tail
      [this.head, this.tail] = [this.tail, this.head];
      return this.head;
  }

}


const ll = new LinkedList();
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
console.log('printList', ll.printList());

//console.log('removeNode', ll.removeNode(1));
console.log('Print List', ll.printList());
console.log('Reverse List', ll.reverse());
console.log('Print List', ll.printList());
