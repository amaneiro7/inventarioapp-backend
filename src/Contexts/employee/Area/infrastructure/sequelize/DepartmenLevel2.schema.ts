import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentId } from '../../domain/value-object/DepartmentId'
import { type DepartmentName } from '../../domain/value-object/DepartmentName'
import { DepartmentLevel2Primitives } from '../../domain/entity/DepartmentLevel2'

export class DepartmentLevel2Model extends Model<DepartmentLevel2Primitives> implements DepartmentLevel2Primitives {
    declare id: Primitives<DepartmentId>
    declare name: Primitives<DepartmentName>
    declare departmentLevel1Id: Primitives<DepartmentId>

    static async associate(models: Sequelize['models']): Promise<void> {
        this.belongsTo(models.DepartmentLevel1, { as: 'departmentLevel1', foreignKey: 'departmentLevel1Id' })
        this.hasMany(models.DepartmentLevel3, { as: 'departmentLevel3', foreignKey: 'departmentLevel2Id' })
    }

    static async initialize(sequelize: Sequelize): Promise<void> {
        DepartmentLevel2Model.init(
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
                departmentLevel1Id: {
                    type: DataTypes.UUID,
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: 'DepartmentLevel2',
                timestamps: false,
                underscored: true

            }
        )

    }
}