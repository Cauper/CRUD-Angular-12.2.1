import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';
import { HeaderService } from '../../header/header.service';
import { UsuarioService } from '../../login/usuario.service';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {
  
  books!: Book[]

  user_id!:number
  user_perfil!: string
  user_name!: string
   
  displayedColumns = ['id', 'nome', 'autor', 'datacad', 'action']

  constructor(private bookService: BookService, private usuarioService: UsuarioService, private localStorageService: LocalStorageService, private headerService:HeaderService) { 
    headerService.headerData = {
      title: 'Sistema de cadastro de livros - Livros (Lista)',
      icon: 'library_books'
    }
  }

  ngOnInit(): void {
    this.user_id = parseInt(this.localStorageService.get('iduser'))
    this.user_perfil = this.localStorageService.get('perfil')
    this.user_name =  this.localStorageService.get('usuario')

    this.bookService.read().subscribe(books => {
      this.books = books
    

    })
     
  }

}
