import {
	DataTypes,
	Model,
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	type Sequelize
} from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ISPLinkName } from '../../domain/valueObject/ISPLinkName'
import { type ISPLinkId } from '../../domain/valueObject/ISPLinkId'
import { type ISPLinkDto } from '../../domain/entity/ISPLink.dto'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type LocationModel } from '../../../Location/infrastructure/sequelize/LocationSchema'
import { type LocationId } from '../../../Location/domain/valueObject/LocationId'
import { type LocationDto } from '../../../Location/domain/entity/Location.dto'

/**
 * Represents the ISPLink model in the database.
 */
export class ISPLinkModel extends Model<Omit<ISPLinkDto, 'locations'>> implements ISPLinkDto {
	declare id: Primitives<ISPLinkId>
	declare name: Primitives<ISPLinkName>
	declare locations: LocationDto[]
	// Association Mixins
	declare getLocation: BelongsToManyGetAssociationsMixin<LocationModel>
	declare addLocation: BelongsToManyAddAssociationsMixin<LocationModel, Primitives<LocationId>>
	declare setLocations: BelongsToManySetAssociationsMixin<LocationModel, Primitives<LocationId>>
	declare removeLocation: BelongsToManyAddAssociationsMixin<LocationModel, Primitives<LocationId>>
	/**
	 * Associates the ISPLink model with other models.
	 * @param {SequelizeModels} models - The models object containing all initialized models.
	 */
	static async associate(models: SequelizeModels): Promise<void> {
		ISPLinkModel.belongsToMany(models.Location, {
			through: 'location_isp_link',
			foreignKey: 'ispLinkId',
			otherKey: 'locationId',
			as: 'locations'
		})
	}

	/**
	 * Initializes the ISPLink model.
	 * @param {Sequelize} sequelize - The Sequelize instance.
	 */
	static async initialize(sequelize: Sequelize): Promise<void> {
		ISPLinkModel.init(
			{
				id: {
					type: DataTypes.UUID,
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
				modelName: 'ISPLink',
				tableName: 'isp_links',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
