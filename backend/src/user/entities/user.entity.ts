import { AbstractEntity } from 'src/common/entites';
import { Lecture } from 'src/lecture/entities/lecture.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'users' })
export class User extends AbstractEntity {
  @Column({ nullable: false, default: '' })
  username: string;

  @Column({ name: 'email', nullable: false, default: '', unique: true })
  email: string;

  @Column({ nullable: false, default: '' })
  password: string;

  @ManyToMany(() => Lecture, (lecture) => lecture.students)
  @JoinTable({
    name: 'user_lectures', // 연결 테이블의 이름
    joinColumn: {
      name: 'user_id', // 현재 테이블의 컬럼 이름
      referencedColumnName: 'id', // User 테이블의 기본 키
    },
    inverseJoinColumn: {
      name: 'lecture_id', // 반대 테이블의 컬럼 이름
      referencedColumnName: 'lecture_id', // Lecture 테이블의 기본 키
    },
  })
  lectures: Lecture[];

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with id', this.id);
  }
}
