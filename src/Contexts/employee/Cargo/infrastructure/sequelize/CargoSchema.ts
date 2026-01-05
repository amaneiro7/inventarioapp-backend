import {
	DataTypes,
	Model,
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	type Sequelize
} from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../domain/valueObject/CargoId'
import { type CargoName } from '../../domain/valueObject/CargoName'
import { type DepartamentoModel } from '../../../Departamento/infrastructure/sequelize/DepartamentoSchema'
import { type CargoDto } from '../../domain/entity/Cargo.dto'
import { type DepartamentoDto } from '../../../Departamento/domain/entity/Departamento.dto'
import { type DirectivaDto } from '../../../Directiva/domain/entity/Directiva.dto'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/entity/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/entity/Vicepresidencia.dto'
import { type DirectivaModel } from '../../../Directiva/infrastructure/sequelize/DirectivaSchema'
import { type VicepresidenciaEjecutivaModel } from '../../../VicepresidenciaEjecutiva/infrastructure/sequelize/VicepresidenciaEjecutivaSchema'
import { type VicepresidenciaModel } from '../../../Vicepresidencia/infrastructure/sequelize/VicepresidenciaSchema'
import { type DirectivaId } from '../../../Directiva/domain/valueObject/DirectivaId'
import { type VicepresidenciaEjecutivaId } from '../../../VicepresidenciaEjecutiva/domain/valueObject/VicepresidenciaEjecutivaId'
import { type VicepresidenciaId } from '../../../Vicepresidencia/domain/valueObject/VicepresidenciaId'
import { type DepartamentoId } from '../../../Departamento/domain/valueObject/DepartamentoId'

/**
 * @description Sequelize model for the `Cargo` entity.
 */
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

	// Association Mixins
	declare getDirectiva: BelongsToManyGetAssociationsMixin<DirectivaModel>
	declare addDirectiva: BelongsToManyAddAssociationsMixin<DirectivaModel, Primitives<DirectivaId>>
	declare setDirectivas: BelongsToManySetAssociationsMixin<DirectivaModel, Primitives<DirectivaId>>
	declare removeDirectiva: BelongsToManyAddAssociationsMixin<DirectivaModel, Primitives<DirectivaId>>
	declare getVicepresidenciaEjecutiva: BelongsToManyGetAssociationsMixin<VicepresidenciaEjecutivaModel>
	declare addVicepresidenciaEjecutiva: BelongsToManyAddAssociationsMixin<
		VicepresidenciaEjecutivaModel,
		Primitives<VicepresidenciaEjecutivaId>
	>
	declare setVicepresidenciaEjecutivas: BelongsToManySetAssociationsMixin<
		VicepresidenciaEjecutivaModel,
		Primitives<VicepresidenciaEjecutivaId>
	>
	declare removeVicepresidenciaEjecutiva: BelongsToManyAddAssociationsMixin<
		VicepresidenciaEjecutivaModel,
		Primitives<VicepresidenciaEjecutivaId>
	>
	declare getVicepresidencia: BelongsToManyGetAssociationsMixin<VicepresidenciaModel>
	declare addVicepresidencia: BelongsToManyAddAssociationsMixin<VicepresidenciaModel, Primitives<VicepresidenciaId>>
	declare setVicepresidencias: BelongsToManySetAssociationsMixin<VicepresidenciaModel, Primitives<VicepresidenciaId>>
	declare removeVicepresidencia: BelongsToManyAddAssociationsMixin<
		VicepresidenciaModel,
		Primitives<VicepresidenciaId>
	>
	declare getDepartamento: BelongsToManyGetAssociationsMixin<DepartamentoModel>
	declare addDepartamento: BelongsToManyAddAssociationsMixin<DepartamentoModel, Primitives<DepartamentoId>>
	declare setDepartamentos: BelongsToManySetAssociationsMixin<DepartamentoModel, Primitives<DepartamentoId>>
	declare removeDepartamento: BelongsToManyAddAssociationsMixin<DepartamentoModel, Primitives<DepartamentoId>>

	static associate(models: Sequelize['models']): void {
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
		this.hasOne(models.AccessPolicy, {
			as: 'accessPolicy',
			foreignKey: 'cargoId'
		})
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true }
			},
			{ modelName: 'Cargo', tableName: 'cargos', timestamps: true, underscored: true, sequelize }
		)
	}
}
