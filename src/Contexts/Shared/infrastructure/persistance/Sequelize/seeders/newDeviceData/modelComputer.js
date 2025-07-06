const modelName = [
	'HP Compaq dc5800 Small Form Factor',
	'To be filled by O.E.M.',
	'ThinkCentre M720q',
	'ThinkCentre M700',
	'OEM',
	'ThinkCentre M71e',
	'G41D3C',
	'HP ProDesk 600 G1 SFF',
	'HP Compaq 8000 Elite SFF PC',
	'HP Compaq dc5700 Small Form Factor',
	'HP Compaq 6000 Pro SFF PC',
	'System Product Name',
	'HP Compaq 6200 Pro SFF PC',
	'HP Compaq dx2300 Microtower',
	'HP Compaq Pro 6300 SFF',
	'ThinkCentre M72e',
	'HP Compaq Pro 4300 SFF PC',
	'H61MLV',
	'ThinkCentre M83',
	'ThinkCentre M70e',
	'HP ProDesk 400 G1 SFF',
	'HP 200 G1 MT',
	'ThinkCentre M73z',
	'O.E.M',
	'HP Compaq Elite 8300 SFF',
	'Lenovo Product',
	'HP ProDesk 600 G4 DM (TAA)',
	'ThinkCentre M57e'
]

