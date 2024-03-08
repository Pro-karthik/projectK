let display = document.getElementById("disp");

function append(a){
  if(display.value === "Error"){
    display.value = "";
  }
  display.value += a;
}

function cleara(){
  display.value = "";
}

function remove(){
  if(display.value === "Error"){
    display.value = "";
    return;
  }
  let lol = display.value;
  lol = lol.slice(0,-1);
  display.value = lol;

}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}