import {
	DataTypes,
	Model,
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type Sequelize
} from 'sequelize'

import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type VicepresidenciaEjecutivaDto } from '../../domain/VicepresidenciaEjecutiva.dto'
import { type DirectivaDto } from '../../../Directiva/domain/Directiva.dto'
import { type CargoDto } from '../../../Cargo/domain/Cargo.dto'
import { type CargoId } from '../../../Cargo/domain/CargoId'
import { type CargoModel } from '../../../Cargo/infrastructure/sequelize/CargoSchema'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * @description Sequelize model for the `VicepresidenciaEjecutiva` entity.
 */
export class VicepresidenciaEjecutivaModel
	extends Model<Omit<VicepresidenciaEjecutivaDto, 'directiva' | 'cargos'>>
	implements VicepresidenciaEjecutivaDto
{
	declare id: Primitives<DepartmentId>
	declare name: Primitives<DepartmentName>
	declare directivaId: Primitives<DepartmentId>
	declare directiva: DirectivaDto
	declare cargos: Primitives<CargoId>[] & Omit<CargoDto, 'departamentos'>[]

	// Association Mixins
	declare getCargo: BelongsToManyGetAssociationsMixin<CargoModel>
	declare addCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare setCargos: BelongsToManySetAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare removeCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>

	static associate(models: Sequelize['models']): void {
		this.belongsTo(models.Directiva, { as: 'directiva', foreignKey: 'directivaId' })
		this.hasMany(models.Vicepresidencia, { as: 'vicepresidencia', foreignKey: 'vicepresidenciaEjecutivaId' })
		this.hasMany(models.Employee, { as: 'employee', foreignKey: 'vicepresidenciaEjecutivaId' })
		this.belongsToMany(models.Cargo, {
			as: 'cargos',
			through: 'cargo_vicepresidencia_ejecutiva',
			foreignKey: 'vicepresidenciaEjecutivaId',
			otherKey: 'cargoId'
		})
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true },
				directivaId: { type: DataTypes.UUID, allowNull: false }
			},
			{
				sequelize,
				modelName: 'VicepresidenciaEjecutiva',
				tableName: 'vicepresidencia_ejecutivas',
				timestamps: true,
				underscored: true
			}
		)
	}
}
