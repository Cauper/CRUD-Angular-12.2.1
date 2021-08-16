export interface Usuario {
    id?: number
    usuario: string
    nome: string
    senha: string
    perfil: string
}

export interface UserResponse {
    usuario: string
    nome: string
    perfil: string
    id: number
}