import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type CoordinacionId } from '../../domain/CoordinacionId'
import { type CoordinacionName } from '../../domain/CoordinacionName'
import { type CoordinacionPrimitives } from '../../domain/Coordinacion'
import { type GerenciaId } from '../../../Gerencia/domain/GerenciaId'


export class CoordinacionModel extends Model<CoordinacionPrimitives> implements CoordinacionPrimitives {
  declare id: Primitives<CoordinacionId>
  declare gerenciaId: Primitives<GerenciaId>
  declare name: Primitives<CoordinacionName>



  static async associate(models: Sequelize['models']): Promise<void> {
    this.belongsTo(models.Gerencia, { as: 'gerencia', foreignKey: 'gerenciaId' }) // A Coordinacion belongs to Many Gerencias
    // this.hasMany(models.Employee, { as: 'employees', foreignKey: 'coordinacionId' }) // A Coordinacion has Many employees
  }
  static async initialize(sequelize: Sequelize): Promise<void> {
    CoordinacionModel.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true
        },
        gerenciaId: {
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
        modelName: 'Coordinacion',
        underscored: true,
        timestamps: false,
        sequelize
      }
    )
  }

}
