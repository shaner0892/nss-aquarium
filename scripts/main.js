import { getFish, getTravelTips } from './database.js'
import { FishList } from './fish/FishList.js'
import { LocationList } from './locations/LocationList.js'
import { TankTipList } from './tips/TankTipList.js'
import { TravelTipList } from './tips/TravelTipList.js'

const allFish = getFish()
const allTravelTips = getTravelTips()

// console log the data 
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

const parentHTMLElement3 = document.querySelector(".location-list")

parentHTMLElement3.innerHTML = LocationList()

const parentHTMLElement4 = document.querySelector(".tank-tips")

parentHTMLElement4.innerHTML = TankTipList()