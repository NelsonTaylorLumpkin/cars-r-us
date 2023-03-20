import { getInteriors, setInterior } from "./database.js"
const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            const interiorId = parseInt(changeEvent.target.value)
            for (const interior of interiors) {
                if (interior.id === interiorId) {
                    // window.alert(`User chose ${interior.material}`)
                    setInterior(parseInt(changeEvent.target.value))
                }
            }
        }
    }
)


export const interiorDropDown = () => {
    let html = ""
    html += `<select id="interiors">`
    html += `<option value="0">Choose Interior</option>`
    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.material}</option>`

    }
    html += "</select>"
    return html
}

export const Interiors = () => {
    return `<h2>Interiors</h2>`
}