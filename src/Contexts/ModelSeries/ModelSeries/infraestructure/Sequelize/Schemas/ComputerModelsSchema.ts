import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from '../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeId'
import { type MemoryRamSlotQuantity } from '../../../domain/valueObject/MemoryRamSlotQuantity'
import { type HasBluetooth } from '../../../domain/valueObject/HasBluetooth'
import { type HasWifiAdapter } from '../../../domain/valueObject/HasWifiAdapter'
import { type HasDVI } from '../../../domain/valueObject/HasDVI'
import { type HasHDMI } from '../../../domain/valueObject/HasHDMI'
import { type HasVGA } from '../../../domain/valueObject/HasVGA'
import { type ModelSeriesId } from '../../../domain/valueObject/ModelSeriesId'
import { type CategoryId } from '../../../../../Category/Category/domain/valueObject/CategoryId'
import { type ComputerModelsDto } from '../../../domain/dto/ComputerModels.dto'
import { type MemoryRamType } from '../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRam.dto'
import { CategoryValues } from '../../../../../Category/Category/domain/CategoryOptions'

interface ComputerModelsCreationAttributes extends Omit<ComputerModelsDto, 'memoryRamType'> {
	id: Primitives<ModelSeriesId>
	categoryId: Primitives<CategoryId>
	modelSeriesId: Primitives<ModelSeriesId>
}

/**
 * @description Sequelize model for the `ComputerModels` entity.
 */
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

	static associate(models: Sequelize['models']): void {
		this.belongsTo(models.Model, { as: 'model', foreignKey: 'modelSeriesId' })
		this.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' })
		this.belongsTo(models.MemoryRamType, { as: 'memoryRamType', foreignKey: 'memoryRamTypeId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				modelSeriesId: { type: DataTypes.UUID, unique: true, allowNull: false },
				categoryId: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						isIn: [[CategoryValues.COMPUTADORAS, CategoryValues.SERVIDORES, CategoryValues.ALLINONE]]
					}
				},
				memoryRamTypeId: { type: DataTypes.STRING, allowNull: false },
				memoryRamSlotQuantity: { type: DataTypes.INTEGER, allowNull: false },
				hasBluetooth: { type: DataTypes.BOOLEAN, allowNull: false, field: 'has_bluetooth' },
				hasWifiAdapter: { type: DataTypes.BOOLEAN, allowNull: false, field: 'has_wifi_adapter' },
				hasDVI: { type: DataTypes.BOOLEAN, allowNull: false, field: 'has_dvi' },
				hasHDMI: { type: DataTypes.BOOLEAN, allowNull: false, field: 'has_hdmi' },
				hasVGA: { type: DataTypes.BOOLEAN, allowNull: false, field: 'has_vga' }
			},
			{
				modelName: 'ModelComputer',
				tableName: 'model_computers',
				underscored: true,
				sequelize,
				indexes: [{ fields: ['memory_ram_type_id'] }]
			}
		)
	}
}
