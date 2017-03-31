var docs = [
    {id: 1, words: ['hello', 'world']},
    {id: 2, words: ['hello', 'kids']},
    {id: 3, words: ['zzzz', 'hello']},
    {id: 4, words: ['world', 'kids']}
];
function findDocList(docs, arr) {
    var idList = [];
    var obj = {};
    for (var i = 0; i < docs.length; i++) {
        var words = docs[i].words;
        var id = docs[i].id;
        for (var j = 0; j < arr.length; j++) {
            if (words.indexOf(arr[j]) == -1) {
                obj[id] = false;
                break;
            } else {
                obj[id] = true;
            }
        }
    }
    for (var k in obj) {
        if (obj[k]) {
            idList.push(k)
        }
    }
    console.log(idList);
}
findDocList(docs, ['world', 'hello']);
