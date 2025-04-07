import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type AdministrativeRegionDto } from '../../domain/AdministrativeRegion.dto'
import { type AdministrativeRegionId } from '../../domain/AdministrativeRegionId'
import { type AdministrativeRegionName } from '../../domain/AdministrativeRegionName'

export class AdministrativeRegionModel extends Model<AdministrativeRegionDto> implements AdministrativeRegionDto {
	declare id: Primitives<AdministrativeRegionId>
	declare name: Primitives<AdministrativeRegionName>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasMany(models.Region, { as: 'region', foreignKey: 'administrativeRegionId' }) // An Region can hava many states
	}
	static async initialize(sequelize: Sequelize): Promise<void> {
		AdministrativeRegionModel.init(
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
				modelName: 'AdministrativeRegion',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
