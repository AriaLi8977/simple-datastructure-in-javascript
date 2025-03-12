class Node {
	//constructor is a method that will run when an instance of the class is first created
  constructor(data){ 
    this.data = data;
    this.next = null;
  }
  setNextNode(node){
    if(node instanceof Node || node === null){
      this.next = node;
    }else{
      throw new Error('not a node');  
    }
  }
    getNextNode(){
    return this.next;
  }
}

const firstNode = new Node(99); //This is the first instance
console.log(firstNode.data); //result is 99
console.log(firstNode.next); //result is null
module.exports = Node;
