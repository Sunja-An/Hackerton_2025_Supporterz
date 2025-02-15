import { Expose } from 'class-transformer';

export class ResponseLectureDTO {
  @Expose()
  lecture_name: string;

  @Expose()
  lecture_teacher: string;

  @Expose()
  lecture_day: string;

  @Expose()
  lecture_start_time: number;

  @Expose()
  lecture_end_time: number;
}
