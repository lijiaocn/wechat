var codePanel = document.getElementById("code-panel");
var jsonPanel = document.getElementById("json-panel");
var prevX;
var prevY;

var codeOptions={
    mode: 'code',
    modes: ['code'],
    onError: function (err) {
        alert(e.toString())
    }
};

var jsonOptions={
    mode: 'tree',
    modes: ['tree','code','text','view'],
    onError: function (err) {
        alert(e.toString())
    }
};

var codePanel = new JSONEditor(codePanel, codeOptions,
    {
        "usage":"input json text at here",
        "shortcut ctrl+f": "format json text",
        "shortcut ctrl+c":"compact json text",
        "shortcut ctrl+p":"show json text in right window",
        "":"",
        "说明":"输入任意格式的JSON字符串",
        "快捷键 ctrl+f":"json代码格式化",
        "快捷键 ctrl+c":"json代码压缩",
        "快捷键 ctrl+p":"在右侧树形视图中展示"
    });
var jsonPanel = new JSONEditor(jsonPanel, jsonOptions,
    {
        "usage ":"show json nodes, and you can change node's value directly",
        "shortcut ctrl+q":"sync the values in this windows to left",
        "":"",
        "说明":"查看JSON节点，直接修改节点数值",
        "快捷键 ctrl+q":"将修改同步到左侧代码编辑框中"
    });

function toView() {
    try{
        var code = codePanel.get();
        if(code ===""){
            return;
        }
        jsonPanel.set(code);
    }catch(e){
        alert(e.toString())
    }
}
function toCode() {
    try{
        var view = jsonPanel.get();
        codePanel.set(view);
    }catch(e){
        alert(e.toString())
    }
}

function onDrag(e) {
    e.dataTransfer.setData("Text",e.target.id);
    console.log("hello")
       var deltaX = e.pageX - prevX;
       var deltaY = e.pageY - prevY;
       console.log(e.pageX);
       console.log(e.pageY);
}
function allowDrop(e) {
    e.preventDefault()
}

function format() {
    try{
        var code = codePanel.getText();
        if (code ===""){
            return;
        }
        code = JSON.stringify(eval('('+code+')'),null,2);
        codePanel.setText(code);
    }catch(e){
        alert(e.toString())
    }
}
function compact() {
    try {
        var code = codePanel.getText();
        if (code === "") {
            return;
        }
        code = JSON.stringify(eval('('+code+')'));
        codePanel.setText(code);
    }catch(e){
        alert(e.toString())
    }
}

document.onkeyup =function (e) {
    if (e.ctrlKey &&  e.code=="KeyF"){
        format();
    }
    if (e.ctrlKey &&  e.code=="KeyC"){
        compact();
    }
    if (e.ctrlKey &&  e.code=="KeyP"){
        toView();
    }
    if (e.ctrlKey &&  e.code=="KeyQ"){
        toCode();
    }
};
