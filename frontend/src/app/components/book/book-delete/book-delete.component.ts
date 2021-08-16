import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../header/header.service';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  book!: Book
  
  constructor(private router: Router, private route: ActivatedRoute, private bookService:BookService, private headerService:HeaderService) { 
    headerService.headerData = {
      title: 'Sistema de cadastro de livros - Livros (Exclusão)',
      icon: 'library_books'
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.bookService.readById(id).subscribe((book) => {
      this.book = book
    });

  }

  deleteBook(): void {
    this.bookService.delete(this.book.id).subscribe(() => {
      this.bookService.showMessage("Livro excluído com sucesso!");
      this.router.navigate(["/home", "books"])
    });

  }

  cancel(): void{
    this.router.navigate(["/home", "books"])
  }

}
