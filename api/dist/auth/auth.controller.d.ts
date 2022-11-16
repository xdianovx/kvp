import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    sdf(): Promise<string>;
}
