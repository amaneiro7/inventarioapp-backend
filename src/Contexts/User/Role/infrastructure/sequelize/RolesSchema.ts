import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type RoleDto } from '../../domain/Role.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RoleId } from '../../domain/RoleId'
import { type RoleName } from '../../domain/RoleName'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'

/**
 * @description Sequelize model for the `Role` entity.
 */
export class RolesModel extends Model<RoleDto> implements RoleDto {
	declare id: Primitives<RoleId>
	declare name: Primitives<RoleName>

	static associate(models: SequelizeModels): void {
		this.hasMany(models.User, { as: 'user', foreignKey: 'roleId' })
		this.hasMany(models.AccessPolicy, { as: 'accessPolicy', foreignKey: 'roleId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true }
			},
			{ modelName: 'Role', tableName: 'role', timestamps: false, underscored: true, sequelize }
		)
	}
}
