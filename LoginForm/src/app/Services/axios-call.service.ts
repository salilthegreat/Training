import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})

export class AxiosCallService {

  constructor() { }

  async getData(url: string): Promise<any> {
    try {
      const response = await axios.get(url)
      return response.data
    }
    catch (error) {
      throw (error)
    }
  }

  async postData(url: string, payload: any): Promise<any> {
    try {
      const response = await axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      })
      return response.data
    }
    catch (error) {
      throw (error)
    }
  }
}
