import _house from "../Models/House.js";
import _store from "../store.js";



// @ts-ignore
const _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 10000
})


//Public
class HouseService {
  constructor() {
    console.log("hello from service")
    this.getHouses()
  }

  getHouses() {
    _api.get("houses/").then(res => {
      console.log(res)
      let houses = res.data.data.map(rawHouseData => new _house(rawHouseData))
      _store.commit("houses", houses)
    }).catch(err => console.error(err))
  }

  addHouse(rawHouseData) {
    _api.post("houses/", rawHouseData).then(res => {
      console.log(res)
      this.getHouses()
    }).catch(err => console.error(err))

  }

  deleteHouse(id) {
    _api.delete("houses/" + id).then(res => {
      console.log(res)
      this.getHouses()
    }).catch(err => console.error(err))
  }
}




const SERVICE = new HouseService();
export default SERVICE;
