import { getFish } from './fish/database.js'
import { FishList } from './fish/FishList.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

const parentHTMLElement = document.querySelector(".fish-list")

parentHTMLElement.innerHTML = FishList()