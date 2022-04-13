export interface ICreateUserRequest {
    nome: string;
    sobrenome: string;
    email: string;
    password: string;
    isActive: boolean;
}