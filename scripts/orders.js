import { getInteriors, getPaints, getTech, getWheels, getOrders } from "./database.js"

const buildOrderListItem = (order) => {
    const paints = getPaints()
    const interiors = getInteriors()
    const technologies = getTech()
    const wheels = getWheels()

    const chosenPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const chosenInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const chosenTechnology = technologies.find(
        (technology) => {
            return technology.id === order.techId
        }
    )
    const chosenWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

const totalCost = chosenInterior.price + chosenTechnology.price + chosenWheels.price + chosenPaint.price
const costString = totalCost.toLocaleString("en-US",{
style: "currency",
currency:"USD"
    })
    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html

}