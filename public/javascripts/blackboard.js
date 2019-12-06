function saveblackboardstatus () {
  var blackboarddata = {
    left : "0px",
    top : "0px",
    txt: "txt"
  };
  var blackboards = document.getElementsByClassName("blackboard");
  var blackboardstr
  // var blackboardstrs="{\"blackboards\": [";
  var blackboardstrs="";
  var blackboardback;
  var blackboardbacks;
  // console.log(blackboards);
  for (i = 0; i < blackboards.length; i++) {
    // console.log(blackboards[i].style.left);
    // console.log(blackboards[i].style.top);
    // console.log(blackboards[i].innerHTML);
    // console.log(blackboards[i].childNodes[0].innerHTML);
    blackboarddata.left = blackboards[i].style.left
    blackboarddata.top = blackboards[i].style.top
    blackboarddata.txt = blackboards[i].childNodes[0].innerHTML
    blackboardstr = JSON.stringify(blackboarddata);
    // blackboardback = JSON.parse(blackboardstr);
    // console.log(blackboardback)
    // console.log(blackboardstr)
    if (i==0 && blackboards.length >= 1) {
    blackboardstrs="[";
    }
    if (i != (blackboards.length-1)) {
      blackboardstrs=blackboardstrs.concat(blackboardstr).concat(",");
    } else {
      // blackboardstrs=blackboardstrs.concat(blackboardstr).concat("]}");
      blackboardstrs=blackboardstrs.concat(blackboardstr).concat("]");
      // console.log(blackboardstrs);
      blackboardbacks = JSON.parse(blackboardstrs);
      // console.log(blackboardbacks)      
    }
  }
  return blackboardstrs;
}
