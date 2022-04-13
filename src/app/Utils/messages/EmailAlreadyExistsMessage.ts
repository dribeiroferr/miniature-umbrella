interface objInterface {
    [key : string]:string;
    message?: string;
}

export const EmailAlreadyExistsMessage : objInterface = {
    message: "Email já cadastrado, favor validar !"
};