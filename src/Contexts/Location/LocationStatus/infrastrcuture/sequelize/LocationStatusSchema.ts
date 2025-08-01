import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationStatusDto } from '../../domain/LocationStatus.dto'
import { type LocationStatusId } from '../../domain/LocationStatusId'
import { type LocationStatusName } from '../../domain/LocationStatusName'

/**
 * Represents the LocationStatus model in the database.
 */
export class LocationStatusModel extends Model<LocationStatusDto> implements LocationStatusDto {
	declare id: Primitives<LocationStatusId>
	declare name: Primitives<LocationStatusName>

	/**
	 * Associates the LocationStatus model with other models.
	 * @param {Sequelize['models']} models - The models object containing all initialized models.
	 */
	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasMany(models.Location, { as: 'location', foreignKey: 'locationStatusId' }) // A LocationStatus can hava many locations
	}

	/**
	 * Initializes the LocationStatus model.
	 * @param {Sequelize} sequelize - The Sequelize instance.
	 */
	static async initialize(sequelize: Sequelize): Promise<void> {
		LocationStatusModel.init(
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
				modelName: 'LocationStatus',
				tableName: 'location_status',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
