function search(){
	const nomeDoJogador = document.querySelector('#Name').value;
    document.querySelector('.resultado').innerHTML = ''
    document.querySelector('.jogador').innerHTML = ''
	fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${nomeDoJogador}`).then(res => res.json()).then(data =>{
        for (let i = 0; i < data.player.length; i++) {
            // criação das strings e logo
            let foto = document.createElement('img')
            let id = document.createElement('p')
            let nome = document.createElement('p')
            let time = document.createElement('p')
            

            // apender informações nos elementos criados
            foto.setAttribute('src', data.player[i].strCutout)
            id.append(data.player[i].idPlayer)
            id.setAttribute('id', 'jogadorID')
            nome.append(data.player[i].strPlayer)
            time.append(data.player[i].strTeam)

            if (data.player[i].strCutout === null) {
                foto.setAttribute('src', './semfoto.jpg')
            }
            

            // apender informações dentro de uma div
            const div = document.createElement('div')
            div.setAttribute('class', 'playerInfo')
            div.append(foto, id, nome, time)
            div.addEventListener('click', playerInfo)

            // apender no html
            document.querySelector('.resultado').append(div)

        }
	})
}

function playerInfo(){
    const idJogador = document.querySelector('#jogadorID').innerText;
    document.querySelector('.resultado').innerHTML = ''
	fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${idJogador}`).then(res => res.json()).then(data =>{
        for (let i = 0; i < data.players.length; i++) {
            // criação das strings e fotos
            let nome = document.createElement('p')
            let foto = document.createElement('img')
            let galeria1 = document.createElement('img')
            let galeria2 = document.createElement('img')
            let galeria3 = document.createElement('img')
            let galeria4 = document.createElement('img')
            let galeria5 = document.createElement('img')
            let galeria6 = document.createElement('img')
            let galeria7 = document.createElement('img')
            let instagram = document.createElement('a')
            let facebook = document.createElement('a')
            let twitter = document.createElement('a')
            let altura = document.createElement('p')
            let peso = document.createElement('p')
            let posição = document.createElement('p')
            let descrição = document.createElement('p')
            let local = document.createElement('p')
            let iframe = document.createElement('iframe')
            let nascimento = document.createElement('p')
            let nacionalidade = document.createElement('p')
            let time = document.createElement('p')

            // apender informações nos elementos criados
            nome.append(data.players[i].strPlayer)
            foto.setAttribute('src', data.players[i].strThumb)
            galeria1.setAttribute('src', data.players[i].strCutout)
            galeria2.setAttribute('src', data.players[i].strRender)
            galeria3.setAttribute('src', data.players[i].strBanner)
            galeria4.setAttribute('src', data.players[i].strFanart1)
            galeria5.setAttribute('src', data.players[i].strFanart2)
            galeria6.setAttribute('src', data.players[i].strFanart3)
            galeria7.setAttribute('src', data.players[i].strFanart4)
            instagram.setAttribute('href', 'https://' + data.players[i].strInstagram)
            instagram.innerText= 'Instagram'
            instagram.setAttribute('target', '_blank')
            facebook.setAttribute('href', 'https://' + data.players[i].strFacebook)
            facebook.innerText= 'Facebook'
            facebook.setAttribute('target', '_blank')
            twitter.setAttribute('href', 'https://' + data.players[i].strTwitter)
            twitter.innerText= 'Twitter'
            twitter.setAttribute('target', '_blank')
            altura.append(data.players[i].strHeight)
            peso.append(data.players[i].strWeight)
            posição.append(data.players[i].strPosition)
            descrição.append(data.players[i].strDescriptionEN)
            local.append(data.players[i].strBirthLocation)
            nascimento.append(data.players[i].dateBorn)
            nacionalidade.append(data.players[i].strNationality)
            time.append(data.players[i].strTeam)


            //condições galeria
            
            if (data.players[i].strThumb === null) {
                foto.setAttribute('src', './semfoto.jpg')
            }
            if(data.players[i].strCutout === null) {
                galeria1.removeAttribute('src')
            }
            if(data.players[i].strRender === null) {
                galeria2.removeAttribute('src')
            }
            if(data.players[i].strBanner === null) {
                galeria3.removeAttribute('src')
            }
            if(data.players[i].strFanart1 === null) {
                galeria4.removeAttribute('src')
            }
            if(data.players[i].strFanart2 === null) {
                galeria5.removeAttribute('src')
            }
            if(data.players[i].strFanart3 === null) {
                galeria6.removeAttribute('src')
            }
            if(data.players[i].strFanart4 === null) {
                galeria7.removeAttribute('src')
            }
            
            
            
            
            
            // apender informações dentro de uma div
            const div = document.createElement('div')
            div.setAttribute('class', 'jogadorDados')
            div.append(nome, foto, galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria7, instagram, facebook, twitter, altura, peso, posição, descrição, local, nascimento, nacionalidade, time)

            // apender no html
            document.querySelector('.jogador').append(div)


            
        }
	}) 
}