export const getInventory = () => {
    return new Promise(function (resolve, reject) {
        fetch("http://localhost:3000/inventory").then(response => response.json())
            .then(data => {
                let inventoryArray = [];
                for (const [key, value] of Object.entries(data)) {
                    inventoryArray.push({ date: parseDate(key), amount: value });
                }
                return resolve(inventoryArray)

            })
            .catch(err => console.error(err));

    })
}

const parseDate = (input) => input.split("T")[0]

export const getAllPreviousDeliveryDates = (inventory) => {
    const today = parseDate(new Date().toISOString());
    const prevDates = inventory.filter(date => date.date <= today)
    return prevDates
}

export const getAmountInStock = (inventory) => {
    //add amounts of all previous dates to return a total
    return getAllPreviousDeliveryDates(inventory).reduce((a, b) => a + b.amount, 0)
}

export const getAllUpcomingDeliveryDates = (inventory) => {
    const today = parseDate(new Date().toISOString());
    const upcomingDates = inventory.filter(date => date.date > today)
    return upcomingDates
}