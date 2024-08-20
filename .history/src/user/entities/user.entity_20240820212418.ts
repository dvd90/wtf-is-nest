import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'product',
})
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  price: string;
}
