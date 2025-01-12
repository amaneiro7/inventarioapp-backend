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
import { type DepartamentoPrimitives } from '../../domain/Departamento'
import { type CodCentroCosto } from '../../../CentroCosto/domain/CodCentroCosto'
import { type CargoModel } from '../../../Cargo/infrastructure/sequelize/CargoSchema'


export class DepartamentoModel extends Model<Omit<DepartamentoPrimitives, 'cargos'>> implements DepartamentoPrimitives {
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
        this.hasMany(models.Employee, { as: 'employee', foreignKey: 'departamentoId' })
        this.belongsToMany(models.Cargo, { as: 'cargos', through: 'cargo_departamento', foreignKey: 'departamentoId', otherKey: 'cargoId' })
    }

    static async initialize(sequelize: Sequelize): Promise<void> {
        DepartamentoModel.init(
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
                modelName: 'Departamento',
                timestamps: true,
                underscored: true
            }
        )

    }
}