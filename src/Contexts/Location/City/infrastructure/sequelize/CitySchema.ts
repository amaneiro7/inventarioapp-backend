import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CityId } from '../../domain/CityId'
import { type StateId } from '../../../State/domain/StateId'
import { type CityName } from '../../domain/CityName'
import { type CityDto } from '../../domain/City.dto'
import { type StateDto } from '../../../State/domain/State.dto'

export class CityModel
	extends Model<Omit<CityDto, 'state'>>
	implements CityDto
{
	declare id: Primitives<CityId>
	declare stateId: Primitives<StateId>
	declare name: Primitives<CityName>
	declare state: StateDto

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.State, { as: 'state', foreignKey: 'stateId' }) // A City can belong to a state
		this.hasMany(models.Site, { as: 'sites', foreignKey: 'cityId' }) //  A city has many Sites
	}
	static async initialize(sequelize: Sequelize): Promise<void> {
		CityModel.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					allowNull: false
				},
				stateId: {
					type: DataTypes.STRING,
					allowNull: false
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: false
				}
			},
			{
				modelName: 'City',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
