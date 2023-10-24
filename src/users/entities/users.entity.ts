import { BaseEntity } from 'src/config/base.entity';
import { ROLES } from 'src/constants/roles';
import { IUser } from 'src/interfaces/user.interface';
import { Column, Entity, OneToMany } from 'typeorm';
import { UsersProjectsEntity } from './users.projects.entity';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;

  @OneToMany(()=> UsersProjectsEntity, (usersProjects)=> usersProjects.user)
  projectsIncludes: UsersProjectsEntity[]
}
