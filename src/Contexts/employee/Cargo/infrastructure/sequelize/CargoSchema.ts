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

export class CargoModel
	extends Model<Omit<CargoDto, 'departamentos'>>
	implements CargoDto
{
	declare id: Primitives<CargoId>
	declare name: Primitives<CargoName>
	declare departamentos: DepartamentoDto[]

	// Métodos de asociación
	public getDeparments!: BelongsToManyGetAssociationsMixin<DepartamentoModel>
	public addDeparments!: BelongsToManyAddAssociationsMixin<
		DepartamentoModel,
		Primitives<DepartmentId>
	>
	public setDeparments!: BelongsToManySetAssociationsMixin<
		DepartamentoModel,
		Primitives<DepartmentId>
	>

	static async associate(models: Sequelize['models']): Promise<void> {
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
