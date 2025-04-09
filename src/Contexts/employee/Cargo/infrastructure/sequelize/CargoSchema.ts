import {
	DataTypes,
	Model,
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	type Sequelize
} from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../domain/CargoId'
import { type CargoName } from '../../domain/CargoName'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartamentoModel } from '../../../Departamento/infrastructure/sequelize/DepartamentoSchema'
import { type CargoDto } from '../../domain/Cargo.dto'
import { type DepartamentoDto } from '../../../Departamento/domain/Departamento.dto'
import { type DirectivaDto } from '../../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/Vicepresidencia.dto'
import { type DirectivaModel } from '../../../Directiva/infrastructure/sequelize/DirectivaSchema'
import { type VicepresidenciaEjecutivaModel } from '../../../VicepresidenciaEjecutiva/infrastructure/sequelize/VicepresidenciaEjecutivaSchema'
import { type VicepresidenciaModel } from '../../../Vicepresidencia/infrastructure/sequelize/VicepresidenciaSchema'

export class CargoModel
	extends Model<Omit<CargoDto, 'departamentos' | 'vicepresidencias' | 'directivas' | 'vicepresidenciasEjecutivas'>>
	implements CargoDto
{
	declare id: Primitives<CargoId>
	declare name: Primitives<CargoName>
	declare departamentos: DepartamentoDto[]
	declare directivas: DirectivaDto[]
	declare vicepresidenciasEjecutivas: VicepresidenciaEjecutivaDto[]
	declare vicepresidencias: VicepresidenciaDto[]

	// Métodos de asociación directiva
	declare getDirectiva: BelongsToManyGetAssociationsMixin<DirectivaModel>
	declare addDirectiva: BelongsToManyAddAssociationsMixin<DirectivaModel, Primitives<DepartmentId>>
	declare setDirectivas: BelongsToManySetAssociationsMixin<DirectivaModel, Primitives<DepartmentId>>
	declare removeDirectiva: BelongsToManyAddAssociationsMixin<DirectivaModel, Primitives<DepartmentId>>
	// Métodos de asociación vicepresidencia ejecutiva
	declare getVicepresidenciaEjecutiva: BelongsToManyGetAssociationsMixin<VicepresidenciaEjecutivaModel>
	declare addVicepresidenciaEjecutiva: BelongsToManyAddAssociationsMixin<
		VicepresidenciaEjecutivaModel,
		Primitives<DepartmentId>
	>
	declare setVicepresidenciaEjecutivas: BelongsToManySetAssociationsMixin<
		VicepresidenciaEjecutivaModel,
		Primitives<DepartmentId>
	>
	declare removeVicepresidenciaEjecutiva: BelongsToManyAddAssociationsMixin<
		VicepresidenciaEjecutivaModel,
		Primitives<DepartmentId>
	>
	// Métodos de asociación vicepresidencia
	declare getVicepresidencia: BelongsToManyGetAssociationsMixin<VicepresidenciaModel>
	declare addVicepresidencia: BelongsToManyAddAssociationsMixin<VicepresidenciaModel, Primitives<DepartmentId>>
	declare setVicepresidencias: BelongsToManySetAssociationsMixin<VicepresidenciaModel, Primitives<DepartmentId>>
	declare removeVicepresidencia: BelongsToManyAddAssociationsMixin<VicepresidenciaModel, Primitives<DepartmentId>>
	// Métodos de asociación departamentos
	declare getDepartamento: BelongsToManyGetAssociationsMixin<DepartamentoModel>
	declare addDepartamento: BelongsToManyAddAssociationsMixin<DepartamentoModel, Primitives<DepartmentId>>
	declare setDepartamentos: BelongsToManySetAssociationsMixin<DepartamentoModel, Primitives<DepartmentId>>
	declare removeDepartamento: BelongsToManyAddAssociationsMixin<DepartamentoModel, Primitives<DepartmentId>>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsToMany(models.Directiva, {
			as: 'directivas',
			through: 'cargo_directiva',
			foreignKey: 'cargoId',
			otherKey: 'directivaId'
		})
		this.belongsToMany(models.VicepresidenciaEjecutiva, {
			as: 'vicepresidenciaEjecutivas',
			through: 'cargo_vicepresidencia_ejecutiva',
			foreignKey: 'cargoId',
			otherKey: 'vicepresidenciaEjecutivaId'
		})
		this.belongsToMany(models.Vicepresidencia, {
			as: 'vicepresidencias',
			through: 'cargo_vicepresidencia',
			foreignKey: 'cargoId',
			otherKey: 'vicepresidenciaId'
		})
		this.belongsToMany(models.Departamento, {
			as: 'departamentos',
			through: 'cargo_departamento',
			foreignKey: 'cargoId',
			otherKey: 'departamentoId'
		})
		this.hasMany(models.Employee, { as: 'employee', foreignKey: 'cargoId' })
	}
	static async initialize(sequelize: Sequelize): Promise<void> {
		CargoModel.init(
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
				modelName: 'Cargo',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
