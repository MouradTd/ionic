import { Injectable } from '@angular/core';
import { api } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor() { }
  async stats() {
    try {
      const response = await api().get('/employe/statsProfesser');
     
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getClasses() {
    try {
      const response = await api().get('/classe/GetClasseByProfId');
     
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getStudents(id: number) {
    try {
      const response = await api().get('/employe/getStudentsByClasse/'+id);
     
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async InsertAbsences(data: any) {
    try {
      const response = await api().post('/absence/insert',data);
     
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
