/*
 function binarySeach(arr, val, leftIndex, rightIndex) {
 //找到中间的值
 var midIndex = Math.floor((leftIndex + rightIndex) / 2);
 var midval = arr[midIndex];
 //console.log(midval );
 if (leftIndex > rightIndex) {
 console.log("前一位是", midval);
 console.log("下标：", midIndex);
 return;
 }
 if (midval > val) {
 binarySeach(arr, val, leftIndex, midIndex - 1);
 } else if (midval < val) {
 binarySeach(arr, val, midIndex + 1, rightIndex);
 } else {
 console.log("找到了,下标为:" + midIndex);
 return;
 }
 }
 */

function binary_search(arr, key) {
    var low = 0, height = arr.length - 1;
    while (low <= height) {
        var mid = parseInt((low + height) / 2);
        if (key == arr[mid]) {
            return mid;
        } else if (key < arr[mid]) {
            height = mid - 1;
        } else if (key > arr[mid]) {
            low = mid + 1;
        }
    }
    return -1;
}

var arr = [1, 3, 12, 21, 24, 44, 54, 67];
console.log(
    binary_search(arr, 24)
);
