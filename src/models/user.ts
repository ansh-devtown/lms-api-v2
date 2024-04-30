import { Model, HasMany } from "sequelize";
import { Table, Column, PrimaryKey, AutoIncrement, DataType, AllowNull } from "sequelize-typescript";

@Table({ tableName: "Users" })
class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    email!: string;

    
    constructor(values?: any, options?: any) {
        super(values, options);
        this.id!;
        this.name!;
        this.email!;
    }
}

export default User;
