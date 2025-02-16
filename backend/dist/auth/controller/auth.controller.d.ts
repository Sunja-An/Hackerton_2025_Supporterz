import { AuthService } from '../service/auth.service';
import { CreateUserDto } from 'src/user/dto/createUserDTO.dto';
import { LoginUserDTO } from 'src/user/dto/loginUser.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(body: LoginUserDTO): Promise<any>;
    signUp(body: CreateUserDto): Promise<any>;
}
