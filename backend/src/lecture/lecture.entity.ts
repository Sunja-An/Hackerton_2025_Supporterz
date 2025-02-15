import { User } from 'src/typeorm';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lecture {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  lecture_id: number;

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

  @ManyToMany(() => User, (user) => user.lectures, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  students?: User[];
}
