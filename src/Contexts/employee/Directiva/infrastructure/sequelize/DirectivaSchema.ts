import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type DirectivaDto } from '../../domain/Directiva.dto'

export class DirectivaModel extends Model<DirectivaDto> implements DirectivaDto {
	declare id: Primitives<DepartmentId>
	declare name: Primitives<DepartmentName>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasMany(models.VicepresidenciaEjecutiva, {
			as: 'vicepresidenciaEjecutiva',
			foreignKey: 'directivaId'
		})
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		DirectivaModel.init(
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
				}
			},
			{
				sequelize,
				modelName: 'Directiva',
				timestamps: true,
				underscored: true
			}
		)
	}
}
