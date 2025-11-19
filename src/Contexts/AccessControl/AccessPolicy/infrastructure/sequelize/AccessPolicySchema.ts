import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { AccessPolicyId } from '../../domain/valueObject/AccessPolicyId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../../../employee/Cargo/domain/CargoId'
import { type DepartmentId } from '../../../../employee/IDepartment/DepartmentId'
import { type PermissionGroupId } from '../../../PermissionGroup/domain/valueObject/PermissionGroupId'
import { type AccessPolicyPriority } from '../../domain/valueObject/AccessPolicyPriority'
import { AccessPolicyDto } from '../../domain/entity/AccessPolicy.dto'
import { AccessPolicyName } from '../../domain/valueObject/AccessPolicyName'

export class AccessPolicyModel extends Model<AccessPolicyDto> implements AccessPolicyDto {
	declare id: Primitives<AccessPolicyId>
	declare name: Primitives<AccessPolicyName>
	declare cargoId: Primitives<CargoId> | null
	declare departamentoId: Primitives<DepartmentId> | null
	declare permissionGroupId: Primitives<PermissionGroupId>
	declare priority: Primitives<AccessPolicyPriority>

	static associate(models: SequelizeModels): void {
		// Una política de acceso pertenece a un grupo de permisos (el resultado de la regla)
		this.belongsTo(models.PermissionGroup, {
			as: 'permissionGroup',
			foreignKey: 'permissionGroupId'
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
				permissionGroupId: {
					type: DataTypes.UUID,
					allowNull: false,
					field: 'permission_group_id'
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
