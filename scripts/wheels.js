import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const wheelId = parseInt(changeEvent.target.value)
            for (const wheel of wheels) {
                if (wheel.id === wheelId) {
                    setWheels(parseInt(changeEvent.target.value))
                }
            }            
            // setPaint(parseInt(event.target.value))
            // window.alert(`You just chose ${color.color}`)// "1
        }
    }
)


export const wheelDropDown = () => {
    let html = ""
    html += `<select id="wheels">`
    html += `<option value="0">Choose Wheels</option>`
    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.size}</option>`
    }
    html += "</select>"
    return html
}

export const Wheels = () => {
    return `<h2>Wheels</h2>`
}
