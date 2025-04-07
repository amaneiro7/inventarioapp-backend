import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RegionDto } from '../../domain/Region.dto'
import { type RegionId } from '../../domain/RegionId'
import { type RegionName } from '../../domain/RegionName'
import { type AdministrativeRegionId } from '../../../AdministrativeRegion/domain/AdministrativeRegionId'

export class RegionModel extends Model<RegionDto> implements RegionDto {
	declare id: Primitives<RegionId>
	declare name: Primitives<RegionName>
	declare administrativeRegionId: Primitives<AdministrativeRegionId>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.AdministrativeRegion, {
			as: 'administrativeRegion',
			foreignKey: 'administrativeRegionId'
		}) // A Region belongs to Administrative Region
		this.hasMany(models.State, { as: 'state', foreignKey: 'regionId' }) // An Region can hava many states
	}
	static async initialize(sequelize: Sequelize): Promise<void> {
		RegionModel.init(
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
				},
				administrativeRegionId: {
					type: DataTypes.STRING,
					allowNull: false
				}
			},
			{
				modelName: 'Region',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
