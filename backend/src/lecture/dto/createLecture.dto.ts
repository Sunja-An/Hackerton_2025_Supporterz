import { Transform } from 'class-transformer';
import { IsInt, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateLectureDTO {
  @IsString()
  lecture_name: string;

  @IsString()
  lecture_teacher: string;

  @IsString()
  lecture_day: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Max(6)
  @Min(1)
  lecture_start_time: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Max(6)
  @Min(1)
  lecture_end_time: number;
}
