import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private repository;
    constructor(repository: Repository<User>);
    create(dto: CreateUserDto): Promise<CreateUserDto & User>;
    findOne(id: any): Promise<User>;
}
