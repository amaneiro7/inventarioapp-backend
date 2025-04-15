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
import { type CargoDto } from '../../../Cargo/domain/Cargo.dto'
import { type CargoId } from '../../../Cargo/domain/CargoId'
import { type CargoModel } from '../../../Cargo/infrastructure/sequelize/CargoSchema'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

export class VicepresidenciaModel
	extends Model<Omit<VicepresidenciaDto, 'vicepresidenciaEjecutiva' | 'cargos'>>
	implements VicepresidenciaDto
{
	declare id: Primitives<DepartmentId>
	declare name: Primitives<DepartmentName>
	declare vicepresidenciaEjecutivaId: Primitives<DepartmentId>
	declare vicepresidenciaEjecutiva: VicepresidenciaEjecutivaDto
	declare cargos: Primitives<CargoId>[] & Omit<CargoDto, 'departamentos'>[]

	// // Métodos de asociación
	declare getCargo: BelongsToManyGetAssociationsMixin<CargoModel>
	declare addCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare setCargos: BelongsToManySetAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare removeCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>

	static async associate(models: Sequelize['models']): Promise<void> {
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
				vicepresidenciaEjecutivaId: {
					type: DataTypes.UUID,
					allowNull: false
				}
			},
			{
				sequelize,
				modelName: 'Vicepresidencia',
				tableName: 'vicepresidencias',
				timestamps: true,
				underscored: true
			}
		)
	}
}
