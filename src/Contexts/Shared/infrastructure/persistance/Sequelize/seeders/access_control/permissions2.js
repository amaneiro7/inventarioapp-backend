// --- Definiciones de Grupos y Permisos ---
// Usamos los IDs del último request del usuario con nombres traducidos
const permissionGroups = [
	{
		id: '45de16b3-1288-4790-bee0-5445b015414e',
		name: 'Dashboard Viewer',
		description: 'Acceso exclusivo a tableros de métricas y monitoreo en tiempo real.'
	},
	{
		id: '282cf20a-4380-4dc8-a099-979bf4a77b1f',
		name: 'Global Reader',
		description: 'Permisos de solo lectura para la mayoría de los módulos del sistema.'
	},
	{
		id: '9135a46c-c675-47f2-bd86-96b8d343182b',
		name: 'Inventory Operator',
		description: 'Permite la gestión básica de inventario y empleados (crear/actualizar).'
	},
	{
		id: '8fb35246-ab2a-4526-86c3-d4ba3cf90273',
		name: 'Catalog Manager',
		description: 'Permisos avanzados, incluyendo eliminación de registros y gestión de cuentas de usuario.'
	},
	{
		id: '952a5983-3955-4861-adca-9de1b67f5daf', // UUID
		name: 'User Manager',
		description: 'Gestión de cuentas de usuario, roles y restablecimiento de contraseñas.'
	},
	{
		id: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
		name: 'System Administrator',
		description: 'Control total, configuraciones del sistema y eliminaciones críticas.'
	}
]

