import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.component.html',
  styleUrls: ['./login-create.component.css']
})
export class LoginCreateComponent implements OnInit {

  usuario: Usuario = {
    usuario: '',
    nome: '',
    senha: '',
    perfil: 'client'
  }
  senhaconf: string = ""

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  createUsuario(): void {
    if (this.usuario.nome === '') {
      this.usuarioService.showMessage('Nome do usuário não pode ficar em branco', true)
    } else {
      if (this.usuario.usuario === '') {
        this.usuarioService.showMessage('Login não pode ficar em branco', true)
      } else {
        if (this.usuario.senha === '' || this.senhaconf === '') {
          this.usuarioService.showMessage('As senhas não pode ficar em branco', true)
        } else {
          if (this.usuario.senha !== this.senhaconf) {
            this.usuarioService.showMessage('As senhas estão diferentes', true)
          } else {
            this.usuarioService.create(this.usuario).subscribe(() => {
              this.usuarioService.showMessage('Usuário cadastrado')
              this.router.navigate([''])
            })

          }
        }
      }
    }
  }


    cancel(): void {
      this.router.navigate([''])
    }

  }
