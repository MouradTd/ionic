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
      { path: 'Prof/Classes', loadChildren: () => import('./pages/Prof/classes/classes.module').then(m => m.ClassesPageModule), canActivate: [AuthGuard]},
      {
        path: 'absences/:classeId',
        loadChildren: () => import('./pages/Prof/absences/absences.module').then( m => m.AbsencesPageModule),
        canActivate: [AuthGuard]

      },
      {
        path: 'profile-student/:studentId',
        loadChildren: () => import('./pages/Admin/profile-student/profile-student.module').then( m => m.ProfileStudentPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'student',
        loadChildren: () => import('./pages/Admin/student-table/student-table.module').then( m => m.StudentTablePageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'sceance',
        loadChildren: () => import('./pages/Admin/sceance-table/sceance-table.module').then( m => m.SceanceTablePageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'classes',
        loadChildren: () => import('./pages/Prof/classes/classes.module').then( m => m.ClassesPageModule)
      },
      {
        path: 'profile-seance/:seanceId',
        loadChildren: () => import('./pages/Admin/profil-seance/profil-seance.module').then( m => m.ProfilSeancePageModule)
      },
      // other child routes...
    ]
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: 'register', loadChildren: () =>import('./pages/register/register.module').then( m => m.RegisterPageModule), },
  
  {
    path: 'add-student-modal',
    loadChildren: () => import('./pages/utils/add-student-modal/add-student-modal.module').then( m => m.AddStudentModalPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./pages/utils/date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'motif-absence-modal',
    loadChildren: () => import('./pages/utils/motif-absence-modal/motif-absence-modal.module').then( m => m.MotifAbsenceModalPageModule)
  },
  {
    path: 'add-sceance-modal',
    loadChildren: () => import('./pages/utils/add-sceance-modal/add-sceance-modal.module').then( m => m.AddSceanceModalPageModule)
  },
  {
    path: 'sceance-table',
    loadChildren: () => import('./pages/Admin/sceance-table/sceance-table.module').then( m => m.SceanceTablePageModule)
  },
  


  

  
  
  // other routes...
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
