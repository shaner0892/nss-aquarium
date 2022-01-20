// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div><img  class="fish-pics image--card" src="${fish.image}" /></div>
            <div class="fish-info">${fish.name}</div>
            <div class="fish-info">${fish.species}</div>
            <div class="fish-info">${fish.length}</div>
            <div class="fish-info">${fish.location}</div>
            <div class="fish-info">${fish.food}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}