import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateLectureDTO } from '../dto/createLecture.dto';
import { LectureService } from '../service/lecture.service';

@Controller('lecture')
export class LectureController {
  constructor(private lectureService: LectureService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('')
  createLecture(@Body() request: CreateLectureDTO) {
    return this.lectureService.createLecture(request);
  }

  @HttpCode(HttpStatus.OK)
  @Get('')
  getLectureList() {
    return this.lectureService.getLectureList();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getLecture(@Param('id') id: string) {
    return this.lectureService.getLecture(parseInt(id));
  }
}
