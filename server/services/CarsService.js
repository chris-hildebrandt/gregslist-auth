import { dbContext } from '../db/DbContext.js'
import { BadRequest } from '../utils/Errors.js'

class CarsService {

  async getCars() {
    let cars = await dbContext.Cars.find()
    return cars
  }

  async createCar(carData) {
    let car = await dbContext.Cars.create(carData)
    return car
  }

  async getCarById(carId) {
    let car = await dbContext.Cars.findById(carId)
    if (!car) {
      throw new BadRequest('invalid car Id')
    }
    return car
  }

  async editCar(carId, body) {
    let car = await this.getCarById(carId)

    car.make = body.make || car.make
    car.model = body.model || car.model
    car.price = body.price || car.price
    car.year = body.year || car.year
    car.img = body.img || car.img
    car.description = body.description || car.description

    await car.save()
    return car
  }

  async deleteCar(carId) {
    let car = await this.getCarById(carId)

    await car.remove()
    return car
  }
}

export const carsService = new CarsService()