import { Repository } from 'typeorm';
import { CreateLectureDTO } from '../dto/createLecture.dto';
import { User } from 'src/user/entities';
import { Lecture } from '../entities/lecture.entity';
export declare class LectureService {
    private userRepository;
    private lectureRepository;
    constructor(userRepository: Repository<User>, lectureRepository: Repository<Lecture>);
    addLectureToUser(userId: number, lectureId: number): Promise<User>;
    getLecture(id: number): Promise<Lecture>;
    getLectureList(): Promise<any>;
    createLecture(data: CreateLectureDTO): Promise<Lecture>;
}
