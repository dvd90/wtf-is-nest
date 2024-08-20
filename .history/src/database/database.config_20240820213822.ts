import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { User } from 'src/user/entities/user.entity';

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: '.db/data.sqlite3',
  autoLoadModels: true,
  models: [User],
  synchronize: false,
};
