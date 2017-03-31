var email = 'zhangsan-001@gmail.com';
var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+$/;
console.log(reg.test(email));