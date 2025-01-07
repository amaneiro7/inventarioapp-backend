import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentId } from '../../domain/value-object/DepartmentId'
import { type DepartmentName } from '../../domain/value-object/DepartmentName'
import { type DepartamentLevel3Primitives } from '../../domain/entity/DepartmentLevel3'


export class DepartmentLevel3Model extends Model<DepartamentLevel3Primitives> implements DepartamentLevel3Primitives {
    declare id: Primitives<DepartmentId>
    declare name: Primitives<DepartmentName>
    declare departmentLevel2Id: Primitives<DepartmentId>

    static async associate(models: Sequelize['models']): Promise<void> {
        this.belongsTo(models.DepartmentLevel2, { as: 'departmentLevel2', foreignKey: 'departmentLevel2Id' })
        this.belongsToMany(models.Cargo, { as: 'cargos', through: 'CargoDepartmentLevel3', foreignKey: 'departmentLevel3Id' })
    }

    static async initialize(sequelize: Sequelize): Promise<void> {
        DepartmentLevel3Model.init(
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
                departmentLevel2Id: {
                    type: DataTypes.UUID,
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: 'DepartmentLevel3',
                timestamps: false,
                underscored: true

            }
        )

    }
}