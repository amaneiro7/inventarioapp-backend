const { brandsData, brandOnlyName } = require('../brandData/brands')
const { categoryData, categoryOnlyNames } = require('../categoryData/categoryData')
const { hddCapacities, hddCapacitiesName } = require('../DiscoDuro/hddCapacities')
const { hddTypes, hddTypeName } = require('../DiscoDuro/hddType')
const employees = require('../employee/employee/torreEmployee')
const { siteMCBOlocation, siteName } = require('../location/locations')
const { modelComputer, modelName } = require('../modelsSeries/modelComputer')
const { operatingSystem, osName } = require('../operatingSystem/operatingSystem')
const { operatingSystemArq, osArqName } = require('../operatingSystem/operatingSystemArq')
const { processors, processorName } = require('../processor/processors')
const { statusData, statusName } = require('../statusData/statusData')

const torre = [
    {
        serial: '8CC14406T0',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '8CC0221PCJ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processorName.includes(''))[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801B4',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CD147191J',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817ZW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL10208MP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXZC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607LN',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801TJ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSW6',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ906079V',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSW1',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801VF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804VT',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801DK',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'null',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.BIOSTAR Group)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804WS',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9161ZV7',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801W8',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801F6',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VT',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801BX',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804X0',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL91432F1',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801SH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG950553C',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CJ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801SL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFBP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201WNY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ945011G',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W1Q',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZFX',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZH8',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZGN',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W1H',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXXR',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ39M15',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXYM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMTGCD',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9161ZW2',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3180CS3',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL318180C',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9202436',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL051088T',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201WP0',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJBPHCZ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ947086S',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL02610KW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801V4',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804WZ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31809W2',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31600JY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL04309W4',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHYX',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'null',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.BIOSTAR Group)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMELL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31809TP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4391LV8',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZN5',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXGLEC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9341ZNP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801DW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806ZX',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYNC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9092Q8L',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804VR',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VG',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYTF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMEPD',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804W1',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHGD',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4180700',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4391LVM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817YS',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00601M7',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ83209P4',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VZ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804W3',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'BG322S21030882',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.Azulle)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXKDMK',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMTGDN',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804X3',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL6031TBX',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYDF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ94500ZT',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZHB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00609H5',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHNH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31600CD',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817JJ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL0510888',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3181818',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817ZM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9142Z9D',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJALTRP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL1390T8R',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817R8',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201T0B',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJERNFV',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHERZH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHPD',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31600HR',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00XUDU',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817HW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W18',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ017EB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJTYGVR',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W0P',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801D4',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804TG',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801FG',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYMP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XQ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801TH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMEMX',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801W7',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801GR',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801R9',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'LECBQ0A8Y6G43L',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9242DX0',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL93443K7',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9233SSC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9161ZSY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ9470877',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801T0',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ94709Z5',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '8CC8391HSP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W24',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ55A35',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4020TMT',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801B6',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHFBCM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSUJ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFFH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL051088D',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYRY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL5260NKL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607SJ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHZH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'null',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.BIOSTAR Group)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607W2',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYLB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801RB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804WM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806Y9',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806X3',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00609LG',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXXN',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ38AKF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMELY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ38XEK',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXKDTR',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZHH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYFW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXYD',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801S2',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZDR',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXZT',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYEL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZGC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL0260ZD9',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSWY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYBT',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHKA',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYVC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00XUDF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ03JPP6',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMETM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801SB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CD1471918',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806WM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFKZ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXWX',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ03JPNV',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXYB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFGM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4020TPL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CD',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90701WV',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801S6',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00700GN',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'System Serial Number',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.OEM)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ08H4T9',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ08H7ZM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXZP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801T2',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801VQ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSUV',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801V3',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL5501YRM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801RF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ94709ZS',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSUZ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3181802',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801VH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801WM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806WW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W0V',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYBK',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CQ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL8503BR8',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ03JPPD',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYBH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMEWW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMETP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801TW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806X5',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YK',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00609M0',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ08H52L',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31600B8',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXDLHE',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804V5',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804V7',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'BG322S21010310',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.Azulle)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00501RZ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607J3',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00700LF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFEV',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMCZP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801S1',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHZK',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMEWT',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801WC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG2210X20',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ08H4XD',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYVE',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806ZN',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04CSQL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804XG',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801R1',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL5260NM7',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFHY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607KB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ03JPQB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9472SVL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CD2227C0V',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801DC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801GT',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJBPHBW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801VY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804WL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CX',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804X1',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801ST',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801DY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801V9',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804XF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL8502WTC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804XY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804T7',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804YC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YD',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804VL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801DJ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801BP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804VW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801TS',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804V0',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804SX',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804W2',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801BR',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CS',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJWEBD6',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL04309XF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806WV',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00700GT',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4020TQC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201T0D',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJLKVL2',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJERKKZ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJBPHER',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801B5',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801V5',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31809VV',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CZ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XR',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607FH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMCDM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801G2',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806Y2',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801GG',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL333293Y',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04CSNU',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817JM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607XH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL1390T4N',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4020SMH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL85215JF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMCXA',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9010TTX',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL92855ZZ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL85211B6',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL8512GZW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJWDYP9',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801BG',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801B3',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ906079D',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607JN',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9092Q7Q',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG9229TW2',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CN',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804TL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804VB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04CSP7',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806WQ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ03JPPE',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG81264RP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801T7',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201WNZ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YV',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9511PPB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4020TM1',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZEB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3181837',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201T02',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201T13',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YT',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W39',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607NV',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3151VKT',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHERZB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90701HS',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90701MC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806X7',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL5260NMM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJTYPEF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHERAC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMHWZ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801FQ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ13K17',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL5260NJS',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYEH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04CSNS',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL5260NKP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804TV',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL0112ND0',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZF7',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.ALLINONE)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG12123MG',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ08H4ZJ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSWZ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYFF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801SJ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFGG',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801BF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXDHYX',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817PV',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFHM',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHZC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFGA',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJBPHEF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJTYPEP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201WND',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804X7',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHCVHL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHERAB',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801C0',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801W3',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ947086M',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804XH',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXKDRY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801FY',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804XT',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG12123MF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XF',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806W1',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801SK',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607MR',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804TK',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806X0',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VX',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801DX',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'CND83267XL',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W57',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90701FW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFED',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806WN',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHYD',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG12123LP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYTN',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801R0',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804WG',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL051087V',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801FC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00601JT',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL0430B0L',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'CND83267YK',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'CND83267XW',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801GS',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607J2',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806W8',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHERDK',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJBPHKC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801B8',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'CND83267XQ',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4020TR4',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817QV',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHYK',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJLKHR2',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG12123MC',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.LAPTOPS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W4V',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ08H4W4',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ907035T',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801W2',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXKCTR',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL1390RR3',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHCVVP',
        activo: null,
        statusId: statusData.filter(status => status.name === statusName.ENUSO)[0].id,
        categoryId: categoryData.filter(cat => cat.name === categoryOnlyNames.COMPUTADORAS)[0].id,
        brandId: brandsData.filter(brand => brand.name === brandOnlyName.LENOVO)[0].id,
        modelId: modelComputer.filter(model => model.name === modelName.)[0].id, // falta
        employeeId: employees.filter(employee => employee.userName === 'elhernandez')[0].id, // falta
        locationId: siteMCBOlocation.filter(location => location.name === siteName.TORREBNC5DEJULIOBOVEDA)[0].id, // falta
        observation: '',
        computerName: '',
        processorId: processors.filter(processor => processor.number_model === processorName.)[0].id,
        memoryRamCapacity: ,
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.)[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName.CENTOS)[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName[''])[0].id,
        macAddress: null,
        ipAddress: ''
    },
]