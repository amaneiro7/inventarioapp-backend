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
import { type DepartmentoPrimitives } from '../../domain/Departmento'
import { type CodCentroCosto } from '../../../CentroCosto/domain/CodCentroCosto'
import { CargoModel } from '../../../Cargo/infrastructure/sequelize/CargoSchema'


export class DepartmentoModel extends Model<Omit<DepartmentoPrimitives, 'cargos'>> implements DepartmentoPrimitives {
    declare id: Primitives<DepartmentId>
    declare name: Primitives<DepartmentName>
    declare vicepresidenciaEjecutivaId: Primitives<DepartmentId>
    declare centroCostoId: Primitives<CodCentroCosto>
    declare cargos: Primitives<CargoId>[]

    // Métodos de asociación
    public getCargos!: BelongsToManyGetAssociationsMixin<CargoModel>
    public addCargos!: BelongsToManyAddAssociationsMixin<CargoModel, Primitives<CargoId>>
    public setCargos!: BelongsToManySetAssociationsMixin<CargoModel, Primitives<CargoId>>

    static async associate(models: Sequelize['models']): Promise<void> {
        this.belongsTo(models.VicepresidenciaEjecutiva, { as: 'vicepresidenciaEjecutiva', foreignKey: 'vicepresidenciaEjecutivaId' })
        this.belongsTo(models.CentroCosto, { as: 'centroCosto', foreignKey: 'centroCostoId' })
        this.belongsToMany(models.Cargo, { as: 'cargos', through: 'CargoDepartmento', foreignKey: 'departmentoId' })
    }

    static async initialize(sequelize: Sequelize): Promise<void> {
        DepartmentoModel.init(
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
                modelName: 'Departmento',
                timestamps: false,
                underscored: true
            }
        )

    }
}