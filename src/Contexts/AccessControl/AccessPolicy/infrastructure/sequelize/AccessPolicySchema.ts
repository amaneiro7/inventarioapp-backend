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
import { type CargoId } from '../../../../employee/Cargo/domain/CargoId'
import { type DepartmentId } from '../../../../employee/IDepartment/DepartmentId'
import { type AccessPolicyPriority } from '../../domain/valueObject/AccessPolicyPriority'
import { type AccessPolicyDto } from '../../domain/entity/AccessPolicy.dto'
import { type AccessPolicyName } from '../../domain/valueObject/AccessPolicyName'
import { type PermissionGroupDto } from '../../../PermissionGroup/domain/entity/PermissionGroup.dto'
import { type PermissionId } from '../../../Permission/domain/valueObject/PermissionId'
import { type RoleId } from '../../../../User/Role/domain/RoleId'

export class AccessPolicyModel extends Model<Omit<AccessPolicyDto, 'permissionsGroups'>> implements AccessPolicyDto {
	declare id: Primitives<AccessPolicyId>
	declare name: Primitives<AccessPolicyName>
	declare roleId: Primitives<RoleId> | null
	declare cargoId: Primitives<CargoId> | null
	declare departamentoId: Primitives<DepartmentId> | null
	declare vicepresidenciaId: Primitives<DepartmentId> | null
	declare vicepresidenciaEjecutivaId: Primitives<DepartmentId> | null
	declare directivaId: Primitives<DepartmentId> | null
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
		this.belongsTo(models.Departamento, {
			as: 'departamento',
			foreignKey: 'departamentoId'
		})
		this.belongsTo(models.Vicepresidencia, {
			as: 'vicepresidencia',
			foreignKey: 'vicepresidenciaId'
		})
		this.belongsTo(models.Vicepresidencia, {
			as: 'vicepresidenciaEjecutiva',
			foreignKey: 'vicepresidenciaEjecutivaId'
		})
		this.belongsTo(models.Directiva, {
			as: 'directiva',
			foreignKey: 'directivaId'
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
				departamentoId: {
					type: DataTypes.UUID,
					allowNull: true,
					field: 'departamento_id'
				},
				vicepresidenciaId: {
					type: DataTypes.UUID,
					allowNull: true,
					field: 'vicepresidencia_id'
				},
				vicepresidenciaEjecutivaId: {
					type: DataTypes.UUID,
					allowNull: true,
					field: 'vicepresidencia_ejecutiva_id'
				},
				directivaId: {
					type: DataTypes.UUID,
					allowNull: true,
					field: 'directiva_id'
				},
				priority: {
					type: DataTypes.INTEGER,
					allowNull: false
				}
			},
			{ modelName: 'AccessPolicy', tableName: 'access_policies', underscored: true, sequelize }
		)
	}
}
