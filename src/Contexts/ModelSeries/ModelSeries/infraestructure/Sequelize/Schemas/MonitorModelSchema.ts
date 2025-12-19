import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../../../ModelSeries/domain/valueObject/ModelSeriesId'
import { type MonitorScreenSize } from '../../domain/MonitorScreenSize'
import { type MonitorHasDVI } from '../../domain/MonitorHasDVI'
import { type MonitorHasHDMI } from '../../domain/MonitorHasHDMI'
import { type MonitorHasVGA } from '../../domain/MonitorHasVGA'
import { type CategoryId } from '../../../../../Category/Category/domain/CategoryId'
import { type MonitorModelsDto } from '../../domain/MonitoModels.dto'
import { CategoryValues } from '../../../../../Category/Category/domain/CategoryOptions'

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
	declare hasDVI: Primitives<MonitorHasDVI>
	declare hasHDMI: Primitives<MonitorHasHDMI>
	declare hasVGA: Primitives<MonitorHasVGA>

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
