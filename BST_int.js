/* IS BAD VERSION Leetcode challenge day 1

You are a product manager and currently leading a team to develop a new product.
Unfortunately, the latest version of your product fails the quality check.
Since each version is developed based on the previous version,
all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad.
Implement a function to find the first bad version.
You should minimize the number of calls to the API.
 */

/* passes a version (integer) into a function that calls a pretend API that returns T or F based on if the version is bugged.
Write a BST that can easily parse through a very large number to call the API to quickly find the earliest version that isn't bugged
(that isBadVersion() returns false on) */

var solution = function(isBadVersion) {
    return function(n) {
        var left = 1;
        var right = n;
        var middle = Math.floor(left + ((right - left) / 2));
        
        while(left < right){
            console.log(isBadVersion(middle));
            if(isBadVersion(middle)){
                right = middle;
            } else {
                left = middle + 1;
            }
        return left;
        }
    };
};