import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Models } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeRepository'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from '../../../../../Device/Device/domain/DeviceId'
import { type DeviceHardDrivePrimitives } from '../../domain/HardDrive'

import { type HardDriveHealth } from '../../domain/HardDriveHealth'
import { type HDDCapacity } from '../../domain/HDDCapacity'
import { type HDDType } from '../../domain/HDDType'
import { type CategoryId } from '../../../../../Category/SubCategory/domain/CategoryId'
import { CategoryValues } from '../../../../../Category/SubCategory/domain/Category'


interface DeviceHardDriveCreationAttributes extends Pick<DeviceHardDrivePrimitives, 'id' | 'categoryId' | 'health' | 'hardDriveCapacityId' | 'hardDriveTypeId'> {
  deviceId: Primitives<DeviceId>
}
export class DeviceHardDriveModel extends Model<DeviceHardDriveCreationAttributes> implements DeviceHardDriveCreationAttributes {
  readonly deviceId!: Primitives<DeviceId>
  readonly id!: Primitives<DeviceId>
  readonly categoryId!: Primitives<CategoryId>
  readonly health!: Primitives<HardDriveHealth>
  readonly hardDriveCapacityId!: Primitives<HDDCapacity>
  readonly hardDriveTypeId!: Primitives<HDDType>

  public static associate(models: Models): void {
    this.belongsTo(models.Device, { as: 'device', foreignKey: 'deviceId' }) // A computer belongs to a device
    this.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' }) // A computer belongs to a category
    this.belongsTo(models.HardDriveCapacity, { as: 'hardDriveCapacity', foreignKey: 'hardDriveCapacityId' }) // A computer belongs to a hard drive
    this.belongsTo(models.HardDriveType, { as: 'hardDriveType', foreignKey: 'hardDriveTypeId' }) // A computer belongs to a hard drive
  }
}

export function initDeviceHardDriveModel(sequelize: Sequelize): void {
  DeviceHardDriveModel.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      categoryId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [[CategoryValues.HARDDRIVE]],
            msg: 'No pertenece a esta categoria'
          }
        }
      },
      deviceId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      health: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      hardDriveCapacityId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hardDriveTypeId: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      modelName: 'DeviceHardDrive',
      timestamps: true,
      underscored: true,
      sequelize
    }
  )
}
