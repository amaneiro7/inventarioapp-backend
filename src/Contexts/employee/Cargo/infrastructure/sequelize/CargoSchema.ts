import {
	DataTypes,
	Model,
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	type Sequelize
} from 'sequelize'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import type { CargoId } from '../../domain/valueObject/CargoId'
import type { CargoName } from '../../domain/valueObject/CargoName'
import type { CargoDto } from '../../domain/entity/Cargo.dto'
import type { SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import type { UnidadDto } from '../../../Unidad/domain/entity/Unidad.dto'
import type { UnidadModel } from '../../../Unidad/infrastructure/sequelize/UnidadSchema'
import type { UnidadId } from '../../../Unidad/domain/valueObject/UnidadId'

/**
 * @description Sequelize model for the `Cargo` entity.
 */
export class CargoModel extends Model<Omit<CargoDto, 'unidades'>> implements CargoDto {
	declare id: Primitives<CargoId>
	declare name: Primitives<CargoName>
	declare unidades: UnidadDto[]

	// Association Mixins
	declare getUnidad: BelongsToManyGetAssociationsMixin<UnidadModel>
	declare addUnidad: BelongsToManyAddAssociationsMixin<UnidadModel, Primitives<UnidadId>>
	declare setUnidades: BelongsToManySetAssociationsMixin<UnidadModel, Primitives<UnidadId>>
	declare removeUnidad: BelongsToManyAddAssociationsMixin<UnidadModel, Primitives<UnidadId>>

	static associate(models: SequelizeModels): void {
		this.belongsToMany(models.Unidad, {
			as: 'unidades',
			through: 'cargo_unidad',
			foreignKey: 'cargoId',
			otherKey: 'unidadId'
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
