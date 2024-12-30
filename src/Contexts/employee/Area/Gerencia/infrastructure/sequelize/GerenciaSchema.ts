import { DataTypes, Model } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type GerenciaId } from '../../domain/GerenciaId'
import { type GerenciaName } from '../../domain/GerenciaName'
import { type GerenciaPrimitives } from '../../domain/Gerencia'
import { type VicepresidenciaId } from '../../../VicePresidencia/domain/vicepresidenciaId'
import { type SequelizeClientFactory } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class GerenciaModel extends Model<GerenciaPrimitives> implements GerenciaPrimitives {
  readonly id!: Primitives<GerenciaId>
  readonly vicepresidenciaId!: Primitives<VicepresidenciaId>
  readonly name!: Primitives<GerenciaName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.belongsTo(models.Vicepresidencia, { as: 'vicepresidencia', foreignKey: 'vicepresidenciaId' }) // A Gerencia belongs to Many Vicepresidencias
    this.hasMany(models.Coordinacion, { as: 'coordinacion', foreignKey: 'gerenciaId' }) // A Gerencia has Many Coordinaciones
    // this.hasMany(models.Employee, { as: 'employees', foreignKey: 'gerenciaId' }) // A Gerencia has Many employees
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
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

