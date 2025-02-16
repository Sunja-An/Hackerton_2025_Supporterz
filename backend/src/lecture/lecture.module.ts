import { Module } from '@nestjs/common';
import { LectureService } from './service/lecture.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lecture } from './entities/lecture.entity';
import { User } from 'src/user/entities';
import { LectureController } from './controller/lecture.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Lecture, User])],
  providers: [LectureService],
  controllers: [LectureController],
  exports: [TypeOrmModule],
})
export class LectureModule {}
