import _CarService from "../Services/CarService.js"
import _store from "../store.js"


function _draw() {
  console.log("draw ran");
  let template = ""
  _store.State.cars.sort((a, b) => b.price - a.price)
  _store.State.cars.forEach(car => template += car.Template)
  document.getElementById("car").innerHTML = template
}


//Public
export default class CarController {
  constructor() {
    console.log("hello from controller");
    _store.subscribe("cars", _draw)

  }

  showCars() {
    if (document.getElementById("car").hidden == true) {
      document.getElementById("car").hidden = false
      _CarService.getCars()
    } else {
      document.getElementById("car").hidden = true
    }

    if (document.getElementById("cars").hidden == true) {
      document.getElementById("cars").hidden = false
      _CarService.getCars()
    } else {
      document.getElementById("cars").hidden = true
    }
  }

  addCar(event) {
    event.preventDefault()
    let rawCarData = {
      price: event.target.price.value,
      make: event.target.make.value,
      model: event.target.model.value,
      year: event.target.year.value,
      description: event.target.description.value,
      imgUrl: event.target.imgUrl.value,
    }
    _CarService.addCar(rawCarData)
    // event.target.reset()
  }

  deleteCar(id) {
    _CarService.deleteCar(id)
  }

}