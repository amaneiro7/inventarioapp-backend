import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../../Category/Category/domain/CategoryOptions'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../../../ModelSeries/domain/valueObject/ModelSeriesId'
import { type MonitorScreenSize } from '../../../domain/valueObject/MonitorScreenSize'
import { type HasDVI } from '../../../domain/valueObject/HasDVI'
import { type HasHDMI } from '../../../domain/valueObject/HasHDMI'
import { type HasVGA } from '../../../domain/valueObject/HasVGA'
import { type MonitorModelsDto } from '../../../domain/dto/MonitoModels.dto'
import { type CategoryId } from '../../../../../Category/Category/domain/valueObject/CategoryId'

interface MonitorModelsCreationAttributes extends MonitorModelsDto {
	id: Primitives<ModelSeriesId>
	categoryId: Primitives<CategoryId>
	modelSeriesId: Primitives<ModelSeriesId>
}

/**
 * @description Sequelize model for the `MonitorModels` entity.
 */
export class MonitorModelsModel extends Model<MonitorModelsCreationAttributes> implements MonitorModelsDto {
	declare id: Primitives<ModelSeriesId>
	declare modelSeriesId: Primitives<ModelSeriesId>
	declare categoryId: Primitives<CategoryId>
	declare screenSize: Primitives<MonitorScreenSize>
	declare hasDVI: Primitives<HasDVI>
	declare hasHDMI: Primitives<HasHDMI>
	declare hasVGA: Primitives<HasVGA>

	static associate(models: Sequelize['models']): void {
		this.belongsTo(models.Model, { as: 'model', foreignKey: 'modelSeriesId' })
		this.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				modelSeriesId: { type: DataTypes.UUID, unique: true, allowNull: false },
				categoryId: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: { isIn: [[CategoryValues.MONITORES]] }
				},
				screenSize: { type: DataTypes.STRING, allowNull: false },
				hasDVI: { type: DataTypes.BOOLEAN, allowNull: false, field: 'has_dvi' },
				hasHDMI: { type: DataTypes.BOOLEAN, allowNull: false, field: 'has_hdmi' },
				hasVGA: { type: DataTypes.BOOLEAN, allowNull: false, field: 'has_vga' }
			},
			{ modelName: 'ModelMonitor', tableName: 'model_monitors', underscored: true, sequelize }
		)
	}
}
