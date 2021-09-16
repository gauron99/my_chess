let sp_settings = {
  mode: '',
  vs: '',
}

let mode_sel = document.getElementById("mode") as HTMLSelectElement;
let versus_sel = document.getElementById("vs") as HTMLSelectElement;

// if theres already settings in local storage, use it
const tmpStr = localStorage.getItem('settings');
if(tmpStr !== null){
  sp_settings = JSON.parse(tmpStr);
  mode_sel.value = sp_settings.mode;
  versus_sel.value = sp_settings.vs;
} else {

  if (mode_sel !== null){
    sp_settings.mode = mode_sel.value;
  } else {
    throw Error("element by ID - 'mode' is null");
  }
  if (versus_sel !== null){
    sp_settings.vs = versus_sel.value; 
  } else {
    throw Error("element by ID - 'vs' is null");
  }
}

console.log('init:',sp_settings);

// add event listener for selects "mode" & "vs"
mode_sel.addEventListener("change", () => {
  sp_settings.mode = mode_sel.value;
  localStorage.setItem('settings',JSON.stringify(sp_settings));
  console.log('changed:',sp_settings);
});

versus_sel.addEventListener("change", () => {
  sp_settings.vs = versus_sel.value;
  localStorage.setItem('settings',JSON.stringify(sp_settings));
  console.log('changed:',sp_settings);
});

// default -- save settings to local storage to be retrieved later
localStorage.setItem('settings',JSON.stringify(sp_settings));
