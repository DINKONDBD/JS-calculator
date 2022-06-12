let result;
function addtoinput(value){
    document.getElementById("osc_screen").value += value;
}
function calculate (){
    window.onerror = function (e) {
        document.getElementById("osc_screen").value = e;
    };
    result = eval(document.getElementById("osc_screen").value)
    document.getElementById("osc_screen").value = result
}
function cleartxt(){
    document.getElementById('osc_screen').value = '';
}
function removelast() {
    let rl = document.getElementById("osc_screen").value
    let rt = rl.slice(0, -1);
    document.getElementById("osc_screen").value = rt;
}
