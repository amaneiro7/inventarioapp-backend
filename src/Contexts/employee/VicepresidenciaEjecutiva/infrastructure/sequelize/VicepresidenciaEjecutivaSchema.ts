import {
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	DataTypes,
	Model,
	type Sequelize
} from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type VicepresidenciaEjecutivaDto } from '../../domain/VicepresidenciaEjecutiva.dto'
import { type DirectivaDto } from '../../../Directiva/domain/Directiva.dto'
import { type CargoId } from '../../../Cargo/domain/CargoId'
import { type CargoDto } from '../../../Cargo/domain/Cargo.dto'
import { type CargoModel } from '../../../Cargo/infrastructure/sequelize/CargoSchema'

export class VicepresidenciaEjecutivaModel
	extends Model<Omit<VicepresidenciaEjecutivaDto, 'directiva' | 'cargos'>>
	implements VicepresidenciaEjecutivaDto
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
		this.belongsTo(models.Directiva, {
			as: 'directiva',
			foreignKey: 'directivaId'
		})
		// this.belongsTo(models.CentroCosto, {
		// 	as: 'centroCosto',
		// 	foreignKey: 'centroCostoId'
		// }) // Un Directiva pertenece a un CentroCosto
		this.hasMany(models.Vicepresidencia, {
			as: 'vicepresidencia',
			foreignKey: 'vicepresidenciaEjecutivaId'
		})
		this.hasMany(models.Employee, {
			as: 'employee',
			foreignKey: 'vicepresidenciaEjecutivaId'
		}) // Un Directiva pertenece a un Employee
		this.belongsToMany(models.Cargo, {
			as: 'cargos',
			through: 'cargo_vicepresidencia_ejecutiva',
			foreignKey: 'vicepresidenciaEjecutivaId',
			otherKey: 'cargoId'
		}) // Un Directiva tiene muchos Cargos
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		VicepresidenciaEjecutivaModel.init(
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
				modelName: 'VicepresidenciaEjecutiva',
				timestamps: true,
				underscored: true
			}
		)
	}
}
