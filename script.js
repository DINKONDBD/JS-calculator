let result;
function addtoinput(value){
    document.getElementById("osc_screen").value += value;
}
function calculate (){
    window.onerror = function (e) {
        alert(e);
    };
    result = eval(document.getElementById("osc_screen").value)
    document.getElementById("osc_screen").value = result
}