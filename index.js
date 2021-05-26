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

            // apender informações nos elementos criados
            nome.append(data.teams[i].strTeam)
            esporte.append(data.teams[i].strSport)
            liga.append(data.teams[i].strLeague)
            logo.setAttribute('src', data.teams[i].strTeamBadge)

            // apender informações dentro de uma div
            const div = document.createElement('div')
            div.setAttribute('class', 'teamInfo')
            div.append(logo, nome, liga, esporte)

            // apender no html
            document.querySelector('.resultado').append(div)
        }
	})
}