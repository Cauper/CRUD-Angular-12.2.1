import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { WelcomeComponent } from './components/views/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookCrudComponent } from './components/views/book-crud/book-crud.component';
import { BookReadComponent } from './components/book/book-read/book-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { BookDeleteComponent } from './components/book/book-delete/book-delete.component';
import { BookUpdateComponent } from './components/book/book-update/book-update.component';
import { AuthGuard } from './components/login/auth.guard';
import { LoginCreateComponent } from './components/login/login-create/login-create.component';
import { LocalStorageService } from './local-storage.service';
import { UsuarioService } from './components/login/usuario.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    NavigatorComponent,
    WelcomeComponent,
    FooterComponent,
    BookCrudComponent,
    BookReadComponent,
    BookCreateComponent,
    BookDeleteComponent,
    BookUpdateComponent,
    LoginCreateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  providers: [
    UsuarioService,      
    AuthGuard,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
