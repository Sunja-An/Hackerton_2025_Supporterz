import { UserService } from './../service/user.service';
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard';
import { Lecture } from 'src/lecture/entities/lecture.entity';

@Controller('users')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/my/:id')
  async getUserLectures(@Param('id') id: string): Promise<Lecture[]> {
    return this.userService.getUserLectures(parseInt(id));
  }
}
