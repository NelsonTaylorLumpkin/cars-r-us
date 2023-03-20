import { interiorDropDown, Interiors } from "./interiors.js"
import { Orders } from "./orders.js"
import { paintDropDown, Paints } from "./paints.js"
import { techDropDown, Technologies } from "./technologies.js"
import { wheelDropDown, Wheels } from "./wheels.js"
import { addCustomOrder } from "./database.js"
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)


export const carsRUs = () => {
    return `
    <h1>Cars R Us</h1>

    <article class="choices">
    <section class="choices__paints options">
    <h2>Paints</h2>
    ${paintDropDown()}
    </section>
    <section class="choices__interiors options">
    <h2>Interiors</h2>
    ${interiorDropDown()}
    </section>
    <section class="choices__technologies options">
    <h2>Technologies</h2>
    ${techDropDown()}
    </section>
    <section class="choices__wheels options">
    <h2>Wheels</h2>
    ${wheelDropDown()}
    </section>
    </article>

    <article>
    <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders">
    <h2>Custom Car Package</h2>
    ${Orders()}
    </article>
    `
}