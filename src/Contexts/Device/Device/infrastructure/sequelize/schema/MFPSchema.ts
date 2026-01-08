import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../../Category/Category/domain/CategoryOptions'
import { type DeviceIPAddress } from '../../../domain/valueObject/DeviceIPAddress'
import { type CategoryId } from '../../../../../Category/Category/domain/valueObject/CategoryId'
import { type DeviceId } from '../../../domain/valueObject/DeviceId'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type DeviceMFPPrimitives } from '../../../domain/dto/MFP.dto'

interface MFPCreationAttributes extends Pick<DeviceMFPPrimitives, 'id' | 'categoryId' | 'ipAddress'> {
	deviceId: Primitives<DeviceId>
}

/**
 * @description Sequelize model for the `DeviceMFP` entity.
 */
export class DeviceMFPModel extends Model<MFPCreationAttributes> implements MFPCreationAttributes {
	declare deviceId: Primitives<DeviceId>
	declare id: Primitives<DeviceId>
	declare categoryId: Primitives<CategoryId>
	declare ipAddress: Primitives<DeviceIPAddress>

	static associate(models: Sequelize['models']): void {
		this.belongsTo(models.Device, { as: 'device', foreignKey: 'deviceId' })
		this.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				categoryId: { type: DataTypes.STRING, allowNull: false, validate: { isIn: [[CategoryValues.MFP]] } },
				deviceId: { type: DataTypes.UUID, allowNull: false },
				ipAddress: { type: DataTypes.INET, allowNull: true, validate: { isIPv4: true } }
			},
			{ modelName: 'DeviceMFP', tableName: 'device_mfp', timestamps: true, underscored: true, sequelize }
		)
	}
}
