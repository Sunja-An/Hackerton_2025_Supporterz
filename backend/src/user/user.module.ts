import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities';
import { Lecture } from 'src/lecture/entities/lecture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Lecture])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
