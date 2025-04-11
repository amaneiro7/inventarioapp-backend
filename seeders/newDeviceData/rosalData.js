const { hddCapacitiesName, hddCapacities } = require("../DiscoDuro/hddCapacities");
const { hddTypeName, hddTypes } = require("../DiscoDuro/hddType");
const { categoriesData, categoryNames } = require("./allCategory");
const { brandOnlyName, brandsData } = require("./brand");
const { modelComputer } = require("./modelComputer");
const { operatingSystem, osName } = require("./operatingSystem");
const { operatingSystemArq, osArqName } = require("./operatingSystemArq");
const { processors } = require("./processors");
const { employees } = require("./allUsers");

const torreElRosal = [
    {
        serial: 'BG322S21030882',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Azulle']).id,
        modelId: modelComputer.find(processor => processor.name === "BYTE4").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'SALREUP3',
        processorId: processors.find(process => 'Intel(R) Celeron(R) J4125 CPU @ 2.00GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['80'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['EMMC'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'BG322S21010310',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Azulle']).id,
        modelId: modelComputer.find(processor => processor.name === "BYTE4").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'juntasbnc'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'SALAJUNTASP4',
        processorId: processors.find(process => 'Intel(R) Celeron(R) J4125 CPU @ 2.00GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['80'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['EMMC'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: null,
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
        modelId: modelComputer.find(processor => processor.name === "G41D3C").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'egcontreras'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '001002TAQ',
        processorId: processors.find(process => 'Pentium(R) Dual-Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 2,
        memoriaRamModules: [2, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: null,
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
        modelId: modelComputer.find(processor => processor.name === "G41D3C").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dmedina'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095583DIGI',
        processorId: processors.find(process => 'Pentium(R) Dual-Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: null,
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
        modelId: modelComputer.find(processor => processor.name === "H61MLV").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'recepcion'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'PB-RECEPCION',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 2,
        memoriaRamModules: [2, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4391LV8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP 200 G1 MT").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'anggutierrez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098245COMYMER',
        processorId: processors.find(process => 'Intel(R) Celeron(R) CPU  J1800  @ 2.41GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4391LVM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP 200 G1 MT").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'hmarquina'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098403SEG',
        processorId: processors.find(process => 'Intel(R) Celeron(R) CPU  J1800  @ 2.41GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '8CC14406T0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP All-in-One 24-df0xxx").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'calvins'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CONSOLABNC01',
        processorId: processors.find(process => 'AMD Athlon Silver 3050U with Radeon Graphics   '.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '8CC0221PCJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP All-in-One 24-df0xxx").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'saituser'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CONSOLABNC02',
        processorId: processors.find(process => 'AMD Ryzen 3 3250U with Radeon Graphics         '.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL10208MP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gbarreto'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098099PROYSE',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Quad CPU    Q8400  @ 2.66GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ945011G',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cagraz'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098400AFPOS',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL051088T',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mcardenas'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098198PROD',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL04309W4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cabrito'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098226POS',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL051088D',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lmontserratt'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '15393ACTFIJOS',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ94709ZS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yparucho'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098381BCAESP',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 2,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00700LF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'DALCALA'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098288COORDMO',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL04309XF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'acarrasquero'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098180CONTAB',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00700GT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'Raltuna'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098220RRHH',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ947086S',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'alperez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098187PROYSE',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00601M7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lsantiago'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098405SEG',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ94500ZT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'bbompart'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098210ESPLACT',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00609H5',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'iromero'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098322CONTSERV',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL0510888',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jsanz'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098319CONYSER',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ9470877',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jzamora'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098084PROYSER',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00609LG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'Tperez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098515BANESP',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00700GN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'STGUERRA'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098352BCAPRI',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00609M0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'FREY'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098289OPTESOR',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00501RZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jbustamante'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098291COORCOEX',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ94709Z5',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098302IMBLES',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [2, 2, 2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ947086M',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'luperdomo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CORRESP003',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL051087V',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'wjaimes'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098159GTEGES',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ00601JT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'bgaldona'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098396MULTNAC',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 6,
        memoriaRamModules: [4, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL0430B0L',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'nolivares'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098160SECPUB',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL1390T8R',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6200 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jovelasquez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098322CONYSER',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL1390T4N',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6200 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cprieto'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'RRHHSELECTALENT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [2, 2, 2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL1390RR3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6200 Pro SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'Rpoleo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098163VPREGNEG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL0260ZD9',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 8000 Elite SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lvalles'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'ARCHJURD',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E8400  @ 3.00GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL02610KW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 8000 Elite SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cangarita'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CORRESP002',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E8400  @ 3.00GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 2, 2, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90701JT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'SUDEBAN020',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 2,
        memoriaRamModules: [0.5, 0.5, 0.5, 0.5],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90701WV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '13601-PROMOT',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 3,
        memoriaRamModules: [0.5, 0.5, 0.5, 1],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607J3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'amagallanes'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095377PROMYNEG',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 3,
        memoriaRamModules: [0.5, 0.5, 2, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90701MC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'androdriguez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'SUDEBAN-221',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 2,
        memoriaRamModules: [0.5, 1, 0.5, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607KB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'josmlopez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'ARCHIVO01',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 3,
        memoriaRamModules: [0.5, 1, 0.5, 1],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ906079V',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ncarrasquel'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095016OPERAC',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 3,
        memoriaRamModules: [1, 0.5, 0.5, 0.5],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90701HS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'rofernandez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'SUDEBAN030',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 3,
        memoriaRamModules: [1, 0.5, 0.5, 0.5],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607MR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095141HIPYTU',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 3,
        memoriaRamModules: [1, 0.5, 0.5, 0.5],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607SJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'sguerra'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DGN019RECUPERAC',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 3,
        memoriaRamModules: [1, 0.5, 1, 0.25],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607XH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yuseche'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'SERVMEDICOS',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 3,
        memoriaRamModules: [1, 0.5, 1, 0.5],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ906079D',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cmata'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098045JURIDI',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 3,
        memoriaRamModules: [1, 0.5, 1, 0.5],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607LN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cablanco'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'SOTANO01',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [1, 0.5, 1, 1],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ907035T',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'iagro'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'ASISTVPINTP6',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [1, 0.5, 1, 1],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607JN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jehernandez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095023CONJUR',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [1, 1, 1, 0.5],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607NV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yeramirez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098055SUDEBAN',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [1, 1, 1, 0.5],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607W2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ogonzalez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'PASTEBCAEP',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [1, 1, 1, 1],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90701FW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jsouquett'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '00122ZONAI',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [1, 1, 1, 1],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607J2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ocordova'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095208ROSAL',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [1, 1, 1, 1],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ90607FH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mpalencia'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098357MASTDEBIT',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 1, 1, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXJ83209P4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc7800p Small Form Factor").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mifernandez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095781ACTI',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E8400  @ 3.00GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 3,
        memoriaRamModules: [1, 1, 1, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4020TMT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Elite 8300 SFF").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098033CONTRA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4020TPL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Elite 8300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'hgonzalez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098312BPRIVADA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4020TQC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Elite 8300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'marigutierrez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098258CONTAB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4020SMH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Elite 8300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'rrangel'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098279AUDIT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4020TR4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Elite 8300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ecarvajal'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098431GNEGOCIO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4020TM1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Elite 8300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ypena'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098268-UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL333293Y',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 4300 SFF PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'tindriago'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098261CONTAB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817ZW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'roperez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'MERCADEO03',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201WNY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mamolina'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098398AFPOS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W1H',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'alopez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098248MERCADEO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro for Workstations'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3180CS3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'joscastillo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098192PROYSE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201WP0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'acarballo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098196PUNTVENTS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31809W2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'oconde'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098224PROYSE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31600JY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'btellechea'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098236MEDPAG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817JJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'kpabon'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098318ESPGECON',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL318180C',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ltapia'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098183PROYSE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3181818',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'nmendoza'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098327ESPACT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817ZM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'edelgado'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098326-VPCTRLAC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817R8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'phurtado'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098324ESPGESER',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201T0B',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'clonga'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098238COOR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31600HR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jparada'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098298GTECOMP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817HW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'juarodriguez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098304PROVEEE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W18',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mespana'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098301PANIF',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W24',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'aarenas'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'ADMINMPRO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W0V',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'tbriceno'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095052OPTES',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201T02',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dcorona'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098137AUDIT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31809TP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'amendoza'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098200GTEADIST',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201T13',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lrosas'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098134AUDI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W39',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ghernandez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098133AUDIT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3151VKT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yguzman'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098176RIESGO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W57',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gmotta'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098168MULTINAC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817YS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mespinoza'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098406SEG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3181802',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'pperez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095747OPTES',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31600B8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'Daraque'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098247COMP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W1Q',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ypedrozo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098401AFLPOS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [2, 2, 2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817JM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'saguilarte'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'RRHHFORM003',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [2, 2, 2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W0P',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'fojeda'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098331COMPRAS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [2, 2, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31600CD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'scortes'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'GTECRTACTIVOS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 10,
        memoriaRamModules: [2, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201WND',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'chgonzalez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095819SEGURI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 14,
        memoriaRamModules: [4, 2, 4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201T0D',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'sroque'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095247RRHH',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 12,
        memoriaRamModules: [4, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31809VV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'AROSALES'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098342CONTA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201WNZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jmujica'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098523SGURDRS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3181837',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'marpalacios'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098035AUDIT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817PV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jediaz'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095059ADMAG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL31817QV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'sortiz'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098157GTEREG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 6,
        memoriaRamModules: [2, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL3201W4V',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mcaprasio'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098019BCMULTI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG2210X20',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteBook 840 G8 Notebook PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lzerpa'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095564-RRHH',
        processorId: processors.find(process => '11th Gen Intel(R) Core(TM) i5-1145G7 @ 2.60GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG12123MG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteBook 850 G7 Notebook PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gaalvarez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'VPOPERACIO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-10510U CPU @ 1.80GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG12123MF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteBook 850 G7 Notebook PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ocecchini'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'VPEBANCAINSTI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-10510U CPU @ 1.80GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG12123LP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteBook 850 G7 Notebook PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'abriceno'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'VPBANCORPHIPOT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-10510U CPU @ 1.80GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG12123MC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteBook 850 G7 Notebook PC").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'caperez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098435VPPRESIDE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-10510U CPU @ 1.80GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 11 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG950553C',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteBook x360 830 G6").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jonperez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098340DESANEG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8665U CPU @ 1.90GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL6031TBX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'fborges'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098173ESPSEN',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL5501YRM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'derodriguez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098248COMPS8',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9092Q8L',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'troldan'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095505-FIDEICO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '8CC8391HSP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lmonsalve'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DNG083-FIDEICO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9242DX0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'loliveros'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095873-RCUPRAC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL85215JF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'msoarez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DGN024-ACCION',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9233SSC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mzerpa'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095956-RECUYCOB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL8503BR8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'frperez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095748TESORER',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL8502WTC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cmoreno'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DGN016-CONTAB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9010TTX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yrojas'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'ACCION-A095037',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL85211B6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'aperez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095674-ACCIONIS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL8512GZW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lelopez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098389ACCIO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9092Q7Q',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'hapereira'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095681-AUDIT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL0112ND0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 65W (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'wmontilla'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095136CAISOPRTE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9161ZV7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gamarquez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098066INTNEG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL91432F1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'juflores'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098403INTELNEG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9161ZW2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'vlopez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '98182-GTEPRDSRV',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9202436',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yuzcategui'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098195-PROYSE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9142Z9D',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 SFF").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098325VPCONAC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9161ZSY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'hiscurpi'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098142TESOR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [16, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CD147191J',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Laptop 15t-dy200").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mcabrera'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098532VPEPRODUC',
        processorId: processors.find(process => '11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 11 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CD1471918',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Laptop 15t-dy200").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'pdiaz'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095212CSCARTERA',
        processorId: processors.find(process => '11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 11 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CD2227C0V',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Pavilion Laptop 15t-eg000").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'avelasquez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'VPRRHH-LHP01',
        processorId: processors.find(process => '11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 11 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL5260NM7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 400 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'tgonzalez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095533RRHH',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL5260NKP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 400 G1 SFF").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098547AUDIT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL5260NKL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 400 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'nramirez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098519EPCLTA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 6,
        memoriaRamModules: [4, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL5260NMM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 400 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gcarabali'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095336SECRETJD',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 6,
        memoriaRamModules: [2, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL5260NJS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 400 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ararias'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095101CONTABI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'LECBQ0A8Y6G43L',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'arivero'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'OPERACIO95121',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [2, 4, 2, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801B4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jlopez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098039VPPISO2',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804WS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'elameda'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095357BNCAUT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801W8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'alperez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095008SERVIPOS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801F6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'Abonilla'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'PLANMAY095861',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'wangulo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095038RECLPOS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801BX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mguere'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'SERVRESTAROSAL',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804X0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'pyepez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095970BNCAUT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801SH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jeahernandez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'ASISTVPPROD01',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095242PAGO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801SL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'wrico'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098186IYDPRS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'zmarron'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095159PPROVEED',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801V4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'geflores'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095359GTEPOS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801DW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'nbrito'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095186FIDEI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806ZX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dbelisario'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095307FIDEICOM',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lgil'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095281FIDEICOMI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804W1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'blira'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'GRCINMARRE1',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL4180700',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'anagonzalez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'INMUEBLE003',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804X3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'aarguelles'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098116PLNFC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jlucena'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095063SERVADM',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XQ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ymarquez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'D095007OPINTERN',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801TH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'JOSESPINOZA'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095611COBRA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801GR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'asaez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095365COBOPER',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801R9',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jpacheco'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095513IMB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801T0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'drosales'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DGN146FIDE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801B6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dmontilla'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098434CONTRL',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801SB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jpalma'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A154008BCAPRI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806WM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mmelchiorre'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A154009VP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'msole'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '154042BCAPRIV',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801VQ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095893OPETESO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yvergara'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095648OPEFEC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801V3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'largonzalez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'B095007COMPTARD',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801RF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'aescalante'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098069OPMON',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801VH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'aleguisamo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095386OPINTERN',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801WM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095597COOPEMO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806WW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dangarita'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095512OPTESOR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801TW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'Vhuice'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098088AEJECUTIV',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806X5',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'hehernande'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095093BCAESP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'hbelfort'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DGN163VPBANPER',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801S1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'edreyes'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A000000MONEXT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801R1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'klozada'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098423-RRHH',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806WV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'josmlopez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095315RHNOM',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801V5',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'msanchez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098104IMPTO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ymarrero'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095343ACT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801G2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ydaza'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095016CAJAH',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801BG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098245AUDINT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801B3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'johrodriguez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095183AUDITSIST',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cperricone'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095699AUDITINT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804TV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gcontreras'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098546AUDIT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801SJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'asmoreno'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095090-ADMAGCIA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801BF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'angrodriguez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'B095074ADMAGE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804X7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jguedez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DGN164SEGBANC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804XH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jepacheco'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '154033EPROMC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804XT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mcala'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095366BCMULTI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806W1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'edggonzalez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095364BCHIPOT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801SK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dcastillo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098006GTENEG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804TK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'iandrade'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '09593AGROPECUAR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806X0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lchirinos'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A154032SECFIN',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mdegouveia'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095387GTELHIP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801DX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mgamarra'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095065CORPORAT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801R0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'nortiz'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A95129BCAAGROP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dcolmenares'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A154027VPNEG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804WG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'zrojas'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098115SECPUB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801FC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ahurtado'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095978BCAGROPE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801GS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mavendano'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A154120BCMULTI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806W8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'wbarat'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '154071BCORPG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801B8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mmujica'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A154028MULTNA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804WM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'equevedo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095127PLNMAY',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806Y9',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ychirinos'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095410PLANMAY',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806X3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'edefreitas'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095322BCAPUB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804V7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DGN050COMPSCON',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804XG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mvilla'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098341-CONTAB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jlopezcarmona'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095167UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'marnieves'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098270UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'aadelgado'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095156UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801S6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jusilva'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '743028COMPENS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [2, 2, 2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801B5',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'flacruz'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098334RRHH',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [2, 2, 2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806WQ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ndelgado'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098269UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [2, 2, 2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801W2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'vzambrano'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098522-UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [2, 2, 2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801RB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yblanco'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095890PLANMAY',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [2, 2, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801C0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mabreu'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098365SEGU',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [2, 4, 2, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801W3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'vatienza'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'COORVALIJA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 6,
        memoriaRamModules: [2, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806ZN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gabgonzalez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'RRHH-COORSELEC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 12,
        memoriaRamModules: [4, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yruggiero'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095709PLANIF',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [4, 4, 8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'josehrodriguez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095612IMPUESTO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [4, 4, 8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801VF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'rbello'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '95995-INTERNCPB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 12,
        memoriaRamModules: [4, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804V5',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'daraque'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098249COMP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 12,
        memoriaRamModules: [4, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gemendoza'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098834CONTAB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 12,
        memoriaRamModules: [4, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jesulopez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098250RRHH',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [4, 8, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801BR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'grivas'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'IMPUESTO22',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [4, 8, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'zestacio'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'INMMUEBLE-0003',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 24,
        memoriaRamModules: [4, 8, 4, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Enterprise LTSC'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801TJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'vjoseph'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095596-CUSTODIA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804VT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'daugello'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'MEDDIG-A098554',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801DK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'romayo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'BNCW10X64',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804WZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lguerra'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098223-MEDPAG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801W7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lquevedo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'GCIAINMUARREN',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801S2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ffernandez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095670ARCHI-JUR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801T2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jbrinez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095371CONTEF',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CQ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jumendoza'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'GN129LOGEFEC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806Y2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'aabreu'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098072RRHH',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801GG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'marperez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098081RRHH',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mariadmendoza'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095046-UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801FY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lbermudez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A154023BCMGTE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'eserrano'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A154047BCACORP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806WN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'privera'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095119VPBCACORP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806VZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'Torellana'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095041PLANIF',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804W3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'HDELGADO'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095698PLANIFIC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801WC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ecabrera'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DGN027-RRHH',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801VY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'fegonzalez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095330CTBLDAD',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804X1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'D095045CONTAB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801DY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ANZAMBRANO'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095614IMPUESTO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804XF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mavila'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095715CONTA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804XY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'rmejias'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095641CONTAB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804T7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'vtoledo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095362CONTABIL',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'anjimenez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095069CONTPAGOS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804VL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'kcastro'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DGN039CONTABIL',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801BP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gflores'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CONTABILDAD',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804VW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'JEPEREZ'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DGN067CONTABIL1',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806XB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'pchiesa'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CONTABILIDAD2',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801TS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'riramirez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095257CONTAB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804SX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'adrivero'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095988CONTA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804W2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095989CONTABIL',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804VB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mpalacio'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DGN065UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801FQ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jcarpio'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095117CONTA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804VR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cnoriega'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'INMUEBLE001',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 24,
        memoriaRamModules: [8, 4, 8, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Enterprise LTSC'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806X7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mbencomo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095850UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 12,
        memoriaRamModules: [8, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801D4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'JMEZA'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095731CONTPAGOS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41806YC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cponce'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '899006CONTPAG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804TG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'abarrios'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095586CONTPAGS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801FG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'PBOVY'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095998SEVADMIN',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801DC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'kapena'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'D095041CONTA1',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801GT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'rhuerfano'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095060CNTBLDAD',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804WL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lcordova'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095330IMPUEST',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lcordova'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095437IMPUE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801ST',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'sinfante'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'B095027OPTDC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801V9',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'alonga'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095173CONTABILI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804YC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'kquintero'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095504PRESP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801DJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lortuno'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '154007VPALTA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804V0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'rabreu'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095590CONTAB',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801CS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gagonzalez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'IMPUESTO21',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41804TL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dtrivino'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095802UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL41801T7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lgener'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095218UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9341ZNP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G4 DM (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mmagallanes'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095404-CONTDC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL93443K7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G4 DM (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'itirado'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'VPCONTRSVCEINN-',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL92855ZZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G4 DM (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mmarcano'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095275ACCIO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9511PPB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G4 DM (TAA)").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yrebete'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095258-AUSTMAS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MXL9472SVL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Z4 G4 Workstation").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'zfilgueira'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'RRHHFORMDESARR',
        processorId: processors.find(process => 'Intel(R) Xeon(R) W-2133 CPU @ 3.60GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 32,
        memoriaRamModules: [8, 8, 8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['2000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro for Workstations'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'CND83267XL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ZBook 15 G3").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'vrubino'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'VPMULTINAC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'CND83267YK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ZBook 15 G3").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'praices'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'VPAGRO098225',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'CND83267XW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ZBook 15 G3").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'acamero'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095083VPRCPIT1',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'CND83267XQ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ZBook 15 G3").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jblanco'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098032VPEALTA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG81264RP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ZBook 15u G5").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'rasandoval'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095409UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: '5CG9229TW2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ZBook 15u G5").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'kdelvillar'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'VPEAUDITF',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'OEM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['System manufacturer']).id,
        modelId: modelComputer.find(processor => processor.name === "OEM").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'aperera'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098087PROM',
        processorId: processors.find(process => 'Intel(R) Celeron(R) CPU G1610 @ 2.60GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSWY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'wborges'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095014-BACKO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04CSNU',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jalinares'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098540RRHH',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04CSP7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'anaortiz'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095355UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSW6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'apapaterra'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'B09569COMPENSM',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSW1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'milucena'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'B095057COMPENSM',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSUJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'rpuentes'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098286CTRLPRFI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSUV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jemejias'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '09539COMPENSAM',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSUZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cperez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A743027OPEMON',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04CSQL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'eserpa'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'SEGLABORAL1',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04CSNS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cconte'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'AUDITOREXT03',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ04HSWZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'edcaraballo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095064ADMAGE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJWEBD6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M70e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'vbarroso'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098146RRHH',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJLKVL2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M70e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yvillalobos'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098260CONTDC',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJLKHR2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M70e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'nnoguera'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098436PMTORE',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJWDYP9',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M70e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'naaponte'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095711ACCION',
        processorId: processors.find(process => 'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXXR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gfagundez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'MERCADEO15',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 10,
        memoriaRamModules: [8, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXZC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cgodoy'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '95910CUSTODIA',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMELL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'recepcion'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'BP-RECEPCION02',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYNC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'frlopez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'FIDEICOMI03',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMTGDN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098172ESPPRE',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYDF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cpinango'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'INCESSERVICIOS',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJERNFV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cnoguera'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098333VPPLAPR',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYLB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'amachado'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095551CAI',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXXN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dadiaz'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A95863CAI',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMELY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mmartinez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095806CAI',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYFW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lchang'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095082CAISOPRT',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXYD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'rhhernandez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DGN092REVCUADR',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 6,
        memoriaRamModules: [2, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYEL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jhidalgo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '95500ADMAGCIA',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYVC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'krperez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CONTBACKOFF01',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 6,
        memoriaRamModules: [4, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXWX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'eguevara'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A154117BCAEMP',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXYB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yavila'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '154057BPERSONAS',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFGM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ssalom'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A154156BANEMP',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXZP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'krodriguez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098048PROM',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYBH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'digomez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098085BCAESP',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMCZP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mcorrea'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '09805CORDIN',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMEWT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yarismendi'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'PASANTEINCE',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFHY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'afagundez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'SERVMED001',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJERKKZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'josmlopez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CSALARIAL2',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJBPHER',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CSALARAIAL1',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMCDM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'madreyes'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CAJAHORR02',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMCXA',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yofernandez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098337ACCIO',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYFF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yvidal'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095148CAI',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFGG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dmondragon'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095548-ADMAGCIA',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFHM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jesgonzalez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095090ADMAGE',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFGA',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mtrillo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095028ADAGCIAS',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHCVHL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'pzacarias'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098366GERDINV',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYBK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095840TESOR',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHYD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'cblanco'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098558BCAMULTI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYTN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'vherrera'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A154097SECFIN',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHYK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lvargas'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098156GTESP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 6,
        memoriaRamModules: [2, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYVE',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'anarodriguez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095264RRHH',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHCVVP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ybelandria'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'APRZBCACOM01',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJBPHBW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'nanchundia'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095140-IMPUESTO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFBP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'josfernandez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'MERCADEO-18',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXYM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mlinan'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098407PROYSE',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMTGCD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'egcontreras'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098089PROYSER',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJBPHCZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jobriceno'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098197COORPROD',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHYX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dbarrios'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098233MEDPA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYTF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'asdiaz'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098440RECUPERNS',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 2,
        memoriaRamModules: [2, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMEPD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jmarrero'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'ADMDEINMU1',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHGD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jflores'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'ALMACYSERGE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHERZB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'asagodino'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098178UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 12,
        memoriaRamModules: [8, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHNH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'asalazar'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098330VPCTRLAC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHERZH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'sguerra'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098300COMPRAS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHPD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lagomez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098305GEALMPRO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYMP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'MACAMPOS'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'GEST-ACTIVOS',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMEMX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'hpineda'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095571RECUPERAC',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFFH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jhrodriguez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CTRLACTIVOS01',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['160'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYRY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'hmunoz'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'TRANSP01',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHZH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dbelisario'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098520CPRESUP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['320'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMETZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'BACK-OFFICE',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLXZT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yavelasquez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095918AJURIDICO',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYBT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jhidalgo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'OFICINTA-01',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHKA',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'krperez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095290BCKOFF',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMETM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yfuenmayor'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A050151GNEGCIOS',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFKZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'rguevara'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '154016ESPNEG',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 2,
        memoriaRamModules: [2, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMEWW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jmejias'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095660BCAPRI',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMETP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dbetancourt'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '15410EJECTV',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 2,
        memoriaRamModules: [2, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFEV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'krodriguez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '09828PROMOT',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 2,
        memoriaRamModules: [2, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHZK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'glameda'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098524GBANCAESP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHERAC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'rmoros'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098370GESFRA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMHWZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dlopez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'ASISTVPSEG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMLYEH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gleon'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '17708COORD',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 2,
        memoriaRamModules: [2, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHDHZC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'amendez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'ADMINAGENCIAS01',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJBPHEF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dmanrrique'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'ADMINAGEN',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 2,
        memoriaRamModules: [2, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHERAB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ricastro'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098368GERDINV',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJMMFED',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'afarias'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '154037BCAMULT',
        processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHERDK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'Marcgutierrez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098063BANCORP',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJBPHKC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098348VPBC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ08H4ZJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M720q").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gaalvarez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095025ADAGCS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ08H4T9',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M720q").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ymoscoso'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '09846CJROS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ08H7ZM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M720q").id, // falta
        employeeId: null, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098043CJEROS',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ08H52L',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M720q").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'micontreras'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '05001CJERO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ08H4XD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M720q").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'eguerrero'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'RRHHASIST',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ08H4W4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M720q").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'juntasbnc'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'SALACP11',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXKDMK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'carllopez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098356FIDEICO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2130 CPU @ 3.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ55A35',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lejimenez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CPRSUPT098521',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ38AKF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jlares'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095001-CAI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ38XEK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lfagundez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095008GCIAADM',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXKDTR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jepina'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095012GCIAADM',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2130 CPU @ 3.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXKCTR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gurodriguez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'NEGOCIOSP08',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2130 CPU @ 3.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ39M15',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'Tcamacho'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098239MERCA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ017EB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mihenriquez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098303PROCALM',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJTYGVR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lmujica'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098310COBRANZA',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJTYGVN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === '124S010'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'SWIFT',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXDLHE',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'pescobar'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098221CMPNSCN',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJTYPEF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gjusto'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'SEGFIS001',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ13K17',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'GABGARCIA'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'AUDITEXT01',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXDHYX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gvalles'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '001056ADMIN-AG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJTYPEP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'gcolmenares'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '0010048INVSTIG',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXKDRY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'jgarrido'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '098166ASISTEJEC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i3-2130 CPU @ 3.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZFX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'snoriega'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098247MERCADE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZH8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dmora'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'MERCADEO1',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZEB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'fegomez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098356UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZGN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'kagonzalez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095844SDAMER',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZN5',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'kaochoa'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'MERCADEO01',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZHB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'isusarret'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095179CONYSER',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00XUDU',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'nguerrero'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098306GCIABIN',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZHH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'bbrazon'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095002-CAI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZDR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'lmartinez'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DESKTOP-0QCVKRK',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZGC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'dmedina'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '095031BACKOFFIC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00XUDF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'aiarias'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'DIGITALLIOFC',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 6,
        memoriaRamModules: [2, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ00RZF7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'isantos'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A095003CAI',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJALTRP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M81").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'frguzman'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098302GCIALPR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-2400 CPU @ 3.10GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [4, 4, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJHFBCM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M81").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'Lalarcon'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098171PLANPRE',
        processorId: processors.find(process => 'Intel(R) Core(TM) i7-2600 CPU @ 3.40GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 6,
        memoriaRamModules: [4, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJXGLEC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M82").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'snoriega'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098256MERCADEO',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [2, 2, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ03JPQB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M83").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'ymorales'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'RRHHFORM001',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 10,
        memoriaRamModules: [4, 2, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ03JPPE',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M83").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yfarias'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098061UAIR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 16,
        memoriaRamModules: [8, 4, 4, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['1000'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ03JPNV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M83").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'mtoro'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '05040PRMTR',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ03JPPD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M83").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'smerlo'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'A098102PLAMAY',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8, 0, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
    {
        serial: 'MJ03JPP6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M83").id, // falta
        employeeId: employees.find(employee => employee.username.toLowerCase() === 'yvera'.toLowerCase()).id, // falta
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: '154140BCPRIV',
        processorId: processors.find(process => 'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [2, 2, 0, 0],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['500'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['HDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 7 Professional'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32 bits'])[0].id,
        macAddress: null,
        ipAddress: ''
    },
]

module.export = { torreElRosal }