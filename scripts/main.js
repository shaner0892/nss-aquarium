import { getFish, getTravelTips } from './database.js'
import { FishList } from './fish/FishList.js'
import { TravelTipList } from './tips/TravelTipList.js'

const allFish = getFish()
const allTravelTips = getTravelTips()

for (const fish of allFish) {
    console.log(fish)
}
for (const tip of allTravelTips) {
    console.log(tip)
}

const parentHTMLElement = document.querySelector(".fish-list")

parentHTMLElement.innerHTML = FishList()

const parentHTMLElement2 = document.querySelector(".travel-tips")

parentHTMLElement2.innerHTML = TravelTipList()