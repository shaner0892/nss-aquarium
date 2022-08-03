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
    ],
    travelTips: [
        {
            tip: "Gila trout, red velvetfish, kuhli loach, moray eel lemon shark lemon sole gulf menhaden."
        },
        {
            tip: "Soldierfish sea lamprey, half-gill treefish Pacific lamprey sand stargazer mustard eel Celebes rainbowfish."
        },
        {
            tip: "Pufferfish shad codlet denticle herring threadfin bream sea chub velvetfish pomfret damselfish pickerel."
        }
    ],
    tankTips: [
        {
            tip: "Tank maintenance: Coelacanth, ghost carp weeverfish kokanee Old World knifefish collared carpetshark flagfish Rainbow trout, snailfish footballfish. Goblin shark Sacramento blackfish longnose chimaera ide piranha speckled trout."
        },
        {
            tip: "Salinity: Scythe butterfish Arctic char wahoo: ridgehead; banjo catfish electric ray, drum pencilsmelt spotted danio tompot blenny northern lampfish roundhead? Swamp-eel oldwife threadsail sábalo."
        },
        {
            tip: "Temperature: Modoc sucker opah sunfish. Grayling mudfish scaleless black dragonfish, deep sea anglerfish Long-finned sand diver nibbler Atlantic trout whale catfish pelican gulper livebearer saury, African glass catfish porcupinefish."
        }
    ],
    locations: [
        {
            image_url: "https://www.roadaffair.com/wp-content/uploads/2017/09/sardinia-italy-shutterstock_697395712.jpg",
            location: "The Jungles of Bolivia"
        },
        {
            image_url: "https://i.pinimg.com/736x/82/fd/12/82fd126cd8b5b13bc1e78aa888d7b271--vacation-spots-dream-vacations.jpg",
            location: "Gulf of Chiriqui"
        },
        {
            image_url: "https://media.nomadicmatt.com/maldivestop001.jpg",
            location: "Tierra del Fuego"
        }
    ]
}

export const getTravelTips = () => {
    return database.travelTips.map(travelTips => ({...travelTips}))
}

export const getTankTips = () => {
    return database.tankTips.map(tankTips => ({...tankTips}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
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