import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(dto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").User>;
    findOne(id: number): Promise<import("./entities/user.entity").User>;
}
