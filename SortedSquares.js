/*
Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing order
*/
var sortedSquares = function(nums) {
    var arr = [];
    for(var i = 0; i < nums.length; i++){
        arr.push(nums[i] * nums[i]);
    }
    var sortedArr = arr.sort(function(a, b){return a - b});
    return sortedArr;
};

