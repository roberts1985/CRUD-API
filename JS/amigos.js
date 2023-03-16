import { createTable } from "./table.js";
import { getPeopleFirebase, deletePeople } from "./CRUD.js";

let procesarPersonas = async () => {    
    await obtenerPersonas()
    eliminarPersonas()
}

let obtenerPersonas = async ()=> {
    let rows = document.querySelector("#tbody-id")
    rows.innerHTML = ""
    let people = await getPeopleFirebase()
    if(people!==null){
        let keys = Object.keys(people)    
    
        keys.forEach(key => {
            rows.appendChild(createTable(people[key],key))        
        });
    }
}

let eliminarPersonas = () => {
    let buttons = document.querySelectorAll("#tbody-id button")
    console.log(buttons)
    buttons.forEach((btn) => {
        btn.addEventListener("click",async (event)=>{
            console.log(event.target.id)
            await deletePeople(event.target.id)
            procesarPersonas()
        })
    })
}

procesarPersonas()
