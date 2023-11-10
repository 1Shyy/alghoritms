//Массив случайных элементов
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
 
// console.log(randomArray)
// const index = binarySearch(6,randomArray)
// console.log('Index:'+index)