// Lista completa de todos los permisos (tomada de tu prompt anterior)
const permissions = [
	// Permisos de Política de Acceso
	{
		id: '073e8820-fc93-4ab0-8df3-27c79ac9d8a0',
		name: 'access-policies:read',
		description: 'Permite ver los detalles de una política de acceso específica.'
	},
	{
		id: '790a3c43-6ef0-4dcd-8d9b-c5d6ecb1ea0e',
		name: 'access-policies:read-list',
		description: 'Permite listar todas las políticas de acceso del sistema.'
	},
	{
		id: '314fa762-0fac-4c55-aa72-e0be0c389525',
		name: 'access-policies:create',
		description: 'Permite crear una nueva política de acceso.'
	},
	{
		id: 'ee633d73-3e1d-4f69-b193-127cb8425c25',
		name: 'access-policies:update',
		description: 'Permite modificar una política de acceso existente.'
	},
	{
		id: 'ba62c596-08fe-4d36-9930-1546733025e1',
		name: 'access-policies:delete',
		description: 'Permite eliminar una política de acceso.'
	},
	{
		id: '7b50f6b6-037b-44ab-a86f-1e8186e55b36',
		name: 'access-policies:assign',
		description: 'Permite asignar una política de acceso.'
	},
	{
		id: 'e62966eb-dcf1-4b81-af6c-ec2fef730206',
		name: 'access-policies:unassign',
		description: 'Permite desasignar una política de acceso.'
	},
	// Permisos de Grupo de Permiso
	{
		id: '9b246b7c-d8f4-4e9f-84a5-146425b4f1aa',
		name: 'permission-groups:create',
		description: 'Permite crear un nuevo grupo de permisos.'
	},
	{
		id: '47bdf360-e939-4df1-83da-82cff9abe8f8',
		name: 'permission-groups:read',
		description: 'Permite ver los detalles de un grupo de permisos.'
	},
	{
		id: '0480f442-45f2-4f65-b697-27976966419b',
		name: 'permission-groups:read-list',
		description: 'Permite listar todos los grupos de permisos.'
	},
	{
		id: 'e642f943-4088-44f8-9a12-449bc3bf3edf',
		name: 'permission-groups:update',
		description: 'Permite modificar un grupo de permisos existente.'
	},
	{
		id: 'e1e4db6e-1c05-4574-8697-e5c65cab27e8',
		name: 'permission-groups:delete',
		description: 'Permite eliminar un grupo de permisos.'
	},
	// Permisos de Permiso
	{
		id: '81b0d551-73da-4dd2-824a-9e4af64d16b5',
		name: 'permissions:create',
		description: 'Permite crear un nuevo permiso en el sistema.'
	},
	{
		id: '15019df1-3ffd-4917-9f3e-fe862c0cc46b',
		name: 'permissions:read-list',
		description: 'Permite listar todos los permisos disponibles.'
	},
	{
		id: '4a0d55eb-6a61-4305-89d2-5b3f8caa4e7d',
		name: 'permissions:read',
		description: 'Permite ver el detalle de un permiso específico.'
	},
	{
		id: '6af18695-0fc4-41a3-a5f8-69aa5250d121',
		name: 'permissions:delete',
		description: 'Permite eliminar un permiso del sistema.'
	},
	// Permisos de Marca
	{
		id: 'be55d630-3803-49df-b121-8713cefd3b18',
		name: 'brands:create',
		description: 'Permite crear nuevas marcas de dispositivos.'
	},
	{
		id: 'f2fb5528-8d96-4561-8949-2beae3578d3b',
		name: 'brands:read-list',
		description: 'Permite listar todas las marcas.'
	},
	{
		id: 'c4328410-13de-4b0e-93ea-9be2cec71c09',
		name: 'brands:read',
		description: 'Permite ver el detalle de una marca.'
	},
	{
		id: '3b8dcf59-13c2-4c64-b9e1-4a18d07665d1',
		name: 'brands:update',
		description: 'Permite actualizar una marca existente.'
	},
	// Permisos de Categoria
	{
		id: 'fdd0cadf-3950-44fb-bbe9-074e7d4fda88',
		name: 'categories:read-list',
		description: 'Permite listar todas las categorías de dispositivos.'
	},
	{
		id: '31b70388-3ee6-481c-a544-5cc72da99e27',
		name: 'categories:read',
		description: 'Permite ver el detalle de una categoría.'
	},
	// Permisos de Dashboard
	{
		id: 'b76c4360-70c7-402c-8151-6a6557bd68fa',
		name: 'dashboard:read',
		description: 'Permite acceder al dashboard principal con métricas generales.'
	},
	{
		id: 'df078fe6-14c3-4a16-9145-07e6ec21609a',
		name: 'dashboard:read-computer-dashboard',
		description: 'Permite acceder al dashboard principal de computadoras.'
	},
	{
		id: '7618daab-5136-49e0-a195-55a39d52253d',
		name: 'dashboard:read-monitor-dashboard',
		description: 'Permite acceder al dashboard principal de monitores.'
	},
	{
		id: '1d09fbc5-e195-424b-bf7f-cc74f21eaa4b',
		name: 'dashboard:read-printer-dashboard',
		description: 'Permite acceder al dashboard principal de impresoras.'
	},
	{
		id: 'dc3720e9-d5fb-463e-9441-2d9c0669c0cb',
		name: 'dashboard:read-parts-dashboard',
		description: 'Permite acceder al dashboard principal de partes o componentes.'
	},
	{
		id: '26a8735a-796a-46ca-9416-f71a2a4cbe92',
		name: 'dashboard:read-finantial-printer-dashboard',
		description: 'Permite acceder al dashboard financiero de impresoras.'
	},
	{
		id: '44bc5d18-6289-4a91-a652-5cd92db93de8',
		name: 'dashboard:read-employee-dashboard',
		description: 'Permite acceder al dashboard principal de empleados.'
	},
	// Permisos de Dispositivos
	{
		id: 'd0bb9685-2939-4485-94cc-56a13ff32ce1',
		name: 'devices:read-list',
		description: 'Permite listar y buscar todos los dispositivos.'
	},
	{
		id: '0423a4ce-684f-411c-8e27-b417c08acd92',
		name: 'devices:read-ping-status',
		description: 'Permite consultar el estado de conexión (ping) de un dispositivo.'
	},
	{
		id: 'c20e04c5-e1f8-4f59-85ad-23acc20f2882',
		name: 'devices:download',
		description: 'Permite descargar un reporte de los dispositivos.'
	},
	{
		id: '5ba2c285-7807-4e87-a29e-3ec36eb83105',
		name: 'devices:read-monitoring-dashboard',
		description: 'Permite acceder al dashboard de monitoreo general de dispositivos.'
	},
	{
		id: 'c93b98c1-009f-4d3b-a5ea-c18dbecbc2b2',
		name: 'devices:read-monitoring-by-state-dashboard',
		description: 'Permite ver el monitor de dispositivos agrupados por estado.'
	},
	{
		id: 'b63a3821-baed-414d-9ec6-37594337ddea',
		name: 'devices:read-monitoring-by-location-dashboard',
		description: 'Permite ver el monitor de dispositivos agrupados por ubicación.'
	},
	{
		id: '53c4da78-bfe0-474e-8941-37aea8fe4a0a',
		name: 'devices:read',
		description: 'Permite ver los detalles de un dispositivo específico.'
	},
	{
		id: '4f7ab39d-424b-4e13-9198-901f9b9a864b',
		name: 'devices:create',
		description: 'Permite registrar un nuevo dispositivo en el inventario.'
	},
	{
		id: '5e87504e-f238-4848-aad3-fef7410ac0f8',
		name: 'devices:update',
		description: 'Permite modificar la información de un dispositivo.'
	},
	{
		id: '134af350-ac77-42ed-802e-055e4982bb49',
		name: 'devices:delete',
		description: 'Permite eliminar un dispositivo del inventario.'
	},
	// Permisos de Cargo
	{
		id: '350a2c6d-0ff9-4bd3-9783-311acbf11e56',
		name: 'cargos:read-list',
		description: 'Permite listar todos los cargos de la organización.'
	},
	{
		id: '8d24bcaf-545a-4ee6-a0af-eff29be5aed8',
		name: 'cargos:read',
		description: 'Permite ver el detalle de un cargo.'
	},
	{ id: '98d25916-edba-4ea9-94cd-e26a893b11bd', name: 'cargos:create', description: 'Permite crear un nuevo cargo.' },
	{
		id: '3f2f955a-250b-4bd8-a2ba-c934b71c48bd',
		name: 'cargos:update',
		description: 'Permite actualizar un cargo existente.'
	},
	// Permisos de Departamentos
	{
		id: '2a73081f-1119-4fdf-a9a2-cbf0c020ba1f',
		name: 'departamentos:read-list',
		description: 'Permite listar todos los departamentos.'
	},
	{
		id: 'e9fbcd36-773b-4b58-b7ee-436d5b0f55b2',
		name: 'departamentos:read',
		description: 'Permite ver el detalle de un departamento.'
	},
	{
		id: 'f42f42b5-8726-4924-89d3-f2e0fb7125b4',
		name: 'departamentos:create',
		description: 'Permite crear un nuevo departamento.'
	},
	{
		id: '6116b895-ddd5-4bcf-b1b8-a6c41a831ea6',
		name: 'departamentos:update',
		description: 'Permite actualizar un departamento existente.'
	},
	// Permisos de Directivas
	{
		id: '8e03da1f-18b4-45c6-8968-3b32bcfd5e64',
		name: 'directivas:read-list',
		description: 'Permite listar todas las directivas.'
	},
	{
		id: 'b9b33bc7-692c-49d5-896b-efc23e7a3e5c',
		name: 'directivas:read',
		description: 'Permite ver el detalle de una directiva.'
	},
	{
		id: '132dbb40-1c01-4550-8acc-515de72a100c',
		name: 'directivas:create',
		description: 'Permite crear una nueva directiva.'
	},
	{
		id: 'eeaad8d1-fb14-4983-b170-ac53bcd63e6d',
		name: 'directivas:update',
		description: 'Permite actualizar una directiva existente.'
	},
	// Permisos de Empleados
	{
		id: 'a673b5d2-4466-4481-aa53-dbaeac940abd',
		name: 'employees:read-list',
		description: 'Permite listar y buscar todos los empleados.'
	},
	{
		id: 'd9b32ecf-1ce2-4a13-8bfb-5cbd40923dd3',
		name: 'employees:read',
		description: 'Permite ver la información detallada de un empleado.'
	},
	{
		id: '4ed332f6-e881-43f1-8149-b3cae7ed8cf0',
		name: 'employees:download',
		description: 'Permite descargar un reporte de empleados.'
	},
	{
		id: '18f99a6e-309e-47d3-8dce-cab4a2908bf9',
		name: 'employees:create',
		description: 'Permite registrar un nuevo empleado.'
	},
	{
		id: '7a3b2d55-ce32-43df-93f6-bebef1ee1c07',
		name: 'employees:update',
		description: 'Permite modificar la información de un empleado.'
	},
	{
		id: '2d1611ff-4564-4907-ae17-2fe1af1e9927',
		name: 'employees:delete',
		description: 'Permite eliminar el registro de un empleado.'
	},
	// Permisos de Vicepresidencia Ejecutiva
	{
		id: 'c57e9fc7-cff2-417f-9e83-07661706934f',
		name: 'vicepresidencia-ejecutivas:read-list',
		description: 'Permite listar todas las vicepresidencias ejecutivas.'
	},
	{
		id: 'd269b0fd-d00b-41cd-a342-37f9d0965899',
		name: 'vicepresidencia-ejecutivas:read',
		description: 'Permite ver el detalle de una vicepresidencia ejecutiva.'
	},
	{
		id: '3dd7a1b4-95be-4a9d-9656-3b8b0318a641',
		name: 'vicepresidencia-ejecutivas:create',
		description: 'Permite crear una nueva vicepresidencia ejecutiva.'
	},
	{
		id: 'c3fe3189-7778-46af-bb6b-12eb1ce486c1',
		name: 'vicepresidencia-ejecutivas:update',
		description: 'Permite actualizar una vicepresidencia ejecutiva.'
	},
	// Permisos de Vicepresidencia
	{
		id: '3f3d6c7d-2728-46db-8629-d34865359dd5',
		name: 'vicepresidencias:read-list',
		description: 'Permite listar todas las vicepresidencias.'
	},
	{
		id: '400078a7-2d3a-45f3-937e-6bf05babf8c0',
		name: 'vicepresidencias:read',
		description: 'Permite ver el detalle de una vicepresidencia.'
	},
	{
		id: '651ae7da-c577-4529-84c4-e21e09354e29',
		name: 'vicepresidencias:create',
		description: 'Permite crear una nueva vicepresidencia.'
	},
	{
		id: '8f868bb7-a0d7-455b-bd47-db9b7bc54188',
		name: 'vicepresidencias:update',
		description: 'Permite actualizar una vicepresidencia.'
	},
	// Permisos de Capacidad de Disco duro
	{
		id: 'ee9cfed4-02b5-4e01-8606-0834e562d205',
		name: 'hard-drive-capacities:read-list',
		description: 'Permite listar las capacidades de disco duro disponibles.'
	},
	// Permisos de Tipo Disco duro
	{
		id: '1820b3f3-487c-4d95-91f7-cecb242ced85',
		name: 'hard-drive-types:read-list',
		description: 'Permite listar los tipos de disco duro disponibles.'
	},
	// Permisos de History
	{
		id: '45062535-b78f-4276-879c-db4e58f21b1d',
		name: 'history:read-list',
		description: 'Permite ver el historial de cambios de los registros.'
	},
	{
		id: 'a7e914b2-3071-439a-b1e9-c4e5729c6caa',
		name: 'history:read-dashboard',
		description: 'Permite acceder al dashboard de historial.'
	},
	// Permisos de Tipo Entrada
	{
		id: 'f989804d-dcab-447d-bc52-93a766ecee28',
		name: 'input-type:read-list',
		description: 'Permite listar los tipos de periféricos de entrada.'
	},
	// Permisos de Sitios administrativos
	{
		id: 'a4e8669f-ab94-4409-b805-9ec97be46cb0',
		name: 'administrative-regions:read-list',
		description: 'Permite listar las regiones administrativas.'
	},
	// Permisos de Ciudades
	{
		id: '852942ba-2835-427c-9eae-7e1bf1760e88',
		name: 'cities:read-list',
		description: 'Permite listar todas las ciudades.'
	},
	{
		id: 'b772a6b2-5651-44f8-9de7-8b87444994ec',
		name: 'cities:read',
		description: 'Permite ver el detalle de una ciudad.'
	},
	{
		id: '580179ba-5350-4a13-8968-6a6127e93627',
		name: 'cities:create',
		description: 'Permite crear una nueva ciudad.'
	},
	{
		id: 'bbcd1aee-ab27-4900-bbdd-ffdec52630ae',
		name: 'cities:update',
		description: 'Permite actualizar una ciudad existente.'
	},
	// Permisos de Estatus de Ubicaciones
	{
		id: 'c0fe0131-b33a-407f-98a4-bd538534494e',
		name: 'operational-status:read-list',
		description: 'Permite listar los estados operativos de las ubicaciones.'
	},
	// Permisos de Ubicaciones
	{
		id: '14bc76f5-de5e-4c4e-a628-0dbf0ae5187f',
		name: 'locations:read-list',
		description: 'Permite listar todas las ubicaciones.'
	},
	{
		id: '3ec4f573-7911-427f-a370-d19664785c1a',
		name: 'locations:read-ping-status',
		description: 'Permite consultar el estado de conexión (ping) de una ubicación.'
	},
	{
		id: 'e5b9f1d0-1f51-4388-a513-b55bb7a135f3',
		name: 'locations:read-monitoring-dashboard',
		description: 'Permite acceder al dashboard de monitoreo de ubicaciones.'
	},
	{
		id: '736a0811-4643-4e41-8cc7-b20a67cc2ccf',
		name: 'locations:read-monitoring-by-state-dashboard',
		description: 'Permite ver el monitor de ubicaciones por estado.'
	},
	{
		id: 'c04618bc-9abd-4414-90c3-b5fadb09d981',
		name: 'locations:read-monitoring-by-location-dashboard',
		description: 'Permite ver el monitor de ubicaciones por región.'
	},
	{
		id: '12162def-3b65-423b-a29b-498ea9c8be06',
		name: 'locations:read',
		description: 'Permite ver el detalle de una ubicación.'
	},
	{
		id: '47ed932c-e89e-4043-b596-a6ac4cb7d5a3',
		name: 'locations:create',
		description: 'Permite crear una nueva ubicación.'
	},
	{
		id: '0b42fea2-4ae3-4c2b-b144-57ae2d047b1e',
		name: 'locations:update',
		description: 'Permite actualizar una ubicación existente.'
	},
	// Permisos de Regiones
	{
		id: 'ac0e8df8-cd5b-4ad0-995f-f7b30b1307e5',
		name: 'regions:read-list',
		description: 'Permite listar todas las regiones.'
	},
	{
		id: '049b8748-aae1-4ee8-8107-da03aaee42ee',
		name: 'regions:read',
		description: 'Permite ver el detalle de una región.'
	},
	{
		id: '06ad5d72-b9ed-48cf-8e09-6e8e5f529401',
		name: 'regions:update',
		description: 'Permite actualizar una región existente.'
	},
	// Permisos de Sitios
	{
		id: '3d7557f7-fca1-41cb-bb4c-f6a1048911d5',
		name: 'sites:read-list',
		description: 'Permite listar todos los sitios.'
	},
	{
		id: '6437d808-be64-4e79-8559-4abb7a9de336',
		name: 'sites:read',
		description: 'Permite ver el detalle de un sitio.'
	},
	{ id: '88a33248-e237-4abf-865c-ac05ce33bb79', name: 'sites:create', description: 'Permite crear un nuevo sitio.' },
	{
		id: '293b45ba-1b6a-4505-bf97-5bb030bffb9d',
		name: 'sites:update',
		description: 'Permite actualizar un sitio existente.'
	},
	// Permisos de Estados
	{
		id: '4426fcea-7c77-4ca7-9539-74f43aaa82e9',
		name: 'states:read-list',
		description: 'Permite listar todos los estados geográficos.'
	},
	// Permisos de Tipos de sitios
	{
		id: '6a2ca042-4274-49ba-89f0-6fc62f093ebe',
		name: 'type-of-sites:read-list',
		description: 'Permite listar los tipos de sitios disponibles.'
	},

	// Permisos de Categoria Principal
	{
		id: '55b9f913-4fa7-404c-84ff-d2f84fd6978d',
		name: 'main-categories:read-list',
		description: 'Permite listar las categorías principales de dispositivos.'
	},
	{
		id: 'f40b23a0-29c1-4496-a458-89555af2ed39',
		name: 'main-categories:read',
		description: 'Permite ver el detalle de una categoría principal.'
	},
	// Permisos de Tipo de Memoria RAM
	{
		id: '9d680cb4-104e-4da0-85ad-bcec45aa73d0',
		name: 'memory-ram-types:read-list',
		description: 'Permite listar los tipos de memoria RAM.'
	},
	// Permisos de Modelos
	{
		id: '928c76bd-eacb-47b4-b92e-8b72d79273b5',
		name: 'models:read-list',
		description: 'Permite listar todos los modelos de dispositivos.'
	},
	{
		id: 'b213f280-a079-449e-a6a6-89ed1b65ef23',
		name: 'models:read',
		description: 'Permite ver el detalle de un modelo.'
	},
	{
		id: 'eea5ca8a-a976-48b8-9201-58fa6891fa8e',
		name: 'models:download',
		description: 'Permite descargar un reporte de modelos.'
	},
	{
		id: '4201574a-9427-467b-a0dd-769fc207d0aa',
		name: 'models:create',
		description: 'Permite crear un nuevo modelo de dispositivo.'
	},
	{
		id: '33d8cdcb-25a9-475d-bd0e-18be895fc7aa',
		name: 'models:update',
		description: 'Permite actualizar un modelo existente.'
	},
	// Permisos de Sistema Operativo
	{
		id: 'a495ab02-1616-458c-82df-7cd476b2d8d1',
		name: 'operating-systems:read-list',
		description: 'Permite listar los sistemas operativos.'
	},
	// Permisos de Arquitectura de Sistema Operativo
	{
		id: '703b2223-6c0d-4727-a216-ed24a7383513',
		name: 'operating-system-arqs:read-list',
		description: 'Permite listar las arquitecturas de SO (32/64 bits).'
	},
	// Permisos de Procesadores
	{
		id: 'c140d1ba-6869-4078-8ee0-694b63ef20f6',
		name: 'processors:read-list',
		description: 'Permite listar todos los procesadores.'
	},
	{
		id: '6e2675f2-dab3-405b-902c-3de517b38ae7',
		name: 'processors:read',
		description: 'Permite ver el detalle de un procesador.'
	},
	{
		id: 'f27f24d6-b8c7-46e3-86d8-742828dbf49b',
		name: 'processors:create',
		description: 'Permite crear un nuevo tipo de procesador.'
	},
	{
		id: '94f3b6b1-2434-4736-a036-8f5500ee28d4',
		name: 'processors:update',
		description: 'Permite actualizar un procesador existente.'
	},
	{
		id: '7f6a686f-3853-41e1-bd5e-a1d79e6367bc',
		name: 'processors:delete',
		description: 'Permite eliminar un tipo de procesador.'
	},
	// Permisos de Rol
	{
		id: '765e361d-7464-403f-aefb-96bd714dc643',
		name: 'roles:read-list',
		description: 'Permite listar los roles de usuario del sistema.'
	},
	// Permisos de Settings
	{
		id: 'd0aefa7d-8a6e-4745-8350-7cb2c1b5311b',
		name: 'settings:read-list',
		description: 'Permite listar todas las configuraciones del sistema.'
	},
	{
		id: '40c5bdbf-7c94-48f7-bb79-ce4913824101',
		name: 'settings:read',
		description: 'Permite ver el detalle de una configuración.'
	},
	{
		id: '115e79ec-fb9c-40da-9df3-b639ce8b42bf',
		name: 'settings:create',
		description: 'Permite crear una nueva configuración.'
	},
	{
		id: 'cf1a56d7-e0eb-49cc-b9e7-8f51d05bb5da',
		name: 'settings:update',
		description: 'Permite modificar una configuración del sistema.'
	},
	{
		id: 'e138faf7-593f-4257-afde-364a9d7796d1',
		name: 'settings:read-allowed-domains',
		description: 'Permite leer la lista de dominios de correo permitidos.'
	},
	// Permisos de Envios
	{
		id: '69c92dbd-cc8d-4dd6-bd78-191ea5fe909d',
		name: 'shipments:read-list',
		description: 'Permite listar todos los envíos de dispositivos.'
	},
	{
		id: 'f60b423f-88f6-4332-aa81-396a18c0cbdd',
		name: 'shipments:read',
		description: 'Permite ver el detalle de un envío.'
	},
	{
		id: '9abf1c8a-ea74-4765-9350-ccca5b4a1be2',
		name: 'shipments:create',
		description: 'Permite crear un nuevo envío de dispositivos.'
	},
	{
		id: '143f14fa-5b3d-4bb5-b896-f3654c82ca88',
		name: 'shipments:update',
		description: 'Permite actualizar el estado de un envío.'
	},
	// Permisos de Estatus de Dispositivo
	{
		id: 'e7f67eda-e57d-4db6-9163-4177dbed1b72',
		name: 'status:read-list',
		description: 'Permite listar los diferentes estados de un dispositivo.'
	},
	{
		id: 'cf5d0bf2-f6e9-47bc-ae7f-73f19d372cee',
		name: 'status:read-dashboard',
		description: 'Permite acceder al dashboard de estados de dispositivos.'
	},
	// Permisos de Usuario
	{
		id: 'ce759b99-2be4-4858-a31c-cb77c3c80c43',
		name: 'users:read-list',
		description: 'Permite listar todos los usuarios del sistema.'
	},
	{
		id: '121e7c43-38b5-4bf8-925d-e79f4227544c',
		name: 'users:read',
		description: 'Permite ver la información de un usuario.'
	},
	{
		id: '2e5c5735-c027-4c6d-bde6-229ed960c0a1',
		name: 'users:create',
		description: 'Permite crear una nueva cuenta de usuario.'
	},
	{
		id: '19294a12-b1de-46a5-8fc7-58ae3b462651',
		name: 'users:update',
		description: 'Permite modificar los datos de un usuario.'
	},
	{
		id: 'e29eac37-5a40-44d6-a3c9-6c9ebea792ae',
		name: 'users:reset-password',
		description: 'Permite reiniciar la contraseña de un usuario.'
	},
	{
		id: '4bb3659a-cd86-45cb-85c4-6608ef795021',
		name: 'users:unlock',
		description: 'Permite desbloquear una cuenta de usuario.'
	},
	{
		id: '8c1941b0-1c31-4b28-aae7-89c92bb8ce80',
		name: 'users:disable',
		description: 'Permite desactivar una cuenta de usuario.'
	},
	{
		id: '29f0b667-1713-4e22-a8de-9326f62ca37c',
		name: 'users:reactivate',
		description: 'Permite reactivar una cuenta de usuario desactivada.'
	}
]

