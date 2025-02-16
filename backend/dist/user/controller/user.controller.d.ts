import { UserService } from './../service/user.service';
import { Lecture } from 'src/lecture/entities/lecture.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUserLectures(id: string): Promise<Lecture[]>;
}
