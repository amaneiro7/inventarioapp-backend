const modelName = [
	'HP All-in-One 24-df0xxx',
	'HP ProDesk 600 G1 SFF',
	'HP Laptop 15t-dy200',
	'HP Compaq Pro 6300 SFF',
	'HP Compaq 6000 Pro SFF PC',
	'ThinkCentre M71e',
	'HP Compaq dc5800 Small Form Factor',
	'ThinkCentre M700',
	'G41D3C',
	'HP EliteDesk 800 G4 SFF',
	'HP EliteBook x360 830 G6',
	'ThinkCentre M73z',
	'ThinkCentre M72e',
	'HP Compaq 8000 Elite SFF PC',
	'H61MLV',
	'HP 200 G1 MT',
	'ThinkCentre M82',
	'HP ProDesk 600 G4 DM (TAA)',
	'HP EliteDesk 800 G4 DM 35W',
	'HP Compaq dc7800p Small Form Factor',
	'BYTE4',
	'HP EliteDesk 800 G1 SFF',
	'ThinkCentre M81',
	'HP Compaq 6200 Pro SFF PC',
	'HP ProDesk 600 G1 Base Model Small Form Factor PC',
	'HP EliteDesk 800 G4 DM 35W (TAA)',
	'HP Compaq Elite 8300 SFF',
	'HP ProDesk 400 G1 SFF',
	'ThinkCentre M83',
	'System Product Name',
	'ThinkCentre M720q',
	'HP EliteBook 840 G8 Notebook PC',
	'HP Z4 G4 Workstation',
	'HP Pavilion Laptop 15t-eg000',
	'ThinkCentre M70e',
	'HP Compaq Pro 4300 SFF PC',
	'HP ZBook 15u G5',
	'HP EliteDesk 800 G4 DM 65W (TAA)',
	'HP EliteBook 850 G7 Notebook PC',
	'HP ZBook 15 G3',
]


