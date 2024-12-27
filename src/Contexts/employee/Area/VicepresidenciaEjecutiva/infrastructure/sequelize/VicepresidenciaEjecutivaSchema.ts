import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type VicepresidenciaEjecutivaPrimitives } from '../../domain/VicepresidenciaEjecutiva'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type VicepresidenciaEjecutivaId } from '../../domain/VicepresidenciaEjecutivaId'
import { type VicepresidenciaEjecutivaName } from '../../domain/VicepresidenciaEjecutivaName'
import { type Models } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeRepository'

export class VicepresidenciaEjecutivaModel extends Model<VicepresidenciaEjecutivaPrimitives> implements VicepresidenciaEjecutivaPrimitives {
  readonly id!: Primitives<VicepresidenciaEjecutivaId>
  readonly name!: Primitives<VicepresidenciaEjecutivaName>

  public static async associate(models: Models): Promise<void> {
    this.hasMany(models.Vicepresidencia, { as: 'vicepresidencia', foreignKey: 'vicepresidenciaEjecutivaId' }) // A VicepresidenciaEjecutiva has Many Vicepresidencias
    // this.hasMany(models.Employee, { as: 'employees', foreignKey: 'vicepresidenciaEjecutivaId' }) // A VicepresidenciaEjecutiva has Many employees
  }
}

export async function initVicepresidenciaEjecutivaModel(sequelize: Sequelize): Promise<void> {
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
