import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type GerenciaId } from '../../domain/GerenciaId'
import { type GerenciaName } from '../../domain/GerenciaName'
import { type GerenciaPrimitives } from '../../domain/Gerencia'
import { type VicepresidenciaId } from '../../../VicePresidencia/domain/vicepresidenciaId'


export class GerenciaModel extends Model<GerenciaPrimitives> implements GerenciaPrimitives {
  declare id: Primitives<GerenciaId>
  declare vicepresidenciaId: Primitives<VicepresidenciaId>
  declare name: Primitives<GerenciaName>



  static async associate(models: Sequelize['models']): Promise<void> {
    this.belongsTo(models.Vicepresidencia, { as: 'vicepresidencia', foreignKey: 'vicepresidenciaId' }) // A Gerencia belongs to Many Vicepresidencias
    this.hasMany(models.Coordinacion, { as: 'coordinacion', foreignKey: 'gerenciaId' }) // A Gerencia has Many Coordinaciones
    // this.hasMany(models.Employee, { as: 'employees', foreignKey: 'gerenciaId' }) // A Gerencia has Many employees
  }

  static async initialize(sequelize: Sequelize): Promise<void> {
    GerenciaModel.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true
        },
        vicepresidenciaId: {
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
        modelName: 'Gerencia',
        underscored: true,
        timestamps: false,
        sequelize
      }
    )
  }
}

