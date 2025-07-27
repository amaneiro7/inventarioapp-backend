import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CentroTrabajoId } from '../../domain/CentroTrabajoId'
import { type CentroTrabajoName } from '../../domain/CentroTrabajoName'
import { type CodCentroCosto } from '../../../CentroCosto/domain/CodCentroCosto'
import { type CentroTrabajoDto } from '../../domain/CentroTrabajo.dto'
import { type CentroCostoDto } from '../../../CentroCosto/domain/CentroCosto.dto'

/**
 * @description Sequelize model for the `CentroTrabajo` entity.
 */
export class CentroTrabajoModel extends Model<Omit<CentroTrabajoDto, 'centroCosto'>> implements CentroTrabajoDto {
	declare id: Primitives<CentroTrabajoId>
	declare name: Primitives<CentroTrabajoName>
	declare centroCostoId: Primitives<CodCentroCosto>
	declare centroCosto: CentroCostoDto

	static associate(models: Sequelize['models']): void {
		this.belongsTo(models.CentroCosto, { as: 'centroCosto', foreignKey: 'centroCostoId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false },
				centroCostoId: { type: DataTypes.STRING, allowNull: false }
			},
			{ modelName: 'CentroTrabajo', tableName: 'centro_trabajos', timestamps: true, underscored: true, sequelize }
		)
	}
}
