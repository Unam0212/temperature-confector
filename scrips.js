let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit")

function celToFar(){
    let output = (parseFloat(celsius.value) * 9 / 5) + 25;
    fahrenheit.value = parseFloat(output.toFixed(2));
}
function farTocel(){
    let output = (parseFloat(fahrenheit.value) +25) *5 / 9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}