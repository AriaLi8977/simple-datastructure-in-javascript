//constructor:

const LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.size = 0;
  }
}

module.exports = Queue;

const restaurantOrders = new Queue();
console.log(`restaurantOrders has ${restaurantOrders.size} nodes`)


//enqueue:
enqueue(data){
    this.queue.addToTail(data);
    this.size++;
    console.log(`Added ${data}! Queue size is now ${this.size}`)
  }

//dequeue:

dequeue(){
    const data = this.queue.removeHead();
    this.size--;
    console.log(`Removed ${data}! Queue size is ${this.size}.`)
    return data;
  }

//bounded queue

constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }
  hasRoom(){
    return this.size < this.maxSize;
  }
  isEmpty(){
    return this.size===0;
  }

//avoid underflow

dequeue() {
    if(!this.isEmpty()){
    const data = this.queue.removeHead();
    this.size--;
    console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
    return data;
    }else{
      throw new Error('Queue is empty!');
    }
  }

//avoid overflow

enqueue(data) {
    if(this.hasRoom()){
    this.queue.addToTail(data);
    this.size++;
    console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    }else{
      throw new Error('Queue is full!');
    }
  }
