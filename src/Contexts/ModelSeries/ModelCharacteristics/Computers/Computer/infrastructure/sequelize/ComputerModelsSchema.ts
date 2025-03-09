import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../../../Category/Category/domain/Category'
import { type Primitives } from '../../../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from '../../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeId'
import { type MemoryRamSlotQuantity } from '../../domain/MemoryRamSlotQuantity'
import { type HasBluetooth } from '../../domain/HasBluetooth'
import { type HasWifiAdapter } from '../../domain/HasWifiAdapter'
import { type HasDVI } from '../../domain/HasDVI'
import { type HasHDMI } from '../../domain/HasHDMI'
import { type HasVGA } from '../../domain/HasVGA'
import { type ModelSeriesId } from '../../../../../ModelSeries/domain/ModelSeriesId'
import { type CategoryId } from '../../../../../../Category/Category/domain/CategoryId'
import { type ComputerModelsDto } from '../../domain/ComputerModels.dto'
import { type MemoryRamType } from '../../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRam.dto'

interface ComputerModelsCreationAttributes extends Omit<ComputerModelsDto, 'memoryRamType'> {
	id: Primitives<ModelSeriesId>
	categoryId: Primitives<CategoryId>
	modelSeriesId: Primitives<ModelSeriesId>
}

export class ComputerModelsModel extends Model<ComputerModelsCreationAttributes> implements ComputerModelsDto {
	declare id: Primitives<ModelSeriesId>
	declare modelSeriesId: Primitives<ModelSeriesId>
	declare categoryId: Primitives<CategoryId>
	declare memoryRamTypeId: Primitives<MemoryRamTypeId>
	declare memoryRamSlotQuantity: Primitives<MemoryRamSlotQuantity>
	declare hasBluetooth: Primitives<HasBluetooth>
	declare hasWifiAdapter: Primitives<HasWifiAdapter>
	declare hasDVI: Primitives<HasDVI>
	declare hasHDMI: Primitives<HasHDMI>
	declare hasVGA: Primitives<HasVGA>
	declare memoryRamType: MemoryRamType

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.Model, {
			as: 'model',
			foreignKey: 'modelSeriesId'
		}) // A computer model belongs to a model
		this.belongsTo(models.Category, { as: 'category' }) // A computer model belongs to a category
		// this.belongsTo(models.ProcessorSocket, { as: 'processorSocket' }) // A computer model belongs to a processor socket
		this.belongsTo(models.MemoryRamType, { as: 'memoryRamType' }) // A computer model belongs to a memory ram
	}
	static async initialize(sequelize: Sequelize): Promise<void> {
		ComputerModelsModel.init(
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
							args: [[CategoryValues.COMPUTADORAS, CategoryValues.SERVIDORES, CategoryValues.ALLINONE]],
							msg: 'Solo puede pertenecer a la categoria de Computadoras, Servidores o All in One'
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
				}
			},
			{
				modelName: 'ModelComputer',
				underscored: true,
				sequelize
			}
		)
	}
}
