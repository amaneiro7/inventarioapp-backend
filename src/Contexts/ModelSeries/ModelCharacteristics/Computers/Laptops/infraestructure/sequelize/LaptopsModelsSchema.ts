import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../../../Category/Category/domain/Category'
import { type Primitives } from '../../../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from '../../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeId'
import { type ModelSeriesId } from '../../../../../ModelSeries/domain/ModelSeriesId'
import { type LaptopsModelsPrimitives } from '../../domain/LaptopsModels'
import { type MemoryRamSlotQuantity } from '../../../Computer/domain/MemoryRamSlotQuantity'
import { type HasBluetooth } from '../../../Computer/domain/HasBluetooth'
import { type HasWifiAdapter } from '../../../Computer/domain/HasWifiAdapter'
import { type HasDVI } from '../../../Computer/domain/HasDVI'
import { type HasHDMI } from '../../../Computer/domain/HasHDMI'
import { type HasVGA } from '../../../Computer/domain/HasVGA'
import { type BatteryModelName } from '../../domain/BatteryModelName'
import { type CategoryId } from '../../../../../../Category/Category/domain/CategoryId'

interface LaptopModelsCreationAttributes extends Omit<LaptopsModelsPrimitives, 'name' | 'brandId' | 'generic'> {
  modelSeriesId: Primitives<ModelSeriesId>
}

export class LaptopModelsModel extends Model<LaptopModelsCreationAttributes> implements LaptopModelsCreationAttributes {
  public id!: Primitives<ModelSeriesId>
  public modelSeriesId!: Primitives<ModelSeriesId>
  public categoryId!: Primitives<CategoryId>
  public memoryRamTypeId!: Primitives<MemoryRamTypeId>
  public memoryRamSlotQuantity!: Primitives<MemoryRamSlotQuantity>
  public hasBluetooth!: Primitives<HasBluetooth>
  public hasWifiAdapter!: Primitives<HasWifiAdapter>
  public hasDVI!: Primitives<HasDVI>
  public hasHDMI!: Primitives<HasHDMI>
  public hasVGA!: Primitives<HasVGA>
  public batteryModel!: Primitives<BatteryModelName>



  static async associate(models: Sequelize['models']): Promise<void> {
    this.belongsTo(models.Model, { as: 'model', foreignKey: 'modelSeriesId' }) // A Laptop model belongs to a model
    this.belongsTo(models.Category, { as: 'category' }) // A computer model belongs to a category
    // this.belongsTo(models.ProcessorSocket, { as: 'processorSocket' }) // A computer model belongs to a processor socket
    this.belongsTo(models.MemoryRamType, { as: 'memoryRamType' }) // A computer model belongs to a memory ram
  }

  static async initialize(sequelize: Sequelize): Promise<void> {
    LaptopModelsModel.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          allowNull: false
        },
        modelSeriesId: {
          type: DataTypes.UUID,
          unique: true,
          allowNull: false
        },
        categoryId: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isIn: {
              args: [[CategoryValues.LAPTOPS]],
              msg: 'Solo puede pertenecer a la categoria de Laptops'
            }
          }
        },
        memoryRamTypeId: {
          type: DataTypes.STRING,
          allowNull: false
        },
        memoryRamSlotQuantity: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        hasBluetooth: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          field: 'has_bluetooth'
        },
        hasWifiAdapter: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          field: 'has_wifi_adapter'
        },
        hasDVI: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          field: 'has_dvi'
        },
        hasHDMI: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          field: 'has_hdmi'
        },
        hasVGA: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          field: 'has_vga'
        },
        batteryModel: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        modelName: 'ModelLaptop',
        underscored: true,
        sequelize
      }
    )
  }
}

