function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    hora = ("0" + hora).slice(-2);
    var min = data.getMinutes()
    min = ("0" + min).slice(-2);
    msg.innerHTML = `<strong>Agora são ${hora}:${min}</strong>`

    if (hora >= 4 && hora < 12) { // BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#a4cce0'
    }
    else if (hora >= 12 && hora <= 18) { // BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#976655'
    }
    else { // BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#233239'
    }
}
