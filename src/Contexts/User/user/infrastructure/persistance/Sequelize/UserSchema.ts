import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type UserId } from '../../../domain/valueObject/UserId' // Corrected path for UserId
import { type RoleId } from '../../../../Role/domain/RoleId'
import { type UserPassword } from '../../../domain/valueObject/UserPassword'
import { type UserPrimitives } from '../../../domain/entity/User.dto' // Use User.dto for UserPrimitives
import { type SequelizeModels } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type EmployeeId } from '../../../../../employee/Employee/domain/valueObject/EmployeeId'
import { UserStatusEnum } from '../../../domain/valueObject/UserStatus'
import { type PasswordChangeAt } from '../../../domain/valueObject/PasswordChangeAt'
import { type LastLoginAt } from '../../../domain/valueObject/LastLoginAt'
import { type FailedAttemps } from '../../../domain/valueObject/FailedAttemps'
import { type LockoutUntil } from '../../../domain/valueObject/LockoutUntil'

/**
 * @description Sequelize model for the User entity.
 */
export class UserModel extends Model<UserPrimitives> implements UserPrimitives {
	declare id: Primitives<UserId>
	declare employeeId: Primitives<EmployeeId>
	declare roleId: Primitives<RoleId>
	declare password: Primitives<UserPassword>
	declare status: UserStatusEnum // Use enum type directly for Sequelize
	declare passwordChangeAt: Primitives<PasswordChangeAt>
	declare lastLoginAt: Primitives<LastLoginAt> | null
	declare failedAttemps: Primitives<FailedAttemps>
	declare lockoutUntil: Primitives<LockoutUntil> | null

	static associate(models: SequelizeModels): void {
		this.belongsTo(models.Role, { as: 'role', foreignKey: 'roleId' })
		this.belongsTo(models.Employee, { as: 'employee', foreignKey: 'employeeId' }) // Add association to Employee
		this.hasMany(models.History, { as: 'history', foreignKey: 'userId' })
		this.hasMany(models.Shipment, { as: 'fromUser', foreignKey: 'sentBy' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
				employeeId: { type: DataTypes.UUID, allowNull: false, unique: true }, // EmployeeId is unique for a user
				roleId: { type: DataTypes.INTEGER, allowNull: false },
				status: {
					type: DataTypes.ENUM(...Object.values(UserStatusEnum)), // Define enum values
					allowNull: false,
					defaultValue: UserStatusEnum.ACTIVE
				},
				password: { type: DataTypes.STRING(64), allowNull: false },
				passwordChangeAt: { type: DataTypes.DATE, allowNull: false },
				lastLoginAt: { type: DataTypes.DATE, allowNull: true },
				failedAttemps: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
				lockoutUntil: { type: DataTypes.DATE, allowNull: true }
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
