import { User } from 'src/user/entities';
export declare class Lecture {
    lecture_id: number;
    lecture_name: string;
    lecture_teacher: string;
    lecture_day: string;
    lecture_start_time: number;
    lecture_end_time: number;
    students: User[];
}
