import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type StateDto } from '../../domain/entity/State.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StateId } from '../../domain/valueObject/StateId'
import { type StateName } from '../../domain/valueObject/StateName'
import { type RegionId } from '../../../Region/domain/valueObject/RegionId'
import { type RegionDto } from '../../../Region/domain/entity/Region.dto'

/**
 * Represents the State model in the database.
 */
export class StateModel extends Model<Omit<StateDto, 'region'>> implements StateDto {
	declare region: RegionDto
	declare id: Primitives<StateId>
	declare regionId: Primitives<RegionId>
	declare name: Primitives<StateName>

	/**
	 * Associates the State model with other models.
	 * @param {Sequelize['models']} models - The models object containing all initialized models.
	 */ static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.Region, { as: 'region', foreignKey: 'regionId' }) // A state belongs to region
		this.hasMany(models.City, { as: 'city', foreignKey: 'stateId' }) // A state has many cities
	}

	/**
	 * Initializes the State model.
	 * @param {Sequelize} sequelize - The Sequelize instance.
	 */ static async initialize(sequelize: Sequelize): Promise<void> {
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
				tableName: 'states',
				timestamps: false,
				underscored: true,
				sequelize,
				indexes: [{ fields: ['region_id'] }]
			}
		)
	}
}
