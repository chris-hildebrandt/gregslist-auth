
export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms || 0
    this.bathrooms = data.bathrooms || 0
    this.year = data.year
    this.price = data.price || 0
    this.imgUrl = data.imgUrl || ''
    this.description = data.description || ''
  }

  // TODO fix buttons
  get Template() {
    return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.imgUrl}" alt="">
        <div class="p-2">
          <h4 class="text-center">Beds:${this.bedrooms} | Baths:${this.bathrooms} |Built: ${this.year}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          // <button class="btn btn-danger" onclick="app.Controller.deleteCar('${this.id}')">Delete Listing</button> 
          // <button class="btn btn-warning" onclick="app.Controller.adjustCar('${this.id}')">Edit Listing</button> 
        </div>
      </div>
    </div>
    `
  }
}