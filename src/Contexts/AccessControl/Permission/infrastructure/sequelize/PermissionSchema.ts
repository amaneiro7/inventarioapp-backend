import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type PermissionDto } from '../../../Permission/domain/entity/Permission.dto'
import { type PermissionId } from '../../../Permission/domain/valueObject/PermissionId'
import { type PermissionName } from '../../domain/valueObject/PermissionName'
import { type PermissionDescription } from '../../domain/valueObject/PermissionDescription'

/**
 * @description Sequelize model for the `Permission` entity.
 */
export class PermissionModel extends Model<PermissionDto> implements PermissionDto {
	declare id: Primitives<PermissionId>
	declare name: Primitives<PermissionName>
	declare description: Primitives<PermissionDescription>

	static associate(models: SequelizeModels): void {
		this.belongsToMany(models.PermissionGroup, {
			through: 'asignacion_permiso_grupo',
			foreignKey: 'permissionId',
			otherKey: 'permissionGroupId',
			as: 'permissionGroups'
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
				},
				description: {
					type: DataTypes.STRING,
					allowNull: false
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
