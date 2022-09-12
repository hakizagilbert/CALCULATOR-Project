// this fuction is for clearing the scren
function clearScreen()
{
document.getElementById("result").value = "";
}

//this function is for displaying the values

function display(value)
{
document.getElementById("result").value += value;
}

//this fuction is for creating the matheamatical calculations
function calculate()//this is calculate fctn
{ 
var a = document.getElementById("result").value;
var b = eval(a);
document.getElementById("result").value = b;
alert('RESULT IS REAL', b);

}