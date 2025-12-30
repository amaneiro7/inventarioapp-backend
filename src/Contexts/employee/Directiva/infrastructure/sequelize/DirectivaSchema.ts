import {
	DataTypes,
	Model,
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type Sequelize
} from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DirectivaId } from '../../domain/valueObject/DirectivaId'
import { type DirectivaName } from '../../domain/valueObject/DirectivaName'
import { type CargoDto } from '../../../Cargo/domain/entity/Cargo.dto'
import { type CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { type CargoModel } from '../../../Cargo/infrastructure/sequelize/CargoSchema'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type DirectivaDto } from '../../domain/entity/Directiva.dto'

/**
 * @description Sequelize model for the `Directiva` entity.
 */
export class DirectivaModel extends Model<Omit<DirectivaDto, 'cargos'>> implements DirectivaDto {
	declare id: Primitives<DirectivaId>
	declare name: Primitives<DirectivaName>
	declare cargos: Primitives<CargoId>[] & Omit<CargoDto, 'departamentos'>[]

	// Association Mixins
	declare getCargo: BelongsToManyGetAssociationsMixin<CargoModel>
	declare addCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare setCargos: BelongsToManySetAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare removeCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>

	static associate(models: SequelizeModels): void {
		this.hasMany(models.VicepresidenciaEjecutiva, { as: 'vicepresidenciaEjecutiva', foreignKey: 'directivaId' })
		this.hasMany(models.Employee, { as: 'employee', foreignKey: 'directivaId' })
		this.belongsToMany(models.Cargo, {
			as: 'cargos',
			through: 'cargo_directiva',
			foreignKey: 'directivaId',
			otherKey: 'cargoId'
		})
		this.hasMany(models.AccessPolicy, { as: 'accessPolicy', foreignKey: 'directivaId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true }
			},
			{ modelName: 'Directiva', tableName: 'directivas', timestamps: true, underscored: true, sequelize }
		)
	}
}
