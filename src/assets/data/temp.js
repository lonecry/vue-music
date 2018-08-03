两个按钮绑定同一个事件
plugin.addEvent('FileDialogInfo', func);
function func(){
    if (1) {
        console.log(11)
    }
    else if (2) {
        console.log(222)
    }
}
/*
点击不同的按钮触发这个事件打印不同的内容
这个是不行的吧*/
