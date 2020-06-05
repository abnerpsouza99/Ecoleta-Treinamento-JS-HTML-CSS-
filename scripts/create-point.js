
//document
//   .querySelector("select[name=uf]")
//   .addEventListener("change", () => {
//   console.log("mudei")
//} ) // Arrow function (outra forma de escrever função anônima)

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => {return res.json() }) // Transforma estados em JSON
    .then( states => {

        for( const state of states ){
            // Serve para inserir os valores em option
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
        
    })
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then( (res) => {return res.json() }) // Transforma  em JSON
    .then( cities => {

        for( const city of cities ){
            // Serve para inserir os valores em option
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }   

        citySelect.disabled = false
        
    })
}

// Ouvidor de eventos, quando selecionado, retorna algo
document
   .querySelector("select[name=uf]")
   .addEventListener("change", getCities)
 