// --- Asignaciones Base por Funcionalidad ---

// Helper: Filtros rápidos
const dashboardPerms = permissions.map(p => p.name).filter(n => n.includes('dashboard') || n.includes('monitoring'))
const readPerms = permissions
	.map(p => p.name)
	.filter(
		n =>
			(n.includes(':read') || n.includes(':read-list')) &&
			!n.includes('users') &&
			!n.includes('policies') &&
			!n.includes('settings')
	)

const PERMISSION_ASSIGNMENTS = {
	// 1. Solo Métricas
	'Dashboard Viewer': [...dashboardPerms, 'status:read-dashboard', 'history:read-dashboard'],

	// 2. Lectura de Datos (Hereda Dashboards implícitamente en la lógica o explícitamente aquí)
	'Global Reader': [
		...readPerms,
		'settings:read-allowed-domains'
		// Nota: Aquí NO incluimos permisos de escritura, solo ver listas y detalles.
	],

	// 3. Operación Diaria (El "hacer" cosas con los activos)
	'Inventory Operator': [
		// Dispositivos
		'devices:create',
		'devices:update',
		'devices:download',
		// Empleados
		'employees:create',
		'employees:update',
		'employees:download',
		// Envíos
		'shipments:create',
		'shipments:update',
		// Procesadores (a veces se crean al vuelo)
		'processors:create',
		'processors:update'
	],

	// 4. Gestión de Estructura (El "configurar" el entorno del inventario)
	'Catalog Manager': [
		// Ubicación y Estructura
		'cities:create',
		'cities:update',
		'locations:create',
		'locations:update',
		'sites:create',
		'sites:update',
		'regions:update',
		// Organización
		'departamentos:create',
		'departamentos:update',
		'cargos:create',
		'cargos:update',
		'vicepresidencias:create',
		'vicepresidencias:update',
		// Catálogo Técnico
		'brands:create',
		'brands:update',
		'models:create',
		'models:update',
		'models:download'
	],

	// 5. Gestión de Accesos
	'User Manager': [
		'users:read-list',
		'users:read',
		'users:create',
		'users:update',
		'users:reset-password',
		'users:unlock',
		'users:disable',
		'users:reactivate',
		'roles:read-list'
	],

	// 6. Admin Supremo
	'System Administrator': permissions.map(p => p.name)
}

