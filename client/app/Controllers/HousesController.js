import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"
import { getHouseForm } from "../Components/HouseForm.js"
import { Pop } from "../Utils/Pop.js"

function _drawHouses() {
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.Template)
  // @ts-ignore
  document.getElementById("listings").innerHTML = template
  // @ts-ignore
  document.getElementById('form').innerHTML = getHouseForm()
}

export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
    this.getHouses()
  }

  viewHouses() {
    this.getHouses()
    _drawHouses
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.log('[get houses]', error);
      Pop.error(error)
    }
  }

  async createHouse() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      let form = window.event.target
      let newHouse = {
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        year: form.year.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value,
        description: form.description.value,
      }
      await housesService.createHouse()
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.log('create house', error);
      Pop.error(error)
    }
  }

  async deleteHouse(){
    try {
      
    } catch (error) {
      console.log('[delete house]');
    }
  }

}