const modelComputer = [
	{
		id: '17212b01-df51-4a56-81ce-c02f67e3756b',
		name: 'HP Pavilion G4-1388la',
		slots: 2
	},
	{
		id: '206ecb35-1e43-47e2-85b4-f7b6405ab638',
		name: 'HP ProBook 4440s',
		slots: 2
	},
	{
		id: '208c2653-294a-4ed5-bf79-848dc312aac6',
		name: 'ThinkPad X230',
		slots: 2
	},
	{
		id: '24a4ae7d-8570-45f3-b103-ea35a0f7c43c',
		name: 'Latitude 5400',
		slots: 2
	},
	{
		id: '3fdb6958-f036-47e7-a583-89956e7f9d78',
		name: 'HP EliteBook 1040 G4',
		slots: 2
	},
	{
		id: '58cc0785-ad32-4351-9e72-ddb3bced2806',
		name: 'HP ZBook 15u G5',
		slots: 2
	},
	{
		id: '5f3103cb-bcba-4aeb-978c-50a2ad12c38b',
		name: 'Lenovo V330-14IKB',
		slots: 2
	},
	{
		id: '666c3659-f97a-4f4b-a082-dc6cb87c5795',
		name: 'HP Pavilion dv4 Notebook PC',
		slots: 2
	},
	{
		id: '67e1f755-1611-4f84-9478-08fd9bc35af3',
		name: 'ThinkPad L412',
		slots: 2
	},
	{
		id: '69d91018-3cd0-48d4-b33d-e8a0638cf693',
		name: 'ThinkPad SL400',
		slots: 2
	},
	{
		id: '6f20dc8d-da9d-4a71-860b-a2049314c0df',
		name: 'Lenovo G480',
		slots: 2
	},
	{
		id: '763223a6-bf6e-48bc-a5c7-4773cf7bdc2c',
		name: 'Lenovo E49',
		slots: 2
	},
	{
		id: '7fc1714f-868d-472d-ac3f-17602dee36f0',
		name: 'ThinkPad Edge',
		slots: 2
	},
	{
		id: '8279679f-afda-4102-bcd3-b34422ef3772',
		name: 'ThinkPad T61',
		slots: 2
	},
	{
		id: '848d7ede-2a6c-445e-8940-184a4c87bde4',
		name: 'HP EliteBook 850 G7 Notebook PC',
		slots: 2
	},
	{
		id: '8b0befb9-5d83-4cfe-8f4b-717adae0e6b0',
		name: 'HP EliteBook 840 G8 Notebook PC',
		slots: 2
	},
	{
		id: '8e7394ee-c130-4417-a398-a6c597c2e6e1',
		name: 'Lenovo G50-70',
		slots: 2
	},
	{
		id: 'a1a929ed-1be1-46fd-9da9-e7207b4f3dbc',
		name: 'HP Laptop 15t dy200',
		slots: 2
	},
	{
		id: 'a1a929ed-1be1-46fd-9da9-e7207b4f3dbc',
		name: 'HP Laptop 15t-dy200',
		slots: 2
	},
	{
		id: 'ba04c276-164a-4fe2-9f80-5909b1560c08',
		name: 'HP Pavilion Laptop 15t-eg000',
		slots: 2
	},
	{
		id: 'ba8097b3-660f-4e09-a6fc-23c1e6332a90',
		name: 'HP EliteBook x360 1030 G3',
		slots: 2
	},
	{
		id: 'bf10b490-f61d-4932-8bf4-05822213212d',
		name: 'HP EliteBook 8470p',
		slots: 2
	},
	{
		id: 'c558ac7b-0e11-4d4a-a0c7-1d39c630afd3',
		name: 'ThinkPad SL410',
		slots: 2
	},
	{
		id: 'cbd39f5a-d5da-4f52-8a31-6a61c34cc088',
		name: 'ThinkPad X1 Carbon 5th',
		slots: 2
	},
	{
		id: 'd2396d2f-0aaf-49ef-88da-3e79ecbf24ee',
		name: 'HP ZBook 15 G3',
		slots: 4
	},
	{
		id: 'd983ef90-3a17-4dce-a0d1-6ba7c19d729e',
		name: 'ThinkPad X1 Carbon 7th',
		slots: 2
	},
	{
		id: 'e52f9a4b-b708-4137-8d33-ca60497cfdbf',
		name: 'HP EliteBook x360 830 G6',
		slots: 2
	},
	{
		id: 'eaf80960-440d-462b-8276-fac5227ba608',
		name: 'MacBook Pro Retina',
		slots: 1
	},
	{
		id: 'eeb3420d-a6b8-4c0f-bcc8-048707ecc758',
		name: 'Latitude 5300 2-in-1',
		slots: 2
	},
	{
		id: '00ea01fd-51b5-4520-b1e0-9982a0b492b5',
		name: 'HP EliteDesk 800 G4 SFF',
		slots: 4
	},
	{
		id: '12475e5d-bfdf-4ddd-958b-5e8d776896a5',
		name: 'BYTE4',
		slots: 1
	},
	{
		id: '15b7a063-4e99-4ec1-90ca-94a6e0edf000',
		name: 'HP Compaq dc5100 Small Form Factor',
		slots: 4
	},
	{
		id: '1aa81dee-015b-4999-80f5-a5ecac793bca',
		name: 'ThinkCentre M700',
		slots: 2
	},
	{
		id: '21969859-daa0-4916-a554-edff77e8f9ac',
		name: 'ThinkCentre M70e',
		slots: 2
	},
	{
		id: '269f43fb-b751-4dd7-b370-f8ce4d2bbd61',
		name: 'HP Z4 G4 Workstation',
		slots: 4
	},
	{
		id: '2a05e53b-3fcd-477b-884a-c31e30a1d7d5',
		name: 'ThinkServer TS440',
		slots: 4
	},
	{
		id: '2f007880-8f16-477e-a15e-e7f1773d5afa',
		name: 'HP Compaq dc7800 Convertible Minitower',
		slots: 4
	},
	{
		id: '2f4993bc-d1b5-4c53-9e92-a3c38dd75040',
		name: 'HP EliteDesk 800 G4 DM 35W',
		slots: 2
	},
	{
		id: '4096012f-bed6-4975-a17c-6496c5573785',
		name: 'Lenovo C260',
		slots: 1
	},
	{
		id: '4cb2e608-5f28-44af-af75-59cb2ca2fbab',
		name: 'HP Compaq Pro 6300 SFF',
		slots: 4
	},
	{
		id: '4ea66d3d-6117-4587-9507-6e87fef0a339',
		name: 'HP All-in-One 24-df0xxx',
		slots: 1
	},
	{
		id: '53d44ea1-5b9c-4b72-ab38-6d61358cf892',
		name: 'OEM',
		slots: 2
	},
	{
		id: '5b49985c-9146-4430-90a3-30c77741b3dc',
		name: 'HP d220 MT (DV667A)',
		slots: 2
	},
	{
		id: '5da772a9-0e01-4689-9afb-717ccf68cf3f',
		name: 'ThinkCentre M73z',
		slots: 2
	},
	{
		id: '7003ef87-9563-4783-a758-16c471010243',
		name: 'ThinkCentre M720s',
		slots: 2
	},
	{
		id: '78e6fc44-7d45-47e6-9d78-aecc66ed74d4',
		name: 'HP Compaq Elite 8000 SFF',
		slots: 4
	},
	{
		id: '78e6fc44-7d45-47e6-9d78-aecc66ed74d4',
		name: 'HP Compaq 8000 Elite SFF PC',
		slots: 4
	},
	{
		id: '78e6fc44-7d45-47e6-9d78-aecc66ed74d4',
		name: 'HP Compaq 8000 Elite SFF',
		slots: 4
	},
	{
		id: '8145c77f-a75e-4cfa-9634-a4eb17540cde',
		name: 'HP Compaq dc5700 Small Form Factor',
		slots: 4
	},
	{
		id: '82a6b980-e0cb-4ef0-93da-380bd298eab1',
		name: 'ThinkCentre M83',
		slots: 4
	},
	{
		id: '83c38f9b-a0ac-4350-9204-886ea8e4e967',
		name: 'ThinkCentre M71e',
		slots: 2
	},
	{
		id: '868a0697-ecfa-471b-8705-31c298e6399a',
		name: 'HP 200 G1 MT',
		slots: 2
	},
	{
		id: '91565ffa-927f-4dbd-b9db-39eef3d81f50',
		name: 'Inspiron 3847',
		slots: 2
	},
	{
		id: '949b2415-ec6b-4941-a27e-32949162ee8d',
		name: 'HP ProDesk 600 G4 DM (TAA)',
		slots: 2
	},
	{
		id: '9598164f-1192-4c00-afa1-b1fb62d075f3',
		name: 'ThinkServer TS430',
		slots: 4
	},
	{
		id: '9a2674ac-6a13-4cb6-820d-eb3f0004678c',
		name: 'HP ProDesk 600 G1 SFF',
		slots: 4
	},
	{
		id: '9b43fe74-aa96-477e-8a25-cf3506742ccd',
		name: 'ThinkCentre M72e',
		slots: 2
	},
	{
		id: '9bdad8c9-8684-4345-abe6-3cf5593e551a',
		name: 'Inspire',
		slots: 1
	},
	{
		id: '9e376eb0-7559-41c1-82aa-36b6fa4cccf1',
		name: 'HP Compaq 6000 Pro SFF PC',
		slots: 4
	},
	{
		id: 'ab48a708-cead-47c7-b974-9121c0e71265',
		name: 'ThinkCentre M810Z',
		slots: 2
	},
	{
		id: 'ac1d4e47-86d3-4e8d-9eff-eae3fb9cd517',
		name: 'G41D3C',
		slots: 2
	},
	{
		id: 'acdd72ac-df03-48d8-a04a-e66a75f0a574',
		name: 'ThinkCentre M720q',
		slots: 1
	},
	{
		id: 'ae542161-3209-49ed-95ee-cb7d3dad5d61',
		name: 'H61MLV',
		slots: 2
	},
	{
		id: 'b67c290e-c186-4ab7-9fd3-92689e1bcbaa',
		name: 'HP Compaq Pro 4300 SFF PC',
		slots: 2
	},
	{
		id: 'ba260f98-0042-4be7-9d9d-1c6dca5010c3',
		name: 'ThinkCentre M91p',
		slots: 4
	},
	{
		id: 'bd0b6c7d-4d17-48cd-8b61-d4a167ad588f',
		name: 'HP Compaq dc5800 Small Form Factor',
		slots: 4
	},
	{
		id: 'bf983eed-1209-4c4e-a691-70e5bf61e076',
		name: 'HP Compaq dc7800p Small Form Factor',
		slots: 4
	},
	{
		id: 'c11d727c-f6b7-4ddf-a597-a6b1c1d06c1c',
		name: 'ThinkCentre AD4',
		slots: 2
	},
	{
		id: 'c156d9ec-1bc2-413d-8a2a-f9b563811e06',
		name: 'HP All-in-One 24-e0XX',
		slots: 1
	},
	{
		id: 'cb7c8589-4fbd-45c5-94d9-3d251273d295',
		name: 'ThinkCentre M710S',
		slots: 2
	},
	{
		id: 'cdfd08c0-59d0-4bfc-a021-e6d53e1325fc',
		name: 'HP Compaq Elite 8300 SFF',
		slots: 4
	},
	{
		id: 'ce51d092-332e-42ac-8b27-df7da5d3463a',
		name: 'HP Compaq 6200 Pro SFF PC',
		slots: 4
	},
	{
		id: 'cfd62c3f-1610-4613-8c13-b9fd069a0430',
		name: 'HP EliteDesk 800 G4 DM 65W (TAA)',
		slots: 2
	},
	{
		id: 'd1204e34-6c6d-4623-9210-d39632e6ab65',
		name: 'HP EliteDesk 800 G1 SFF',
		slots: 4
	},
	{
		id: 'd18633fe-f223-4ca7-a3b6-5696e6e81f6a',
		name: 'ThinkCentre M82',
		slots: 4
	},
	{
		id: 'd7006156-dd6d-4577-9de4-0056cadfef79',
		name: 'HP ProDesk 400 G1 SFF',
		slots: 2
	},
	{
		id: 'ec9e560a-318d-42a7-85cb-ad6fc08e57d9',
		name: 'ThinkCentre M81',
		slots: 4
	},
	{
		id: 'f1813ec1-a819-4cf5-8af1-2bbf3790c02c',
		name: 'HP EliteDesk 800 G4 DM 35W (TAA)',
		slots: 2
	},
	{
		id: 'ff79cbfc-d1a1-4eb9-b2e3-dc7bc0037df9',
		name: 'HP Proliant ML110 Gen9',
		slots: 8
	},
	//
	{
		id: '53d44ea1-5b9c-4b72-ab38-6d61358cf892',
		name: 'To be filled by O.E.M.',
		slots: 2
	},
	{
		id: '53d44ea1-5b9c-4b72-ab38-6d61358cf892',
		name: 'To Be Filled By O.E.M.',
		slots: 2
	},
	{
		id: '53d44ea1-5b9c-4b72-ab38-6d61358cf892',
		name: 'O.E.M',
		slots: 2
	},
	{
		id: '53d44ea1-5b9c-4b72-ab38-6d61358cf892',
		name: 'System Product Name',
		slots: 2
	},
	// Boleita
	{
		id: '3cecf14a-2d50-4733-84a1-fdc0659ea477',
		name: 'HP Compaq 8100 Elite CMT PC',
		slots: 4
	},
	// rest agencias
	{
		id: '1637067b-ffca-4ea3-963b-98d86e99e59e',
		name: 'HP Compaq dx2300 Microtower',
		slots: 2
	},
	{
		id: '230b3f27-edb6-4e62-8935-b5354de7bfa8',
		name: 'ThinkCentre M57e',
		slots: 2
	},
	{
		id: 'c1516b46-fe43-4b97-8ae3-e4395ef6284a',
		name: 'ThinkCentre M710s',
		slots: 2
	}
]

// Crear un Set de los nombres de procesador del segundo array para una búsqueda eficiente
const existingModels = new Set(
	modelComputer
		.map(p => {
			// Normalizar la cadena para una comparación más precisa
			return modelName.find(pn => pn === p.name)
		})
		.filter(Boolean)
) // Filter out null or undefined if no match is found

// Filtrar el primer array para obtener los nombres que no existen en el segundo
const missingModels = modelName.filter(name => {
	// Normalizar la cadena del primer array para la comparación
	return ![...existingModels].some(existingName => existingName && name.includes(existingName))
})

// console.log(missingModels)
module.exports = { modelComputer, modelName }
