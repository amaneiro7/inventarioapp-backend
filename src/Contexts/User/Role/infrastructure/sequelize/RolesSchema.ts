import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type RolePrimitives } from '../../domain/Role'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RoleId } from '../../domain/RoleId'
import { type RoleName } from '../../domain/RoleName'


export class RolesModel extends Model<RolePrimitives> implements RolePrimitives {
  declare id: Primitives<RoleId>
  declare name: Primitives<RoleName>



  static async associate(models: Sequelize['models']): Promise<void> {
    console.log('associating roles:', models.User)
    this.hasMany(models.User, { as: 'user', foreignKey: 'roleId' }) // A role can have many users
  }

  static async initialize(sequelize: Sequelize): Promise<void> {
    RolesModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }
      },
      {
        modelName: 'Role',
        tableName: 'role',
        timestamps: false,
        underscored: true,
        sequelize
      }
    )
  }
}

