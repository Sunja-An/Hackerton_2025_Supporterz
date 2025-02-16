import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lecture } from 'src/lecture/entities';
import { User } from 'src/user/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'JIKANWARI',
      entities: [User, Lecture],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
