function newmemo(){
    var txt="<div id=\"note_2\" \
        onmousedown=\'mydragg.startMoving(this,\"worldcontainer\",event)\' \
        onmouseup=\'mydragg.stopMoving(\"worldcontainer\")\' \
        ontouchstart=\'touch(this,event)\' \
        ontouchend=\'touch(this,event)\' \
        ontouchmove=\'touch(this,event)\' \
        contenteditable=\"true\" \
        style=\"position:absolute;left:320px;top:160px\" \
        class=\"memo boxeffect2\" \
        ><pre><\pre></div>";
    $("#worldcontainer").append(txt);
};

