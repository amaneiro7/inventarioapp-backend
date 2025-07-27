import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CodCentroCosto } from '../../domain/CodCentroCosto'
import { type CentroCostoName } from '../../domain/CentroCostoName'
import { type CentroCostoDto } from '../../domain/CentroCosto.dto'

/**
 * @description Sequelize model for the `CentroCosto` entity.
 */
export class CentroCostoModel extends Model<CentroCostoDto> implements CentroCostoDto {
	declare id: Primitives<CodCentroCosto>
	declare name: Primitives<CentroCostoName>

	static associate(models: Sequelize['models']): void {
		this.hasMany(models.CentroTrabajo, { as: 'centroTrabajo', foreignKey: 'centroCostoId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false }
			},
			{ modelName: 'CentroCosto', tableName: 'centro_costos', timestamps: true, underscored: true, sequelize }
		)
	}
}
