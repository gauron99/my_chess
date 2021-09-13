// select variables
var mode = '';
var versus = '';

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

function onLoad() {
  console.log("yoyooooooooooo");
}

export default sp_settings;