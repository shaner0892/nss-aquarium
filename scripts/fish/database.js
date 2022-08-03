const database = {
    fish: [
        {
            image: "https://thumbs.dreamstime.com/b/angel-fish-swimming-coral-reefs-red-sea-161386641.jpg",
            name: "Bart",
            species: "Angelfish",
            length: 5,
            location: "South America",
            food: "Crustaceans"
        },
        {
            image: "https://aquadiction.world/img/profile/discus1.webp",
            name: "Angie",
            species: "Discus fish",
            length: 2,
            location: "South America",
            food: "Algae"
        },
        {
            image: "https://a-z-animals.com/media/copperband-butterfly-fish.jpg",
            name: "Reggie",
            species: "Butterfly fish",
            length: 3,
            location: "Indian Ocean",
            food: "Plankton"
        },
        {
            image: "https://www.aquariumsource.com/wp-content/uploads/2020/06/hypancistrus-zebra.jpg",
            name: "Jordan",
            species: "Zebra Pleco",
            length: 1,
            location: "Brazil",
            food: "Bloodworms"
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