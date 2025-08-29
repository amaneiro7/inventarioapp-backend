import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type ShipmentStatus, StatusEnum } from '../../domain/valueObject/ShipmentStatus'
import { ReasonEnum, type ShipmentReason } from '../../domain/valueObject/ShipmentReason'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ShipmentId } from '../../domain/valueObject/ShipmentId'
import { type ShipmentDto } from '../../domain/entity/Shipment.dto'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type Origin } from '../../domain/valueObject/Origin'
import { type Destination } from '../../domain/valueObject/Destinaton'
import { type ShipmentDate } from '../../domain/valueObject/ShipmentDate'
import { type DeliveryDate } from '../../domain/valueObject/DeliveryDate'
import { type SentBy } from '../../domain/valueObject/SentBy'
import { type ReceivedBy } from '../../domain/valueObject/ReceivedBy'
import { type TrackingNumber } from '../../domain/valueObject/Trackingnumber'
import { type Observation } from '../../domain/valueObject/Observation'
import { type ShipmentDeviceId } from '../../../ShipmentDevice/domain/valueObject/ShipmentDeviceId'
import { type ShipmentDeviceDto } from '../../../ShipmentDevice/domain/entity/ShipmentDevice.dto'
import { type ShipmentCode } from '../../domain/valueObject/ShipmentCode'

export class ShipmentModel extends Model<Omit<ShipmentDto, 'shipmentDevice'>> implements ShipmentDto {
	declare shipmentDeviceIds: Primitives<ShipmentDeviceId>[]
	declare id: Primitives<ShipmentId>
	declare origin: Primitives<Origin>
	declare shipmentCode: Primitives<ShipmentCode>
	declare destination: Primitives<Destination>
	declare shipmentDate: Primitives<ShipmentDate>
	declare deliveryDate: Primitives<DeliveryDate>
	declare sentBy: Primitives<SentBy>
	declare receivedBy: Primitives<ReceivedBy>
	declare trackingNumber: Primitives<TrackingNumber>
	declare observation: Primitives<Observation>
	declare status: Primitives<ShipmentStatus>
	declare reason: Primitives<ShipmentReason>
	declare shipmentDevice: ShipmentDeviceDto[]

	static associate(models: SequelizeModels): void {
		this.belongsTo(models.Site, { as: 'originLocation', foreignKey: 'origin' })
		this.belongsTo(models.Site, { as: 'destinationLocation', foreignKey: 'destination' })
		this.belongsTo(models.User, { as: 'fromUser', foreignKey: 'sentBy' })
		this.belongsTo(models.Employee, { as: 'toEmployee', foreignKey: 'receivedBy' })
		this.hasMany(models.ShipmentDevice, { as: 'shipmentDevice', foreignKey: 'shipmentId' })
	}

	static initialize(sequelize: Sequelize): void {
		ShipmentModel.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					allowNull: false
				},
				shipmentCode: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true
				},
				origin: {
					type: DataTypes.UUID,
					allowNull: false
				},
				destination: {
					type: DataTypes.UUID,
					allowNull: false
				},
				shipmentDate: {
					type: DataTypes.DATE,
					allowNull: false
				},
				deliveryDate: {
					type: DataTypes.DATE,
					allowNull: true
				},
				sentBy: {
					type: DataTypes.UUID,
					allowNull: false
				},
				receivedBy: {
					type: DataTypes.UUID,
					allowNull: true
				},
				trackingNumber: {
					type: DataTypes.STRING,
					allowNull: true,
					unique: true
				},
				observation: {
					type: DataTypes.STRING,
					allowNull: true
				},
				status: {
					type: DataTypes.ENUM(...Object.values(StatusEnum)),
					allowNull: false
				},
				reason: {
					type: DataTypes.ENUM(...Object.values(ReasonEnum)),
					allowNull: false
				}
			},
			{
				modelName: 'Shipment',
				tableName: 'shipments',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
