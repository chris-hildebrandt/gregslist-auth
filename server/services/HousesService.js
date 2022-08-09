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

    this.id = data.id
    this.bedrooms = data.bedrooms || 0
    this.bathrooms = data.bathrooms || 0
    this.year = data.year
    this.price = data.price || 0
    this.img = data.img || ''
    this.description = data.description || ''

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