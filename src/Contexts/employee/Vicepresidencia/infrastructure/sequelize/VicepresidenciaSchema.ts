import {
	DataTypes,
	Model,
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	type Sequelize
} from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type VicepresidenciaDto } from '../../domain/Vicepresidencia.dto'
import { type DirectivaDto } from '../../../Directiva/domain/Directiva.dto'
import { CargoDto } from '../../../Cargo/domain/Cargo.dto'
import { CargoId } from '../../../Cargo/domain/CargoId'
import { CargoModel } from '../../../Cargo/infrastructure/sequelize/CargoSchema'

export class VicepresidenciaModel
	extends Model<Omit<VicepresidenciaDto, 'directiva' | 'cargos'>>
	implements VicepresidenciaDto
{
	declare id: Primitives<DepartmentId>
	declare name: Primitives<DepartmentName>
	declare directivaId: Primitives<DepartmentId>
	declare directiva: DirectivaDto
	declare cargos: Primitives<CargoId>[] & Omit<CargoDto, 'departamentos'>[]

	// // Métodos de asociación
	declare getCargo: BelongsToManyGetAssociationsMixin<CargoModel>
	declare addCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare setCargos: BelongsToManySetAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare removeCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>

	static async associate(models: Sequelize['models']): Promise<void> {
		console.log('VicepresidenciaModel.associate')
		this.belongsTo(models.VicepresidenciaEjecutiva, {
			as: 'vicepresidenciaEjecutiva',
			foreignKey: 'vicepresidenciaEjecutivaId'
		})
		this.hasMany(models.Departamento, {
			as: 'departamento',
			foreignKey: 'vicepresidenciaId'
		})
		this.hasMany(models.Employee, {
			as: 'employee',
			foreignKey: 'vicepresidenciaId'
		}) // Un Directiva pertenece a un Employee
		this.belongsToMany(models.Cargo, {
			as: 'cargos',
			through: 'cargo_vicepresidencia',
			foreignKey: 'vicepresidenciaId',
			otherKey: 'cargoId'
		}) // Un Directiva tiene muchos Cargos
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
