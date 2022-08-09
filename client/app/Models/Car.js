
export class Car{
  constructor(data){
    this.id = data.id
    this.make = data.make || ''
    this.model = data.model || ''
    this.year = data.year || 0
    // you can sort of enforce this by setting min values on the form
    this.price = data.price || 500 
    this.imgUrl = data.imgUrl || ''
    this.description = data.description || ''
    this.color = data.color || '#65f9a0'
  }

  get Template(){
    return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.imgUrl}" alt="">
        <div class="p-2">
          <h4 class="text-center">${this.make} | ${this.model} | ${this.year}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete Listing</button> 
          <button class="btn btn-warning" onclick="app.carsController.adjustCar('${this.id}')">Edit Listing</button> 
        </div>
      </div>
    </div>
    `
  }
}