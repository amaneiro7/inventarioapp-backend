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
import { type CargoId } from '../../../Cargo/domain/CargoId'
import { type CodCentroCosto } from '../../../CentroCosto/domain/CodCentroCosto'
import { type CargoModel } from '../../../Cargo/infrastructure/sequelize/CargoSchema'
import { type DepartamentoDto } from '../../domain/Departamento.dto'
import { type CargoDto } from '../../../Cargo/domain/Cargo.dto'
import { type CentroCostoDto } from '../../../CentroCosto/domain/CentroCosto.dto'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

export class DepartamentoModel
	extends Model<Omit<DepartamentoDto, 'cargos' | 'vicepresiednciaEjecutiva' | 'centroCosto'>>
	implements DepartamentoDto
{
	declare id: Primitives<DepartmentId>
	declare name: Primitives<DepartmentName>
	declare vicepresidenciaEjecutivaId: Primitives<DepartmentId>
	declare centroCostoId: Primitives<CodCentroCosto>
	declare vicepresiednciaEjecutiva: VicepresidenciaEjecutivaDto
	declare centroCosto: CentroCostoDto
	declare cargos: Primitives<CargoId>[] & Omit<CargoDto, 'departamentos'>[]

	// // Métodos de asociación
	declare getCargo: BelongsToManyGetAssociationsMixin<CargoModel>
	declare addCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare setCargo: BelongsToManySetAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare removeCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.VicepresidenciaEjecutiva, {
			as: 'vicepresidenciaEjecutiva',
			foreignKey: 'vicepresidenciaEjecutivaId'
		})
		this.belongsTo(models.CentroCosto, {
			as: 'centroCosto',
			foreignKey: 'centroCostoId'
		})
		this.hasMany(models.Employee, {
			as: 'employee',
			foreignKey: 'departamentoId'
		})
		this.belongsToMany(models.Cargo, {
			as: 'cargos',
			through: 'cargo_departamento',
			foreignKey: 'departamentoId',
			otherKey: 'cargoId'
		})
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		DepartamentoModel.init(
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
				},
				centroCostoId: {
					type: DataTypes.STRING,
					allowNull: false
				}
			},
			{
				sequelize,
				modelName: 'Departamento',
				timestamps: true,
				underscored: true
			}
		)
	}
}
