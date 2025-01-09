import {
  DataTypes,
  Model,
  type BelongsToManyAddAssociationsMixin,
  type BelongsToManyGetAssociationsMixin,
  type BelongsToManySetAssociationsMixin,
  type Sequelize
} from 'sequelize'
import { type CargoPrimitives } from '../../domain/Cargo'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../domain/CargoId'
import { type CargoName } from '../../domain/CargoName'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { DepartmentLevel3Model } from '../../../Departamento/infrastructure/sequelize/DepartmenLevel3Schema'


export class CargoModel extends Model<Omit<CargoPrimitives, 'departments'>> implements CargoPrimitives {
  declare id: Primitives<CargoId>
  declare name: Primitives<CargoName>
  declare departments: Primitives<DepartmentId>[]

  // Métodos de asociación
  public getDeparments!: BelongsToManyGetAssociationsMixin<DepartmentLevel3Model>
  public addDeparments!: BelongsToManyAddAssociationsMixin<DepartmentLevel3Model, Primitives<DepartmentId>>
  public setDeparments!: BelongsToManySetAssociationsMixin<DepartmentLevel3Model, Primitives<DepartmentId>>

  static async associate(models: Sequelize['models']): Promise<void> {
    this.belongsToMany(models.DepartmentsLevel3, { as: 'departments', through: "CargoDepartmentLevel3" })
    this.hasMany(models.Employee, { as: 'employees', foreignKey: 'cargoId' })
  }
  static async initialize(sequelize: Sequelize): Promise<void> {
    CargoModel.init(
      {
        id: {
          type: DataTypes.STRING,
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
        modelName: 'Cargo',
        timestamps: false,
        underscored: true,
        sequelize
      })
  }
}

