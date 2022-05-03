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
