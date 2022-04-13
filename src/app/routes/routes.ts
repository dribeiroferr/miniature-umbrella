import { Router, Request, Response } from "express";
import { SuccessMessage } from "../Utils/messages/SuccessMessage";
import { RootPathResponse } from "../Utils/messages/RootPathResponse";
import cors from "cors";
import { options } from "../Utils/config/cors/Options";

import { CreateUserController } from "../useCases/CreateUsers/controllers/CreateUserController";

const createUserController: CreateUserController = new CreateUserController();

export const router: Router = Router();

// também para fins de desenvolvimento 
// cors habilitado como '*'
router.use(cors(options));

// enable cors preflight
router.options('*', cors(options));


// calling classes...
router.get("/", ( req: Request, res: Response ) => {
    return res.json({
        message: "Hello from Miniature Umbrella !",
        version: "V1.0",
        status: "Ok"
    });
});

router.post("/users", createUserController.handle);