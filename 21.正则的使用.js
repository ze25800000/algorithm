 var text = 'cat bat sat fat';
 var a = text.replace( /(.at)/g, 'word($1)');
 console.log(a);

function htmlEscape(html) {
    return html.replace(/[<>"]/g, function (match) {
        switch (match) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
        }
    })
}
console.log(htmlEscape('<div class="box">hello world</div>'));
