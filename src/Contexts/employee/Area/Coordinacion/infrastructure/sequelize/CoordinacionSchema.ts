import { DataTypes, Model } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type CoordinacionId } from '../../domain/CoordinacionId'
import { type CoordinacionName } from '../../domain/CoordinacionName'
import { type CoordinacionPrimitives } from '../../domain/Coordinacion'
import { type GerenciaId } from '../../../Gerencia/domain/GerenciaId'
import { type SequelizeClientFactory } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class CoordinacionModel extends Model<CoordinacionPrimitives> implements CoordinacionPrimitives {
  readonly id!: Primitives<CoordinacionId>
  readonly gerenciaId!: Primitives<GerenciaId>
  readonly name!: Primitives<CoordinacionName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.belongsTo(models.Gerencia, { as: 'gerencia', foreignKey: 'gerenciaId' }) // A Coordinacion belongs to Many Gerencias
    // this.hasMany(models.Employee, { as: 'employees', foreignKey: 'coordinacionId' }) // A Coordinacion has Many employees
  }
  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
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
