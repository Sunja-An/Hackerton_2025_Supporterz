import { Lecture } from 'src/lecture/lecture.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'user_id' })
  id: string;

  @Column({ nullable: false, default: '', unique: true })
  username: string;

  @Column({ name: 'email_address', nullable: false, default: '' })
  email: string;

  @Column({ nullable: false, default: '' })
  password: string;

  @ManyToMany(() => Lecture, (lecture) => lecture.students, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  lectures?: Lecture[];

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
