var strvalue = 'asdfas xzcvius8a;alsfkjpixuvc  aspoidfjiuvc;kjdffasd8ubdfgpoo1208';
var positions = [];
var pos = strvalue.indexOf('a');
while (pos > -1) {
    positions.push(pos);
    pos = strvalue.indexOf('a', pos + 1)
}
console.log(positions)