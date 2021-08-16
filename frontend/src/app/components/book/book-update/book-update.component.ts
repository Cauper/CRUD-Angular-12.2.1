import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../header/header.service';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  book!: Book

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute, private headerService:HeaderService) { 
    headerService.headerData = {
      title: 'Sistema de cadastro de livros - Livros (Alteração)',
      icon: 'library_books'
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.bookService.readById(id).subscribe((book) => {
      this.book = book
    });

  }

  updateBook(): void{
    this.bookService.update(this.book).subscribe(() => {
      this.bookService.showMessage("Livro atualizado com sucesso!");
      this.router.navigate(["/home", "books"])
    });

  }
  
  cancel(): void {
    this.router.navigate(["/home", "books"])

  }



}
