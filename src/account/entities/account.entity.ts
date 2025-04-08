import { Blog } from 'src/blogs/entities/blog.entity';
import { CompanyDetail } from 'src/company-details/entities/company-detail.entity';
import { AIType, DefaultStatus, LoginType, UserRole } from 'src/enum';
import { Faq } from 'src/faqs/entities/faq.entity';
import { LoginHistory } from 'src/login-history/entities/login-history.entity';
import { Notification } from 'src/notifications/entities/notification.entity';
import { RatingFeedback } from 'src/rating-feedback/entities/rating-feedback.entity';
import { UserDetail } from 'src/user-details/entities/user-detail.entity';
import { UserPermission } from 'src/user-permissions/entities/user-permission.entity';
import { StaffDetail } from 'src/staff_detail/entities/staff_detail.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column({ type: 'varchar', length: 100, nullable: true })
  PhoneNumber: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  password: string;
  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  roles: UserRole;

  @Column({ nullable: true })
  createdBy: string;

  @Column({ type: 'enum', enum: DefaultStatus, default: DefaultStatus.ACTIVE })
  status: DefaultStatus;

  @OneToMany(() => Notification, (notification) => notification.account)
  notification: Notification[];

  @OneToMany(() => LoginHistory, (loginHistory) => loginHistory.account)
  loginHistory: LoginHistory[];

  @OneToMany(() => UserPermission, (userPermission) => userPermission.account)
  userPermission: UserPermission[];

  @OneToMany(() => UserDetail, (userDetail) => userDetail.account)
  userDetail: UserDetail[];
  @OneToMany(() => CompanyDetail, (companyDetail) => companyDetail.account)
  companyDetail: CompanyDetail[];

  @OneToMany(() => StaffDetail, (staffDetail) => staffDetail.account)
  staffDetail: StaffDetail[];

  @OneToMany(() => Faq, (faq) => faq.account)
  faq: Faq[];

  @OneToMany(() => Blog, (blog) => blog.account)
  blog: Blog[];

  @OneToMany(() => RatingFeedback, (ratingFeedback) => ratingFeedback.account)
  ratingFeedback: RatingFeedback[];
}
