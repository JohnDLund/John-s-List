import _car from "../Models/Car.js";
import _store from "../store.js";



// @ts-ignore
const _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 10000
})


//Public
class CarService {
  constructor() {
    console.log("hello from service")
    this.getCars()
  }

  getCars() {
    _api.get("cars/").then(res => {
      console.log(res)
      let cars = res.data.data.map(rawCarData => new _car(rawCarData))
      _store.commit("cars", cars)
    }).catch(err => console.error(err))
  }

  addCar(rawCarData) {
    _api.post("cars/", rawCarData).then(res => {
      console.log(res)
      this.getCars()
    }).catch(err => console.error(err))

  }

  deleteCar(id) {
    _api.delete("cars/" + id).then(res => {
      console.log(res)
      this.getCars()
    }).catch(err => console.error(err))
  }
}




const SERVICE = new CarService();
export default SERVICE;
