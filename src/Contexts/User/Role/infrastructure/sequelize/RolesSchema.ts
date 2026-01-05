import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type RoleDto } from '../../domain/entity/Role.dto'
import { type RoleId } from '../../domain/valueObject/RoleId'
import { type RoleName } from '../../domain/valueObject/RoleName'

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
				id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true }
			},
			{ modelName: 'Role', tableName: 'role', timestamps: false, underscored: true, sequelize }
		)
	}
}
