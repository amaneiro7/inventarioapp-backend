const {almacenes: locations, almacenName} = require("../location/locations")
const HPLaptops = [
    {
        serial: '2CE2280KCH',
        activo: '214841',
        statusId: 2,
        categoryId: 3,
        brandId: "56a07947-0a09-488b-a597-64ef3e365c32",
        modelId: "206ecb35-1e43-47e2-85b4-f7b6405ab638",
        employeeId: null,
        locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id,
        observation: 'Bateria Dañada',
        computerName: null,
        processorId: "c7d515bf-7419-4ba4-a6fc-4ecfb786e6fd",
        memoryRamCapacity: 4,
        hardDriveCapacityId: 7,
        hardDriveTypeId: 1,
        operatingSystemId: null,
        operatingSystemArqId: null,
        macAddress: null,
        ipAddress: null,        
    },
    {
        serial: 'CNU3269M7V',
        activo: '222818',
        statusId: 2,
        categoryId: 3,
        brandId: "56a07947-0a09-488b-a597-64ef3e365c32",
        modelId: "bf10b490-f61d-4932-8bf4-05822213212d",
        employeeId: null,
        locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id,
        observation: '',
        computerName: null,
        processorId: "19aa5315-38d6-4a16-a755-eb7bd9f91593",
        memoryRamCapacity: 4,
        hardDriveCapacityId: 7,
        hardDriveTypeId: 1,
        operatingSystemId: null,
        operatingSystemArqId: null,
        macAddress: null,
        ipAddress: null,        
    },
    {
        serial: '5CD9103SYY',
        activo: null,
        statusId: 2,
        categoryId: 3,
        brandId: "56a07947-0a09-488b-a597-64ef3e365c32",
        modelId: "ba8097b3-660f-4e09-a6fc-23c1e6332a90",
        employeeId: null,
        locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id,
        observation: 'Bisagra Dañada',
        computerName: null,
        processorId: "7e2de7e3-82e5-48a8-8f73-8a3e68f5bc32",
        memoryRamCapacity: 16,
        hardDriveCapacityId: 7,
        hardDriveTypeId: 3,
        operatingSystemId: 2,
        operatingSystemArqId: 2,
        macAddress: null,
        ipAddress: null,        
    },
    {
        serial: '5CG95055G2',
        activo: '246760',
        statusId: 2,
        categoryId: 3,
        brandId: "56a07947-0a09-488b-a597-64ef3e365c32",
        modelId: "e52f9a4b-b708-4137-8d33-ca60497cfdbf",
        employeeId: null,
        locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id,
        observation: '',
        computerName: null,
        processorId: "7e2de7e3-82e5-48a8-8f73-8a3e68f5bc32",
        memoryRamCapacity: 16,
        hardDriveCapacityId: 7,
        hardDriveTypeId: 3,
        operatingSystemId: 2,
        operatingSystemArqId: 2,
        macAddress: null,
        ipAddress: null,        
    },
    {
        serial: 'CND8391X6R',
        activo: null,
        statusId: 3,
        categoryId: 3,
        brandId: "56a07947-0a09-488b-a597-64ef3e365c32",
        modelId: '666c3659-f97a-4f4b-a082-dc6cb87c5795',
        employeeId: null,
        locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id,
        observation: 'Dañada',
        computerName: null,
        processorId: "29c1d3df-752f-4deb-b451-ecfef9a2ac98",
        memoryRamCapacity: 0,
        hardDriveCapacityId: null,
        hardDriveTypeId: null,
        operatingSystemId: null,
        operatingSystemArqId: null,
        macAddress: null,
        ipAddress: null,        
    },
    {
        serial: '5CD2121LK5',
        activo: '212313',
        statusId: 2,
        categoryId: 3,
        brandId: "56a07947-0a09-488b-a597-64ef3e365c32",
        modelId: '17212b01-df51-4a56-81ce-c02f67e3756b',
        employeeId: null,
        locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id,
        observation: 'Le falta una tecla',
        computerName: null,
        processorId: "beea8cd2-448f-4d0f-848b-60cf2b205aca",
        memoryRamCapacity: 0,
        hardDriveCapacityId: null,
        hardDriveTypeId: null,
        operatingSystemId: null,
        operatingSystemArqId: null,
        macAddress: null,
        ipAddress: null,        
    },
]

module.exports = { HPLaptops }