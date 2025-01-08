import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentId } from '../../domain/value-object/DepartmentId'
import { type DepartmentName } from '../../domain/value-object/DepartmentName'
import { type DepartmentPrimitives } from '../../domain/entity/IDeparment'

export class DepartmentLevel1Model extends Model<DepartmentPrimitives> implements DepartmentPrimitives {
    declare id: Primitives<DepartmentId>
    declare name: Primitives<DepartmentName>

    static async associate(models: Sequelize['models']): Promise<void> {
        this.hasMany(models.DepartmentLevel2, { as: 'departmentLevel2', foreignKey: 'departmentLevelId' })
    }

    static async initialize(sequelize: Sequelize): Promise<void> {
        DepartmentLevel1Model.init(
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
                }
            },
            {
                sequelize,
                modelName: 'DepartmentLevel1',
                timestamps: false,
                underscored: true

            }
        )

    }
}