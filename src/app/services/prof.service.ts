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
  async getStudents(id: number,sceanceId: number) {
    try {
      const response = await api().get('/employe/getStudentsByClasse/'+id+'/'+sceanceId);
     
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
  async getLatestAbsences() {
    try {
      const response = await api().get('/absence/getLatestAbsences');
     
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getAllClasses() {
    try {
      const response = await api().get('/classe/GetAllClasses');
     
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

}
