
window.onload = function () {
    let url = window.location.href.toLowerCase();
    if(url.indexOf("dashboard") > -1){
        document.getElementById("dashboard").parentElement.classList.add("active");
        document.getElementById("home").parentElement.classList.remove("active");
        document.getElementById("login").parentElement.classList.add("escondido");
        document.getElementById("logout").parentElement.classList.remove("escondido");
    }
    else if(url.indexOf("home") > -1){
        document.getElementById("home").parentElement.classList.add("active");
        document.getElementById("dashboard").parentElement.classList.remove("active");
        document.getElementById("login").parentElement.classList.add("escondido");
        document.getElementById("logout").parentElement.classList.remove("escondido");
    }
    else{
        document.getElementById("dashboard").parentElement.classList.remove("active");
        document.getElementById("home").parentElement.classList.remove("active");

        document.getElementById("login").parentElement.classList.add("active");
        document.getElementById("login").parentElement.classList.remove("escondido");
        document.getElementById("logout").parentElement.classList.add("escondido");        
    }

    atualizaHora();
}

function atualizaHora () {
    let elLabelHora = document.getElementById("horaAtual");
    let horaAtual = getHoraAtual();    
    elLabelHora.innerHTML = horaAtual;
    setTimeout(()=>{
        atualizaHora();
    }, 5000);
}

function getHoraAtual () {
    let dataAtual = new Date();
    let hora = dataAtual.getHours();
    if(hora.toString().length == 1){
        hora = "0" + hora;
    }    
    let minutos = dataAtual.getMinutes();
    if(minutos.toString().length == 1){
        minutos = "0" + minutos;
    }
    return `${hora}:${minutos}`;
}