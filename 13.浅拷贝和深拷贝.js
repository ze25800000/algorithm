function extendCopy(obj) {
    var c = {};
    for (var i in obj) {
        c[i] = obj[i];
    }
    return c;
}
/*******************深拷贝*********************/
/*
 var deepCopy = function (source) {
 var result = {};
 for (var key in source) {
 result[key] = typeof source[key] ==='object'? deepCoyp(source[key]) : source[key];
 }
 return result;
 }*/
var deepCopy = function (source) {
    var result = {};
    for (var key in source) {
        result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
    }
    return result;
}