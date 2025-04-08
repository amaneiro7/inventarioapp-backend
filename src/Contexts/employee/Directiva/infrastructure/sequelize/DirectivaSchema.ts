import {
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	DataTypes,
	Model,
	type Sequelize
} from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type DirectivaDto } from '../../domain/Directiva.dto'
import { type CargoModel } from '../../../Cargo/infrastructure/sequelize/CargoSchema'
import { type CargoId } from '../../../Cargo/domain/CargoId'
import { type CodCentroCosto } from '../../../CentroCosto/domain/CodCentroCosto'
import { type CentroCostoDto } from '../../../CentroCosto/domain/CentroCosto.dto'
import { type CargoDto } from '../../../Cargo/domain/Cargo.dto'

export class DirectivaModel extends Model<Omit<DirectivaDto, 'cargos' | 'centroCosto'>> implements DirectivaDto {
	declare id: Primitives<DepartmentId>
	declare name: Primitives<DepartmentName>
	declare centroCostoId: Primitives<CodCentroCosto>
	declare centroCosto: CentroCostoDto
	declare cargos: Primitives<CargoId>[] & Omit<CargoDto, 'departamentos'>[]

	// // Métodos de asociación
	declare getCargo: BelongsToManyGetAssociationsMixin<CargoModel>
	declare addCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare setCargos: BelongsToManySetAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare removeCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasMany(models.VicepresidenciaEjecutiva, {
			as: 'vicepresidenciaEjecutiva',
			foreignKey: 'directivaId'
		}) // Un Directiva pertenece a una VicepresidenciaEjecutiva
		this.belongsTo(models.CentroCosto, {
			as: 'centroCosto',
			foreignKey: 'centroCostoId'
		}) // Un Directiva pertenece a un CentroCosto
		this.hasMany(models.Employee, {
			as: 'employee',
			foreignKey: 'departamentoId'
		}) // Un Directiva pertenece a un Employee
		this.belongsToMany(models.Cargo, {
			as: 'cargos',
			through: 'cargo_departamento',
			foreignKey: 'departamentoId',
			otherKey: 'cargoId'
		}) // Un Directiva tiene muchos Cargos
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
				},
				centroCostoId: {
					type: DataTypes.STRING,
					allowNull: false
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
