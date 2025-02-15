import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'mysql',
      entities: [
        join(
          __dirname,
          '../entities/*.entity' +
            (process.env.NODE_ENV === 'production' ? '.js' : '.ts'),
        ),
      ],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
