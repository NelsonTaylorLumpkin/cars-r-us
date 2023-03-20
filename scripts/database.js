const database = {
    paints: [
        { id: 1, color: "Silver", price: 100 },
        { id: 2, color: "Midnight Blue", price: 200 },
        { id: 3, color: "Firebrick Red", price: 300 },
        { id: 4, color: "Spring Green", price: 400 }
    ],
    interiors: [
        { id: 1, material: "Beige Fabric", price: 500 },
        { id: 2, material: "Charcoal Fabric", price: 600 },
        { id: 3, material: "White Leather", price: 700 },
        { id: 4, material: "Black Leather", price: 800 }
    ],
    technologies: [
        { id: 1, name: "Basic Package", price: 900 },
        { id: 2, name: "Navigation Package", price: 1000 },
        { id: 3, name: "Visibility Package", price: 1100 },
        { id: 4, name: "Ultra Package", price: 1200 }
    ],
    wheels: [
        { id: 1, size: "17-inch Pair Radial", price: 1300 },
        { id: 2, size: "17-inch Pair Radial Black", price: 1400 },
        { id: 3, size: "18-inch Pair Spoke Silver", price: 1500 },
        { id: 4, size: "18-inch Pair Spoke Black", price: 1600 }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 3,
            interiorId: 2,
            techId: 3,
            wheelId: 4,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}

export const getPaints = () => {
    return database.paints.map(paint => ({ ...paint }))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}

export const getTech = () => {
    return database.technologies.map(technology => ({ ...technology }))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({ ...customOrder }))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    const newOrder = { ...database.orderBuilder }
    const lastIndex = database.customOrders.length -1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
