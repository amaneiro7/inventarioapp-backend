import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type StateDto } from '../../domain/State.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StateId } from '../../domain/StateId'
import { type StateName } from '../../domain/StateName'
import { type RegionId } from '../../../Region/domain/RegionId'
import { type RegionDto } from '../../../Region/domain/Region.dto'

export class StateModel
	extends Model<Omit<StateDto, 'region'>>
	implements StateDto
{
	declare region: RegionDto
	declare id: Primitives<StateId>
	declare regionId: Primitives<RegionId>
	declare name: Primitives<StateName>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.Region, { as: 'region', foreignKey: 'regionId' }) // A state belongs to region
		this.hasMany(models.City, { as: 'city', foreignKey: 'stateId' }) // A state has many cities
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		StateModel.init(
			{
				id: {
					type: DataTypes.STRING,
					primaryKey: true,
					allowNull: false
				},
				regionId: {
					type: DataTypes.STRING,
					allowNull: false
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true
				}
			},
			{
				modelName: 'State',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
