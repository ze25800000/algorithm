var Chinese = {
    nation: '中国'
};
var Doctor = {
    career: '医生'
};
function extendCopy(obj) {
    var c = {};
    for (var i in obj) {
        c[i] = obj[i];
    }
    return c;
}

/*
 function Person() {
 this.name = 1;
 }
 Person.prototype.age = 123;

 var o = new Person();

 for (var i in o) {
 if (!o.hasOwnProperty(i)) {
 continue;
 }
 console.log(i);
 }*/
