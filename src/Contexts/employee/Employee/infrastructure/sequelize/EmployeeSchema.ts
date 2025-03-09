import { DataTypes, Model, type Sequelize } from 'sequelize'
import { EmployeeTypes, type EmployeeType } from '../../domain/valueObject/EmployeeType'
import { Nationalities, type EmployeeNationality } from '../../domain/valueObject/EmployeeNationality'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeId } from '../../domain/valueObject/EmployeeId'
import { type EmployeeUserName } from '../../domain/valueObject/EmployeeUsername'
import { type EmployeeCode } from '../../domain/valueObject/EmployeCode'
import { type EmployeeName } from '../../domain/valueObject/EmployeeName'
import { type EmployeeEmail } from '../../domain/valueObject/EmployeeEmail'
import { type EmployeeIsStillWorking } from '../../domain/valueObject/EmployeeIsStillWorking'
import { type EmployeeCedula } from '../../domain/valueObject/EmployeeCedula'
import { type EmployeeLastName } from '../../domain/valueObject/EmployeeLastName'
import { type CentroTrabajoId } from '../../../CentroTrabajo/domain/CentroTrabajoId'
import { type EmployeeLocationId } from '../../domain/valueObject/EmployeeLocation'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type CargoId } from '../../../Cargo/domain/CargoId'
import { type Extension } from '../../domain/valueObject/Extension'
import { type PhoneNumber } from '../../domain/valueObject/PhoneNumber'
import { EmployeeDto } from '../../domain/entity/Employee.dto'
import { LocationDto } from '../../../../Location/Location/domain/Location.dto'
import { CargoDto } from '../../../Cargo/domain/Cargo.dto'
import { CentroTrabajoDto } from '../../../CentroTrabajo/domain/CentroTrabajo.dto'
import { DepartamentoDto } from '../../../Departamento/domain/Departamento.dto'

export class EmployeeModel
	extends Model<Omit<EmployeeDto, 'centroTrabajo' | 'location' | 'departamento' | 'cargo'>>
	implements EmployeeDto
{
	declare id: Primitives<EmployeeId>
	declare userName: Primitives<EmployeeUserName>
	declare type: Primitives<EmployeeType>
	declare name: Primitives<EmployeeName>
	declare lastName: Primitives<EmployeeLastName>
	declare email: Primitives<EmployeeEmail>
	declare isStillWorking: Primitives<EmployeeIsStillWorking>
	declare employeeCode: Primitives<EmployeeCode>
	declare nationality: Primitives<EmployeeNationality>
	declare cedula: Primitives<EmployeeCedula>
	declare centroTrabajoId: Primitives<CentroTrabajoId>
	declare locationId: Primitives<EmployeeLocationId>
	declare departamentoId: Primitives<DepartmentId>
	declare cargoId: Primitives<CargoId>
	declare extension: Primitives<Extension>[]
	declare phone: Primitives<PhoneNumber>[]
	// joins
	declare centroTrabajo: CentroTrabajoDto
	declare location: LocationDto
	declare departamento: Omit<DepartamentoDto, 'cargos'>
	declare cargo: Omit<CargoDto, 'departamentos'>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.Cargo, { as: 'cargo', foreignKey: 'cargoId' }) // An employee belongs to a cargo
		this.belongsTo(models.Location, {
			as: 'location',
			foreignKey: 'locationId'
		}) // An employee belongs to a location
		this.belongsTo(models.Departamento, {
			as: 'departamento',
			foreignKey: 'departamentoId'
		}) // An employee belongs to a departamento
		this.belongsTo(models.CentroTrabajo, {
			as: 'centroTrabajo',
			foreignKey: 'centroTrabajoId'
		}) // An employee belongs to a centro de trabajo
		this.hasMany(models.Device, { as: 'devices', foreignKey: 'employeeId' }) // An employee has many devices
		this.hasMany(models.History, {
			as: 'history',
			foreignKey: 'employeeId'
		}) // An employee has many histories
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		EmployeeModel.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					allowNull: false
				},
				userName: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: false
				},
				type: {
					type: DataTypes.ENUM(EmployeeTypes.GENERIC, EmployeeTypes.REGULAR, EmployeeTypes.SERVICE),
					allowNull: false,
					defaultValue: EmployeeTypes.REGULAR
				},
				name: {
					type: DataTypes.STRING,
					allowNull: true
				},
				lastName: {
					type: DataTypes.STRING,
					allowNull: true
				},
				email: {
					type: DataTypes.STRING,
					allowNull: true,
					validate: {
						isEmail: true
					}
				},
				isStillWorking: {
					type: DataTypes.BOOLEAN,
					allowNull: false,
					defaultValue: true
				},
				employeeCode: {
					type: DataTypes.INTEGER,
					allowNull: true,
					unique: true
				},
				nationality: {
					type: DataTypes.ENUM(Nationalities.V, Nationalities.E),
					allowNull: true
				},
				cedula: {
					type: DataTypes.INTEGER,
					allowNull: true,
					unique: true
				},
				centroTrabajoId: {
					type: DataTypes.STRING,
					allowNull: true
				},
				locationId: {
					type: DataTypes.UUID,
					allowNull: true
				},
				departamentoId: {
					type: DataTypes.UUID,
					allowNull: true
				},
				cargoId: {
					type: DataTypes.UUID,
					allowNull: true
				},
				extension: {
					type: DataTypes.ARRAY(DataTypes.STRING),
					defaultValue: []
				},
				phone: {
					type: DataTypes.ARRAY(DataTypes.STRING),
					defaultValue: []
				}
			},
			{
				modelName: 'Employee',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
