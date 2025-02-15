import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Lecture } from 'src/lecture/entities/lecture.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  userCreate(email: string, password: string, username: string): Promise<any> {
    const user = this.userRepository.create({ email, password, username });
    return this.userRepository.save(user);
  }

  async getUserLectures(userId: number): Promise<Lecture[]> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['lectures'],
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user.lectures;
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.userRepository.findOneBy({ id });
  }

  findEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.userRepository.remove(user);
  }
}
