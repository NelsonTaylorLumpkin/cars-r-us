import { getTech, setTech } from "./database.js"
const tech = getTech()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technology") {
            const techId = parseInt(changeEvent.target.value)
            for (const technology of tech) {
                if (technology.id === techId) {
                    // window.alert(`User chose ${technology.name}`)
                    setTech(parseInt(changeEvent.target.value))
                }
            }
        }
    }
)

export const techDropDown = () => {
    let html = ""
    html += `<select id="technology">`
    html += `<option value="0">Tech Options</option>`
    for (const technology of tech) {
        html += `<option value="${technology.id}">${technology.name}</option>`

    }
    html += "</select>"
    return html
}

export const Technologies = () => {
    return `<h2>Technologies</h2>`
}