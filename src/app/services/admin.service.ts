import { Injectable } from '@angular/core';
import { api } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  async getStudents() {
    try {
      const response = await api().get('/employe/getStudents');
     
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async addStudent(data: any) {
    try {
      const response = await api().post('/employe/addStudent', data);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getClasses() {
    try {
      const response = await api().get('/classe/get');
     
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getStudent(id:number) {
    try {
      const response = await api().get('/employe/getStudent/'+id);
     
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
