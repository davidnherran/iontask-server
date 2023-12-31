import { Column, Entity, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer'
import { UsersProjectsEntity } from './users.projects.entity';
import { BaseEntity } from '../../config/base.entity';
import { ROLES } from '../../constants/roles';
import { IUser } from '../../interfaces/user.interface';

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

  @Exclude() 
  @Column()
  password: string;

  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;

  @OneToMany(()=> UsersProjectsEntity, (usersProjects)=> usersProjects.user)
  projectsIncludes: UsersProjectsEntity[]
}
