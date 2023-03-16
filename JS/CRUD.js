const BASE_URL = `https://randomuser.me/api/?inc=gender,name,nat,picture&results=100`
const BASE2_URL = `https://kodemia-24g-default-rtdb.firebaseio.com/roberto/koders/`
const REST = ".json"

const getPeople = async () => {
    let response = await fetch(
        `${BASE_URL}`
    )
    let data = await response.json()
    return data
}

const getPeopleFirebase = async () => {
    let response = await fetch(
        `${BASE2_URL}${REST}`
    )
    let data = await response.json()
    return data
}

const deletePeople = async (koderKey) => {
    console.log(`Eliminando ${koderKey}...`)
    let response = await fetch(
        `${BASE2_URL}${koderKey}/${REST}`,
        {method:"DELETE"
    })
    let data = await response.json()
    console.log("Koder eliminado")
    return data
}

const createPeople = async (koderObject) => {
    let response = await fetch(
        `${BASE2_URL}${REST}`,{
            method: "POST",
            body: JSON.stringify(koderObject)
        })
    let data = await response.json()
    return data
}

export { getPeople, getPeopleFirebase, deletePeople, createPeople }