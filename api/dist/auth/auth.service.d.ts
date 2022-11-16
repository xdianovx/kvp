import { CreateUserDto } from './../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(dto: CreateUserDto): Promise<{
        access_token: string;
        name?: string;
        email: string;
        password: string;
        id: number;
        created_at: Date;
        updated_at: Date;
    }>;
    login(dto: CreateUserDto): Promise<{
        access_token: string;
        id: number;
        name?: string;
        email: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }>;
    generateJwt(data: {
        id: number;
        email: string;
    }): Promise<string>;
    validateUser(email: string, pass: string): Promise<import("../user/entities/user.entity").User>;
}
