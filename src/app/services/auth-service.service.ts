import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { api, helpers } from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private router: Router,) {}
  isLoggedIn(): boolean {
    // Check if the user is logged in based on your authentication mechanism
    // For example, you can check if there's a user object stored in local storage
    return !!localStorage.getItem('user');
  }
   async login(data: any) {
    try {
      const response = await api().post('/auth/login', data);
      helpers.setSavedUser(response.data);
      helpers.redirectBasedOnRole(response.data.user.roles[0].name,this.router);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
   async logout() {
    try {
      const response = await api().post('/auth/logout');
      localStorage.clear();
      return response.status;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

//   login (formData: { email: string, password: string }){
//     try {
//         const response = await api().post('/auth/login', formData);
//         helpers.setSavedUser(response.data);
//         helpers.redirectBasedOnRole(response.data.user.roles[0].name);
//         return response;
//     } catch (error) {
//         return Promise.reject(error);

//     }
// };


