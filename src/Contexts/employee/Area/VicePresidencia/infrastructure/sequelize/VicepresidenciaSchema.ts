import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type VicepresidenciaPrimitives } from '../../domain/vicepresidencia'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type VicepresidenciaId } from '../../domain/vicepresidenciaId'
import { type VicepresidenciaName } from '../../domain/vicepresidenciaName'
import { type VicepresidenciaEjecutivaId } from '../../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutivaId'


export class VicepresidenciaModel extends Model<VicepresidenciaPrimitives> implements VicepresidenciaPrimitives {
  declare id: Primitives<VicepresidenciaId>
  declare vicepresidenciaEjecutivaId: Primitives<VicepresidenciaEjecutivaId>
  declare name: Primitives<VicepresidenciaName>



  static async associate(models: Sequelize['models']): Promise<void> {
    this.belongsTo(models.VicepresidenciaEjecutiva, { as: 'vicepresidenciaEjecutiva', foreignKey: 'vicepresidenciaEjecutivaId' }) // A Vicepresidencia belongs to Many Vicepresidencias
    this.hasMany(models.Gerencia, { as: 'gerencia', foreignKey: 'vicepresidenciaId' }) // A Vicepresidencia has Many Gerencias
    // this.hasMany(models.Employee, { as: 'employees', foreignKey: 'vicepresidenciaId' }) // A Vicepresidencia has Many employees
  }
  static async initialize(sequelize: Sequelize): Promise<void> {
    VicepresidenciaModel.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true
        },
        vicepresidenciaEjecutivaId: {
          type: DataTypes.UUID,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }
      },
      {
        modelName: 'Vicepresidencia',
        underscored: true,
        timestamps: false,
        sequelize
      }
    )
  }
}

