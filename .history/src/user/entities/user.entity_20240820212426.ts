import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'usee',
})
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;
}
