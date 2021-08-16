import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../header/header.service';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})

export class BookCreateComponent implements OnInit {

  book: Book = {
    nome: '',
    autor: '',
    datacad: '',
    idinclusao: 0
  }

  constructor(private router: Router, private bookService: BookService, private headerService:HeaderService) { 
    headerService.headerData = {
      title: 'Sistema de cadastro de livros - Livros (Inclusão)',
      icon: 'library_books'
    }
  }

  ngOnInit(): void {
    this.book.idinclusao = parseInt(localStorage.getItem('iduser') || '0')
  }

  createBook(): void{
    this.bookService.create(this.book).subscribe(() => {
      this.bookService.showMessage('Livro cadastrado!!')
      this.router.navigate(['/home', 'books'])
    })
  }

  cancel(): void{
    this.router.navigate(['/home', 'books'])
  }



}
