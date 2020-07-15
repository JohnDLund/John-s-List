export default class House {
    constructor(data) {
        this.id = data._id
        this.bathrooms = data.bathrooms
        this.bedrooms = data.bedrooms
        this.imgUrl = data.imgUrl
        this.levels = data.levels
        this.price = data.price
        this.year = data.year
    }

    get Template() {
        return `
    <div class="col-3 card" style="width: 18rem;">
    <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">Price: ${this.price}</h5>
        <p>Levels: ${this.levels}</p>
        <p>Bedrooms: ${this.bedrooms}</p>
        <p>Bathrooms: ${this.bathrooms}</p>
        <pYear: ${this.year}</p>
        <button class="btn btn-danger" onclick="app.houseController.deleteHouse('${this.id}')">Delete House</button>
    </div>
    </div>
      `
    }
}