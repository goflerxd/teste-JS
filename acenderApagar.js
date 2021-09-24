var acesa = false;
function acender_apagar(){
    if (acesa == false){
        acesa = true;
        document.getElementById('interruptor').src = "imagens/on.jpg";
        document.getElementById('luz').src = "imagens/luz_on.jpg";
    }else{
        acesa = false;
        document.getElementById('interruptor').src = "imagens/off.jpg";
        document.getElementById('luz').src = "imagens/luz_off.jpg";
    }
}

