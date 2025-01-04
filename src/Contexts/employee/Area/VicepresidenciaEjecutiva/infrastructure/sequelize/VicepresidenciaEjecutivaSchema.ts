import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type VicepresidenciaEjecutivaPrimitives } from '../../domain/VicepresidenciaEjecutiva'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type VicepresidenciaEjecutivaId } from '../../domain/VicepresidenciaEjecutivaId'
import { type VicepresidenciaEjecutivaName } from '../../domain/VicepresidenciaEjecutivaName'


export class VicepresidenciaEjecutivaModel extends Model<VicepresidenciaEjecutivaPrimitives> implements VicepresidenciaEjecutivaPrimitives {
  declare id: Primitives<VicepresidenciaEjecutivaId>
  declare name: Primitives<VicepresidenciaEjecutivaName>



  static async associate(models: Sequelize['models']): Promise<void> {
    this.hasMany(models.Vicepresidencia, { as: 'vicepresidencia', foreignKey: 'vicepresidenciaEjecutivaId' }) // A VicepresidenciaEjecutiva has Many Vicepresidencias
    // this.hasMany(models.Employee, { as: 'employees', foreignKey: 'vicepresidenciaEjecutivaId' }) // A VicepresidenciaEjecutiva has Many employees
  }

  static async initialize(sequelize: Sequelize): Promise<void> {
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

