import { DataTypes, Model, Sequelize } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type UserId } from '../../../domain/UserId'
import { type UserEmail } from '../../../domain/UserEmail'
import { type UserName } from '../../../domain/UserName'
import { type RoleId } from '../../../../Role/domain/RoleId'
import { type UserLastName } from '../../../domain/UserLastName'
import { type UserPassword } from '../../../domain/UserPassword'
import { type UserPrimitives } from '../../../domain/User'

/**
 * @class UserModel
 * @extends Model<UserPrimitives>
 * @implements {UserPrimitives}
 * @description Sequelize model for the User entity. Defines the table structure and associations
 * for users in the database, including the `userSecret` for refresh token rotation.
 */
export class UserModel extends Model<UserPrimitives> implements UserPrimitives {
	declare id: Primitives<UserId>
	declare email: Primitives<UserEmail>
	declare name: Primitives<UserName>
	declare roleId: Primitives<RoleId>
	declare lastName: Primitives<UserLastName>
	declare password: Primitives<UserPassword>

	/**
	 * @static
	 * @method associate
	 * @description Defines associations with other Sequelize models.
	 * A user belongs to a role and can have many history entries.
	 * @param {Sequelize['models']} models - An object containing all initialized Sequelize models.
	 * @returns {Promise<void>}
	 */
	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.Role, { as: 'role', foreignKey: 'roleId' }) // A user belongs to a role
		this.hasMany(models.History, { as: 'history', foreignKey: 'userId' }) // A user can have many history
	}

	/**
	 * @static
	 * @method initialize
	 * @description Initializes the UserModel with its schema definition.
	 * @param {Sequelize} sequelize - The Sequelize instance.
	 * @returns {Promise<void>}
	 */
	static async initialize(sequelize: Sequelize): Promise<void> {
		UserModel.init(
			{
				id: {
					type: DataTypes.UUID,
					allowNull: false,
					primaryKey: true
				},
				email: {
					allowNull: false,
					type: DataTypes.STRING,
					unique: true,
					validate: {
						isEmail: true
					}
				},
				name: {
					allowNull: false,
					type: DataTypes.STRING
				},
				lastName: {
					allowNull: false,
					type: DataTypes.STRING
				},
				roleId: {
					allowNull: false,
					type: DataTypes.INTEGER
				},
				password: {
					allowNull: false,
					type: DataTypes.STRING(64)
				}
			},
			{
				modelName: 'User',
				deletedAt: true,
				paranoid: true,
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
