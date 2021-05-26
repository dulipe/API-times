function search(){
	const nomeDoTime = document.querySelector('#teamName').value;
    document.querySelector('.resultado').innerHTML = ''
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
            let youtube = document.createElement('a')
            let redeSociais = document.createElement('a')
            

            // apender informações nos elementos criados
            nome.append(data.teams[i].strTeam)
            esporte.append(data.teams[i].strSport)
            liga.append(data.teams[i].strLeague)
            logo.setAttribute('src', data.teams[i].strTeamBadge)

            
            

            // apender informações dentro de uma div
            const div = document.createElement('div')
            div.setAttribute('class', 'teamInfo')
            div.append(logo, nome, liga, esporte,)
            

            // apender no html
            document.querySelector('.time').append(div)
        }
	}) 
}