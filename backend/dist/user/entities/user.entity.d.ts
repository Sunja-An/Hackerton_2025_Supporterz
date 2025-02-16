import { AbstractEntity } from 'src/common/entites';
import { Lecture } from 'src/lecture/entities/lecture.entity';
export declare class User extends AbstractEntity {
    username: string;
    email: string;
    password: string;
    lectures: Lecture[];
    logInsert(): void;
    logUpdate(): void;
    logRemove(): void;
}
