//Constructor
const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}
//Add to Head:

addToHead(data){
    const newHead = new Node(data);
    const currentHead = this.head;
    if(currentHead){
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if(!this.tail){ //if there was no tail before, the list was empty
      this.tail = newHead;
    }
  }

//Add to Tail:

addToTail(data){
    const newTail = new Node(data);
    const currentTail = this.tail;
    if(currentTail){
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    } 
    this.tail = newTail;
    if(!this.head){
      this.head = newTail;
    }
  }

//Remove Head:

removeHead(){
    const removedHead = this.head;
    if(!removedHead){
      return;
    }
    this.head = removedHead.getNextNode();
    if(this.head){
      this.head.setPreviousNode(null);
    }
    if(removedHead === this.tail){ 
      this.removeTail();
    }
    return removedHead.data;
  }

//Remove Tail:

removeTail(){
    const removedTail = this.tail;
    if(!removedTail){
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if(this.tail){
      this.tail.setNextNode(null);
    }
    if(removedTail === this.head){
      this.removeHead();
    }
    return removedTail.data;
  }

//Remove By Data:

removeByData(data){
    let nodeToRemove;
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.data === data){
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if(!nodeToRemove){
      return null;
    }
    if(nodeToRemove === this.head){
      this.removeHead();
   }else if(nodeToRemove === this.tail){
      this.removeTail();
   }else{ //meaning we're removing node in the 
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  }



module.exports = DoublyLinkedList;

