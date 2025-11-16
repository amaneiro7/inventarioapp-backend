import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type PermissionDto } from '../../../Permission/domain/entity/Permission.dto'
import { type PermissionId } from '../../../Permission/domain/valueObject/PermissionId'
import { type PermissionName } from '../../domain/valueObject/PermissionName'

/**
 * @description Sequelize model for the `Permission` entity.
 */
export class PermissionModel extends Model<PermissionDto> implements PermissionDto {
	declare id: Primitives<PermissionId>
	declare name: Primitives<PermissionName>

	static associate(models: SequelizeModels): void {
		this.belongsToMany(models.PermissionGroup, {
			through: 'permission_group_permission',
			foreignKey: 'permission_id',
			otherKey: 'permission_group_id'
		})
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
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
				modelName: 'Permission',
				tableName: 'permissions',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