const modelComputer = [
	{
		id: '21969859-daa0-4916-a554-edff77e8f9ac',
		name: 'ThinkCentre M70e'
	},
	{
		id: '83c38f9b-a0ac-4350-9204-886ea8e4e967',
		name: 'ThinkCentre M71e'
	},
	{
		id: '9b43fe74-aa96-477e-8a25-cf3506742ccd',
		name: 'ThinkCentre M72e'
	},
	{
		id: '5da772a9-0e01-4689-9afb-717ccf68cf3f',
		name: 'ThinkCentre M73z'
	},
	{
		id: '4096012f-bed6-4975-a17c-6496c5573785',
		name: 'Lenovo C260'
	},
	{
		id: '1aa81dee-015b-4999-80f5-a5ecac793bca',
		name: 'ThinkCentre M700'
	},
	{
		id: 'cb7c8589-4fbd-45c5-94d9-3d251273d295',
		name: 'ThinkCentre M710S'
	},
	{
		id: '7003ef87-9563-4783-a758-16c471010243',
		name: 'ThinkCentre M720s'
	},
	{
		id: 'ab48a708-cead-47c7-b974-9121c0e71265',
		name: 'ThinkCentre M810Z'
	},
	{
		id: 'ba260f98-0042-4be7-9d9d-1c6dca5010c3',
		name: 'ThinkCentre M91p'
	},
	{
		id: 'ec9e560a-318d-42a7-85cb-ad6fc08e57d9',
		name: 'ThinkCentre M81'
	},
	{
		id: 'd18633fe-f223-4ca7-a3b6-5696e6e81f6a',
		name: 'ThinkCentre M82'
	},
	{
		id: '82a6b980-e0cb-4ef0-93da-380bd298eab1',
		name: 'ThinkCentre M83'
	},
	{
		id: 'c11d727c-f6b7-4ddf-a597-a6b1c1d06c1c',
		name: 'ThinkCentre AD4'
	},
	{
		id: 'cdfd08c0-59d0-4bfc-a021-e6d53e1325fc',
		name: 'HP Compaq Elite 8300 SFF'
	},
	{
		id: '78e6fc44-7d45-47e6-9d78-aecc66ed74d4',
		name: 'HP Compaq 8000 Elite SFF'
	},
	{
		id: 'b67c290e-c186-4ab7-9fd3-92689e1bcbaa',
		name: 'HP Compaq Pro 4300 SFF PC'
	},
	{
		id: '4cb2e608-5f28-44af-af75-59cb2ca2fbab',
		name: 'HP Compaq Pro 6300 SFF'
	},
	{
		id: '9e376eb0-7559-41c1-82aa-36b6fa4cccf1',
		name: 'HP Compaq 6000 Pro SFF PC'
	},
	{
		id: 'ce51d092-332e-42ac-8b27-df7da5d3463a',
		name: 'HP Compaq 6200 Pro SFF PC'
	},
	{
		id: '8145c77f-a75e-4cfa-9634-a4eb17540cde',
		name: 'HP Compaq dc5700 Small Form Factor'
	},
	{
		id: 'ff79cbfc-d1a1-4eb9-b2e3-dc7bc0037df9',
		name: 'HP Proliant ML110 Gen9'
	},
	{
		id: 'bd0b6c7d-4d17-48cd-8b61-d4a167ad588f',
		name: 'HP Compaq dc5800 Small Form Factor'
	},
	{
		id: '15b7a063-4e99-4ec1-90ca-94a6e0edf000',
		name: 'HP Compaq dc5100 Small Form Factor'
	},
	{
		id: '868a0697-ecfa-471b-8705-31c298e6399a',
		name: 'HP 200 G1 MT'
	},
	{
		id: 'bf10b490-f61d-4932-8bf4-05822213212d',
		name: 'HP EliteBook 8470p'
	},
	{
		id: 'ba8097b3-660f-4e09-a6fc-23c1e6332a90',
		name: 'HP EliteBook x360 1030 G3'
	},
	{
		id: 'e52f9a4b-b708-4137-8d33-ca60497cfdbf',
		name: 'HP EliteBook x360 830 G6'
	},
	{
		id: 'a1a929ed-1be1-46fd-9da9-e7207b4f3dbc',
		name: 'HP Laptop 15t-dy200'
	},
	{
		id: '3fdb6958-f036-47e7-a583-89956e7f9d78',
		name: 'HP EliteBook 1040 G4'
	},
	{
		id: '206ecb35-1e43-47e2-85b4-f7b6405ab638',
		name: 'HP ProBook 4440s'
	},
	{
		id: 'eeb3420d-a6b8-4c0f-bcc8-048707ecc758',
		name: 'Latitude 5300 2-in-1'
	},
	{
		id: '24a4ae7d-8570-45f3-b103-ea35a0f7c43c',
		name: 'Latitude 5400'
	},
	{
		id: 'eaf80960-440d-462b-8276-fac5227ba608',
		name: 'MacBook Pro Retina'
	},
	{
		id: '666c3659-f97a-4f4b-a082-dc6cb87c5795',
		name: 'HP Pavilion dv4 Notebook PC'
	},
	{
		id: '17212b01-df51-4a56-81ce-c02f67e3756b',
		name: 'HP Pavilion G4-1388la'
	},
	{
		id: '763223a6-bf6e-48bc-a5c7-4773cf7bdc2c',
		name: 'Lenovo E49'
	},
	{
		id: '6f20dc8d-da9d-4a71-860b-a2049314c0df',
		name: 'Lenovo G480'
	},
	{
		id: '8e7394ee-c130-4417-a398-a6c597c2e6e1',
		name: 'Lenovo G50-70'
	},
	{
		id: '67e1f755-1611-4f84-9478-08fd9bc35af3',
		name: 'ThinkPad L412'
	},
	{
		id: '69d91018-3cd0-48d4-b33d-e8a0638cf693',
		name: 'ThinkPad SL400'
	},
	{
		id: 'c558ac7b-0e11-4d4a-a0c7-1d39c630afd3',
		name: 'ThinkPad SL410'
	},
	{
		id: '8279679f-afda-4102-bcd3-b34422ef3772',
		name: 'ThinkPad T61'
	},
	{
		id: '5f3103cb-bcba-4aeb-978c-50a2ad12c38b',
		name: 'Lenovo V330-14IKB'
	},
	{
		id: '208c2653-294a-4ed5-bf79-848dc312aac6',
		name: 'ThinkPad X230'
	},
	{
		id: 'd983ef90-3a17-4dce-a0d1-6ba7c19d729e',
		name: 'ThinkPad X1 Carbon 7th'
	},
	{
		id: 'cbd39f5a-d5da-4f52-8a31-6a61c34cc088',
		name: 'ThinkPad X1 Carbon 5th'
	},
	{
		id: '7fc1714f-868d-472d-ac3f-17602dee36f0',
		name: 'ThinkPad Edge'
	},
	{
		id: 'acdd72ac-df03-48d8-a04a-e66a75f0a574',
		name: 'ThinkCentre M720q'
	},
	{
		id: '9598164f-1192-4c00-afa1-b1fb62d075f3',
		name: 'ThinkServer TS430'
	},

	{
		id: '12475e5d-bfdf-4ddd-958b-5e8d776896a5',
		name: 'BYTE4'
	},
	{
		id: 'ac1d4e47-86d3-4e8d-9eff-eae3fb9cd517',
		name: 'G41D3C'
	},
	{
		id: 'ae542161-3209-49ed-95ee-cb7d3dad5d61',
		name: 'H61MLV'
	},
	{
		id: 'c156d9ec-1bc2-413d-8a2a-f9b563811e06',
		name: 'HP All-in-One 24-e0XX'
	},
	{
		id: '2f007880-8f16-477e-a15e-e7f1773d5afa',
		name: 'HP Compaq dc7800 Convertible Minitower'
	},
	{
		id: '5b49985c-9146-4430-90a3-30c77741b3dc',
		name: 'HP d220 MT (DV667A)'
	},
	{
		id: '848d7ede-2a6c-445e-8940-184a4c87bde4',
		name: 'HP EliteBook 850 G7 Notebook PC'
	},
	{
		id: 'd1204e34-6c6d-4623-9210-d39632e6ab65',
		name: 'HP EliteDesk 800 G1 SFF'
	},
	{
		id: 'f1813ec1-a819-4cf5-8af1-2bbf3790c02c',
		name: 'HP EliteDesk 800 G4 DM 35W (TAA)'
	},
	{
		id: 'cfd62c3f-1610-4613-8c13-b9fd069a0430',
		name: 'HP EliteDesk 800 G4 DM 65W (TAA)'
	},
	{
		id: '00ea01fd-51b5-4520-b1e0-9982a0b492b5',
		name: 'HP EliteDesk 800 G4 SFF'
	},
	{
		id: 'd7006156-dd6d-4577-9de4-0056cadfef79',
		name: 'HP ProDesk 400 G1 SFF'
	},
	{
		id: '9a2674ac-6a13-4cb6-820d-eb3f0004678c',
		name: 'HP ProDesk 600 G1 SFF'
	},
	{
		id: '949b2415-ec6b-4941-a27e-32949162ee8d',
		name: 'HP ProDesk 600 G4 DM (TAA)'
	},
	{
		id: '269f43fb-b751-4dd7-b370-f8ce4d2bbd61',
		name: 'HP Z4 G4 Workstation'
	},
	{
		id: 'd2396d2f-0aaf-49ef-88da-3e79ecbf24ee',
		name: 'HP ZBook 15 G3'
	},
	{
		id: '58cc0785-ad32-4351-9e72-ddb3bced2806',
		name: 'HP ZBook 15u G5'
	},
	{
		id: '9bdad8c9-8684-4345-abe6-3cf5593e551a',
		name: 'Inspire'
	},
	{
		id: '53d44ea1-5b9c-4b72-ab38-6d61358cf892',
		name: 'OEM'
	},
	{
		id: '4ea66d3d-6117-4587-9507-6e87fef0a339',
		name: 'HP All-in-One 24-df0xxx',
	},
	{
		id: '2f4993bc-d1b5-4c53-9e92-a3c38dd75040',
		name: 'HP EliteDesk 800 G4 DM 35W',
	},
	{
		id: 'bf983eed-1209-4c4e-a691-70e5bf61e076',
		name: 'HP Compaq dc7800p Small Form Factor',
	},
	{
		id: '8b0befb9-5d83-4cfe-8f4b-717adae0e6b0',
		name: 'HP EliteBook 840 G8 Notebook PC',
	},
	{
		id: 'ba04c276-164a-4fe2-9f80-5909b1560c08',
		name: 'HP Pavilion Laptop 15t-eg000',
	},
]

// Crear un Set de los nombres de procesador del segundo array para una búsqueda eficiente
const existingModels = new Set(modelComputer.map(p => {
	// Normalizar la cadena para una comparación más precisa	
	return modelName.find(pn => pn === p.name);
}).filter(Boolean)); // Filter out null or undefined if no match is found

// Filtrar el primer array para obtener los nombres que no existen en el segundo
const missingModels = modelName.filter(name => {
	// Normalizar la cadena del primer array para la comparación
	return ![...existingModels].some(existingName => existingName && name.includes(existingName));
})

//console.log(modelComputer.find(processor => processor.name === "HP EliteBook 850 G7 Notebook PC").id);

module.exports = { modelComputer, modelName }
