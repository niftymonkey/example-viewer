$(function () {
    var replacer, resizeViewers, oldResizeFunc, htmlViewer, jsViewer;

    replacer = (function(selector) { 
        return function (elt) { 
            $(selector).html(elt); 
        }
    });
    
    resizeViewers = function() {
        htmlViewer.setSize(null, window.innerHeight);
        jsViewer.setSize(null, window.innerHeight);
    };
    
    htmlViewer = new CodeMirror(replacer("#html-viewer"), { mode: "text/html", lineNumbers: true, gutter: true });
    jsViewer = new CodeMirror(replacer("#js-viewer"), { mode: "javascript", lineNumbers: true, gutter: true });
    resizeViewers();

    oldResizeFunc = window.onresize;
    window.onresize = function() {
        if(typeof oldResizeFunc === 'function') {
            oldResizeFunc();
        }
        resizeViewers();
    };
});
