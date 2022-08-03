// Import the function that returns a copy of the fish array
import { getTravelTips } from "../database.js"

export const TravelTipList = () => {
    // Invoke the function that you imported from the database module
    const travelTips = getTravelTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="travelTipList">'

    // Create HTML representations of each tip here
    for (const tip of travelTips) {
        htmlString += `<section class="tip card">
            <div class="tip-info"><b>Tip:</b> ${tip.tip}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}