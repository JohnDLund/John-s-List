import _HouseService from "../Services/HouseService.js"
import _store from "../store.js"


function _draw() {
  console.log("draw ran");
  let template = ""
  _store.State.houses.sort((a, b) => b.price - a.price)
  _store.State.houses.forEach(house => template += house.Template)
  document.getElementById("house").innerHTML = template
}


//Public
export default class HouseController {
  constructor() {
    console.log("hello from controller");
    _store.subscribe("houses", _draw)

  }

  showHouses() {
    if (document.getElementById("houses").hidden == true) {
      document.getElementById("houses").hidden = false
      _HouseService.getHouses()
    } else {
      document.getElementById("houses").hidden = true
    }

    if (document.getElementById("house").hidden == true) {
      document.getElementById("house").hidden = false
      _HouseService.getHouses()
    } else {
      document.getElementById("house").hidden = true
    }
  }

  addHouse(event) {
    event.preventDefault()
    let rawHouseData = {
      price: event.target.price.value,
      levels: event.target.levels.value,
      bedrooms: event.target.bedrooms.value,
      bathrooms: event.target.bathrooms.value,
      year: event.target.year.value,
      imgUrl: event.target.imgUrl.value,
    }
    _HouseService.addHouse(rawHouseData)
    // event.target.reset()
  }

  deleteHouse(id) {
    _HouseService.deleteHouse(id)
  }

}
