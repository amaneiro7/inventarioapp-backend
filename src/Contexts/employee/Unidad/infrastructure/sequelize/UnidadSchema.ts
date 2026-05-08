import { DataTypes, Model } from 'sequelize'
import type {
	BelongsToManyAddAssociationsMixin,
	BelongsToManySetAssociationsMixin,
	BelongsToManyGetAssociationsMixin,
	Sequelize
} from 'sequelize'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import type { UnidadId } from '../../domain/valueObject/UnidadId'
import type { UnidadName } from '../../domain/valueObject/UnidadName'
import type { CargoDto } from '../../../Cargo/domain/entity/Cargo.dto'
import type { CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import type { CargoModel } from '../../../Cargo/infrastructure/sequelize/CargoSchema'
import type { SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import type { UnidadDto } from '../../domain/entity/Unidad.dto'
import { RangeLevel } from '../../domain/valueObject/RangeLevel'
import type { CentroDeCosto } from '../../domain/valueObject/CentroDeCosto'
import type { CodigoInterno } from '../../domain/valueObject/CodigoInterno'
import type { IsUnitActive } from '../../domain/valueObject/IsUnitActive'

/**
 * @description Sequelize model for the `Unidad` entity.
 */
export class UnidadModel extends Model<Omit<UnidadDto, 'cargos'>> implements UnidadDto {
	declare id: Primitives<UnidadId>
	declare name: Primitives<UnidadName>
	declare rangeLevel: Primitives<RangeLevel>
	declare centroDeCosto: Primitives<CentroDeCosto>
	declare codigoInterno: Primitives<CodigoInterno>
	declare isUnitActive: Primitives<IsUnitActive>
	declare parentId: Primitives<UnidadId> | null
	declare cargos: Primitives<CargoId>[] & Omit<CargoDto, 'departamentos'>[]

	// Association Mixins
	declare getCargo: BelongsToManyGetAssociationsMixin<CargoModel>
	declare addCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare setCargos: BelongsToManySetAssociationsMixin<CargoModel, Primitives<CargoId>>
	declare removeCargo: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>

	static associate(models: SequelizeModels): void {
		this.belongsTo(models.Unidad, { as: 'parent', foreignKey: 'parentId' })
		this.hasMany(models.Unidad, { as: 'children', foreignKey: 'parentId' })

		this.hasMany(models.Employee, { as: 'employee', foreignKey: 'unidadId' })
		this.belongsToMany(models.Cargo, {
			as: 'cargos',
			through: 'cargo_unidad',
			foreignKey: 'unidadId',
			otherKey: 'cargoId'
		})
		this.hasMany(models.AccessPolicy, { as: 'accessPolicy', foreignKey: 'unidadId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true },
				rangeLevel: {
					type: DataTypes.INTEGER,
					allowNull: false,
					validate: {
						max: RangeLevel.MAX,
						min: RangeLevel.MIN
					}
				},
				centroDeCosto: {
					type: DataTypes.STRING,
					allowNull: true,
					unique: true
				},
				codigoInterno: {
					type: DataTypes.STRING,
					allowNull: true,
					unique: true
				},
				isUnitActive: {
					type: DataTypes.BOOLEAN,
					defaultValue: true
				},
				parentId: {
					type: DataTypes.UUID,
					allowNull: true,
					references: {
						model: 'unidades',
						key: 'id'
					}
				}
			},
			{
				modelName: 'Unidad',
				tableName: 'unidades',
				timestamps: true,
				underscored: true,
				paranoid: true,
				sequelize
			}
		)
	}
}
