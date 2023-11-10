function createArray(a) {
    let randomArray = Array(a)
    for (let i=0; i  < randomArray.length;i++){
       randomArray[i] = Math.round(Math.random()*10)
    
    }
    return(randomArray)
    }

function insertionSort(array) {
    for (let i = 1; i<array.length;i++) {   
        const current = array[i]
        let j = i
        while (j>0 && array[j-1] > current) {
         array[j]=array[j-1]
         j--
        }
        array[j]=current

 
    }return array
}

const selectionSort = array => {
    for (let i = 0, l = array.length, k = l - 1; i < k; i++) {
        let indexMin = i
        for (let j = i + 1; j < l; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j
            }
        }
        if (indexMin !== i) {
            [array[i], array[indexMin]] = [array[indexMin], array[i]]
        }
    }return array
}

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }

    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
    const half = array.length / 2
    
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }
  function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };
let array = new createArray(10)
console.log(array)
console.log(quicksort(array))


