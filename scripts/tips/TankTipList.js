import { getTankTips } from "../database.js"

export const TankTipList = () => {
    // Invoke the function that you imported from the database module
    const tankTips = getTankTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<ul class="tankTipList">'

    // Create HTML representations of each tip here
    for (const tip of tankTips) {
        htmlString += `<section class="tip card">
            <li class="tip-info">${tip.tip}</li>
            <br>
        </section>`
    }
    htmlString += `</ul>`

    return htmlString
}