import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BannerModule } from './banner/banner.module';
import { BlogsModule } from './blogs/blogs.module';
import { CompanyDetailsModule } from './company-details/company-details.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmailSubscribersModule } from './email-subscribers/email-subscribers.module';
import { FaqsModule } from './faqs/faqs.module';
import { LanguagesModule } from './languages/languages.module';
//import { LoginHistoryModule } from './login-history/login-history.module';
import { MenusModule } from './menus/menus.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PagesModule } from './pages/pages.module';
import { PermissionsModule } from './permissions/permissions.module';
import { SearchHistoryModule } from './search-history/search-history.module';
import { UserDetailsModule } from './user-details/user-details.module';
import { UserPermissionsModule } from './user-permissions/user-permissions.module';
import { RatingFeedbackModule } from './rating-feedback/rating-feedback.module';
import { BannerCategoryModule } from './banner-category/banner-category.module';
import { ContactUs } from './contact-us/entities/contact-us.entity';
import { StaffDetailModule } from './staff_detail/staff_detail.module';
import { ProductsModule } from './products/products.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { ProductSubCategoryModule } from './product-sub-category/product-sub-category.module';
import { ProductImagesModule } from './product-images/product-images.module';
import { SettingsModule } from './settings/settings.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { ProductVariantModule } from './product-variant/product-variant.module';
@Module({
  imports: [
 
  ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.NEST_DB_HOST,
      port: Number(process.env.NEST_DB_PORT),
      username: process.env.NEST_USER_NAME,
      password: process.env.NEST_DB_PASS,
      database: process.env.NEST_DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}',],
      synchronize:false,
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    AuthModule,
    AccountModule,
    DashboardModule,
    FaqsModule,
    SettingsModule,
    BannerModule,
    //LoginHistoryModule,
    MenusModule,
    NotificationsModule,
    PermissionsModule,
    UserPermissionsModule,
    UserDetailsModule,
    CompanyDetailsModule,
    PagesModule,
    SearchHistoryModule,
    LanguagesModule,
    EmailSubscribersModule,
    //BlogsModule,
    //ContactUsModule,
   
    RatingFeedbackModule,
    BannerCategoryModule,
    StaffDetailModule,
    ProductsModule,
    ProductCategoryModule,
    ProductSubCategoryModule,
    ProductImagesModule,
    ContactUsModule,
    CategoryModule,
  SubCategoryModule,
  ProductVariantModule
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}