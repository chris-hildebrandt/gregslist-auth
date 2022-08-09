import { dbContext } from '../db/DbContext.js'
import { BadRequest } from '../utils/Errors.js'

class HousesService {

  async getHouses() {
    let houses = await dbContext.Houses.find()
    return houses
  }

  async createHouse(houseData) {
    let house = await dbContext.Houses.create(houseData)
    return house
  }

  async getHouseById(houseId) {
    let house = await dbContext.Houses.findById(houseId)
    if (!house) {
      throw new BadRequest('invalid House Id')
    }
    return house
  }

  async editHouse(houseId, body) {
    let house = await this.getHouseById(houseId)

    // car.make = body.make || car.make
    // car.model = body.model || car.model
    // car.price = body.price || car.price
    // car.year = body.year || car.year
    // car.img = body.img || car.img
    // car.description = body.description || car.description

    await house.save()
    return house
  }

  async deleteHouse(houseId) {
    let house = await this.getHouseById(houseId)

    await house.remove()
    return house
  }
}

export const housesService = new HousesService()