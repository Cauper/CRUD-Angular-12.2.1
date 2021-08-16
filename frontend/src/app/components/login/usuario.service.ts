import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Usuario, UserResponse } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public Autenticado: boolean = false
    
  baseUrl = " http://localhost:3001/users/"
  resToJson!: string
  ResOk: any

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private loLocalStorageService: LocalStorageService) { }  

  login(nome:string, senha: string): Observable<any> {
    const url = `${this.baseUrl}/?usuario=${nome}&senha=${senha}`;
    return this.http.get<UserResponse>(url).pipe(
      map( (res: UserResponse) => {
        console.log('Res ->', res)
        const aux = JSON.stringify(res).replace('[','')
        this.ResOk = aux.replace(']','')

        this.resToJson = JSON.stringify(res)
        if (this.resToJson === '[]') {
          this.showMessage('Usuário ou senha inválida', true)
          this.Autenticado = false
        } else {
          this.saveDadosUser(this.ResOk)
          this.Autenticado = true
        }
        
      }),
    catchError(e => this.ErrorHandler(e)),
    )
  }

  logout(): void{
    this.loLocalStorageService.clear
    //set userISLogged = false
  }

  private saveDadosUser(perfil: any){
   
    var tabela = JSON.parse(perfil) 

    this.loLocalStorageService.set('iduser', tabela.id)
    this.loLocalStorageService.set('usuario', tabela.usuario)
    this.loLocalStorageService.set('nome', tabela.nome)
    this.loLocalStorageService.set('perfil', tabela.perfil)
    
  }
  
  
  showMessage(msg: string, isError: boolean=false):void {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
      
    })
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario).pipe(
      map(obj => obj),
      catchError(e => this.ErrorHandler(e))
    )
  }

  readById(nome:string, senha: string): Observable<Usuario> {
    const url = `${this.baseUrl}/?usuario=${nome}&senha=${senha}`;
        
    return this.http.get<Usuario>(url).pipe(
      map(obj => obj),
      catchError(e => this.ErrorHandler(e)),
    )
  }


  usuarioEstaAutenticado():boolean{
    return this.Autenticado;
  }

  ErrorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!!', true)
    return EMPTY

  }


//  private handlerError(err): Observable<never> {
//    let errorMessage = 'An error ocurred retrienving data'
//    if (err) {
//      errorMessage = `Error: code ${err.message}`
//    }
//    window.alert(errorMessage)
//    return throwError(errorMessage)
 // }

}
