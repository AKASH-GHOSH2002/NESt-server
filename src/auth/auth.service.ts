import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
  ConflictException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Cache } from 'cache-manager';
import { Account } from 'src/account/entities/account.entity';
import { CompanyDetail } from 'src/company-details/entities/company-detail.entity';
import { CompanyStatus, DefaultStatus, LogType, LoginType, UserRole } from 'src/enum';
import { LoginHistory } from 'src/login-history/entities/login-history.entity';
import { UserDetail } from 'src/user-details/entities/user-detail.entity';
import { UserPermission } from 'src/user-permissions/entities/user-permission.entity';
import APIFeatures from 'src/utils/apiFeatures.utils';
import { Repository } from 'typeorm';
import { companyScheduleData } from 'src/week-schedule';

import { AccountService } from './../account/account.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto, OtpDto, SigninDto } from './dto/login.dto';
import { Roles } from './decorators/roles.decorator';
import{PermissionAction} from 'src/enum';
import { StaffDetail } from 'src/staff_detail/entities/staff_detail.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Account) private readonly repo: Repository<Account>,
    
    @InjectRepository(LoginHistory)
    private readonly logRepo: Repository<LoginHistory>,
    @InjectRepository(UserPermission)
    private readonly upRepo: Repository<UserPermission>,
    @InjectRepository(CompanyDetail)
    private readonly companyDetailRepo: Repository<CompanyDetail>,
  
    @InjectRepository(UserDetail)
    private readonly userDetailRepo: Repository<UserDetail>,
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,

    @InjectRepository(StaffDetail)
    private readonly staffRepo: Repository<StaffDetail>,
  ) {}

 
  async verifyOtp(dto: OtpDto) {
    const user = await this.getUserByPhoneNumber(dto.PhoneNumber);
    if (!user) {
      throw new NotFoundException('User not found with this Phone Number!');
    }

    const sentOtp = await this.cacheManager.get(dto.PhoneNumber);
    if (!sentOtp) {
      throw new UnauthorizedException('OTP expired or not found!');
    }
    if (dto.otp !== sentOtp) {
      throw new UnauthorizedException('Invalid OTP!');
    }
    const token = await APIFeatures.assignJwtToken(user.id, this.jwtService);
    await this.cacheManager.del(dto.PhoneNumber);
    return { token, accountId: user.id };
  }

  async sentOtp(dto: SigninDto) {
  //   const otp = Math.floor(1000 + Math.random() * 9000);
    const otp=1234;
    this.cacheManager.set(dto.phoneNumber, otp, 600 * 1000);
      // await this.nodeMailerService.sendOtpInEmail(dto.email, otp);
    return {
     
      phoneNumber: dto.phoneNumber,
      success: true,
      message: 'OTP sent succesfully',
    };
  }

  private getUserByPhoneNumber = async (
    phoneNumber: string,
  ): Promise<Account | null> => {
   
    const result = await this.repo
      .createQueryBuilder('account')
      .where('account.PhoneNumber = :phoneNumber', { phoneNumber })
      .getOne();
    if (!result) {
      throw new UnauthorizedException('Account not found!');
    }
    return result;
  };

  async register(Dto: RegisterDto): Promise<Account> {
    const existingUser = await this.repo.findOne({
      where: { PhoneNumber: Dto.PhoneNumber },
    });
    if (existingUser) {
      throw new ConflictException('User with this ph number exists');
    }
    const payload = this.repo.create({
      PhoneNumber: Dto.PhoneNumber,
      email: Dto.email,
      roles: Dto.roles,
      status: DefaultStatus.ACTIVE,
      
    });
    const savedAccount = await this.repo.save(payload);
    if (Dto.roles === UserRole.STAFF) {
      const doctorDetail = this.staffRepo.create({
        email: Dto.email,
    
        accountId: savedAccount.id,
      });
      await this.staffRepo.save(doctorDetail);
    } else if (Dto.roles === UserRole.USER) {
      const UserDetail = this.userDetailRepo.create({
        email: Dto.email,
        accountId: savedAccount.id,
      });
      await this.userDetailRepo.save(UserDetail);
    }
    return savedAccount;
  }


  validate(id: string) {
    return this.getUserByPhoneNumber(id);
  }
  
  findPermission(accountId: string) {
    return this.getPermissions(accountId);
  }

  private getPermissions = async (accountId: string): Promise<any> => {
    let result = await this.cacheManager.get('userPermission' + accountId);
    if (!result) {
      result = await this.upRepo.find({
        relations: ['permission', 'menu'],
        where: { accountId, status: true },
      });
      this.cacheManager.set(
        'userPermission' + accountId,
        result,
        7 * 24 * 60 * 60 * 1000,
      );
    }
    return result;
  };
}



  
  

 


 