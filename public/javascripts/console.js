var commlist ={
  pwd : "",
  ls: "",
  cd : "",
  find : "",
  open: ""
};

function processcommand() {
  // alert("work");
  commandcontentcache = commandcontent.innerHTML;
  commandcontent.innerHTML = ""
  consolecontent.innerHTML = commandcontentcache;
  console.log(commandcontentcache);
};


