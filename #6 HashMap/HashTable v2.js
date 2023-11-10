const hashTableSize = 32;

class HashTable {
  constructor() {
    this.table = Array(hashTableSize).fill(null);
  }

  hash(key) {
    let hash = Array.from(key).reduce((sum, key) => {
      return sum + key.charCodeAt(0);
    }, 0);
    return hash % hashTableSize;
  }

  set(key, value) {
  
    let index = this.hash(key);

 
    if (!this.table[index]) {
      this.table[index] = new LinkedList();
    }

    let list = this.table[index];
    
    let node = list.find((nodeValue) => {
      nodeValue.key === key;
    });

    if (node) {
      node.value.value = value; 
    } else {
      list.append({ key, value }); 
  }
}

  get(key) {
    
    let index = this.hash(key);
    
    let list = this.table[index];

    if (!list) return undefined;

    
    let node = list.find((nodeValue) => {
      return nodeValue.key === key;
    });

    if (node) return node.value.value;
    return undefined;
  }

    delete(key) {
    let index = this.hash(key);
    let list = this.table[index];

    if (!list) return;

    let node = list.find((nodeValue) => nodeValue.key === key);
    if (!node) return;

    list.delete(node.value);
  }
}



     class LinkedListNode {
        constructor(value, next = null) {
            this.value = value
            this.next = next
        }
    
        toString(callback) {
           return callback ? callback(this.value) : `${this.value}`;
        }
    
    }
    
    class LinkedList {
        constructor() {
            this.head = null 
            this.tail = null
        }
    
        prepend(value) {
         const newNode = new LinkedListNode(value, this.head)
         this.head = newNode
         if(!this.tail){
             this.tail = newNode
         } return this
        }
       
        append(value) {
          const newNode = new LinkedListNode(value)
          if (!this.head && !this.tail) {
              this.head = newNode
              this.tail = newNode
    
              return this
          }
          this.tail.next = newNode
          this.tail = newNode
        }
        delete(value){
        if(!this.head) {
          return null
        }
        let deletedNode = null
        while(this.head && this.head.value === value){
            deletedNode = this.head
            this.head = this.head.next
        }
        let currentNode = this.head
        if(currentNode!==null) {
            while(currentNode){
                if(currentNode.next.value === value){
                    deletedNode = currentNode.next
                    currentNode.next = currentNode.next.next
                }
                else {currentNode = currentNode.next}
            }
        }
        if(this.tail && this.tail.value === value){
            this.tail = currentNode
    
        }
        return deletedNode
       }
    
       find(value){
           if(!this.head) {
               return null
           }
           while(currentNode){
               if(value !== undefined && currentNode.value === value){
                   return currentNode
               }
               currentNode = currentNode.next
           }
           return null
       } 
    
       deleteTail() {
           if(!this.tail){
               return null
           }
           const deletedNode = this.tail
           let currentNode = this.head 
           while(currentNode.next) {
               if(!currentNode.next.next){
                   currentNode.next = null
               }else {currentNode = currentNode.next}
           }
           this.tail = currentNode
           return deletedNode
       }
       deleteHead() {
           if(!this.head){
               return null
           }
           const deletedNode = this.head
           if(this.head.next){
           this.head = this.head.next
           } else {
               this.head = null
               this.tail = null
           }
           return deletedNode
       }
       fromArray(array) {
           array.forEach(value => this.append(value))
           return this
       }
       toArray(){
           if(!this.head){
               return null
           }
           const nodes = []
           let currentNode = this.head
           while(currentNode) {
               nodes.push(currentNode.value)
               currentNode=currentNode.next
           }
           return nodes
       }
       sort(){
           if(!this.head){
               return null
           }
           
       }
       
    
    }