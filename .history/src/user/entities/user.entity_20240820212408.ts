import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'product',
})
export class User extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @Column
  price: string;
}
