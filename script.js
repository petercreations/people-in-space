const astrosContainer = document.getElementById('astros')
const craftContainer = document.getElementById('craftLocation')

const issLocationApi = ('http://api.open-notify.org/iss-now.json')

fetch('http://api.open-notify.org/astros.json')
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        astrosContainer.innerHTML = `<h2> There are ${json.number} people in Space right now...</h2>`
console.log(json)

        json.people.forEach((person) => {
            astrosContainer.innerHTML += `
            <p> ${person.name} is on the ${person.craft}</p>`
        })

        
    })



fetch(issLocationApi)
.then((response) => {
    return response.json()
})
.then((json) => {
    craftContainer.innerHTML = `<p> The ISS current location is LAT ${json.iss_position.latitude} LONG ${json.iss_position.longitude}.</p>`
console.log(json)


    
})

