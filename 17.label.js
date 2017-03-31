//continue 和 break 配合label使用
var num = 0;
label:for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            continue label;
        }
        num++;
    }
}
console.log(num);
