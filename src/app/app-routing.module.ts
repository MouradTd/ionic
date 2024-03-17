import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './utils/auth.guard';
import { HomePage } from './pages/Prof/home/home.page';
import { WelcomePage } from './pages/welcome/welcome.page';
import { LayoutPage } from './pages/layout/layout.page';
import { LoginPage } from './pages/login/login.page';
import { WelcomePageModule } from './pages/welcome/welcome.module';
import { HomePageModule } from './pages/Prof/home/home.module';
import { LayoutPageModule } from './pages/layout/layout.module';
import { LoginPageModule } from './pages/login/login.module';
import { RegisterPageModule } from './pages/register/register.module';
// const routes: Routes = [
  
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full'
//   },
  
//   {
//     path: 'login',
//     loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
//   },
//   {
//     path: 'welcome',
//     loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule),
//     canActivate: [AuthGuard]

//   },
//   {
//     path: 'register',
//     loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
//   },
//   {
//     path: 'DashboardProf',
//     loadChildren: () => import('./pages/Prof/home/home.module').then( m => m.HomePageModule),
//     canActivate: [AuthGuard]
//   },
//   {
//     path: 'menu',
//     loadChildren: () => import('./pages/utils/menu/menu.module').then( m => m.MenuPageModule),
//     canActivate: [AuthGuard]
//   },
//   {
//     path: 'layout',
//     loadChildren: () => import('./pages/layout/layout.module').then( m => m.LayoutPageModule)
//   },
  
// ];

const routes: Routes = [
  {
    path: '',
    component: LayoutPage, // This component contains the menu
    children: [
      { path: 'DashboardProf', loadChildren: () => import('./pages/Prof/home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard]},
      { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule), canActivate: [AuthGuard]},
      // other child routes...
    ]
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: 'register', loadChildren: () =>import('./pages/register/register.module').then( m => m.RegisterPageModule), },
  // other routes...
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
