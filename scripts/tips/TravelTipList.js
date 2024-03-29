import { getTravelTips } from "../database.js"

export const TravelTipList = () => {
    // Invoke the function that you imported from the database module
    const travelTips = getTravelTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<ul class="travelTipList">'

    // Create HTML representations of each tip here
    for (const tip of travelTips) {
        htmlString += `<section class="tip card">
            <li class="tip-info"> ${tip.tip}</li>
            <br>
        </section>`
    }
    htmlString += `</ul>`

    return htmlString
}