import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'use',
})
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;
}
