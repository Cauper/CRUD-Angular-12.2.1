import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../header/header.service';

@Component({
  selector: 'app-book-crud',
  templateUrl: './book-crud.component.html',
  styleUrls: ['./book-crud.component.css']
})
export class BookCrudComponent implements OnInit {

  constructor(private router: Router, private headerService:HeaderService) { 
    headerService.headerData = {
      title: 'Sistema de cadastro de livros - Livros',
      icon: 'library_books'
    }
  }


  ngOnInit(): void {
  }

  navigateToBookCreate(): void {
    console.log(this.router.navigate(['/home', 'create']) )
  }


}
