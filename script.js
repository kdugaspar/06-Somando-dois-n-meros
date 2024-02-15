
let botao = window.document.querySelector("somar#input")
let paragrafo = window.document.querySelector("p")
botao.addEventListener("click",somar)


function somar(){
let num1 = prompt("Digite um número: ")
let num2 = prompt("Digite outro número: ")
let soma = Number(num1) + Number(num2)
paragrafo.innerHTML =`A soma entre ${num1} e ${num2} é igual a ${soma}!`

let botao = window.document.createElement("input")
}