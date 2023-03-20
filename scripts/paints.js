import { getPaints, setPaint } from "./database.js"

const colors = getPaints()

document.addEventListener(
    "change",
    (changeEvent) => {
        // const itemClicked = changeEvent.target
        if (changeEvent.target.id === "colors") {
            const colorId = parseInt(changeEvent.target.value)
            for (const color of colors) {
                if (color.id === colorId) {
                    // window.alert(`User chose ${color.color}`)
                    setPaint(parseInt(changeEvent.target.value))
                }
            }
        }
    }
)

export const paintDropDown = () => {
    let html = ""
    html += `<select id="colors">`
    html += `<option value="0">Choose Paint Color</option>`
    for (const color of colors) {
        html += `<option value="${color.id}">${color.color}</option>`

    }
    html += "</select>"
    return html
}

export const Paints = () => {
    return `<h2>Paints</h2>`
}

