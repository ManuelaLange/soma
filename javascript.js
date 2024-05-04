function calcular() {
    let a = parseFloat(document.getElementById("valor1").value);
    let b = parseFloat(document.getElementById("valor2").value);

    document.getElementById("resultado").value = a + b;
}

function changeColor(){
    const azul = document.getElementById("azul")    
    azul.style.color = "blue";
    
}
function altcor(){
    const vermelho = document.getElementsByClassName("vermelho")[0]   
    vermelho.style.color = "red";}