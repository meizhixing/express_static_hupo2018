var mydragg = function(){
  return {
    move : function(divid,xpos,ypos){
      divid.style.left = xpos + 'px';
      divid.style.top = ypos + 'px';
    },
    startMoving : function(divid,container,evt){
      evt = evt || window.event;
      var posX = evt.clientX,
          posY = evt.clientY,
          divTop = divid.style.top,
          divLeft = divid.style.left,
          eWi = parseInt(divid.style.width),
          eHe = parseInt(divid.style.height),
          cWi = parseInt(document.getElementById(container).style.width),
          cHe = parseInt(document.getElementById(container).style.height);
          document.getElementById(container).style.cursor='move';
          divTop = divTop.replace('px','');
          divLeft = divLeft.replace('px','');
      var diffX = posX - divLeft,
          diffY = posY - divTop;
      document.onmousemove = function(evt){
        evt = evt || window.event;
        var posX = evt.clientX,
        posY = evt.clientY,
        aX = posX - diffX,
        aY = posY - diffY;
        if (aX < 0) aX = 0;
        if (aY < 0) aY = 0;
        if (aX + eWi > cWi) aX = cWi - eWi;
        if (aY + eHe > cHe) aY = cHe -eHe;
        mydragg.move(divid,aX,aY);
      }
    },
    stopMoving : function(container){
      var a = document.createElement('script');
      document.getElementById(container).style.cursor='default';
      document.onmousemove = function(){}
    },
  }
}();


function touch(divid,event){
    var x,y;
    var event = event || window.event;
    switch(event.type){
    case "touchstart":
        console.log(event.changedTouches[0]);
        x = parseInt(event.touches[0].clientX);
        y = parseInt(event.touches[0].clientY);
        break;
    case "touchend":
        console.log(event.changedTouches[0]);
        y =  parseInt(event.changedTouches[0].clientY);
        x = parseInt(event.changedTouches[0].clientX);
        divid.style.top = y-50+"px";
        divid.style.left = x-50+"px";
        break;
    case "touchmove":
        event.preventDefault();
        y =  parseInt(event.touches[0].clientY);
        x = parseInt(event.touches[0].clientX);
        divid.style.top = y-50+"px";
        divid.style.left = x-50+"px";
        break;
    }
};

function worldload() {
  // var divindex = 0;
  // var theworld = document.getElementById('navigation');
  // var node = theworld.nextSibling;
  // for (var i=0; i<=10; i++) {
  // oDiv = document.createElement('div');
  // memocontent="adding dom elements according to dataum-"+i;
  // oDiv.innerHTML = "<div id='memo"+divindex+"'>"+memocontent+"</div>";
  // theworld.parentNode.insertBefore(oDiv, node);
  // divindex=divindex+1;
  // node=oDiv.nextSibling;
  // }

  // console.log(document.getElementById("worldcontainer").childNodes);
  // console.log(document.getElementsByClassName("memo"));

  // console.log(document.getElementById("memo").childNodes);
  
  saveallstatus()
};


function saveallstatus() {
    var memostrs;
    var blackboardstrs;

    var allstrs="{";

    memostrs = savememostatus();
    allstrs = allstrs.concat("\"memos\": ").concat(memostrs).concat(",");

    blackboardstrs = saveblackboardstatus();
    allstrs = allstrs.concat("\"blackboards\": ").concat(blackboardstrs);

    allstrs = allstrs.concat("}")
    //console.log(memostrs);
    // console.log(memostrs.length);
    // console.log(blackboardstrs.length);
    //console.log(blackboardstrs);
    console.log(allstrs);
    if (memostrs.length>0 || blackboardstrs.length>0) {
	console.log(JSON.parse(allstrs));
    }
}


// function savememostatus () {
//   var memodata = {
//     left : "0px",
//     top : "0px",
//     txtid: "0"
//     txt: "txt"
//   };
//   var memos = document.getElementsByClassName(divname);
//   for (i = 0; i < memos.length; i++) {
//     //console.log(memos[i].style.left);
//     //console.log(memos[i].style.top);
//     //console.log(memos[i].innerHTML);
//     memodata.left = memos[i].style.left
//     memodata.top = memos[i].style.left
//     memodata.txtid = memos[i].innerHTML.
//     memodata.txt = document.getElementById(memos[i].txtid).innerHTML
//     var memostr = JSON.stringify(memodata);
//     console.log(memostr)
//     var memoback = JSON.parse(memostr)
//     console.log(memoback)

//   }
//   console.log(document.getElementById('a12345memo').innerHTML);
//   console.log(document.getElementById('a12346memo').innerHTML);

// }

function savescene(userid,sceneid) {
    var memostrs;
    memostrs = savememostatus();
    console.log(memostrs);
    console.log(userid);
    console.log(sceneid);

}

