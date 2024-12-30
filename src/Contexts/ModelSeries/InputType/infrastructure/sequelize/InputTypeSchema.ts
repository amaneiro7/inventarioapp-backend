import { DataTypes, Model } from 'sequelize'
import { type InputTypePrimitives } from '../../domain/InputType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type InputTypeId } from '../../domain/InputTypeId'
import { type InputTypeName } from '../../domain/InputTypeName'
import { type SequelizeClientFactory } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class InputTypeModel extends Model<InputTypePrimitives> implements InputTypePrimitives {
  readonly id!: Primitives<InputTypeId>
  readonly name!: Primitives<InputTypeName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.hasOne(models.ModelKeyboard, { as: 'modelKeyboard', foreignKey: 'inputTypeId' }) // An inputType has one keyboard model (if it is a keyboard)
    this.hasOne(models.ModelMouse, { as: 'modelMouse', foreignKey: 'inputTypeId' }) // An inputType has one mouse model (if it is a mouse)
  }
  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    InputTypeModel.init(
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
        modelName: 'InputType',
        timestamps: false,
        underscored: true,
        sequelize
      }
    )
  }
}

