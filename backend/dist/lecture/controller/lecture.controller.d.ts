import { CreateLectureDTO } from '../dto/createLecture.dto';
import { LectureService } from '../service/lecture.service';
export declare class LectureController {
    private lectureService;
    constructor(lectureService: LectureService);
    createLecture(request: CreateLectureDTO): Promise<import("../entities").Lecture>;
    getLectureList(): Promise<any>;
    getLecture(id: string): Promise<import("../entities").Lecture>;
}
