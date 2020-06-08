
//document
//   .querySelector("select[name=uf]")
//   .addEventListener("change", () => {
//   console.log("mudei")
//} ) // Arrow function (outra forma de escrever função anônima)

// JS para inserção de estados e cidades nos inputs

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

        citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
        citySelect.disabled = true

        for( const city of cities ){
            // Serve para inserir os valores em option
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }   

        citySelect.disabled = false
        
    })
}

// Ouvidor de eventos, quando selecionado, retorna algo
document
   .querySelector("select[name=uf]")
   .addEventListener("change", getCities)


// Itens de coleta
// Pegar os itens li
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target
    // Adicionar ou Remover classe em JS
    // itemLi.classList.add("selected") -> Para adicionar
    // itemLi.classList.remove("selected") -> Para remover
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id
    console.log('ITEM ID: ', itemId)

    // Verificar se existem itens selecionados
    // Se sim, pegá-los
    const alreadySelected = selectedItems.findIndex(function(item){
        const itemFound = item == itemId // Isso será true or false
        return itemFound
    })
    
    // Se estiver selecionado, remove-lo da seleção
    if(alreadySelected >= 0){
        const filteredItens = selectedItems.filter(function(item){
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItens

    }else {
        // Se não estiver selecionado, adiciona-lo
        selectedItems.push(itemId)
    }
    
    // Adicionar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems
    

   

}

 