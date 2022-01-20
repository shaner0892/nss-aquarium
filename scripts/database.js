const database = {
    fish: [
        {
            image: "https://i.pinimg.com/originals/03/43/54/034354547e15a230812ce191f62b7311.jpg",
            name: "Bart",
            species: "Angelfish",
            length: 3,
            location: "South America",
            food: "crustaceans"
        },
        {
            image: "https://img.thepets.net/wp-content/uploads/discus-fish-large.jpg",
            name: "Angie",
            species: "Discus fish",
            length: 2,
            location: "South America",
            food: "algae"
        },
        {
            image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Flowerhorn_Cichlid.jpg",
            name: "Reggie",
            species: "Butterfly fish",
            length: 1,
            location: "Indian Ocean",
            food: "plankton"
        }
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    for (const fish of database.fish) {
        if (fish.length % 3 === 0)
        holyFish.push(fish.name)
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fish of database.fish) {
        if (fish.length % 5 === 0)
        soldiers.push(fish.name)
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const fish of database.fish) {
        if (fish.length % 5 != 0 && fish.length % 3 != 0)
        regularFish.push(fish.name)
    }
    return regularFish
}