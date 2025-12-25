import { DataTypes, Model, type Sequelize } from 'sequelize'
import { EmployeeTypesEnum, type EmployeeType } from '../../domain/valueObject/EmployeeType'
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
import { type EmployeeLocationId } from '../../domain/valueObject/EmployeeLocation'
import { type CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { type Extension } from '../../domain/valueObject/Extension'
import { type PhoneNumber } from '../../domain/valueObject/PhoneNumber'
import { type EmployeeDto } from '../../domain/entity/Employee.dto'
import { type LocationDto } from '../../../../Location/Location/domain/entity/Location.dto'
import { type CargoDto } from '../../../Cargo/domain/entity/Cargo.dto'
import { type DepartamentoDto } from '../../../Departamento/domain/Departamento.dto'
import { type EmployeeDirectiva } from '../../domain/valueObject/EmployeeDirectiva'
import { type EmployeeVicepresidenciaEjecutiva } from '../../domain/valueObject/EmployeeVicepresidenciaEjecutiva'
import { type EmployeeVicepresidencia } from '../../domain/valueObject/EmployeeVicepresidencia'
import { type EmployeeDepartamento } from '../../domain/valueObject/EmployeeDepartamento'
import { type DirectivaDto } from '../../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/Vicepresidencia.dto'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'

/**
 * @description Sequelize model for the `Employee` entity.
 */
export class EmployeeModel
	extends Model<
		Omit<
			EmployeeDto,
			'location' | 'vicepresidencia' | 'directiva' | 'vicepresidenciaEjecutiva' | 'departamento' | 'cargo'
		>
	>
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
	declare locationId: Primitives<EmployeeLocationId>
	declare directivaId: Primitives<EmployeeDirectiva>
	declare vicepresidenciaEjecutivaId: Primitives<EmployeeVicepresidenciaEjecutiva>
	declare vicepresidenciaId: Primitives<EmployeeVicepresidencia>
	declare departamentoId: Primitives<EmployeeDepartamento>
	declare cargoId: Primitives<CargoId>
	declare extension: Primitives<Extension>[]
	declare phone: Primitives<PhoneNumber>[]
	declare location: LocationDto
	declare directiva: Omit<DirectivaDto, 'cargos'>
	declare vicepresidenciaEjecutiva: Omit<VicepresidenciaEjecutivaDto, 'cargos'>
	declare vicepresidencia: Omit<VicepresidenciaDto, 'cargos'>
	declare departamento: Omit<DepartamentoDto, 'cargos'>
	declare cargo: Omit<CargoDto, 'departamentos' | 'vicepresidencias' | 'vicepresidenciaEjecutivas' | 'directivas'>

	static associate(models: SequelizeModels): void {
		this.belongsTo(models.Cargo, { as: 'cargo', foreignKey: 'cargoId' })
		this.belongsTo(models.Location, { as: 'location', foreignKey: 'locationId' })
		this.belongsTo(models.Directiva, { as: 'directiva', foreignKey: 'directivaId' })
		this.belongsTo(models.VicepresidenciaEjecutiva, {
			as: 'vicepresidenciaEjecutiva',
			foreignKey: 'vicepresidenciaEjecutivaId'
		})
		this.belongsTo(models.Vicepresidencia, { as: 'vicepresidencia', foreignKey: 'vicepresidenciaId' })
		this.belongsTo(models.Departamento, { as: 'departamento', foreignKey: 'departamentoId' })
		this.hasMany(models.Device, { as: 'devices', foreignKey: 'employeeId' })
		this.hasMany(models.History, { as: 'history', foreignKey: 'employeeId' })
		this.hasMany(models.Shipment, { as: 'toEmployee', foreignKey: 'receivedBy' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				userName: { type: DataTypes.STRING, allowNull: false, unique: false },
				type: {
					type: DataTypes.ENUM(...Object.values(EmployeeTypesEnum)),
					allowNull: false,
					defaultValue: EmployeeTypesEnum.REGULAR
				},
				name: { type: DataTypes.STRING, allowNull: true },
				lastName: { type: DataTypes.STRING, allowNull: true },
				email: { type: DataTypes.STRING, allowNull: true, validate: { isEmail: true } },
				isStillWorking: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
				employeeCode: { type: DataTypes.INTEGER, allowNull: true, unique: true },
				nationality: { type: DataTypes.ENUM(...Object.values(Nationalities)), allowNull: true },
				cedula: { type: DataTypes.INTEGER, allowNull: true, unique: true },
				locationId: { type: DataTypes.UUID, allowNull: true },
				directivaId: { type: DataTypes.UUID, allowNull: true },
				vicepresidenciaEjecutivaId: { type: DataTypes.UUID, allowNull: true },
				vicepresidenciaId: { type: DataTypes.UUID, allowNull: true },
				departamentoId: { type: DataTypes.UUID, allowNull: true },
				cargoId: { type: DataTypes.UUID, allowNull: true },
				extension: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] },
				phone: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] }
			},
			{ modelName: 'Employee', tableName: 'employees', timestamps: true, underscored: true, sequelize }
		)
	}
}
