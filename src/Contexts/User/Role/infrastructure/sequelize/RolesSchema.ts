import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type RoleDto } from '../../domain/Role.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RoleId } from '../../domain/RoleId'
import { type RoleName } from '../../domain/RoleName'

/**
 * @description Sequelize model for the `Role` entity.
 */
export class RolesModel extends Model<RoleDto> implements RoleDto {
	declare id: Primitives<RoleId>
	declare name: Primitives<RoleName>

	static associate(models: Sequelize['models']): void {
		this.hasMany(models.User, { as: 'user', foreignKey: 'roleId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true }
			},
			{ modelName: 'Role', tableName: 'roles', timestamps: false, underscored: true, sequelize }
		)
	}
}
