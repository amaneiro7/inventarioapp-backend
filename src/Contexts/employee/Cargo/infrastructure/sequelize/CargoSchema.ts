import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type CargoPrimitives } from '../../domain/Cargo'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../domain/CargoId'
import { type CargoName } from '../../domain/CargoName'


export class CargoModel extends Model<CargoPrimitives> implements CargoPrimitives {
  public id!: Primitives<CargoId>
  public name!: Primitives<CargoName>



  static async associate(models: Sequelize['models']): Promise<void> {
    // this.hasMany(models.Employee, { as: 'employees', foreignKey: 'cargoId' })
  }
  static async initialize(sequelize: Sequelize): Promise<void> {
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

