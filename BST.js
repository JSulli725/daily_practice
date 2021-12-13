/* Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity. */

/* ARRAY BINARY SEARCH
O(log n) */

var search = function(nums, target){
    var left = 0;
    var right = nums.length - 1;
    var middle = Math.floor(left + ((right - left) / 2));
    
    while(left <= right){
        if(nums[middle] == target){
            console.log("returned middle: " + middle);
            return middle;
        }
        if(nums[left] == target){
            console.log("returned left: " + left);
            return left;
        }
        if(nums[right] == target){
            console.log("returned right: " + right);
            return right;
        }
        if(target < nums[middle]){
            right = middle - 1;
            left += 1;
        }
        if(target > nums[middle]){
            left = middle + 1;
        }
    }
    console.log("target not in array");
    return -1;
}