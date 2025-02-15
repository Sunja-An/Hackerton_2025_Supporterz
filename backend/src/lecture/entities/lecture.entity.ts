import { AbstractEntity } from 'src/common/entites';
import { User } from 'src/user/entities';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity({ name: 'lectures' })
export class Lecture extends AbstractEntity {
  @Column({ nullable: false, default: '' })
  lecture_name: string;

  @Column({ nullable: true })
  lecture_teacher: string;

  @Column({ nullable: false, default: '月' })
  lecture_day: string;

  @Column({ nullable: false, default: '1' })
  lecture_start_time: number;

  @Column({ nullable: false, default: '2' })
  lecture_end_time: number;

  @ManyToMany(() => User, (user) => user.lectures)
  students: User[];
}