// Nota: En tu lógica de AccessPolicy es donde harás la suma:
// Ejemplo: Un "L1 Support" tendrá los grupos: ['Dashboard Viewer', 'Global Reader', 'Inventory Operator']

// --- Funciones de Utilidad ---

// Mapea los arrays a objetos para una búsqueda eficiente O(1)
const permissionMap = permissions.reduce((acc, p) => {
	acc[p.name] = p.id
	return acc
}, {})

const groupMap = permissionGroups.reduce((acc, g) => {
	acc[g.name] = g.id
	return acc
}, {})

/**
 * Genera el array de objetos para la tabla de unión.
 */
function generateGroupPermissions() {
	const records = []
	const now = new Date()

	for (const groupName in PERMISSION_ASSIGNMENTS) {
		const groupID = groupMap[groupName]
		const assignedPermissions = PERMISSION_ASSIGNMENTS[groupName]

		if (!groupID) {
			console.error(`Group ID not found for group: ${groupName}`)
			continue
		}

		// Usamos un Set para asegurar que no haya duplicados
		const uniquePermissions = [...new Set(assignedPermissions)]

		for (const permName of uniquePermissions) {
			const permissionID = permissionMap[permName]

			if (!permissionID) {
				console.warn(`Permission ID not found for name: ${permName} in group ${groupName}`)
				continue
			}

			records.push({
				permission_group_id: groupID,
				permission_id: permissionID,
				created_at: now,
				updated_at: now
			})
		}
	}
	return records
}

module.exports = {
	permissions,
	permissionGroups,
	generateGroupPermissions
}
