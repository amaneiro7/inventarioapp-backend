import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type VicepresidenciaDto } from '../../domain/Vicepresidencia.dto'
import { type DirectivaDto } from '../../../Directiva/domain/Directiva.dto'

export class VicepresidenciaModel extends Model<Omit<VicepresidenciaDto, 'directiva'>> implements VicepresidenciaDto {
	declare id: Primitives<DepartmentId>
	declare name: Primitives<DepartmentName>
	declare directivaId: Primitives<DepartmentId>
	declare directiva: DirectivaDto

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.Directiva, {
			as: 'directiva',
			foreignKey: 'directivaId'
		})
		this.hasMany(models.Departamento, {
			as: 'departamento',
			foreignKey: 'vicepresidenciaId'
		})
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		VicepresidenciaModel.init(
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
				directivaId: {
					type: DataTypes.UUID,
					allowNull: false
				}
			},
			{
				sequelize,
				modelName: 'Vicepresidencia',
				timestamps: true,
				underscored: true
			}
		)
	}
}
