export default class Car {
  constructor(data) {
    this.id = data._id
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description
  }

  get Template() {
    return `
  <div class="col-3 card" style="width: 18rem;">
  <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
  <div class="card-body">
      <h5 class="card-title">Price: ${this.price}</h5>
      <p>Levels: ${this.make}</p>
      <p>Bedrooms: ${this.model}</p>
      <p>Bathrooms: ${this.year}</p>
      <pYear: ${this.description}</p>
      <button class="btn btn-danger" onclick="app.carController.deleteCar('${this.id}')">Delete Car</button>
  </div>
  </div>
    `
  }
}