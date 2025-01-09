import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type CentroTrabajoPrimitives } from '../../domain/CentroTrabajo'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CodCentroTrabajo } from '../../domain/CodCentroTrabajo'
import { type CentroTrabajoName } from '../../domain/CentroTrabajoName'
import { type CodCentroCosto } from '../../../CentroCosto/domain/CodCentroCosto'

export class CentroTrabajoModel extends Model<CentroTrabajoPrimitives> implements CentroTrabajoPrimitives {
  declare id: Primitives<CodCentroTrabajo>
  declare name: Primitives<CentroTrabajoName>
  declare centroCostoId: Primitives<CodCentroCosto>

  static async associate(models: Sequelize['models']): Promise<void> {
    this.belongsTo(models.CentroCosto, { as: 'centroCosto', foreignKey: 'centroTrabajoId' }) // Un CentroTrabajo pertenece a un CentroCosto
  }

  static async initialize(sequelize: Sequelize): Promise<void> {
    CentroTrabajoModel.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        centroCostoId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        modelName: 'CentroTrabajo',
        timestamps: true,
        underscored: true,
        sequelize
      }
    )
  }
}

