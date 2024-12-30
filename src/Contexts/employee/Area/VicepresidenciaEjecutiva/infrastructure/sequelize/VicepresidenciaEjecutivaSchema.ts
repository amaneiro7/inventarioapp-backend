import { DataTypes, Model } from 'sequelize'
import { type VicepresidenciaEjecutivaPrimitives } from '../../domain/VicepresidenciaEjecutiva'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type VicepresidenciaEjecutivaId } from '../../domain/VicepresidenciaEjecutivaId'
import { type VicepresidenciaEjecutivaName } from '../../domain/VicepresidenciaEjecutivaName'
import { type SequelizeClientFactory } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class VicepresidenciaEjecutivaModel extends Model<VicepresidenciaEjecutivaPrimitives> implements VicepresidenciaEjecutivaPrimitives {
  readonly id!: Primitives<VicepresidenciaEjecutivaId>
  readonly name!: Primitives<VicepresidenciaEjecutivaName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.hasMany(models.Vicepresidencia, { as: 'vicepresidencia', foreignKey: 'vicepresidenciaEjecutivaId' }) // A VicepresidenciaEjecutiva has Many Vicepresidencias
    // this.hasMany(models.Employee, { as: 'employees', foreignKey: 'vicepresidenciaEjecutivaId' }) // A VicepresidenciaEjecutiva has Many employees
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    VicepresidenciaEjecutivaModel.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }
      },
      {
        modelName: 'VicepresidenciaEjecutiva',
        underscored: true,
        timestamps: false,
        sequelize
      }
    )
  }
}

