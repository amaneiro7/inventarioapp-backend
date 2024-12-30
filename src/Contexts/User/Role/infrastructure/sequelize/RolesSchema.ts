import { DataTypes, Model } from 'sequelize'
import { type RolePrimitives } from '../../domain/Role'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RoleId } from '../../domain/RoleId'
import { type RoleName } from '../../domain/RoleName'
import { type SequelizeClientFactory } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class RolesModel extends Model<RolePrimitives> implements RolePrimitives {
  readonly id!: Primitives<RoleId>
  readonly name!: Primitives<RoleName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.hasMany(models.User, { as: 'user', foreignKey: 'roleId' }) // A role can have many users
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
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

