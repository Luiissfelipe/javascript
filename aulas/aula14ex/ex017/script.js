function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ 
        // campos vazios
        resultado.innerHTML = 'Impossível contar!'
    }else{
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        // caso passo seja igual ou menor à 0
        if(passo <= 0){
            alert('Passo invalido! Considerando PASSO = 1')
            passo = 1
        }

        resultado.innerHTML = 'Contando: <br>'
        if(inicio < fim){
            // contagem crescente
            for(let c = inicio; c <= fim; c += passo)
                resultado.innerHTML += `${c} 👉`
        }else{
            // contagem decrescente
            for(let c = inicio; c >= fim; c -= passo)
            resultado.innerHTML += `${c} 👉` 
        }
        resultado.innerHTML += `🏁`
    }
    
}
