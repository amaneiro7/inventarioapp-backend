import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CodCentroCosto } from '../../domain/CodCentroCosto'
import { type CentroCostoName } from '../../domain/CentroCostoName'
import { type CentroCostoDto } from '../../domain/CentroCosto.dto'

export class CentroCostoModel extends Model<CentroCostoDto> implements CentroCostoDto {
	declare id: Primitives<CodCentroCosto>
	declare name: Primitives<CentroCostoName>

	static async associate(models: Sequelize['models']): Promise<void> {
		// this.hasMany(models.Directiva, {
		// 	as: 'directiva',
		// 	foreignKey: 'centroCostoId'
		// }) // Un CentroCosto puede tener muchas directiva
		// this.hasMany(models.VicepresidenciaEjecutiva, {
		// 	as: 'vicepresidenciaEjecutiva',
		// 	foreignKey: 'centroCostoId'
		// }) // Un CentroCosto puede tener muchas Vicepresidencia Ejecutiva
		// this.hasMany(models.Vicepresidencia, {
		// 	as: 'vicepresidencia',
		// 	foreignKey: 'centroCostoId'
		// }) // Un CentroCosto puede tener muchos Vicepresidencia
		// this.hasMany(models.Departamento, {
		// 	as: 'departamento',
		// 	foreignKey: 'centroCostoId'
		// }) // Un CentroCosto puede tener muchos Departamento
		this.hasMany(models.CentroTrabajo, {
			as: 'centroTrabajo',
			foreignKey: 'centroCostoId'
		}) // Un CentroCosto puede tener muchos CentroTrabajo
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		CentroCostoModel.init(
			{
				id: {
					type: DataTypes.STRING,
					primaryKey: true,
					allowNull: false
				},
				name: {
					allowNull: false,
					type: DataTypes.STRING
				}
			},
			{
				modelName: 'CentroCosto',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
