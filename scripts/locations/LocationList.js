import { getLocations } from "../database.js"

export const LocationList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="travelTipList">'

    // Create HTML representations of each tip here
    for (const location of locations) {
        htmlString += `<section class="location card">
            <div><img  class="travel-pics image--card" src="${location.image_url}" /></div>
            <p class="location-info">${location.location}</p>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}