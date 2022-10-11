import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    create(body: CreateUserDto): Promise<import("../users/user.entity").User>;
    login(req: any): Promise<{
        access_token: string;
    }>;
}
