import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { helpers } from 'src/app/utils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {

  constructor(public authService: AuthService , public router: Router) { }
  
  itemsMenu:MenuItem[] = [];
  user: any
  role:string = '';
  ngOnInit() {
    this.itemsMenu = [];
    this.user = {};
    this.itemsMenu = helpers.returnSideBarItems();
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.role = localStorage.getItem('role') || '';
    
  }
  logout(){
    this.authService.logout().then((response) => {
      if(response === 200){
        this.router.navigate(['/login']);
      
    }
  });

}
}
interface MenuItem {
  id: number;
  name: string;
  route: string;
  icon: string;
  path: string;
}
