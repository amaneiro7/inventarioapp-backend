import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RegionPrimitives } from '../../domain/Region'
import { type RegionId } from '../../domain/RegionId'
import { type RegionName } from '../../domain/RegionName'


export class RegionModel extends Model<RegionPrimitives> implements RegionPrimitives {
  readonly id!: Primitives<RegionId>
  readonly name!: Primitives<RegionName>



  static async associate(models: Sequelize['models']): Promise<void> {
    this.hasMany(models.State, { as: 'state', foreignKey: 'regionId' }) // An Region can hava many states
  }
  static async initialize(sequelize: Sequelize): Promise<void> {
    RegionModel.init(
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
        modelName: 'Region',
        timestamps: false,
        underscored: true,
        sequelize
      }
    )
  }
}
