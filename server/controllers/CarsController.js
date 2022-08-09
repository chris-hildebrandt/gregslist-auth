import BaseController from "../utils/BaseController.js"

export class CarsController extends BaseController {

  constructor() {
    super('/api/cars')
    this.router
      .get('', this.getCars)
      .post('', this.createCar)
      .get('/:carId', this.getCarById)
      .put('/:carId', this.editCar)
      .delete('/:carId', this.deleteCar)
    this.router = undefined
  }

  async getCars(req, res, next) {
    try {
      let cars = await carsService.getCars()
      res.send(cars)
    } catch (error) {
      next(error)
    }
  }

  async createCar(req, res, next) {
    try {
      let car = await carsService.createCar(req.body)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async getCarById(req, res, next) {
    try {
      let car = await carsService.getCarById(req.params.carId, req.body)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async editCar(req, res, next) {
    try {
      let car = 
    } catch (error) {
      next(error)
    }
  }

  async deleteCar(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
}
