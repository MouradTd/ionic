import { Injectable } from '@angular/core';
import { api } from 'src/app/utils';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  async getTodaysSeances() {
    try {
      const response = await api().get('/sceance/getTodaysSeance');
     
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
