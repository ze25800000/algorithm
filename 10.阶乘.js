function factorialize(num) {
    var result = 1;
    if (num < 0)return -1;
    if (num == 0 || num == 1)return 1;
    while (num) {
        result *= num--;
    }
    return result;
}
function factorialize(num) {
    if (num < 0)return -1;
    if (num == 0 || num == 1)return 1;
    if (num > 1) return num * factorialize(num - 1);
}
console.log(
    factorialize(3)
);
