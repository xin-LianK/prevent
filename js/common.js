window.onload=function(){
    document.onkeydown=function(){
        var e = window.event||arguments[0];
        if(e.keyCode==123){
            //禁止F12
            return false;
        }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
            //禁止ctrl+shift+i
            return false;
        }else if((e.ctrlKey)&&(e.keyCode==85)){
            //禁止ctrl+u
            return false;
        }else if((e.ctrlKey)&&(e.keyCode==83)){
            //禁止ctrl+s
            return false;
        }
    };
    document.oncontextmenu=function(){
        //禁止右击
        return false;
    };
    document.onselectstart=function(){
        //禁止内容被选中
        return false;
    };
    document.ondragstart=function(){
        //禁止拖动元素
        return false;
    };
    document.onbeforecopy=function(){
        //禁止拖动元素
        return false;
    };
    document.oncopy=function(){
        //禁止文本复制
        return false;
    };
    document.onselect=function(){
        //禁止input,textarea的value被复制
        return false;
    };
}