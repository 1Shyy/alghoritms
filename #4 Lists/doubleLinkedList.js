    function createArray(a) {
    let randomArray = Array(a)
    for (let i=0; i  < randomArray.length;i++){
       randomArray[i] = Math.round(Math.random()*10)
    
    }
    randomArray.sort(function(a,b){
        return a-b
    })
    return(randomArray)
    }
    
    function itemFound(array,item) {
        const index = array.indexOf(item)
        if(index>=0){
            return(index) 
        } else {return('Элемент не принадлежит массиву')} 
    }
    
    function deleteItem(item, array) {
       const index = array.indexOf(item)
       array.splice(index, 0) 
    }
    
    function addItem(index, item, array) {
        array.splice(index, 0, item) 
     }
    
    function binarySearch(item,array) {
      let found = false
      let first = 0
      let last = array.length - 1
      let index = -1
      let middle
      while (found === false && first<=last) {
          middle = Math.floor((first+last)/2)
          if(array[middle] == item ){
              found = true
              index = middle
          } else if(array[middle] > item) {
              last = middle - 1
          } else { first = middle + 1}
    
      }
      return index 
     } 
     class DoubleLinkedListNode {
        constructor(value, next = null, previous = null) {
            this.value = value
            this.next = next
            this.previous = previous
        }
    
        toString(callback) {
           return callback ? callback(this.value) : `${this.value}`;
        }
    
    }
    
    class DoubleLinkedList {
        constructor() {
            this.head = null 
            this.tail = null
        }
    
        prepend(value) {
         const newNode = new DoubleLinkedListNode(value, this.head)
         if(this.head){
             this.head.previous = newNode
         }
         this.head = newNode
         if(!this.tail){
             this.tail = newNode
         } return this
        }
       
        append(value) {
          const newNode = new DoubleLinkedListNode(value)
          if (!this.head && !this.tail) {
              this.head = newNode
              this.tail = newNode
    
              return this
          }
          this.tail.next = newNode
          newNode.previous = this.tail
          this.tail = newNode
        }
        delete(value){
        if(!this.head) {
          return null
        }
        let deletedNode = null
        let currentNode = this.head

        while(this.head && this.head.value === value){
            deletedNode = this.head
            this.head = this.head.next
            this.head.previous = null
        }
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
            this.tail.next = null
    
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
           this.head.previous = null
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
       sorting() {
           const loop = this.toArray()
           loop.sort(function(a,b){
               return a-b
           })
           while(this.head){
               this.deleteHead()
           }
           this.fromArray(loop)
       }
    //    sort(){
    //        if(!this.head){
    //            return null
    //        }
    //        swap = null
    //        currentNode = this.head.next
    //     //    checkingNode = 
    //        while(currentNode){

              
    //        }
    //    } 
       
    
     }
    const array =[1,20,11,4,0,6,9,8]
    const loop = new DoubleLinkedList
    loop.fromArray(array)
    console.log(loop.toArray())
    loop.sorting()
    console.log(loop.toArray())
    // console.log(loop)
    // console.log(randomArray)
    // const index = binarySearch(6,randomArray)
    // console.log('Index:'+index)