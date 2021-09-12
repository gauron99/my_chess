// select variables
var mode = '';
var versus = '';
console.log("Hello, singleplayer JS");

var mode_sel = document.getElementById("mode") as HTMLSelectElement;
if (mode_sel !== null){
  mode = mode_sel.options[mode_sel.selectedIndex].value;
} else {
  throw Error("element by ID - 'mode' is null");
}
var versus_sel = document.getElementById("vs") as HTMLSelectElement;
if (versus_sel !== null){
  versus = versus_sel.options[versus_sel.selectedIndex].value;
} else {
  throw Error("element by ID - 'vs' is null");
}
console.log('mode:',mode,';;','vs:',versus);

const sp_settings = {
  mode: mode,
  vs: versus,
}

var b = document.getElementById("btn-la");
if(b!==null){
  b.addEventListener("click",random);
}

function random() {
  console.log("hello");
  var a = document.getElementById("btn-la");
  if (a!==null){
    a.textContent = "nope";
  }

}

export default sp_settings;