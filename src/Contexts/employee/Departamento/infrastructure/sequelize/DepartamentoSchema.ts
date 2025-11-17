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
import { type CargoModel } from '../../../Cargo/infrastructure/sequelize/CargoSchema'
import { type DepartamentoDto } from '../../domain/Departamento.dto'
import { type CargoDto } from '../../../Cargo/domain/Cargo.dto'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/Vicepresidencia.dto'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'

/**
 * @description Sequelize model for the `Departamento` entity.
 */
export class DepartamentoModel
	extends Model<Omit<DepartamentoDto, 'cargos' | 'vicepresiedncia'>>
	implements DepartamentoDto
{
	declare id: Primitives<DepartmentId>
	declare name: Primitives<DepartmentName>
	declare vicepresidenciaId: Primitives<DepartmentId>
	declare vicepresiedncia: VicepresidenciaDto
	declare cargos: Primitives<CargoId>[] & Omit<CargoDto, 'departamentos'>[]

	// Association Mixins
	declare getCargo: BelongsToManyGetAssociationsMixin<CargoModel>
	declare addCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare setCargos: BelongsToManySetAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare removeCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>

	static associate(models: SequelizeModels): void {
		this.belongsTo(models.Vicepresidencia, { as: 'vicepresidencia', foreignKey: 'vicepresidenciaId' })
		this.hasMany(models.Employee, { as: 'employee', foreignKey: 'departamentoId' })
		this.belongsToMany(models.Cargo, {
			as: 'cargos',
			through: 'cargo_departamento',
			foreignKey: 'departamentoId',
			otherKey: 'cargoId'
		})
		this.hasOne(models.AccessPolicy, {
			as: 'accessPolicy',
			foreignKey: 'departamentoId'
		})
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true },
				vicepresidenciaId: { type: DataTypes.UUID, allowNull: false }
			},
			{ sequelize, modelName: 'Departamento', tableName: 'departamentos', timestamps: true, underscored: true }
		)
	}
}
