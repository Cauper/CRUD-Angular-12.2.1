import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_name: string=''
  user_pass: string=''


  constructor(private usuarioService: UsuarioService, private router: Router, private localStorageService: LocalStorageService) { }

    ngOnInit(): void {
    //limpa o localStorage
    localStorage.clear()
  }


  fazerLogin(): void {
    this.usuarioService.login(this.user_name, this.user_pass).subscribe((res) => 
    
    this.router.navigate(['home']) 
    )
    
    

  }


}
