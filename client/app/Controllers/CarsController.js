import { ProxyState } from "../AppState.js";
import { getCarForm } from "../Components/CarForm.js";
import { carsService } from "../Services/CarsService.js";
import { Pop } from "../Utils/Pop.js"

// edit process: fill form with data from the thing you want to edit, change the data, then send a request to 
// make all async's in controller tryCatch
// pop.error should go in the controller

function _drawCars() {
  let template = ''
  let cars = ProxyState.cars
  cars.forEach(c => template += c.Template)
  document.getElementById('listings').innerHTML = template
}

export class CarsController {
  constructor() {
    ProxyState.on('cars', _drawCars)
    this.getCars()
  }

    async getCars() {
      try {
        await carsService.getCars()
      } catch (error) {
        console.log('[get cars]', error);
        Pop.error(error)
      }
    }

    async createCar() {
      try {
        window.event.preventDefault()
        let form = window.event.target
        let newCar = {
          make: form.make.value,
          model: form.model.value,
          year: form.year.value,
          price: form.price.value,
          imgUrl: form.imgUrl.value,
          description: form.description.value,
        }
        await carsService.createCar(newCar)
        form.reset()
      } catch (error) {
        console.log('[create car]', error);
        Pop.error(error)
      }
    }

  drawForm() {
    document.getElementById("form").innerHTML = getCarForm()
  }

  viewCars() {
    this.getCars()
    _drawCars()
    document.getElementById('listing-form-button').innerHTML = `<button type="button" class="btn btn-primary rounded-pill" onclick="app.carsController.drawForm()">List Your Own Car!</button>`
    // let carFormElm = document.getElementById("form")
    // carFormElm.classList.remove("d-none")
    // let jobFormElm = document.getElementById("job-form")
    // jobFormElm.classList.add("d-none")
    // let houseFormElm = document.getElementById("house-form")
    // houseFormElm.classList.add("d-none")
  }

  async deleteCar(carId) {
    try {
      await carsService.deleteCar(carId)
    } catch (error) {
      console.log('[delete car]', error);
      Pop.error(error)
    }
  }

  // NOT ASYNC
  adjustCar(carId) {
    let car = ProxyState.cars.find(c => c.id == carId)
    document.getElementById('form').innerHTML = getCarForm(car)
  }

  async editCar(carId) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let carData = {
        id: carId,
        make: form.make.value,
        model: form.model.value,
        year: form.year.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value,
        description: form.description.value,
      }
      await carsService.editCar(carData)
    } catch (error) {
      console.log('[Edit Car]', error);
      Pop.error(error)
    }
  }
}