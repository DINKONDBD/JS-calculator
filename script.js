let result;
function addtoinput(value){
    document.getElementById("osc_screen").innerHTML += value;
}
function calculate (){
    window.onerror = function (e) {
        document.getElementById("osc_screen").value = e;
    };
    result = eval(document.getElementById("osc_screen").innerHTML)
    document.getElementById("osc_screen").innerHTML = result
}
function cleartxt(){
    document.getElementById('osc_screen').value = '';
}
function removelast() {
    let rl = document.getElementById("osc_screen").innerHTML
    let rt = rl.slice(0, -1);
    document.getElementById("osc_screen").value = rt;
}
