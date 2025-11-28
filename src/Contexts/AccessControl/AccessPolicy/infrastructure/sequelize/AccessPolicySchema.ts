import {
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	DataTypes,
	Model,
	type Sequelize
} from 'sequelize'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type AccessPolicyId } from '../../domain/valueObject/AccessPolicyId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../../../employee/Cargo/domain/CargoId'
import { type DepartmentId } from '../../../../employee/IDepartment/DepartmentId'
import { type AccessPolicyPriority } from '../../domain/valueObject/AccessPolicyPriority'
import { type AccessPolicyDto } from '../../domain/entity/AccessPolicy.dto'
import { type AccessPolicyName } from '../../domain/valueObject/AccessPolicyName'
import { type PermissionGroupDto } from '../../../PermissionGroup/domain/entity/PermissionGroup.dto'
import { PermissionGroupModel } from '../../../PermissionGroup/infrastructure/sequelize/PermissionGroupSchema'
import { type PermissionId } from '../../../Permission/domain/valueObject/PermissionId'

export class AccessPolicyModel extends Model<Omit<AccessPolicyDto, 'permissionsGroups'>> implements AccessPolicyDto {
	declare id: Primitives<AccessPolicyId>
	declare name: Primitives<AccessPolicyName>
	declare cargoId: Primitives<CargoId> | null
	declare departamentoId: Primitives<DepartmentId> | null
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
			foreignKey: 'permissionGroupId',
			otherKey: 'accessPolicyId',
			as: 'permissionsGroups'
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
				departamentoId: {
					type: DataTypes.UUID,
					allowNull: true,
					field: 'departamento_id'
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
