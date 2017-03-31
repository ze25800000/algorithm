function getMaxProfit(arr) {
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
        if (max < arr[i]) max = arr[i];
    }
    return max - min;
}
var arr = [1, 23, 44, 632, 1, 76];
console.log(getMaxProfit(arr));
