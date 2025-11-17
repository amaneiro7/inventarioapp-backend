import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'

export class AccessPolicyModel extends Model {
	declare id: string
	declare cargoId: string | null
	declare departamentoId: string | null
	declare permissionGroupId: string
	declare priority: number

	static associate(models: SequelizeModels): void {
		// Una política de acceso pertenece a un grupo de permisos (el resultado de la regla)
		this.belongsTo(models.PermissionGroup, {
			as: 'permissionGroup',
			foreignKey: 'permission_group_id'
		})
		// Una política puede estar asociada a un cargo (la condición)
		this.belongsTo(models.Cargo, {
			as: 'cargo',
			foreignKey: 'cargo_id'
		})
		// Una política puede estar asociada a un departamento (la condición)
		this.belongsTo(models.Departamento, {
			as: 'departamento',
			foreignKey: 'departamento_id'
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
