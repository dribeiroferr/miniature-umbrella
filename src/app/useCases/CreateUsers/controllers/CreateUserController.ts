import { Request, Response } from "express";
import { FailedRequestMessage } from "../../../Utils/messages/FailedRequestMessage";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController { 
    async handle ( req: Request, res: Response ){
        try {
            const {
                nome, 
                sobrenome,
                email, 
                password,
                isActive,
            } = req.body;
            const createUserService = new CreateUserService();
            const user = await createUserService.execute({
                nome, 
                sobrenome,
                email, 
                password,
                isActive,
            });
            return res.json(user);
            
        } catch (error) {
            console.error(error.message);
            const dataResponse = {...FailedRequestMessage, data:{error}};
            return dataResponse;
        }
    }
}