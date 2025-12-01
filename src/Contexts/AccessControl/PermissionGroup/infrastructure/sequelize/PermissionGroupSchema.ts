import {
	DataTypes,
	Model,
	type Sequelize,
	type BelongsToManyGetAssociationsMixin,
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManySetAssociationsMixin
} from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type PermissionGroupDto } from '../../../PermissionGroup/domain/entity/PermissionGroup.dto'
import { type PermissionGroupId } from '../../../PermissionGroup/domain/valueObject/PermissionGroupId'
import { type PermissionGroupName } from '../../domain/valueObject/PermissionGroupName'
import { type PermissionModel } from '../../../Permission/infrastructure/sequelize/PermissionSchema'
import { type PermissionId } from '../../../Permission/domain/valueObject/PermissionId'
import { type PermissionDto } from '../../../Permission/domain/entity/Permission.dto'
import { type PermissionGroupDescription } from '../../domain/entity/PermissionGroupDescription'

/**
 * @description Sequelize model for the `PermissionGroup` entity.
 */
export class PermissionGroupModel extends Model<Omit<PermissionGroupDto, 'permissions'>> implements PermissionGroupDto {
	declare id: Primitives<PermissionGroupId>
	declare name: Primitives<PermissionGroupName>
	declare description: Primitives<PermissionGroupDescription>
	// Associations
	declare permissions: PermissionDto[]

	// Association Mixins
	declare getPermission: BelongsToManyGetAssociationsMixin<PermissionModel>
	declare addPermission: BelongsToManyAddAssociationsMixin<PermissionModel, Primitives<PermissionId>>
	declare setPermissions: BelongsToManySetAssociationsMixin<PermissionModel, Primitives<PermissionId>>
	declare removePermission: BelongsToManyAddAssociationsMixin<PermissionModel, Primitives<PermissionId>>

	static associate(models: SequelizeModels): void {
		this.belongsToMany(models.Permission, {
			through: 'asignacion_permiso_grupo',
			foreignKey: 'permissionGroupId',
			otherKey: 'permissionId',
			as: 'permissions'
		})
		this.belongsToMany(models.AccessPolicy, {
			through: 'access_policy_group',
			foreignKey: 'permissionGroupId',
			otherKey: 'accessPolicyId',
			as: 'accessPolicies'
		})
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true },
				description: { type: DataTypes.STRING(255), allowNull: false }
			},
			{
				modelName: 'PermissionGroup',
				tableName: 'permission_groups',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
