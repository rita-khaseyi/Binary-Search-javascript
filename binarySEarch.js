function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }
  array =  [45,12,6,89,2,5]
console.log(mergeSort(array));
//finding the target
function binary(arr,target){
    let left=0;
    let right=arr.length -1;
   
    
    
    while(left<=right){
       
        let middle= Math.floor((left+right)/2);
        if (arr[middle]===target) {
            return middle;
            
        }
        else if (arr[middle]>target) {
            right=middle -1
            
        }
        else{
            left=middle+1
        }
    }
    return null
    
    
    }
    let num=mergeSort(array)
    let target=6
    console.log(binary(num.indexOf(6)))

    //return array in descending order
    function merge(leftIndex,rightIndex) {
        let sortedarr=[]
        while (leftIndex.legth && rightIndex.length) {
            if (leftIndex[0]>rightIndex[0]) {
                sortedarr.push(leftIndex.shift())
                
            }
            else{
                sortedarr.push(rightIndex.shift())
            }
        }
            return[...sortedarr, ...leftIndex, ...rightIndex ]
    }
    function mergeSort(arr) {
        let mid=Math.floor(arr.length/2)
        if (arr.length<2) {
            return arr
            
        }
        let leftIndex=mergeSort(arr.slice(0,mid))
        let rightIndex=mergeSort(arr.slice(mid))
        return merge(leftIndex,rightIndex)


        
    }
    let arr=[123,89,5,23,9,56]
    console.log(mergeSort(arr))

    function merge(left,right) {
        let sortednum2=[]
        while (left.length && right.length) {
            if (left[0]<right[0]) {
                sortednum2.push(left.shift())
                
            }
            else{
                sortednum2.push(right.shift())
            }
            
        }
        return[...sortednum2, ...left, ...right]
        
    }
    function mergeSort(arr2) {
        let middle=Math.floor(arr2.length/2)
        if (arr2.length<2) {
            return arr2
            
        }
        let left=mergeSort(arr2.slice(0,middle))
        let right=mergeSort(arr2.slice(middle))
        return merge(left,right)
        
    }
    let arr2=[1,4,78,2,67,3]

    function binary(arr,target) {
        let left=0;
        let right=arr.length -1;
        while (left<=right) {
            let middle=Math.floor((left+right)/2)
            if (arr[middle]===target2) {
                return middle
                
            }
            else if(arr[middle]>target2){
                right=middle-1
            }
            else{
                left=middle+1
            }
            
        }
        return -1
        
    }
    let target2=34;
    console.log(binary(arr,target2));
           
            
        
        
    













