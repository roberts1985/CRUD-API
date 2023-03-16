import { createCard } from "./card.js";
import { getPeople, createPeople } from "./CRUD.js";

let divContent = document.querySelector("#card-div")
let arrayPeople = []

let obtnerPersonas = async () => {
    let people = await getPeople()
    people["results"].forEach(element => {
        arrayPeople.push(element)
        let {gender, name, nat, picture} = element
        let {title, first, last} = name
        let {large, medium, thumbnail} = picture
        let cards = createCard(`${large}`,`${title} ${first} ${last}`,gender)
        divContent.appendChild(cards)       
    });

    let anchors = document.querySelectorAll("#card-div button")

    anchors.forEach((item,index) => {
        item.addEventListener("click", (event) => {
            event.target.disabled="true"
            createPeople(arrayPeople[index])
        })
    })
}

obtnerPersonas()