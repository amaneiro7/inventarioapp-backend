import { type EmployeeRepository } from '../../../../employee/Employee/domain/Repository/EmployeeRepository'
import { type ProcessorRepository } from '../../../../Features/Processor/domain/repository/ProcessorRepository'
import { type LocationRepository } from '../../../../Location/Location/domain/repository/LocationRepository'
import { type StatusRepository } from '../../../Status/domain/repository/StatusRepository'
import { type DeviceRepository } from '../repository/DeviceRepository'

export interface DeviceDependencies {
	deviceRepository: DeviceRepository
	statusRepository: StatusRepository
	locationRepository: LocationRepository
	employeeRepository: EmployeeRepository
	processorRepository: ProcessorRepository
}
