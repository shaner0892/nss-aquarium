const database = {
    fish: [
        {
            housename: ["Bart", "Angie", "Reggie"],
            species: ["Angelfish", "Discus fish", "Butterflyfish"],
            food: ["crustaceans", "algae", "plankton"],
            size: [3, 2, 1],
            harvested: ["South America", "South America", "Indian Ocean"],
            freshwater: [true, true, false]
        }
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}