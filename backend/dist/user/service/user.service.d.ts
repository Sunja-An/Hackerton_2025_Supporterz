import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { Lecture } from 'src/lecture/entities/lecture.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    userCreate(email: string, password: string, username: string): Promise<any>;
    getUserLectures(userId: number): Promise<Lecture[]>;
    findOne(id: number): Promise<User>;
    findEmail(email: string): Promise<User>;
    update(id: number, attrs: Partial<User>): Promise<User>;
    remove(id: number): Promise<User>;
}
