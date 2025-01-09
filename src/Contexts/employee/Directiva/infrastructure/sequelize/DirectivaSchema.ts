import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DirectivaPrimitives } from '../../domain/Directiva'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'

export class DirectivaModel extends Model<DirectivaPrimitives> implements DirectivaPrimitives {
    declare id: Primitives<DepartmentId>
    declare name: Primitives<DepartmentName>

    static async associate(models: Sequelize['models']): Promise<void> {
        this.hasMany(models.VicepresidenciaEjecutiva, { as: 'vicepresidenciaEjecutiva', foreignKey: 'directivaId' })
    }

    static async initialize(sequelize: Sequelize): Promise<void> {
        DirectivaModel.init(
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
                modelName: 'Directiva',
                timestamps: false,
                underscored: true

            }
        )

    }
}