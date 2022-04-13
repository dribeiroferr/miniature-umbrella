import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsEmail, MaxLength, MinLength } from "class-validator";
import bcrypt from "bcryptjs";
import dotenv from "dotenv"
import { v4 as uuid } from 'uuid';

dotenv.config({
    path: __dirname + "../../../../.env"
})

@Entity('users', {
    schema: 'users'
})
export class User {
    @Column('uuid', {
        primary: true
    })
    readonly id: string;

    @MaxLength(25, {
        message:"Nome muito longo"
    })
    @MinLength(3, {
        message:"Nome muito curto"
    })
    @Column('varchar', {
        nullable: false, 
        unique: false
    })
    nome: string;

    @MaxLength(25, {
        message:"Nome muito longo"
    })
    @MinLength(3, {
        message:"Nome muito curto"
    })
    @Column('varchar', {
        nullable: false, 
        unique: false
    })
    sobrenome: string;

    // @IsEmail({},{message: "email inválido"})
    @Column('varchar', {
        nullable: false, 
        unique: true
    })
    email: string;

    /**
     * Poderia colocar uma validação na coluna abaixo: 
     * contendo regEX para determinar se a senha é considerada, 
     * ou não fraca. Porém, normalmente este tipo de validação
     * é realizado no frontend, antes do mesmo enviar a request 
     * ao banco de dados. 
     * 
     * A única tecnologia empregada de maneira "diferente" queu irei
     * implementar na senha será uma simples criptografia utilizando 
     * a lib bcryptJS.
    */

    @Column('varchar', {
        nullable: false, 
        unique: false
    })
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashpassword(){
        this.password = bcrypt.hashSync(this.password, process.env.HASHEDSALTS)
    }

    @Column("bool", {
        nullable: false, 
        default: true
    })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    UpdatedAt: Date;

    @DeleteDateColumn()
    DeletedAt: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}