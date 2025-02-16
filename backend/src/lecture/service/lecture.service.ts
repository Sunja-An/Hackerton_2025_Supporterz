import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLectureDTO } from '../dto/createLecture.dto';
import { User } from 'src/user/entities';
import { Lecture } from '../entities/lecture.entity';
import { AuthGuard } from 'src/common/guard';

@Injectable()
@UseGuards(AuthGuard)
export class LectureService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Lecture) private lectureRepository: Repository<Lecture>,
  ) {}

  async addLectureToUser(userId: number, lectureId: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['lectures'],
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const lecture = await this.lectureRepository.findOne({
      where: { lecture_id: lectureId },
    });
    if (!lecture) {
      throw new NotFoundException(`Lecture with ID ${lectureId} not found`);
    }
    if (user.lectures.some((lecture) => lecture.lecture_id === lectureId)) {
      throw new BadRequestException(
        `Lecture with ID ${lectureId} is already added to the user`,
      );
    }
    user.lectures.push(lecture);
    return await this.userRepository.save(user);
  }

  getLecture(id: number) {
    if (!id) return null;
    return this.lectureRepository.findOneBy({ lecture_id: id });
  }

  getLectureList() {
    return this.lectureRepository.find();
  }

  createLecture(data: CreateLectureDTO) {
    const lecture = this.lectureRepository.create({
      lecture_name: data.lecture_name,
      lecture_teacher: data.lecture_teacher,
      lecture_day: data.lecture_day,
      lecture_start_time: data.lecture_start_time,
      lecture_end_time: data.lecture_end_time,
    });

    return this.lectureRepository.save(lecture);
  }
}
