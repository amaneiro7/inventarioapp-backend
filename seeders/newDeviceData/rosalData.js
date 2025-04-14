const { randomUUID } = require('node:crypto')
const { hddCapacitiesName, hddCapacities } = require("../DiscoDuro/hddCapacities");
const { hddTypeName, hddTypes } = require("../DiscoDuro/hddType");
const { categoriesData, categoryNames } = require("./allCategory");
const { brandOnlyName, brandsData } = require("./brand");
const { modelComputer } = require("./modelComputer");
const { operatingSystem, osName } = require("./operatingSystem");
const { operatingSystemArq, osArqName } = require("./operatingSystemArq");
const { processors } = require("./processors");
//const { employees } = require("./allUsers");
// const { genericsUsers } = require("../employee/usuariosGenericos");

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
        ipAddress: '10.225.3.99'
    },
    {
        serial: 'BG322S21010310',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Azulle']).id,
        modelId: modelComputer.find(processor => processor.name === "BYTE4").id, // falta        
        employeeId: 'juntasbnc'.toLowerCase(),
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
        ipAddress: '10.225.4.120'
    },
    {
        serial: null,
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
        modelId: modelComputer.find(processor => processor.name === "G41D3C").id, // falta        
        employeeId: 'egcontreras'.toLowerCase(),
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
        ipAddress: '10.225.2.21'
    },
    {
        serial: null,
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
        modelId: modelComputer.find(processor => processor.name === "G41D3C").id, // falta        
        employeeId: 'dmedina'.toLowerCase(),
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
        ipAddress: '10.225.4.198'
    },
    {
        serial: null,
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
        modelId: modelComputer.find(processor => processor.name === "H61MLV").id, // falta        
        employeeId: 'recepcion'.toLowerCase(),
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
        ipAddress: '10.225.2.167'
    },
    {
        serial: 'MXL4391LV8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP 200 G1 MT").id, // falta        
        employeeId: 'anggutierrez'.toLowerCase(),
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
        ipAddress: '10.225.2.171'
    },
    {
        serial: 'MXL4391LVM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP 200 G1 MT").id, // falta        
        employeeId: 'hmarquina'.toLowerCase(),
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
        ipAddress: '10.225.3.61'
    },
    {
        serial: '8CC14406T0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP All-in-One 24-df0xxx").id, // falta        
        employeeId: 'calvins'.toLowerCase(),
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CONSOLABNC01',
        processorId: processors.find(process => 'AMD Athlon Silver 3050U with Radeon Graphics'.includes(process.number_model)).id,
        memoryRamCapacity: 4,
        memoriaRamModules: [4],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: '10.225.1.58'
    },
    {
        serial: '8CC0221PCJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP All-in-One 24-df0xxx").id, // falta        
        employeeId: 'saituser'.toLowerCase(),
        locationId: '0fb519bb-efa9-4c01-a2fb-18f5e51812a3', // El Rosal
        observation: '',
        computerName: 'CONSOLABNC02',
        processorId: processors.find(process => 'AMD Ryzen 3 3250U with Radeon Graphics'.includes(process.number_model)).id,
        memoryRamCapacity: 8,
        memoriaRamModules: [8],
        hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName['250'])[0].id,
        hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName['SDD'])[0].id,
        operatingSystemId: operatingSystem.filter(os => os.name === osName['Microsoft Windows 10 Pro'])[0].id,
        operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64 bits'])[0].id,
        macAddress: null,
        ipAddress: '10.225.1.60'
    },
    {
        serial: 'MXL10208MP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'gbarreto'.toLowerCase(),
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
        ipAddress: '10.225.2.203'
    },
    {
        serial: 'MXJ945011G',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'cagraz'.toLowerCase(),
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
        ipAddress: '10.225.2.65'
    },
    {
        serial: 'MXL051088T',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'mcardenas'.toLowerCase(),
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
        ipAddress: '10.225.2.115'
    },
    {
        serial: 'MXL04309W4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'cabrito'.toLowerCase(),
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
        ipAddress: '10.225.2.158'
    },
    {
        serial: 'MXL051088D',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'lmontserratt'.toLowerCase(),
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
        ipAddress: '10.225.3.215'
    },
    {
        serial: 'MXJ94709ZS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'yparucho'.toLowerCase(),
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
        ipAddress: '10.225.4.80'
    },
    {
        serial: 'MXJ00700LF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'DALCALA'.toLowerCase(),
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
        ipAddress: '10.225.4.137'
    },
    {
        serial: 'MXL04309XF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'acarrasquero'.toLowerCase(),
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
        ipAddress: '10.225.5.91'
    },
    {
        serial: 'MXJ00700GT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'Raltuna'.toLowerCase(),
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
        ipAddress: '10.225.5.95'
    },
    {
        serial: 'MXJ947086S',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'alperez'.toLowerCase(),
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
        ipAddress: '10.225.2.119'
    },
    {
        serial: 'MXJ00601M7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'lsantiago'.toLowerCase(),
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
        ipAddress: '10.225.3.63'
    },
    {
        serial: 'MXJ94500ZT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'bbompart'.toLowerCase(),
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
        ipAddress: '10.225.3.122'
    },
    {
        serial: 'MXJ00609H5',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'iromero'.toLowerCase(),
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
        ipAddress: '10.225.3.125'
    },
    {
        serial: 'MXL0510888',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'jsanz'.toLowerCase(),
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
        ipAddress: '10.225.3.131'
    },
    {
        serial: 'MXJ9470877',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'jzamora'.toLowerCase(),
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
        ipAddress: '10.225.3.187'
    },
    {
        serial: 'MXJ00609LG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'Tperez'.toLowerCase(),
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
        ipAddress: '10.225.4.160'
    },
    {
        serial: 'MXJ00700GN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'STGUERRA'.toLowerCase(),
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
        ipAddress: '10.225.4.41'
    },
    {
        serial: 'MXJ00609M0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'FREY'.toLowerCase(),
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
        ipAddress: '10.225.4.109'
    },
    {
        serial: 'MXJ00501RZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'jbustamante'.toLowerCase(),
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
        ipAddress: '10.225.4.131'
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
        ipAddress: '10.225.3.193'
    },
    {
        serial: 'MXJ947086M',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'luperdomo'.toLowerCase(),
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
        ipAddress: '10.225.7.16'
    },
    {
        serial: 'MXL051087V',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'wjaimes'.toLowerCase(),
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
        ipAddress: '10.225.8.75'
    },
    {
        serial: 'MXJ00601JT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'bgaldona'.toLowerCase(),
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
        ipAddress: '10.225.8.24'
    },
    {
        serial: 'MXL0430B0L',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6000 Pro SFF PC").id, // falta        
        employeeId: 'nolivares'.toLowerCase(),
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
        ipAddress: '10.225.8.74'
    },
    {
        serial: 'MXL1390T8R',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6200 Pro SFF PC").id, // falta        
        employeeId: 'jovelasquez'.toLowerCase(),
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
        ipAddress: '10.225.3.136'
    },
    {
        serial: 'MXL1390T4N',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6200 Pro SFF PC").id, // falta        
        employeeId: 'cprieto'.toLowerCase(),
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
        ipAddress: '10.225.5.210'
    },
    {
        serial: 'MXL1390RR3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 6200 Pro SFF PC").id, // falta        
        employeeId: 'Rpoleo'.toLowerCase(),
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
        ipAddress: '10.225.8.206'
    },
    {
        serial: 'MXL0260ZD9',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 8000 Elite SFF").id, // falta        
        employeeId: 'lvalles'.toLowerCase(),
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
        ipAddress: '10.225.4.188'
    },
    {
        serial: 'MXL02610KW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq 8000 Elite SFF").id, // falta        
        employeeId: 'cangarita'.toLowerCase(),
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
        ipAddress: '10.225.2.127'
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
        ipAddress: '10.225.6.111'
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
        ipAddress: '10.225.4.23'
    },
    {
        serial: 'MXJ90607J3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'amagallanes'.toLowerCase(),
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
        ipAddress: '10.225.4.136'
    },
    {
        serial: 'MXJ90701MC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'androdriguez'.toLowerCase(),
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
        ipAddress: '10.225.6.112'
    },
    {
        serial: 'MXJ90607KB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'josmlopez'.toLowerCase(),
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
        ipAddress: '10.225.5.31'
    },
    {
        serial: 'MXJ906079V',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'ncarrasquel'.toLowerCase(),
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
        ipAddress: '10.225.2.211'
    },
    {
        serial: 'MXJ90701HS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'rofernandez'.toLowerCase(),
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
        ipAddress: '10.225.6.110'
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
        ipAddress: '10.225.8.27'
    },
    {
        serial: 'MXJ90607SJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'sguerra'.toLowerCase(),
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
        ipAddress: '10.225.3.228'
    },
    {
        serial: 'MXJ90607XH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'yuseche'.toLowerCase(),
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
        ipAddress: '10.225.5.205'
    },
    {
        serial: 'MXJ906079D',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'cmata'.toLowerCase(),
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
        ipAddress: '10.225.6.28'
    },
    {
        serial: 'MXJ90607LN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'cablanco'.toLowerCase(),
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
        ipAddress: '10.225.2.206'
    },
    {
        serial: 'MXJ907035T',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'iagro'.toLowerCase(),
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
        ipAddress: '10.225.8.201'
    },
    {
        serial: 'MXJ90607JN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'jehernandez'.toLowerCase(),
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
        ipAddress: '10.225.6.29'
    },
    {
        serial: 'MXJ90607NV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'yeramirez'.toLowerCase(),
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
        ipAddress: '10.225.6.95'
    },
    {
        serial: 'MXJ90607W2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'ogonzalez'.toLowerCase(),
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
        ipAddress: '10.225.4.201'
    },
    {
        serial: 'MXJ90701FW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'jsouquett'.toLowerCase(),
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
        ipAddress: '10.225.8.50'
    },
    {
        serial: 'MXJ90607J2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'ocordova'.toLowerCase(),
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
        ipAddress: '10.225.8.62'
    },
    {
        serial: 'MXJ90607FH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc5800 Small Form Factor").id, // falta        
        employeeId: 'mpalencia'.toLowerCase(),
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
        ipAddress: '10.225.5.126'
    },
    {
        serial: 'MXJ83209P4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq dc7800p Small Form Factor").id, // falta        
        employeeId: 'mifernandez'.toLowerCase(),
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
        ipAddress: '10.225.3.95'
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
        ipAddress: '10.225.3.202'
    },
    {
        serial: 'MXL4020TPL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Elite 8300 SFF").id, // falta        
        employeeId: 'hgonzalez'.toLowerCase(),
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
        ipAddress: '10.225.4.21'
    },
    {
        serial: 'MXL4020TQC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Elite 8300 SFF").id, // falta        
        employeeId: 'marigutierrez'.toLowerCase(),
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
        ipAddress: '10.225.5.97'
    },
    {
        serial: 'MXL4020SMH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Elite 8300 SFF").id, // falta        
        employeeId: 'rrangel'.toLowerCase(),
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
        ipAddress: '10.225.6.14'
    },
    {
        serial: 'MXL4020TR4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Elite 8300 SFF").id, // falta        
        employeeId: 'ecarvajal'.toLowerCase(),
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
        ipAddress: '10.225.8.122'
    },
    {
        serial: 'MXL4020TM1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Elite 8300 SFF").id, // falta        
        employeeId: 'ypena'.toLowerCase(),
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
        ipAddress: '10.225.6.74'
    },
    {
        serial: 'MXL333293Y',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 4300 SFF PC").id, // falta        
        employeeId: 'tindriago'.toLowerCase(),
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
        ipAddress: '10.225.5.138'
    },
    {
        serial: 'MXL31817ZW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'roperez'.toLowerCase(),
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
        ipAddress: '10.225.2.201'
    },
    {
        serial: 'MXL3201WNY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'mamolina'.toLowerCase(),
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
        ipAddress: '10.225.2.63'
    },
    {
        serial: 'MXL3201W1H',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'alopez'.toLowerCase(),
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
        ipAddress: '10.225.2.74'
    },
    {
        serial: 'MXL3180CS3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'joscastillo'.toLowerCase(),
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
        ipAddress: '10.225.2.108'
    },
    {
        serial: 'MXL3201WP0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'acarballo'.toLowerCase(),
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
        ipAddress: '10.225.2.116'
    },
    {
        serial: 'MXL31809W2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'oconde'.toLowerCase(),
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
        ipAddress: '10.225.2.150'
    },
    {
        serial: 'MXL31600JY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'btellechea'.toLowerCase(),
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
        ipAddress: '10.225.2.157'
    },
    {
        serial: 'MXL31817JJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'kpabon'.toLowerCase(),
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
        ipAddress: '10.225.3.130'
    },
    {
        serial: 'MXL318180C',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'ltapia'.toLowerCase(),
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
        ipAddress: '10.225.2.109'
    },
    {
        serial: 'MXL3181818',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'nmendoza'.toLowerCase(),
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
        ipAddress: '10.225.3.132'
    },
    {
        serial: 'MXL31817ZM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'edelgado'.toLowerCase(),
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
        ipAddress: '10.225.3.133'
    },
    {
        serial: 'MXL31817R8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'phurtado'.toLowerCase(),
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
        ipAddress: '10.225.3.137'
    },
    {
        serial: 'MXL3201T0B',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'clonga'.toLowerCase(),
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
        ipAddress: '10.225.3.138'
    },
    {
        serial: 'MXL31600HR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'jparada'.toLowerCase(),
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
        ipAddress: '10.225.3.145'
    },
    {
        serial: 'MXL31817HW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'juarodriguez'.toLowerCase(),
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
        ipAddress: '10.225.3.148'
    },
    {
        serial: 'MXL3201W18',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'mespana'.toLowerCase(),
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
        ipAddress: '10.225.3.151'
    },
    {
        serial: 'MXL3201W24',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'aarenas'.toLowerCase(),
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
        ipAddress: '10.225.3.200'
    },
    {
        serial: 'MXL3201W0V',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'tbriceno'.toLowerCase(),
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
        ipAddress: '10.225.4.91'
    },
    {
        serial: 'MXL3201T02',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'dcorona'.toLowerCase(),
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
        ipAddress: '10.225.6.89'
    },
    {
        serial: 'MXL31809TP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'amendoza'.toLowerCase(),
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
        ipAddress: '10.225.2.170'
    },
    {
        serial: 'MXL3201T13',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'lrosas'.toLowerCase(),
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
        ipAddress: '10.225.6.91'
    },
    {
        serial: 'MXL3201W39',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'ghernandez'.toLowerCase(),
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
        ipAddress: '10.225.6.93'
    },
    {
        serial: 'MXL3151VKT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'yguzman'.toLowerCase(),
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
        ipAddress: '10.225.6.100'
    },
    {
        serial: 'MXL3201W57',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'gmotta'.toLowerCase(),
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
        ipAddress: '10.225.8.73'
    },
    {
        serial: 'MXL31817YS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'mespinoza'.toLowerCase(),
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
        ipAddress: '10.225.3.62'
    },
    {
        serial: 'MXL3181802',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'pperez'.toLowerCase(),
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
        ipAddress: '10.225.4.83'
    },
    {
        serial: 'MXL31600B8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'Daraque'.toLowerCase(),
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
        ipAddress: '10.225.4.115'
    },
    {
        serial: 'MXL3201W1Q',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'ypedrozo'.toLowerCase(),
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
        ipAddress: '10.225.2.68'
    },
    {
        serial: 'MXL31817JM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'saguilarte'.toLowerCase(),
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
        ipAddress: '10.225.5.141'
    },
    {
        serial: 'MXL3201W0P',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'fojeda'.toLowerCase(),
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
        ipAddress: '10.225.3.160'
    },
    {
        serial: 'MXL31600CD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'scortes'.toLowerCase(),
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
        ipAddress: '10.225.3.128'
    },
    {
        serial: 'MXL3201WND',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'chgonzalez'.toLowerCase(),
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
        ipAddress: '10.225.6.206'
    },
    {
        serial: 'MXL3201T0D',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'sroque'.toLowerCase(),
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
        ipAddress: '10.225.5.98'
    },
    {
        serial: 'MXL31809VV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'AROSALES'.toLowerCase(),
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
        ipAddress: '10.225.5.123'
    },
    {
        serial: 'MXL3201WNZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'jmujica'.toLowerCase(),
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
        ipAddress: '10.225.6.48'
    },
    {
        serial: 'MXL3181837',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'marpalacios'.toLowerCase(),
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
        ipAddress: '10.225.6.88'
    },
    {
        serial: 'MXL31817PV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'jediaz'.toLowerCase(),
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
        ipAddress: '10.225.6.184'
    },
    {
        serial: 'MXL31817QV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'sortiz'.toLowerCase(),
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
        ipAddress: '10.225.8.111'
    },
    {
        serial: 'MXL3201W4V',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Compaq Pro 6300 SFF").id, // falta        
        employeeId: 'mcaprasio'.toLowerCase(),
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
        ipAddress: '10.225.8.133'
    },
    {
        serial: '5CG2210X20',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteBook 840 G8 Notebook PC").id, // falta        
        employeeId: 'lzerpa'.toLowerCase(),
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
        ipAddress: '10.225.5.11'
    },
    {
        serial: '5CG12123MG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteBook 850 G7 Notebook PC").id, // falta        
        employeeId: 'gaalvarez'.toLowerCase(),
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
        ipAddress: '10.225.6.174'
    },
    {
        serial: '5CG12123MF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteBook 850 G7 Notebook PC").id, // falta        
        employeeId: 'ocecchini'.toLowerCase(),
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
        ipAddress: '10.225.8.66'
    },
    {
        serial: '5CG12123LP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteBook 850 G7 Notebook PC").id, // falta        
        employeeId: 'abriceno'.toLowerCase(),
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
        ipAddress: '10.225.8.59'
    },
    {
        serial: '5CG12123MC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteBook 850 G7 Notebook PC").id, // falta        
        employeeId: 'caperez'.toLowerCase(),
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
        ipAddress: '10.225.8.136'
    },
    {
        serial: '5CG950553C',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteBook x360 830 G6").id, // falta        
        employeeId: 'jonperez'.toLowerCase(),
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
        ipAddress: '10.225.2.51'
    },
    {
        serial: 'MXL6031TBX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G1 SFF").id, // falta        
        employeeId: 'fborges'.toLowerCase(),
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
        ipAddress: '10.225.3.113'
    },
    {
        serial: 'MXL5501YRM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G1 SFF").id, // falta        
        employeeId: 'derodriguez'.toLowerCase(),
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
        ipAddress: '10.225.4.78'
    },
    {
        serial: 'MXL9092Q8L',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W").id, // falta        
        employeeId: 'troldan'.toLowerCase(),
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
        ipAddress: '10.225.3.21'
    },
    {
        serial: '8CC8391HSP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W").id, // falta        
        employeeId: 'lmonsalve'.toLowerCase(),
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
        ipAddress: '10.225.3.196'
    },
    {
        serial: 'MXL9242DX0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta        
        employeeId: 'loliveros'.toLowerCase(),
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
        ipAddress: '10.225.3.182'
    },
    {
        serial: 'MXL85215JF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta        
        employeeId: 'msoarez'.toLowerCase(),
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
        ipAddress: '10.225.6.15'
    },
    {
        serial: 'MXL9233SSC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta        
        employeeId: 'mzerpa'.toLowerCase(),
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
        ipAddress: '10.225.3.185'
    },
    {
        serial: 'MXL8503BR8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta        
        employeeId: 'frperez'.toLowerCase(),
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
        ipAddress: '10.225.4.96'
    },
    {
        serial: 'MXL8502WTC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta        
        employeeId: 'cmoreno'.toLowerCase(),
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
        ipAddress: '10.225.5.56'
    },
    {
        serial: 'MXL9010TTX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta        
        employeeId: 'yrojas'.toLowerCase(),
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
        ipAddress: '10.225.6.18'
    },
    {
        serial: 'MXL85211B6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta        
        employeeId: 'aperez'.toLowerCase(),
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
        ipAddress: '10.225.6.21'
    },
    {
        serial: 'MXL8512GZW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta        
        employeeId: 'lelopez'.toLowerCase(),
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
        ipAddress: '10.225.6.22'
    },
    {
        serial: 'MXL9092Q7Q',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 35W (TAA)").id, // falta        
        employeeId: 'hapereira'.toLowerCase(),
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
        ipAddress: '10.225.6.31'
    },
    {
        serial: 'MXL0112ND0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 DM 65W (TAA)").id, // falta        
        employeeId: 'wmontilla'.toLowerCase(),
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
        ipAddress: '10.225.6.170'
    },
    {
        serial: 'MXL9161ZV7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 SFF").id, // falta        
        employeeId: 'gamarquez'.toLowerCase(),
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
        ipAddress: '10.225.2.30'
    },
    {
        serial: 'MXL91432F1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 SFF").id, // falta        
        employeeId: 'juflores'.toLowerCase(),
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
        ipAddress: '10.225.2.42'
    },
    {
        serial: 'MXL9161ZW2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 SFF").id, // falta        
        employeeId: 'vlopez'.toLowerCase(),
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
        ipAddress: '10.225.2.106'
    },
    {
        serial: 'MXL9202436',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 SFF").id, // falta        
        employeeId: 'yuzcategui'.toLowerCase(),
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
        ipAddress: '10.225.2.110'
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
        ipAddress: '10.225.3.134'
    },
    {
        serial: 'MXL9161ZSY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP EliteDesk 800 G4 SFF").id, // falta        
        employeeId: 'hiscurpi'.toLowerCase(),
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
        ipAddress: '10.225.3.186'
    },
    {
        serial: '5CD147191J',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Laptop 15t-dy200").id, // falta        
        employeeId: 'mcabrera'.toLowerCase(),
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
        ipAddress: '10.225.2.190'
    },
    {
        serial: '5CD1471918',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Laptop 15t-dy200").id, // falta        
        employeeId: 'pdiaz'.toLowerCase(),
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
        ipAddress: '10.225.4.10'
    },
    {
        serial: '5CD2227C0V',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Pavilion Laptop 15t-eg000").id, // falta        
        employeeId: 'avelasquez'.toLowerCase(),
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
        ipAddress: '10.225.5.40'
    },
    {
        serial: 'MXL5260NM7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 400 G1 SFF").id, // falta        
        employeeId: 'tgonzalez'.toLowerCase(),
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
        ipAddress: '10.225.5.23'
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
        ipAddress: '10.225.6.168'
    },
    {
        serial: 'MXL5260NKL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 400 G1 SFF").id, // falta        
        employeeId: 'nramirez'.toLowerCase(),
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
        ipAddress: '10.225.3.227'
    },
    {
        serial: 'MXL5260NMM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 400 G1 SFF").id, // falta        
        employeeId: 'gcarabali'.toLowerCase(),
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
        ipAddress: '10.225.6.136'
    },
    {
        serial: 'MXL5260NJS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 400 G1 SFF").id, // falta        
        employeeId: 'ararias'.toLowerCase(),
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
        ipAddress: '10.225.6.165'
    },
    {
        serial: 'LECBQ0A8Y6G43L',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'arivero'.toLowerCase(),
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
        ipAddress: '10.225.3.181'
    },
    {
        serial: 'MXL41801B4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'jlopez'.toLowerCase(),
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
        ipAddress: '10.225.2.180'
    },
    {
        serial: 'MXL41804WS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'elameda'.toLowerCase(),
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
        ipAddress: '10.225.2.29'
    },
    {
        serial: 'MXL41801W8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'alperez'.toLowerCase(),
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
        ipAddress: '10.225.2.32'
    },
    {
        serial: 'MXL41801F6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'Abonilla'.toLowerCase(),
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
        ipAddress: '10.225.2.34'
    },
    {
        serial: 'MXL41806VT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'wangulo'.toLowerCase(),
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
        ipAddress: '10.225.2.38'
    },
    {
        serial: 'MXL41801BX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'mguere'.toLowerCase(),
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
        ipAddress: '10.225.2.39'
    },
    {
        serial: 'MXL41804X0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'pyepez'.toLowerCase(),
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
        ipAddress: '10.225.2.40'
    },
    {
        serial: 'MXL41801SH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'jeahernandez'.toLowerCase(),
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
        ipAddress: '10.225.2.48'
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
        ipAddress: '10.225.2.53'
    },
    {
        serial: 'MXL41801SL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'wrico'.toLowerCase(),
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
        ipAddress: '10.225.2.54'
    },
    {
        serial: 'MXL41806XW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'zmarron'.toLowerCase(),
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
        ipAddress: '10.225.2.55'
    },
    {
        serial: 'MXL41801V4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'geflores'.toLowerCase(),
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
        ipAddress: '10.225.2.137'
    },
    {
        serial: 'MXL41801DW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'nbrito'.toLowerCase(),
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
        ipAddress: '10.225.3.15'
    },
    {
        serial: 'MXL41806ZX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'dbelisario'.toLowerCase(),
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
        ipAddress: '10.225.3.16'
    },
    {
        serial: 'MXL41806YW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'lgil'.toLowerCase(),
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
        ipAddress: '10.225.3.19'
    },
    {
        serial: 'MXL41804W1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'blira'.toLowerCase(),
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
        ipAddress: '10.225.3.31'
    },
    {
        serial: 'MXL4180700',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'anagonzalez'.toLowerCase(),
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
        ipAddress: '10.225.3.60'
    },
    {
        serial: 'MXL41804X3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'aarguelles'.toLowerCase(),
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
        ipAddress: '10.225.3.110'
    },
    {
        serial: 'MXL41806VL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'jlucena'.toLowerCase(),
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
        ipAddress: '10.225.3.166'
    },
    {
        serial: 'MXL41806XQ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'ymarquez'.toLowerCase(),
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
        ipAddress: '10.225.3.174'
    },
    {
        serial: 'MXL41801TH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'JOSESPINOZA'.toLowerCase(),
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
        ipAddress: '10.225.3.175'
    },
    {
        serial: 'MXL41801GR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'asaez'.toLowerCase(),
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
        ipAddress: '10.225.3.178'
    },
    {
        serial: 'MXL41801R9',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'jpacheco'.toLowerCase(),
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
        ipAddress: '10.225.3.179'
    },
    {
        serial: 'MXL41801T0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'drosales'.toLowerCase(),
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
        ipAddress: '10.225.3.191'
    },
    {
        serial: 'MXL41801B6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'dmontilla'.toLowerCase(),
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
        ipAddress: '10.225.3.205'
    },
    {
        serial: 'MXL41801SB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'jpalma'.toLowerCase(),
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
        ipAddress: '10.225.4.8'
    },
    {
        serial: 'MXL41806WM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'mmelchiorre'.toLowerCase(),
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
        ipAddress: '10.225.4.11'
    },
    {
        serial: 'MXL41801CD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'msole'.toLowerCase(),
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
        ipAddress: '10.225.4.22'
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
        ipAddress: '10.225.4.71'
    },
    {
        serial: 'MXL41806VB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'yvergara'.toLowerCase(),
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
        ipAddress: '10.225.4.73'
    },
    {
        serial: 'MXL41801V3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'largonzalez'.toLowerCase(),
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
        ipAddress: '10.225.4.76'
    },
    {
        serial: 'MXL41801RF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'aescalante'.toLowerCase(),
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
        ipAddress: '10.225.4.79'
    },
    {
        serial: 'MXL41801VH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'aleguisamo'.toLowerCase(),
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
        ipAddress: '10.225.4.85'
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
        ipAddress: '10.225.4.88'
    },
    {
        serial: 'MXL41806WW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'dangarita'.toLowerCase(),
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
        ipAddress: '10.225.4.89'
    },
    {
        serial: 'MXL41801TW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'Vhuice'.toLowerCase(),
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
        ipAddress: '10.225.4.103'
    },
    {
        serial: 'MXL41806X5',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'hehernande'.toLowerCase(),
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
        ipAddress: '10.225.4.104'
    },
    {
        serial: 'MXL41806YK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'hbelfort'.toLowerCase(),
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
        ipAddress: '10.225.4.106'
    },
    {
        serial: 'MXL41801S1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'edreyes'.toLowerCase(),
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
        ipAddress: '10.225.4.147'
    },
    {
        serial: 'MXL41801R1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'klozada'.toLowerCase(),
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
        ipAddress: '10.225.5.20'
    },
    {
        serial: 'MXL41806WV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'josmlopez'.toLowerCase(),
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
        ipAddress: '10.225.5.93'
    },
    {
        serial: 'MXL41801V5',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'msanchez'.toLowerCase(),
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
        ipAddress: '10.225.5.120'
    },
    {
        serial: 'MXL41806XR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'ymarrero'.toLowerCase(),
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
        ipAddress: '10.225.5.125'
    },
    {
        serial: 'MXL41801G2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'ydaza'.toLowerCase(),
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
        ipAddress: '10.225.5.132'
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
        ipAddress: '10.225.6.25'
    },
    {
        serial: 'MXL41801B3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'johrodriguez'.toLowerCase(),
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
        ipAddress: '10.225.6.26'
    },
    {
        serial: 'MXL41806YT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'cperricone'.toLowerCase(),
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
        ipAddress: '10.225.6.92'
    },
    {
        serial: 'MXL41804TV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'gcontreras'.toLowerCase(),
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
        ipAddress: '10.225.6.169'
    },
    {
        serial: 'MXL41801SJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'asmoreno'.toLowerCase(),
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
        ipAddress: '10.225.6.179'
    },
    {
        serial: 'MXL41801BF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'angrodriguez'.toLowerCase(),
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
        ipAddress: '10.225.6.181'
    },
    {
        serial: 'MXL41804X7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'jguedez'.toLowerCase(),
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
        ipAddress: '10.225.6.207'
    },
    {
        serial: 'MXL41804XH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'jepacheco'.toLowerCase(),
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
        ipAddress: '10.225.8.55'
    },
    {
        serial: 'MXL41804XT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'mcala'.toLowerCase(),
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
        ipAddress: '10.225.8.34'
    },
    {
        serial: 'MXL41806W1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'edggonzalez'.toLowerCase(),
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
        ipAddress: '10.225.8.37'
    },
    {
        serial: 'MXL41801SK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'dcastillo'.toLowerCase(),
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
        ipAddress: '10.225.8.61'
    },
    {
        serial: 'MXL41804TK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'iandrade'.toLowerCase(),
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
        ipAddress: '10.225.8.53'
    },
    {
        serial: 'MXL41806X0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'lchirinos'.toLowerCase(),
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
        ipAddress: '10.225.8.17'
    },
    {
        serial: 'MXL41806VX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'mdegouveia'.toLowerCase(),
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
        ipAddress: '10.225.8.32'
    },
    {
        serial: 'MXL41801DX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'mgamarra'.toLowerCase(),
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
        ipAddress: '10.225.8.31'
    },
    {
        serial: 'MXL41801R0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'nortiz'.toLowerCase(),
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
        ipAddress: '10.225.8.39'
    },
    {
        serial: 'MXL41806VC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'dcolmenares'.toLowerCase(),
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
        ipAddress: '10.225.8.94'
    },
    {
        serial: 'MXL41804WG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'zrojas'.toLowerCase(),
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
        ipAddress: '10.225.8.45'
    },
    {
        serial: 'MXL41801FC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'ahurtado'.toLowerCase(),
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
        ipAddress: '10.225.8.41'
    },
    {
        serial: 'MXL41801GS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'mavendano'.toLowerCase(),
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
        ipAddress: '10.225.8.23'
    },
    {
        serial: 'MXL41806W8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'wbarat'.toLowerCase(),
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
        ipAddress: '10.225.8.44'
    },
    {
        serial: 'MXL41801B8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'mmujica'.toLowerCase(),
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
        ipAddress: '10.225.8.105'
    },
    {
        serial: 'MXL41804WM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'equevedo'.toLowerCase(),
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
        ipAddress: '10.225.4.152'
    },
    {
        serial: 'MXL41806Y9',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'ychirinos'.toLowerCase(),
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
        ipAddress: '10.225.4.153'
    },
    {
        serial: 'MXL41806X3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'edefreitas'.toLowerCase(),
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
        ipAddress: '10.225.4.154'
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
        ipAddress: '10.225.4.118'
    },
    {
        serial: 'MXL41804XG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'mvilla'.toLowerCase(),
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
        ipAddress: '10.225.5.19'
    },
    {
        serial: 'MXL41801CN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'jlopezcarmona'.toLowerCase(),
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
        ipAddress: '10.225.6.34'
    },
    {
        serial: 'MXL41806XL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'marnieves'.toLowerCase(),
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
        ipAddress: '10.225.6.36'
    },
    {
        serial: 'MXL41806YV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'aadelgado'.toLowerCase(),
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
        ipAddress: '10.225.6.49'
    },
    {
        serial: 'MXL41801S6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'jusilva'.toLowerCase(),
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
        ipAddress: '10.225.4.29'
    },
    {
        serial: 'MXL41801B5',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'flacruz'.toLowerCase(),
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
        ipAddress: '10.225.5.109'
    },
    {
        serial: 'MXL41806WQ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'ndelgado'.toLowerCase(),
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
        ipAddress: '10.225.6.42'
    },
    {
        serial: 'MXL41801W2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'vzambrano'.toLowerCase(),
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
        ipAddress: '10.225.8.202'
    },
    {
        serial: 'MXL41801RB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'yblanco'.toLowerCase(),
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
        ipAddress: '10.225.4.151'
    },
    {
        serial: 'MXL41801C0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'mabreu'.toLowerCase(),
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
        ipAddress: '10.225.6.212'
    },
    {
        serial: 'MXL41801W3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'vatienza'.toLowerCase(),
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
        ipAddress: '10.225.7.15'
    },
    {
        serial: 'MXL41806ZN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'gabgonzalez'.toLowerCase(),
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
        ipAddress: '10.225.5.15'
    },
    {
        serial: 'MXL41806YY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'yruggiero'.toLowerCase(),
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
        ipAddress: '10.225.3.90'
    },
    {
        serial: 'MXL41801CX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'josehrodriguez'.toLowerCase(),
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
        ipAddress: '10.225.5.48'
    },
    {
        serial: 'MXL41801VF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'rbello'.toLowerCase(),
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
        ipAddress: '10.225.2.216'
    },
    {
        serial: 'MXL41804V5',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'daraque'.toLowerCase(),
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
        ipAddress: '10.225.4.117'
    },
    {
        serial: 'MXL41801CZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'gemendoza'.toLowerCase(),
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
        ipAddress: '10.225.5.124'
    },
    {
        serial: 'MXL41806XY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'jesulopez'.toLowerCase(),
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
        ipAddress: '10.225.5.34'
    },
    {
        serial: 'MXL41801BR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'grivas'.toLowerCase(),
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
        ipAddress: '10.225.5.86'
    },
    {
        serial: 'MXL41806VG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'zestacio'.toLowerCase(),
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
        ipAddress: '10.225.3.23'
    },
    {
        serial: 'MXL41801TJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'vjoseph'.toLowerCase(),
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
        ipAddress: '10.225.2.207'
    },
    {
        serial: 'MXL41804VT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'daugello'.toLowerCase(),
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
        ipAddress: '10.225.2.220'
    },
    {
        serial: 'MXL41801DK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'romayo'.toLowerCase(),
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
        ipAddress: '10.225.2.225'
    },
    {
        serial: 'MXL41804WZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'lguerra'.toLowerCase(),
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
        ipAddress: '10.225.2.149'
    },
    {
        serial: 'MXL41801W7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'lquevedo'.toLowerCase(),
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
        ipAddress: '10.225.3.177'
    },
    {
        serial: 'MXL41801S2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'ffernandez'.toLowerCase(),
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
        ipAddress: '10.225.4.180'
    },
    {
        serial: 'MXL41801T2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'jbrinez'.toLowerCase(),
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
        ipAddress: '10.225.4.70'
    },
    {
        serial: 'MXL41801CQ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'jumendoza'.toLowerCase(),
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
        ipAddress: '10.225.4.95'
    },
    {
        serial: 'MXL41806Y2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'aabreu'.toLowerCase(),
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
        ipAddress: '10.225.5.133'
    },
    {
        serial: 'MXL41801GG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'marperez'.toLowerCase(),
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
        ipAddress: '10.225.5.135'
    },
    {
        serial: 'MXL41801CM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'mariadmendoza'.toLowerCase(),
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
        ipAddress: '10.225.6.44'
    },
    {
        serial: 'MXL41801FY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'lbermudez'.toLowerCase(),
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
        ipAddress: '10.225.8.35'
    },
    {
        serial: 'MXL41806XF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'eserrano'.toLowerCase(),
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
        ipAddress: '10.225.8.38'
    },
    {
        serial: 'MXL41806WN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'privera'.toLowerCase(),
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
        ipAddress: '10.225.8.64'
    },
    {
        serial: 'MXL41806VZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'Torellana'.toLowerCase(),
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
        ipAddress: '10.225.3.97'
    },
    {
        serial: 'MXL41804W3',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'HDELGADO'.toLowerCase(),
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
        ipAddress: '10.225.3.98'
    },
    {
        serial: 'MXL41801WC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'ecabrera'.toLowerCase(),
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
        ipAddress: '10.225.5.10'
    },
    {
        serial: 'MXL41801VY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'fegonzalez'.toLowerCase(),
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
        ipAddress: '10.225.5.44'
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
        ipAddress: '10.225.5.49'
    },
    {
        serial: 'MXL41801DY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'ANZAMBRANO'.toLowerCase(),
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
        ipAddress: '10.225.5.53'
    },
    {
        serial: 'MXL41804XF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'mavila'.toLowerCase(),
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
        ipAddress: '10.225.5.55'
    },
    {
        serial: 'MXL41804XY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'rmejias'.toLowerCase(),
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
        ipAddress: '10.225.5.57'
    },
    {
        serial: 'MXL41804T7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'vtoledo'.toLowerCase(),
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
        ipAddress: '10.225.5.58'
    },
    {
        serial: 'MXL41806YD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'anjimenez'.toLowerCase(),
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
        ipAddress: '10.225.5.64'
    },
    {
        serial: 'MXL41804VL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'kcastro'.toLowerCase(),
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
        ipAddress: '10.225.5.66'
    },
    {
        serial: 'MXL41801BP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'gflores'.toLowerCase(),
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
        ipAddress: '10.225.5.68'
    },
    {
        serial: 'MXL41804VW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'JEPEREZ'.toLowerCase(),
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
        ipAddress: '10.225.5.69'
    },
    {
        serial: 'MXL41806XB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'pchiesa'.toLowerCase(),
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
        ipAddress: '10.225.5.70'
    },
    {
        serial: 'MXL41801TS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'riramirez'.toLowerCase(),
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
        ipAddress: '10.225.5.72'
    },
    {
        serial: 'MXL41804SX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'adrivero'.toLowerCase(),
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
        ipAddress: '10.225.5.76'
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
        ipAddress: '10.225.5.77'
    },
    {
        serial: 'MXL41804VB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'mpalacio'.toLowerCase(),
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
        ipAddress: '10.225.6.39'
    },
    {
        serial: 'MXL41801FQ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'jcarpio'.toLowerCase(),
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
        ipAddress: '10.225.6.162'
    },
    {
        serial: 'MXL41804VR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'cnoriega'.toLowerCase(),
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
        ipAddress: '10.225.3.22'
    },
    {
        serial: 'MXL41806X7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'mbencomo'.toLowerCase(),
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
        ipAddress: '10.225.6.127'
    },
    {
        serial: 'MXL41801D4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'JMEZA'.toLowerCase(),
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
        ipAddress: '10.225.3.163'
    },
    {
        serial: 'MXL41806YC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'cponce'.toLowerCase(),
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
        ipAddress: '10.225.3.164'
    },
    {
        serial: 'MXL41804TG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'abarrios'.toLowerCase(),
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
        ipAddress: '10.225.3.167'
    },
    {
        serial: 'MXL41801FG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'PBOVY'.toLowerCase(),
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
        ipAddress: '10.225.3.168'
    },
    {
        serial: 'MXL41801DC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'kapena'.toLowerCase(),
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
        ipAddress: '10.225.5.41'
    },
    {
        serial: 'MXL41801GT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'rhuerfano'.toLowerCase(),
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
        ipAddress: '10.225.5.42'
    },
    {
        serial: 'MXL41804WL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'lcordova'.toLowerCase(),
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
        ipAddress: '10.225.5.47'
    },
    {
        serial: 'MXL41801CY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'lcordova'.toLowerCase(),
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
        ipAddress: '10.225.5.50'
    },
    {
        serial: 'MXL41801ST',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'sinfante'.toLowerCase(),
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
        ipAddress: '10.225.5.51'
    },
    {
        serial: 'MXL41801V9',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'alonga'.toLowerCase(),
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
        ipAddress: '10.225.5.54'
    },
    {
        serial: 'MXL41804YC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'kquintero'.toLowerCase(),
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
        ipAddress: '10.225.5.62'
    },
    {
        serial: 'MXL41801DJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'lortuno'.toLowerCase(),
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
        ipAddress: '10.225.5.67'
    },
    {
        serial: 'MXL41804V0',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'rabreu'.toLowerCase(),
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
        ipAddress: '10.225.5.73'
    },
    {
        serial: 'MXL41801CS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'gagonzalez'.toLowerCase(),
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
        ipAddress: '10.225.5.87'
    },
    {
        serial: 'MXL41804TL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'dtrivino'.toLowerCase(),
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
        ipAddress: '10.225.6.37'
    },
    {
        serial: 'MXL41801T7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G1 SFF").id, // falta        
        employeeId: 'lgener'.toLowerCase(),
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
        ipAddress: '10.225.6.46'
    },
    {
        serial: 'MXL9341ZNP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G4 DM (TAA)").id, // falta        
        employeeId: 'mmagallanes'.toLowerCase(),
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
        ipAddress: '10.225.3.13'
    },
    {
        serial: 'MXL93443K7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G4 DM (TAA)").id, // falta        
        employeeId: 'itirado'.toLowerCase(),
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
        ipAddress: '10.225.3.183'
    },
    {
        serial: 'MXL92855ZZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G4 DM (TAA)").id, // falta        
        employeeId: 'mmarcano'.toLowerCase(),
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
        ipAddress: '10.225.6.19'
    },
    {
        serial: 'MXL9511PPB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ProDesk 600 G4 DM (TAA)").id, // falta        
        employeeId: 'yrebete'.toLowerCase(),
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
        ipAddress: '10.225.6.65'
    },
    {
        serial: 'MXL9472SVL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP Z4 G4 Workstation").id, // falta        
        employeeId: 'zfilgueira'.toLowerCase(),
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
        ipAddress: '10.225.5.37'
    },
    {
        serial: 'CND83267XL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ZBook 15 G3").id, // falta        
        employeeId: 'vrubino'.toLowerCase(),
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
        ipAddress: '10.225.8.56'
    },
    {
        serial: 'CND83267YK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ZBook 15 G3").id, // falta        
        employeeId: 'praices'.toLowerCase(),
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
        ipAddress: '10.225.8.85'
    },
    {
        serial: 'CND83267XW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ZBook 15 G3").id, // falta        
        employeeId: 'acamero'.toLowerCase(),
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
        ipAddress: '10.225.8.52'
    },
    {
        serial: 'CND83267XQ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ZBook 15 G3").id, // falta        
        employeeId: 'jblanco'.toLowerCase(),
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
        ipAddress: '10.225.8.101'
    },
    {
        serial: '5CG81264RP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ZBook 15u G5").id, // falta        
        employeeId: 'rasandoval'.toLowerCase(),
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
        ipAddress: '10.225.6.45'
    },
    {
        serial: '5CG9229TW2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
        modelId: modelComputer.find(processor => processor.name === "HP ZBook 15u G5").id, // falta        
        employeeId: 'kdelvillar'.toLowerCase(),
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
        ipAddress: '10.225.6.32'
    },
    {
        serial: 'OEM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['System manufacturer']).id,
        modelId: modelComputer.find(processor => processor.name === "OEM").id, // falta        
        employeeId: 'aperera'.toLowerCase(),
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
        ipAddress: '10.225.4.60'
    },
    {
        serial: 'MJ04HSWY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta        
        employeeId: 'wborges'.toLowerCase(),
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
        ipAddress: '10.225.4.189'
    },
    {
        serial: 'MJ04CSNU',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta        
        employeeId: 'jalinares'.toLowerCase(),
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
        ipAddress: '10.225.5.139'
    },
    {
        serial: 'MJ04CSP7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta        
        employeeId: 'anaortiz'.toLowerCase(),
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
        ipAddress: '10.225.6.41'
    },
    {
        serial: 'MJ04HSW6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta        
        employeeId: 'apapaterra'.toLowerCase(),
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
        ipAddress: '10.225.2.209'
    },
    {
        serial: 'MJ04HSW1',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta        
        employeeId: 'milucena'.toLowerCase(),
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
        ipAddress: '10.225.2.212'
    },
    {
        serial: 'MJ04HSUJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta        
        employeeId: 'rpuentes'.toLowerCase(),
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
        ipAddress: '10.225.3.210'
    },
    {
        serial: 'MJ04HSUV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta        
        employeeId: 'jemejias'.toLowerCase(),
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
        ipAddress: '10.225.4.75'
    },
    {
        serial: 'MJ04HSUZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta        
        employeeId: 'cperez'.toLowerCase(),
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
        ipAddress: '10.225.4.82'
    },
    {
        serial: 'MJ04CSQL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta        
        employeeId: 'eserpa'.toLowerCase(),
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
        ipAddress: '10.225.5.18'
    },
    {
        serial: 'MJ04CSNS',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta        
        employeeId: 'cconte'.toLowerCase(),
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
        ipAddress: '10.225.6.167'
    },
    {
        serial: 'MJ04HSWZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M700").id, // falta        
        employeeId: 'edcaraballo'.toLowerCase(),
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
        ipAddress: '10.225.6.177'
    },
    {
        serial: 'MJWEBD6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M70e").id, // falta        
        employeeId: 'vbarroso'.toLowerCase(),
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
        ipAddress: '10.225.5.88'
    },
    {
        serial: 'MJLKVL2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M70e").id, // falta        
        employeeId: 'yvillalobos'.toLowerCase(),
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
        ipAddress: '10.225.5.99'
    },
    {
        serial: 'MJLKHR2',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M70e").id, // falta        
        employeeId: 'nnoguera'.toLowerCase(),
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
        ipAddress: '10.225.8.137'
    },
    {
        serial: 'MJWDYP9',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M70e").id, // falta        
        employeeId: 'naaponte'.toLowerCase(),
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
        ipAddress: '10.225.6.23'
    },
    {
        serial: 'MJMLXXR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'gfagundez'.toLowerCase(),
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
        ipAddress: '10.225.2.77'
    },
    {
        serial: 'MJMLXZC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'cgodoy'.toLowerCase(),
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
        ipAddress: '10.225.2.205'
    },
    {
        serial: 'MJMMELL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'recepcion'.toLowerCase(),
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
        ipAddress: '10.225.2.168'
    },
    {
        serial: 'MJMLYNC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'frlopez'.toLowerCase(),
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
        ipAddress: '10.225.3.18'
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
        ipAddress: '10.225.3.105'
    },
    {
        serial: 'MJMLYDF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'cpinango'.toLowerCase(),
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
        ipAddress: '10.225.3.121'
    },
    {
        serial: 'MJERNFV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'cnoguera'.toLowerCase(),
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
        ipAddress: '10.225.3.142'
    },
    {
        serial: 'MJMLYLB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'amachado'.toLowerCase(),
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
        ipAddress: '10.225.4.207'
    },
    {
        serial: 'MJMLXXN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'dadiaz'.toLowerCase(),
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
        ipAddress: '10.225.4.170'
    },
    {
        serial: 'MJMMELY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'mmartinez'.toLowerCase(),
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
        ipAddress: '10.225.4.172'
    },
    {
        serial: 'MJMLYFW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'lchang'.toLowerCase(),
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
        ipAddress: '10.225.4.176'
    },
    {
        serial: 'MJMLXYD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'rhhernandez'.toLowerCase(),
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
        ipAddress: '10.225.4.178'
    },
    {
        serial: 'MJMLYEL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'jhidalgo'.toLowerCase(),
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
        ipAddress: '10.225.4.185'
    },
    {
        serial: 'MJMLYVC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'krperez'.toLowerCase(),
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
        ipAddress: '10.225.4.192'
    },
    {
        serial: 'MJMLXWX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'eguevara'.toLowerCase(),
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
        ipAddress: '10.225.4.15'
    },
    {
        serial: 'MJMLXYB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'yavila'.toLowerCase(),
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
        ipAddress: '10.225.4.18'
    },
    {
        serial: 'MJMMFGM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'ssalom'.toLowerCase(),
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
        ipAddress: '10.225.4.19'
    },
    {
        serial: 'MJMLXZP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'krodriguez'.toLowerCase(),
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
        ipAddress: '10.225.4.68'
    },
    {
        serial: 'MJMLYBH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'digomez'.toLowerCase(),
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
        ipAddress: '10.225.4.99'
    },
    {
        serial: 'MJMMCZP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'mcorrea'.toLowerCase(),
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
        ipAddress: '10.225.4.144'
    },
    {
        serial: 'MJMMEWT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'yarismendi'.toLowerCase(),
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
        ipAddress: '10.225.5.8'
    },
    {
        serial: 'MJMMFHY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'afagundez'.toLowerCase(),
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
        ipAddress: '10.225.5.24'
    },
    {
        serial: 'MJERKKZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'josmlopez'.toLowerCase(),
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
        ipAddress: '10.225.5.101'
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
        ipAddress: '10.225.5.102'
    },
    {
        serial: 'MJMMCDM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'madreyes'.toLowerCase(),
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
        ipAddress: '10.225.5.131'
    },
    {
        serial: 'MJMMCXA',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'yofernandez'.toLowerCase(),
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
        ipAddress: '10.225.6.17'
    },
    {
        serial: 'MJMLYFF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'yvidal'.toLowerCase(),
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
        ipAddress: '10.225.6.178'
    },
    {
        serial: 'MJMMFGG',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'dmondragon'.toLowerCase(),
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
        ipAddress: '10.225.6.180'
    },
    {
        serial: 'MJMMFHM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'jesgonzalez'.toLowerCase(),
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
        ipAddress: '10.225.6.186'
    },
    {
        serial: 'MJMMFGA',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'mtrillo'.toLowerCase(),
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
        ipAddress: '10.225.6.197'
    },
    {
        serial: 'MJHCVHL',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'pzacarias'.toLowerCase(),
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
        ipAddress: '10.225.6.210'
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
        ipAddress: '10.225.4.92'
    },
    {
        serial: 'MJHDHYD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'cblanco'.toLowerCase(),
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
        ipAddress: '10.225.8.48'
    },
    {
        serial: 'MJMLYTN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'vherrera'.toLowerCase(),
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
        ipAddress: '10.225.8.46'
    },
    {
        serial: 'MJHDHYK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'lvargas'.toLowerCase(),
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
        ipAddress: '10.225.8.112'
    },
    {
        serial: 'MJMLYVE',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'anarodriguez'.toLowerCase(),
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
        ipAddress: '10.225.5.14'
    },
    {
        serial: 'MJHCVVP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'ybelandria'.toLowerCase(),
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
        ipAddress: '10.225.8.215'
    },
    {
        serial: 'MJBPHBW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'nanchundia'.toLowerCase(),
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
        ipAddress: '10.225.5.43'
    },
    {
        serial: 'MJMMFBP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'josfernandez'.toLowerCase(),
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
        ipAddress: '10.225.2.57'
    },
    {
        serial: 'MJMLXYM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'mlinan'.toLowerCase(),
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
        ipAddress: '10.225.2.99'
    },
    {
        serial: 'MJMTGCD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'egcontreras'.toLowerCase(),
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
        ipAddress: '10.225.2.104'
    },
    {
        serial: 'MJBPHCZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'jobriceno'.toLowerCase(),
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
        ipAddress: '10.225.2.117'
    },
    {
        serial: 'MJHDHYX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'dbarrios'.toLowerCase(),
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
        ipAddress: '10.225.2.162'
    },
    {
        serial: 'MJMLYTF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'asdiaz'.toLowerCase(),
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
        ipAddress: '10.225.3.25'
    },
    {
        serial: 'MJMMEPD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'jmarrero'.toLowerCase(),
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
        ipAddress: '10.225.3.30'
    },
    {
        serial: 'MJHDHGD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'jflores'.toLowerCase(),
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
        ipAddress: '10.225.3.32'
    },
    {
        serial: 'MJHERZB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'asagodino'.toLowerCase(),
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
        ipAddress: '10.225.6.103'
    },
    {
        serial: 'MJHDHNH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'asalazar'.toLowerCase(),
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
        ipAddress: '10.225.3.127'
    },
    {
        serial: 'MJHERZH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'sguerra'.toLowerCase(),
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
        ipAddress: '10.225.3.143'
    },
    {
        serial: 'MJHDHPD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'lagomez'.toLowerCase(),
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
        ipAddress: '10.225.3.144'
    },
    {
        serial: 'MJMLYMP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'MACAMPOS'.toLowerCase(),
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
        ipAddress: '10.225.3.170'
    },
    {
        serial: 'MJMMEMX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'hpineda'.toLowerCase(),
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
        ipAddress: '10.225.3.176'
    },
    {
        serial: 'MJMMFFH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'jhrodriguez'.toLowerCase(),
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
        ipAddress: '10.225.3.213'
    },
    {
        serial: 'MJMLYRY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'hmunoz'.toLowerCase(),
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
        ipAddress: '10.225.3.225'
    },
    {
        serial: 'MJHDHZH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'dbelisario'.toLowerCase(),
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
        ipAddress: '10.225.3.229'
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
        ipAddress: '10.225.4.182'
    },
    {
        serial: 'MJMLXZT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'yavelasquez'.toLowerCase(),
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
        ipAddress: '10.225.4.183'
    },
    {
        serial: 'MJMLYBT',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'jhidalgo'.toLowerCase(),
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
        ipAddress: '10.225.4.190'
    },
    {
        serial: 'MJHDHKA',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'krperez'.toLowerCase(),
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
        ipAddress: '10.225.4.191'
    },
    {
        serial: 'MJMMETM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'yfuenmayor'.toLowerCase(),
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
        ipAddress: '10.225.4.7'
    },
    {
        serial: 'MJMMFKZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'rguevara'.toLowerCase(),
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
        ipAddress: '10.225.4.13'
    },
    {
        serial: 'MJMMEWW',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'jmejias'.toLowerCase(),
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
        ipAddress: '10.225.4.100'
    },
    {
        serial: 'MJMMETP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'dbetancourt'.toLowerCase(),
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
        ipAddress: '10.225.4.102'
    },
    {
        serial: 'MJMMFEV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'krodriguez'.toLowerCase(),
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
        ipAddress: '10.225.4.140'
    },
    {
        serial: 'MJHDHZK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'glameda'.toLowerCase(),
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
        ipAddress: '10.225.4.149'
    },
    {
        serial: 'MJHERAC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'rmoros'.toLowerCase(),
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
        ipAddress: '10.225.6.146'
    },
    {
        serial: 'MJMMHWZ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'dlopez'.toLowerCase(),
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
        ipAddress: '10.225.6.147'
    },
    {
        serial: 'MJMLYEH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'gleon'.toLowerCase(),
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
        ipAddress: '10.225.6.166'
    },
    {
        serial: 'MJHDHZC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'amendez'.toLowerCase(),
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
        ipAddress: '10.225.6.196'
    },
    {
        serial: 'MJBPHEF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'dmanrrique'.toLowerCase(),
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
        ipAddress: '10.225.6.198'
    },
    {
        serial: 'MJHERAB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'ricastro'.toLowerCase(),
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
        ipAddress: '10.225.6.211'
    },
    {
        serial: 'MJMMFED',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'afarias'.toLowerCase(),
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
        ipAddress: '10.225.8.20'
    },
    {
        serial: 'MJHERDK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M71e").id, // falta        
        employeeId: 'Marcgutierrez'.toLowerCase(),
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
        ipAddress: '10.225.8.79'
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
        ipAddress: '10.225.8.102'
    },
    {
        serial: 'MJ08H4ZJ',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M720q").id, // falta        
        employeeId: 'gaalvarez'.toLowerCase(),
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
        ipAddress: '10.225.6.175'
    },
    {
        serial: 'MJ08H4T9',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M720q").id, // falta        
        employeeId: 'ymoscoso'.toLowerCase(),
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
        ipAddress: '10.225.4.66'
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
        ipAddress: '10.225.4.67'
    },
    {
        serial: 'MJ08H52L',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M720q").id, // falta        
        employeeId: 'micontreras'.toLowerCase(),
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
        ipAddress: '10.225.4.114'
    },
    {
        serial: 'MJ08H4XD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M720q").id, // falta        
        employeeId: 'eguerrero'.toLowerCase(),
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
        ipAddress: '10.225.5.12'
    },
    {
        serial: 'MJ08H4W4',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M720q").id, // falta        
        employeeId: 'juntasbnc'.toLowerCase(),
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
        ipAddress: '10.225.8.140'
    },
    {
        serial: 'MJXKDMK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'carllopez'.toLowerCase(),
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
        ipAddress: '10.225.3.100'
    },
    {
        serial: 'MJ55A35',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'lejimenez'.toLowerCase(),
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
        ipAddress: '10.225.3.201'
    },
    {
        serial: 'MJ38AKF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'jlares'.toLowerCase(),
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
        ipAddress: '10.225.4.171'
    },
    {
        serial: 'MJ38XEK',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'lfagundez'.toLowerCase(),
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
        ipAddress: '10.225.4.173'
    },
    {
        serial: 'MJXKDTR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'jepina'.toLowerCase(),
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
        ipAddress: '10.225.4.174'
    },
    {
        serial: 'MJXKCTR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'gurodriguez'.toLowerCase(),
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
        ipAddress: '10.225.8.205'
    },
    {
        serial: 'MJ39M15',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'Tcamacho'.toLowerCase(),
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
        ipAddress: '10.225.2.83'
    },
    {
        serial: 'MJ017EB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'mihenriquez'.toLowerCase(),
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
        ipAddress: '10.225.3.152'
    },
    {
        serial: 'MJTYGVR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'lmujica'.toLowerCase(),
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
        ipAddress: '10.225.3.158'
    },
    {
        serial: 'MJTYGVN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: '124S010'.toLowerCase(),
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
        ipAddress: '10.225.4.205'
    },
    {
        serial: 'MJXDLHE',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'pescobar'.toLowerCase(),
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
        ipAddress: '10.225.4.116'
    },
    {
        serial: 'MJTYPEF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'gjusto'.toLowerCase(),
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
        ipAddress: '10.225.6.145'
    },
    {
        serial: 'MJ13K17',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'GABGARCIA'.toLowerCase(),
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
        ipAddress: '10.225.6.163'
    },
    {
        serial: 'MJXDHYX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'gvalles'.toLowerCase(),
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
        ipAddress: '10.225.6.183'
    },
    {
        serial: 'MJTYPEP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'gcolmenares'.toLowerCase(),
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
        ipAddress: '10.225.6.205'
    },
    {
        serial: 'MJXKDRY',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M72e").id, // falta        
        employeeId: 'jgarrido'.toLowerCase(),
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
        ipAddress: '10.225.8.78'
    },
    {
        serial: 'MJ00RZFX',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta        
        employeeId: 'snoriega'.toLowerCase(),
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
        ipAddress: '10.225.2.70'
    },
    {
        serial: 'MJ00RZH8',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta        
        employeeId: 'dmora'.toLowerCase(),
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
        ipAddress: '10.225.2.71'
    },
    {
        serial: 'MJ00RZEB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta        
        employeeId: 'fegomez'.toLowerCase(),
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
        ipAddress: '10.225.6.76'
    },
    {
        serial: 'MJ00RZGN',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta        
        employeeId: 'kagonzalez'.toLowerCase(),
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
        ipAddress: '10.225.2.72'
    },
    {
        serial: 'MJ00RZN5',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta        
        employeeId: 'kaochoa'.toLowerCase(),
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
        ipAddress: '10.225.2.172'
    },
    {
        serial: 'MJ00RZHB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta        
        employeeId: 'isusarret'.toLowerCase(),
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
        ipAddress: '10.225.3.124'
    },
    {
        serial: 'MJ00XUDU',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta        
        employeeId: 'nguerrero'.toLowerCase(),
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
        ipAddress: '10.225.3.147'
    },
    {
        serial: 'MJ00RZHH',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta        
        employeeId: 'bbrazon'.toLowerCase(),
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
        ipAddress: '10.225.4.175'
    },
    {
        serial: 'MJ00RZDR',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta        
        employeeId: 'lmartinez'.toLowerCase(),
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
        ipAddress: '10.225.4.181'
    },
    {
        serial: 'MJ00RZGC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta        
        employeeId: 'dmedina'.toLowerCase(),
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
        ipAddress: '10.225.4.186'
    },
    {
        serial: 'MJ00XUDF',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta        
        employeeId: 'aiarias'.toLowerCase(),
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
        ipAddress: '10.225.4.193'
    },
    {
        serial: 'MJ00RZF7',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M73z").id, // falta        
        employeeId: 'isantos'.toLowerCase(),
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
        ipAddress: '10.225.6.172'
    },
    {
        serial: 'MJALTRP',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M81").id, // falta        
        employeeId: 'frguzman'.toLowerCase(),
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
        ipAddress: '10.225.3.135'
    },
    {
        serial: 'MJHFBCM',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M81").id, // falta        
        employeeId: 'Lalarcon'.toLowerCase(),
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
        ipAddress: '10.225.3.206'
    },
    {
        serial: 'MJXGLEC',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M82").id, // falta        
        employeeId: 'snoriega'.toLowerCase(),
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
        ipAddress: '10.225.2.173'
    },
    {
        serial: 'MJ03JPQB',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M83").id, // falta        
        employeeId: 'ymorales'.toLowerCase(),
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
        ipAddress: '10.225.5.35'
    },
    {
        serial: 'MJ03JPPE',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M83").id, // falta        
        employeeId: 'yfarias'.toLowerCase(),
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
        ipAddress: '10.225.6.43'
    },
    {
        serial: 'MJ03JPNV',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M83").id, // falta        
        employeeId: 'mtoro'.toLowerCase(),
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
        ipAddress: '10.225.4.16'
    },
    {
        serial: 'MJ03JPPD',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M83").id, // falta        
        employeeId: 'smerlo'.toLowerCase(),
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
        ipAddress: '10.225.4.97'
    },
    {
        serial: 'MJ03JPP6',
        activo: null,
        statusId: 1, // En Uso
        categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
        brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
        modelId: modelComputer.find(processor => processor.name === "ThinkCentre M83").id, // falta        
        employeeId: 'yvera'.toLowerCase(),
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
        ipAddress: '10.225.4.5'
    },
]

module.exports = { torreElRosal }