import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from '../../domain/valueObject/MemoryRamTypeId'
import { type MemoryRamTypeName } from '../../domain/valueObject/MemoryRamTypeName'
import { type MemoryRamTypeDto } from '../../domain/entity/MemoryRam.dto'

/**
 * @description Sequelize model for the `MemoryRamType` entity.
 */
export class MemoryRamTypeModel extends Model<MemoryRamTypeDto> implements MemoryRamTypeDto {
	declare id: Primitives<MemoryRamTypeId>
	declare name: Primitives<MemoryRamTypeName>

	static associate(models: Sequelize['models']): void {
		this.hasMany(models.ModelComputer, { as: 'modelComputer', foreignKey: 'memoryRamTypeId' })
		this.hasMany(models.ModelLaptop, { as: 'modelLaptop', foreignKey: 'memoryRamTypeId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true }
			},
			{
				modelName: 'MemoryRamType',
				tableName: 'memory_ram_types',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
