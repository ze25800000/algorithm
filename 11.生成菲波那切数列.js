function getfib(i) {
    if (i == 0) return 0;
    if (i == 1) return 1;
    if (i > 1) return getfib(i - 1) + getfib(i - 2);
}
function fibo(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(getfib(i))
    }
    return arr;
}



function getFibonacci(n) {
    var fibarr = [];
    var i = 0;
    while (i < n) {
        if (i <= 1) {
            fibarr.push(i);
        } else {
            fibarr.push(fibarr[i - 1] + fibarr[i - 2]);
        }
        i++;
    }
    return fibarr;
}
console.log(
    getFibonacci(15)
);
