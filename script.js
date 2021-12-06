let ini =  document.getElementById('txtinicio')
let fim = document.getElementById('txtfinal')
let pulo = document.getElementById('txtpasso')
let res = document.getElementById('resultado')

function contar() {
    while ( ini < fim) {
        ini = ini + pulo
    }
    res.innerHTML = ``
}
