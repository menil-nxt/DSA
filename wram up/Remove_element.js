
function removeElement(nums, val){
    let x = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] != val){
            nums[x] = nums[i];
            x = x + 1;
        }
    }
    return x ;
}

let nums = [3,5,4,3,6,8,9];
let result = removeElement(nums, 3);
console.log(result);



// this is also solution but it's take time 
// function removeElement(nums,val){
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===val){
            
//             nums.splice(i,1);
//             i--;
            
//         }
        
//     }
//      console.log(nums);
// }