import { DataTypes, Model } from 'sequelize'
import { type CargoPrimitives } from '../../domain/Cargo'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../domain/CargoId'
import { type CargoName } from '../../domain/CargoName'
import { type SequelizeClientFactory } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class CargoModel extends Model<CargoPrimitives> implements CargoPrimitives {
  public id!: Primitives<CargoId>
  public name!: Primitives<CargoName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    // this.hasMany(models.Employee, { as: 'employees', foreignKey: 'cargoId' })
  }
  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    CargoModel.init(
      {
        id: {
          type: DataTypes.STRING,
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
        modelName: 'Cargo',
        timestamps: false,
        underscored: true,
        sequelize
      })
  }
}

