import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../../database/repositories/UserRepository";
import { validate } from "class-validator";
import { ICreateUserRequest } from "../../../Utils/interfaces/ICreateUserRequest";
import { FailedRequestMessage } from "../../../Utils/messages/FailedRequestMessage";
import { User } from "../../../database/entities/User";
import { EmailAlreadyExistsMessage } from "../../../Utils/messages/EmailAlreadyExistsMessage";

export class CreateUserService {
    async execute ({
        nome, 
        sobrenome,
        email, 
        password,
        isActive,
    }:ICreateUserRequest){
        try {
            const userRepository: object | any = getCustomRepository(UserRepository);
            const errors:object = validate(User);
            const userAlreadyExists: object = await userRepository.findOne(email);

            if(userAlreadyExists){
                return EmailAlreadyExistsMessage;
            } else {
                
                const user = await userRepository.create({
                    nome, 
                    sobrenome,
                    email, 
                    password,
                    isActive,
                });
                await userRepository.save(user);
                return user;
            }
        } catch (error) {
            console.error(error.message);
            const dataResponse = {...FailedRequestMessage, data:{error}};
            return dataResponse;
        }
    }
}