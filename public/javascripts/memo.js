function savememostatus () {
  var memodata = {
    left : "0px",
    top : "0px",
    txt: "txt"
  };
  var memos = document.getElementsByClassName("memo");
  var memostr;
  // var memostrs="{\"memos\": [";
  var memostrs="[";
  var memoback;
  var memobacks;
  // console.log(memos);
  for (i = 0; i < memos.length; i++) {
    // console.log(memos[i].style.left);
    // console.log(memos[i].style.top);
    // console.log(memos[i].innerHTML);
    // console.log(memos[i].childNodes[0].innerHTML);
    memodata.left = memos[i].style.left
    memodata.top = memos[i].style.top
    memodata.txt = memos[i].childNodes[0].innerHTML
    memostr = JSON.stringify(memodata);
    // memoback = JSON.parse(memostr);
    // console.log(memoback)
    // console.log(memostr)
    if (i != (memos.length-1)) {
      memostrs=memostrs.concat(memostr).concat(",");
    } else {
      // memostrs=memostrs.concat(memostr).concat("]}");
      memostrs=memostrs.concat(memostr).concat("]");
      // console.log(memostrs);
      memobacks = JSON.parse(memostrs);
      // console.log(memobacks)      
    }
  }
  // console.log(document.getElementById('a12345memo').innerHTML);
  // console.log(document.getElementById('a12346memo').innerHTML);
  // document.getElementById('a1234memo').innerHTML

  return memostrs;
}
