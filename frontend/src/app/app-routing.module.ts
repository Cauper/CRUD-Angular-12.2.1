import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { BookDeleteComponent } from './components/book/book-delete/book-delete.component';
import { BookUpdateComponent } from './components/book/book-update/book-update.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './components/login/auth.guard';
import { LoginCreateComponent } from './components/login/login-create/login-create.component';
import { LoginComponent } from './components/login/login.component';
import { BookCrudComponent } from './components/views/book-crud/book-crud.component';
import { WelcomeComponent } from './components/views/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login-create',
    component: LoginCreateComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'books',
        component: BookCrudComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'create',
        component: BookCreateComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "delete/:id",
        component: BookDeleteComponent,
        canActivate: [AuthGuard]
    
      },
      {
        path: "update/:id",
        component: BookUpdateComponent,
        canActivate: [AuthGuard]
    
      },
      {
        path: '',
        redirectTo: '/home/welcome',
        pathMatch: 'full'
      }      

    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
