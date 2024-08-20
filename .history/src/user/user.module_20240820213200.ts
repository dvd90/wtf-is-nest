import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
