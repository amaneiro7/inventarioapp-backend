import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type UserId } from '../../domain/UserId'
import { type UserEmail } from '../../domain/UserEmail'
import { type UserName } from '../../domain/UserName'
import { type RoleId } from '../../../../Role/domain/RoleId'
import { type UserLastName } from '../../domain/UserLastName'
import { type UserPassword } from '../../domain/UserPassword'
import { type UserPrimitives } from '../../domain/User'
import { type SequelizeModels } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type EmployeeId } from '../../../../../employee/Employee/domain/valueObject/EmployeeId'

/**
 * @description Sequelize model for the User entity.
 */
export class UserModel extends Model<UserPrimitives> implements UserPrimitives {
	declare id: Primitives<UserId>
	declare email: Primitives<UserEmail>
	declare name: Primitives<UserName>
	declare roleId: Primitives<RoleId>
	declare lastName: Primitives<UserLastName>
	declare password: Primitives<UserPassword>
	declare employeeId?: Primitives<EmployeeId>

	static associate(models: SequelizeModels): void {
		this.belongsTo(models.Role, { as: 'role', foreignKey: 'roleId' })
		this.hasMany(models.History, { as: 'history', foreignKey: 'userId' })
		this.hasMany(models.Shipment, { as: 'fromUser', foreignKey: 'sentBy' })
		this.belongsTo(models.Employee, { as: 'employee', foreignKey: 'employeeId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
				email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
				name: { type: DataTypes.STRING, allowNull: false },
				lastName: { type: DataTypes.STRING, allowNull: false },
				
				password: { type: DataTypes.STRING(64), allowNull: false },
				employeeId: { type: DataTypes.UUID, allowNull: true }
			},
			{
				modelName: 'User',
				tableName: 'users',
				deletedAt: true,
				paranoid: true,
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
elize
			}
		)
	}
}
