import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type TypeOfSiteDto } from '../../domain/entity/TypeOfSite.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type TypeOfSiteId } from '../../domain/valueObject/TypeOfSiteId'
import { type TypeOfSiteName } from '../../domain/valueObject/TypeOfSiteName'

export class TypeOfSiteModel extends Model<TypeOfSiteDto> implements TypeOfSiteDto {
	declare id: Primitives<TypeOfSiteId>
	declare name: Primitives<TypeOfSiteName>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasMany(models.Location, {
			as: 'location',
			foreignKey: 'typeOfSiteId'
		})
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		TypeOfSiteModel.init(
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
				modelName: 'TypeOfSite',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
