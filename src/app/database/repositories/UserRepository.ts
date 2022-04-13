import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

     // 1. Buscar pelo Id da conta: 

 public async findByUserId(id: string): Promise<User[]> {
    const dataById = await this.find({ where: { id }});
    return dataById;
}

    // 2. Buscar pelo nome da conta: 

public async findByName(name: string): Promise<User[]> {
    const dataByName = await this.find({ where: { name }});
    return dataByName;
}
}
