import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/service/user.service';
import { CreateUserDto } from 'src/user/dto/createUserDTO.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signUp(request: CreateUserDto): Promise<any>;
    signIn(email: string, pass: string): Promise<any>;
}
