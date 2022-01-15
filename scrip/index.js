function calculate() {
    var genero = (document.getElementById("genero").value)/ 100
    var age = (document.getElementById("age").value) / 100
    var height = (document.getElementById("height").value) / 100
    var weight = (document.getElementById("weight").value) / 100

    var imc = genero / age / weight / height ** 2
    if (imc < 18.5) {
        window.alert("Bajo peso")
    }
    else if (imc < 24.9) {
        window.alert("Saludable")
    }
    else if (imc < 29.9) {
        window.alert("Sobrepeso")
    }
    else if (imc < 39.9) {
        window.alert("Obesidad")
    }
    document.getElementsById("text_container").innerText = text
}