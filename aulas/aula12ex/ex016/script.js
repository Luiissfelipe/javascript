function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var anoNasc = window.document.getElementById('nasc').value
    var resultado = window.document.getElementById('resultado')
    if(anoNasc > ano || anoNasc == 0){
        alert('ERRO: Digite uma data correta!')
    }else{
        var sexo = window.document.getElementsByName('sexo')
        var gênero = ''
        var idade = ano - Number(anoNasc)
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            gênero = 'homem'
            if(idade < 10){
                //criança
                img.setAttribute('src','homem_crianca.png')
            }else if(idade < 18){
                //jovem
                img.setAttribute('src','homem_jovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','homem_adulto.png')
            }else{
                //idoso
                img.setAttribute('src','homem_idoso.png')
            }
        }else if(sexo[1].checked){
            gênero = 'mulher'
            if(idade < 10){
                //criança
                img.setAttribute('src','mulher_crianca.png')
            }else if(idade < 18){
                //jovem
                img.setAttribute('src','mulher_jovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','mulher_adulta.png')
            }else{
                //idoso
                img.setAttribute('src','mulher_idosa.png')
            } 
        }
    }        
    resultado.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
    resultado.appendChild(img)
}
