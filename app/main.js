import HouseController from "./Controllers/HouseController.js";
import CarController from "./Controllers/CarController.js";

class App {
  houseController = new HouseController();
  carController = new CarController()
}

window["app"] = new App();
