import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
import { api } from "./AxiosService.js"



class HousesService{
  createHouse() {
    throw new Error("Method not implemented.")
  }



  async getHouses(){
    let res = await api.get('/api/houses')
    ProxyState.houses = res.data.map(h => new House(h))
  }
}

export const housesService = new HousesService()