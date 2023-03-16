const createTable = (element,key) => {
    let {gender, name, nat, picture} = element
    let {title, first, last} = name
    let {large, medium, thumbnail} = picture

    let trElement = document.createElement("tr")

    let tdTitle = document.createElement("td")
    let textTitle = document.createTextNode(`${title}`)
    tdTitle.appendChild(textTitle)

    let tdFirst = document.createElement("td")
    let textFirst = document.createTextNode(`${first}`)
    tdFirst.appendChild(textFirst)

    let tdLast = document.createElement("td")
    let textLast = document.createTextNode(`${last}`)
    tdLast.appendChild(textLast)

    let tdGender = document.createElement("td")
    let textGender = document.createTextNode(`${gender}`)
    tdGender.appendChild(textGender)

    let tdImage = document.createElement("td")
    let image = document.createElement("img")
    image.setAttribute("src",thumbnail)
    tdImage.appendChild(image)

    let tdNationality = document.createElement("td")
    let textNationality = document.createTextNode(nat)
    tdNationality.appendChild(textNationality)

    let tdButton = document.createElement("td")
    let btn = document.createElement("button")
    let textButton = document.createTextNode("Eliminar")
    btn.setAttribute("id",key)
    btn.appendChild(textButton)
    tdButton.appendChild(btn)

    trElement.append(tdTitle, tdFirst, tdLast, tdGender, tdImage, tdNationality, tdButton)
    //peopleList.appendChild(trElement)
    return trElement
}

export { createTable }