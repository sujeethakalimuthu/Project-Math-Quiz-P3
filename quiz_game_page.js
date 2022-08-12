var operators = ["+", "-", "*", "/"];
var random_chooser = Math.floor(Math.random()*4);
var chosen_operator = operators[random_chooser];
console.log(random_chooser);
var n1;
var n2;
var equation;
document.getElementById("output").style.display = "none";
var actual_answer;
function Send()
{
    n1 = document.getElementById("Number-1").value;
    n2 = document.getElementById("Number-2").value;
    document.getElementById("output").style.display = "block";
    operators = ["+", "-", "*", "/"];
    random_chooser = Math.floor(Math.random()*4);
    chosen_operator = operators[random_chooser];
    console.log(chosen_operator);
    console.log(random_chooser);
    if (chosen_operator == "+")
    {
        actual_answer = parseInt(n1) + parseInt(n2);
    }
    if (chosen_operator == "-")
    {
        actual_answer = parseInt(n1) - parseInt(n2);
    }
    if (chosen_operator == "*")
    {
        actual_answer = parseInt(n1) * parseInt(n2);
    }
    if (chosen_operator == "/")
    {
        actual_answer = Math.floor(parseInt(n1) / parseInt(n2));
    }
    console.log(actual_answer);
    equation = n1+chosen_operator+n2;
    document.getElementById("question").innerHTML = equation;
    document.getElementById("Number-1").value = "";
    document.getElementById("Number-2").value = "";
}