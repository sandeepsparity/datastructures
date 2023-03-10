//Write a JavaScript program to create and display Singly Linked List.

class Node {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head
    }

    add(newNode){
        let node = this.head;
        if(node === null){
            this.head = newNode;
            return;
        }
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }
    displayList(){
        let node = this.head;
        let str = ""
        while (node) {
            str += node.data + "->";
            node = node.next;
        }
        str += "NULL"
        console.log(str); 
        return str; 
    }

    displayNode(className ='node'){
        let node = this.head;
        let str = ""
        let count = 0;
        while (node) {
            str += `<div class="node-${count}">
                       <div class='node-wrapper'> 
                            <div class="${className}">${node.data} </div> 
                            <span class="arrow"></span>
                        </div>
                </div>`;
            node = node.next;
            count += 1;
        }
        str += "<div class='node-content'>NULL</div>"
        return str; 
    }
}

let numList = new SinglyLinkedList();
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
numList.displayList();


document.getElementById('linked-list').innerHTML = numList.displayNode();

function add(){
    let result = window.prompt("please enter the node value");
    if(result){
        numList.add(new Node(result));
        document.getElementById('linked-list').innerHTML = numList.displayNode();
    }
}
