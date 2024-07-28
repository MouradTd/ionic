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
  async MotifAbsences(id:number,data: any) {
    try {
      const response = await api().post('/absence/MotifAbsences/'+id,data);
     
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getProfs() {
    try {
      const response = await api().get('/employe/getProfs');
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async addSeance(data: any) {
    try {
      const response = await api().post('/sceance/insert', data);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getSeances() {
    try {
      const response = await api().get('/sceance/get');
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getSeancesById(id:number) {
    try {
      const response = await api().get('/sceance/get/'+id);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getClasseById(id:any) {
    try {
      const response = await api().get('/classe/get/'+id);
     
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
