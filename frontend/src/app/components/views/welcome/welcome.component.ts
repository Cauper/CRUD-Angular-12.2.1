import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../header/header.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private headerService:HeaderService ) { 
    headerService.headerData = {
      title: 'Sistema de cadastro de livros - Boas Vindas',
      icon: 'home'
    }
  }
  
  user_name!:String
  userJson: any

  ngOnInit(): void {
    this.userJson  =  localStorage.getItem('nome')
    this.user_name =  this.userJson.replace('"', '')
    this.user_name =  this.user_name.replace('"','')
  }

}
