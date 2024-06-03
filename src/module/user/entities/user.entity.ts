import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', { comment: 'User identity', name: 'user_id' })
  readonly userId: string;

  @Column('varchar', { comment: 'User phone', nullable: false, length: 20 })
  phone: string;

  @Column('varchar', { comment: 'User login', nullable: false, length: 20 })
  login: string;

  @Column('varchar', { comment: 'User name' })
  firstName: string;

  @Column('varchar', { comment: 'User last name' })
  lastName: string;

  @Column('varchar', { comment: 'password hash' })
  passwordHash: string;

  @Column('varchar', { comment: 'password salt' })
  passwordSalt: string;

  @Column('varchar', { comment: 'user role', nullable: false, default: 'USER' })
  role: string;
}
