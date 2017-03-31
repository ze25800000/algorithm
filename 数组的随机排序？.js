var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function randsort1(arr) {
    for (var i = 0; i < arr.length; i++) {
        var rand = Math.floor(Math.random() * arr.length);
        var tmp = arr[rand];
        arr[rand] = arr[i];
        arr[i] = tmp;
    }
    return arr;
}
console.log(randsort1(arr));


function randsort2(arr) {
    var a = [];
    while (arr.length > 0) {
        var rand = Math.floor(Math.random() * arr.length);
        a.push(arr[rand]);
        arr.splice(rand, 1);
    }
    return a;
}
console.log(randsort2(arr));


arr.sort(function () {
    return Math.random() - 0.5;
});
console.log(arr);



