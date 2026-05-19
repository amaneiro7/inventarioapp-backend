import {
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	DataTypes,
	Model,
	type Sequelize
} from 'sequelize'
import { PermissionGroupModel } from '../../../PermissionGroup/infrastructure/sequelize/PermissionGroupSchema'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type AccessPolicyId } from '../../domain/valueObject/AccessPolicyId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../../../employee/Cargo/domain/valueObject/CargoId'
import { type AccessPolicyPriority } from '../../domain/valueObject/AccessPolicyPriority'
import { type AccessPolicyDto } from '../../domain/entity/AccessPolicy.dto'
import { type AccessPolicyName } from '../../domain/valueObject/AccessPolicyName'
import { type PermissionGroupDto } from '../../../PermissionGroup/domain/entity/PermissionGroup.dto'
import { type PermissionId } from '../../../Permission/domain/valueObject/PermissionId'
import { type RoleId } from '../../../../User/Role/domain/valueObject/RoleId'
import { type UnidadId } from '../../../../employee/Unidad/domain/valueObject/UnidadId'

export class AccessPolicyModel extends Model<Omit<AccessPolicyDto, 'permissionsGroups'>> implements AccessPolicyDto {
	declare id: Primitives<AccessPolicyId>
	declare name: Primitives<AccessPolicyName>
	declare roleId: Primitives<RoleId> | null
	declare cargoId: Primitives<CargoId> | null
	declare unidadId: Primitives<UnidadId> | null
	declare priority: Primitives<AccessPolicyPriority>
	declare permissionsGroups: PermissionGroupDto[]
	// Association Mixins
	declare getPermissionGroup: BelongsToManyGetAssociationsMixin<PermissionGroupModel>
	declare addPermissionGroup: BelongsToManyAddAssociationsMixin<PermissionGroupModel, Primitives<PermissionId>>
	declare setPermissionsGroups: BelongsToManySetAssociationsMixin<PermissionGroupModel, Primitives<PermissionId>>
	declare removePermissionGroup: BelongsToManyAddAssociationsMixin<PermissionGroupModel, Primitives<PermissionId>>

	static associate(models: SequelizeModels): void {
		// Una política de acceso pertenece a un grupo de permisos (el resultado de la regla)
		this.belongsToMany(models.PermissionGroup, {
			through: 'access_policy_group',
			foreignKey: 'accessPolicyId',
			otherKey: 'permissionGroupId',
			as: 'permissionsGroups'
		})
		this.belongsTo(models.Role, {
			as: 'role',
			foreignKey: 'roleId'
		})
		// Una política puede estar asociada a un cargo (la condición)
		this.belongsTo(models.Cargo, {
			as: 'cargo',
			foreignKey: 'cargoId'
		})
		// Una política puede estar asociada a un departamento (la condición)
		this.belongsTo(models.Unidad, {
			as: 'unidad',
			foreignKey: 'unidadId'
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
				cargoId: {
					type: DataTypes.UUID,
					allowNull: true,
					field: 'cargo_id'
				},
				roleId: {
					type: DataTypes.UUID,
					allowNull: true,
					field: 'role_id'
				},
				unidadId: {
					type: DataTypes.UUID,
					allowNull: true,
					field: 'unidad_id'
				},
				priority: {
					type: DataTypes.INTEGER,
					allowNull: false
				}
			},
			{
				modelName: 'AccessPolicy',
				tableName: 'access_policies',
				underscored: true,
				sequelize,
				indexes: [
					{ fields: ['role_id'] },
					{ fields: ['cargo_id'] },
					{ fields: ['unidad_id'] },
					{ fields: ['priority'] }
				]
			}
		)
	}
}
