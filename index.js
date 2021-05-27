function search(){
	const nomeDoTime = document.querySelector('#teamName').value;
    document.querySelector('.resultado').innerHTML = ''
    document.querySelector('.time').innerHTML = ''
	fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${nomeDoTime}`).then(res => res.json()).then(data =>{
        for (let i = 0; i < data.teams.length; i++) {
            // criação das strings e logo
            let nome = document.createElement('p')
            let esporte = document.createElement('p')
            let liga = document.createElement('p')
            let logo = document.createElement('img')
            let id = document.createElement('p')

            // apender informações nos elementos criados
            nome.append(data.teams[i].strTeam)
            esporte.append(data.teams[i].strSport)
            liga.append(data.teams[i].strLeague)
            logo.setAttribute('src', data.teams[i].strTeamBadge)
            id.append(data.teams[i].idTeam)
            id.setAttribute('id', 'teamID')

            // apender informações dentro de uma div
            const div = document.createElement('div')
            div.setAttribute('class', 'teamInfo')
            div.append(logo, id, nome, liga, esporte,)
            div.addEventListener('click', teamInfo)

            // apender no html
            document.querySelector('.resultado').append(div)

        }
	})
}

function teamInfo(){
    const teamID = document.querySelector('#teamID').innerText;
    document.querySelector('.resultado').innerHTML = ''
	fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamID}`).then(res => res.json()).then(data =>{
        for (let i = 0; i < data.teams.length; i++) {
            console.log(data.teams)
            // criação das strings e logo
            let nome = document.createElement('p')
            let esporte = document.createElement('p')
            let liga = document.createElement('p')
            let logo = document.createElement('img')
            let estadio = document.createElement('p')
            let descricaoEstadio = document.createElement('p')
            let FotoEstadio = document.createElement('img')
            let capacidadeEstadio = document.createElement('p')
            let cidade = document.createElement('p')
            let descriçãoTime = document.createElement('p')
            let país = document.createElement('p')
            let galeria = document.createElement('img')
            let galeria1 = document.createElement('img')
            let galeria2 = document.createElement('img')
            let galeria3 = document.createElement('img')
            let galeria4 = document.createElement('img')
            let galeria5 = document.createElement('img')
            let galeria6 = document.createElement('img')
            let galeria7 = document.createElement('img')
            let youtube = document.createElement('a')
            let instagram = document.createElement('a')
            let facebook = document.createElement('a')
            let twitter = document.createElement('a')

            

            // apender informações nos elementos criados
            nome.append(data.teams[i].strTeam)
            logo.setAttribute('src', data.teams[i].strTeamBadge)
            liga.append(data.teams[i].strLeague)
            esporte.append(data.teams[i].strSport)                    
            estadio.append(data.teams[i].strStadium)                              
            descricaoEstadio.append(data.teams[i].strStadiumDescription)          
            FotoEstadio.setAttribute('src', data.teams[i].strStadiumThumb)            
            capacidadeEstadio.append(data.teams[i].intStadiumCapacity)           
            cidade.append(data.teams[i].strStadiumLocation)         
            descriçãoTime.append(data.teams[i].strDescriptionEN)
            país.append(data.teams[i].strCountry)
            galeria.setAttribute('src', data.teams[i].strTeamBadge)
            galeria1.setAttribute('src', data.teams[i].strTeamJersey)
            galeria2.setAttribute('src', data.teams[i].strTeamLogo)
            galeria3.setAttribute('src', data.teams[i].strTeamFanart1)
            galeria4.setAttribute('src', data.teams[i].strTeamFanart2)
            galeria5.setAttribute('src', data.teams[i].strTeamFanart3)
            galeria6.setAttribute('src', data.teams[i].strTeamFanart4)
            galeria7.setAttribute('src', data.teams[i].strTeamBanner)
            youtube.setAttribute('href', 'https://' + data.teams[i].strYoutube)
            youtube.innerText= 'Youtube'
            youtube.setAttribute('target', '_blank')
            facebook.setAttribute('href', 'https://' + data.teams[i].strFacebook)
            facebook.innerText= 'Facebook'
            facebook.setAttribute('target', '_blank')
            instagram.setAttribute('href', 'https://' + data.teams[i].strInstagram)
            instagram.innerText= 'Instagram'
            instagram.setAttribute('target', '_blank')
            twitter.setAttribute('href', 'https://' + data.teams[i].strTwitter)
            twitter.innerText= 'Twitter'
            twitter.setAttribute('target', '_blank')

            

            // condições descrição

            if (data.teams[i].strStadiumDescription === null) {
                estadio.innerHTML= 'Sem dados do estadio'
            }

            if (data.teams[i].strStadiumDescription === null) {
                descricaoEstadio.innerHTML= 'Sem descrição do estadio'
            }

            if (data.teams[i].strStadiumThumb === null) {
                FotoEstadio.setAttribute('alt', 'sem foto do estadio')
            }

            if (data.teams[i].intStadiumCapacity === null) {
                capacidadeEstadio.innerHTML= 'Sem dados da capacidade do estadio'
            }

            if (data.teams[i].strStadiumLocation === null) {
                cidade.innerHTML= 'Sem dados da cidade'
            }
            

            // apender informações dentro de uma div
            const div = document.createElement('div')
            div.setAttribute('class', 'teamDados')
            div.append(nome, logo, liga, esporte, estadio, descricaoEstadio, FotoEstadio, capacidadeEstadio, cidade, descriçãoTime, país, galeria, galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria7, youtube, facebook, instagram, twitter)

            // condição da galeria

            if (data.teams[i].strTeamBadge === null) {
                galeria.removeAttribute('src')
            }

            if (data.teams[i].strTeamJersey === null) {
                galeria1.removeAttribute('src')
            }

            if (data.teams[i].strTeamLogo === null) {
                galeria2.removeAttribute('src')
            }

            if (data.teams[i].strTeamFanart1 === null) {
                galeria3.removeAttribute('src')
            }

            if (data.teams[i].strTeamFanart2 === null) {
                galeria4.removeAttribute('src')
            }

            if (data.teams[i].strTeamFanart3 === null) {
                galeria5.removeAttribute('src')
            }

            if (data.teams[i].strTeamFanart4 === null) {
                galeria6.removeAttribute('src')
            }

            if (data.teams[i].strTeamBanner === null) {
                galeria7.removeAttribute('src')
            }

            // condições das redes sociais
            
            if (data.teams[i].strYoutube === '') {
                youtube.innerText = ''
            }

            if (data.teams[i].strFacebook === '') {
                facebook.innerText = ''
            }

            if (data.teams[i].strInstagram === '') {
                instagram.innerText = ''
            }

            if (data.teams[i].strTwitter === '') {
                twitter.innerText = ''
            }

            // apender no html
            document.querySelector('.time').append(div)
        }
	}) 
}

