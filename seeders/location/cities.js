const states = require('./state')

const cityOnlyNames = {
	ANACO: 'Anaco',
	BARCELONA: 'Barcelona',
	ELTIGRE: 'El Tigre',
	ELTIGRITO: 'El Tigrito',
	LECHERIAS: 'Lecherias',
	PUERTOLACRUZ: 'Puerto la Cruz',
	PIRITU: 'Píritu',
	SANFERNANDODEAPURE: 'San Fernando de Apure',
	CAGUA: 'Cagua',
	CHORONI: 'Choroní',
	LAVICTORIA: 'La Victoria',
	MARACAY: 'Maracay',
	PALONEGRO: 'Palo Negro',
	SANSEBASTIAN: 'San Sebastián',
	TURMERO: 'Turmero',
	VILLADECURA: 'Villa de Cura',
	BARINAS: 'Barinas',
	CIUDADBOLIVAR: 'Ciudad Bolívar',
	PUERTOORDAZ: 'Puerto Ordaz',
	SANFELIZ: 'San Feliz',
	UNARE: 'Unare',
	BEJUMA: 'Bejuma',
	GUACARA: 'Guacara',
	LOSGUAYOS: 'Los Guayos',
	MONTALBAN: 'Montalbán',
	NAGUANAGUA: 'Naguanagua',
	PUERTOCABELLO: 'Puerto Cabello',
	SANDIEGO: 'San Diego',
	TOCUYITO: 'Tocuyito',
	VALENCIA: 'Valencia',
	SANCARLOS: 'San Carlos',
	TINAQUILLO: 'Tinaquillo',
	CASACOIMA: 'Casacoima',
	TUCUPITA: 'Tucupita',
	CARACAS: 'Caracas',
	CORO: 'Coro',
	DABAJURO: 'Dabajuro',
	PUNTOFIJO: 'Punto FIjo',
	CALABOZO: 'Calabozo',
	ELSOMBRERO: 'El Sombrero',
	SANJUANDELOSMORROS: 'San Juan de los Morros',
	TUCUPIDO: 'Tucupido',
	VALLEDELAPASCUA: 'Valle de la Pascua',
	BARQUISIMETO: 'Barquisimeto',
	CABUDARE: 'Cabudare',
	CARORA: 'Carora',
	QUIBOR: 'Quíbor',
	ELVIGIA: 'El Vigía',
	MERIDA: 'Mérida',
	CARACAS: 'Caracas',
	CARRIZALES: 'Carrizales',
	CAUCAGUA: 'Caucagua',
	CHARAVALLE: 'Charavalle',
	GUARENAS: 'Guarenas',
	GUATIRE: 'Guatire',
	LOSTEQUES: 'Los Teques',
	SANANTONIODELOSALTES: 'San Antonio de los Altes',
	SANJOSEDERIOCHICO: 'San José de Rio Chico',
	SANTATERESA: 'Santa Teresa',
	MATURIN: 'Maturín',
	JUANGRIEGO: 'Juan Griego',
	PAMPATAR: 'Pampatar',
	PORLAMAR: 'Porlamar',
	ACARIGUA: 'Acarigua',
	'ACARIGUA-ANAURE': 'Acarigua-Anaure',
	GUANARE: 'Guanare',
	TUREN: 'Turén',
	CARUPANO: 'Carúpano',
	CASANAY: 'Casanay',
	CUMANA: 'Cumaná',
	SANANTONIO: 'San Antonio',
	SANCRISTOBAL: 'San Cristóbal',
	BOCONO: 'Boconó',
	LAPUERTA: 'La Puerta',
	SABANADEMENDOZA: 'Sabana de Mendoza',
	SANRAFAELDECARVAJAL: 'San Rafael de Carvajal',
	SANTAISABEL: 'Santa Isabel',
	TRUJILLO: 'Trujillo',
	VALERA: 'Valera',
	CATIALAMAR: 'Catia la Mar',
	LAGUAIRA: 'La Guaira',
	NAIGUATA: 'Naiguatá',
	SANFELIPE: 'San Felipe',
	YARITAGUA: 'Yaritagua',
	CABIMAS: 'Cabimas',
	CAJASECA: 'Caja Seca',
	CARRASQUERO: 'Carrasquero',
	CIUDADOJEDA: 'Ciudad Ojeda',
	LACONCEPCION: 'La Concepción',
	LAGUNILLAS: 'Lagunillas',
	MACHIQUES: 'Machiques',
	MARACAIBO: 'Maracaibo',
	MENEGRANDE: 'Mene Grande',
	PUERTOSDEALTAGRACIA: 'Puertos de Altagracia',
	SANFRANCISCOMARACAIBO: 'San Francisco Maracaibo',
	SANRAFAELDELMOJAN: 'San Rafael del Moján',
	SANTABARBARADELZULIA: 'Santa Bárbara del Zulia',
	SANTARITA: 'Santa Rita',
	VILLADELROSARIO: 'Villa del Rosario'
}

const cities = [
	{
		id: '86d78e1c-a443-40f6-afff-7dd173be8317',
		name: 'Anaco',
		stateId: states.filter(state => state.name === 'Anzoátegui')[0].id
	},
	{
		id: '7119a884-a7f4-4e35-8418-44d215f08ca0',
		name: 'Barcelona',
		stateId: states.filter(state => state.name === 'Anzoátegui')[0].id
	},
	{
		id: 'bda29faa-f1e3-442c-9789-0ea7d1a95f9f',
		name: 'El Tigre',
		stateId: states.filter(state => state.name === 'Anzoátegui')[0].id
	},
	{
		id: '9b5158d4-2c38-41f6-895a-558e5b04b6e6',
		name: 'El Tigrito',
		stateId: states.filter(state => state.name === 'Anzoátegui')[0].id
	},
	{
		id: '891063d1-8293-4bd3-9b86-88ed8d9cc339',
		name: 'Lecherias',
		stateId: states.filter(state => state.name === 'Anzoátegui')[0].id
	},
	{
		id: '53fea009-7d8e-4687-886b-f32daf1c2689',
		name: 'Puerto la Cruz',
		stateId: states.filter(state => state.name === 'Anzoátegui')[0].id
	},
	{
		id: '3a1bb06c-b90e-4031-89a4-0e61ed1101ce',
		name: 'Píritu',
		stateId: states.filter(state => state.name === 'Anzoátegui')[0].id
	},
	{
		id: 'b0a63466-c4b0-4d14-a685-d98f73a544f2',
		name: 'San Fernando de Apure',
		stateId: states.filter(state => state.name === 'Apure')[0].id
	},
	{
		id: 'd4c028b2-e8fa-45ce-af4f-6bd2af2406a7',
		name: 'Cagua',
		stateId: states.filter(state => state.name === 'Aragua')[0].id
	},
	{
		id: '640dfe51-57a3-45f2-a200-6df394a4eb6d',
		name: 'Choroní',
		stateId: states.filter(state => state.name === 'Aragua')[0].id
	},
	{
		id: '93b49f49-180e-4043-916b-8df6241dfeb7',
		name: 'La Victoria',
		stateId: states.filter(state => state.name === 'Aragua')[0].id
	},
	{
		id: '6b8da333-c074-450f-9dcf-286961c30486',
		name: 'Maracay',
		stateId: states.filter(state => state.name === 'Aragua')[0].id
	},
	{
		id: 'd618330a-0245-485b-8478-6816d972ff96',
		name: 'Palo Negro',
		stateId: states.filter(state => state.name === 'Aragua')[0].id
	},
	{
		id: 'f5959267-0184-4dec-a2c8-1abcd1ffa6ca',
		name: 'San Sebastián',
		stateId: states.filter(state => state.name === 'Aragua')[0].id
	},
	{
		id: '469fb379-c1be-46fd-9e76-49d319898910',
		name: 'Turmero',
		stateId: states.filter(state => state.name === 'Aragua')[0].id
	},
	{
		id: '12b0de95-1702-4c06-9c8b-15566fabe45a',
		name: 'Villa de Cura',
		stateId: states.filter(state => state.name === 'Aragua')[0].id
	},
	{
		id: 'c17c598f-cbbd-4fe1-9238-c7fe2c31ef70',
		name: 'Barinas',
		stateId: states.filter(state => state.name === 'Barinas')[0].id
	},
	{
		id: '2d4e0d96-6cd4-45bd-8362-4aa3be59022d',
		name: 'Ciudad Bolívar',
		stateId: states.filter(state => state.name === 'Bolívar')[0].id
	},
	{
		id: 'd114c619-b2a8-4b22-bce1-e91c53fad632',
		name: 'Puerto Ordaz',
		stateId: states.filter(state => state.name === 'Bolívar')[0].id
	},
	{
		id: 'b2018dfd-d356-497b-9615-f02f0068d42f',
		name: 'San Feliz',
		stateId: states.filter(state => state.name === 'Bolívar')[0].id
	},
	{
		id: '7a5e26c9-6832-4479-b7fd-a0b6c71a3c72',
		name: 'Unare',
		stateId: states.filter(state => state.name === 'Bolívar')[0].id
	},
	{
		id: '8ddc6780-caf8-4c26-87de-018ac7efa14b',
		name: 'Bejuma',
		stateId: states.filter(state => state.name === 'Carabobo')[0].id
	},
	{
		id: '15415b44-083d-4910-b124-b01b3caf1994',
		name: 'Guacara',
		stateId: states.filter(state => state.name === 'Carabobo')[0].id
	},
	{
		id: 'b1c708cb-f931-42d5-81d0-b8cb81bb3e94',
		name: 'Los Guayos',
		stateId: states.filter(state => state.name === 'Carabobo')[0].id
	},
	{
		id: '4eec1167-0679-4347-9c26-8f62536a9099',
		name: 'Montalbán',
		stateId: states.filter(state => state.name === 'Carabobo')[0].id
	},
	{
		id: 'b4b3990a-c2b2-4801-8c47-af1f5971d580',
		name: 'Naguanagua',
		stateId: states.filter(state => state.name === 'Carabobo')[0].id
	},
	{
		id: '94bdbed4-a2e8-4120-a743-f1230bb9d6c3',
		name: 'Puerto Cabello',
		stateId: states.filter(state => state.name === 'Carabobo')[0].id
	},
	{
		id: 'bd48f478-c939-400f-972a-c47fc6e84fbe',
		name: 'San Diego',
		stateId: states.filter(state => state.name === 'Carabobo')[0].id
	},
	{
		id: 'e7bf8239-720a-42b3-a6f2-fac9e5965b71',
		name: 'Tocuyito',
		stateId: states.filter(state => state.name === 'Carabobo')[0].id
	},
	{
		id: 'aa5b0598-0ca7-433a-9298-85b7fc4ad075',
		name: 'Valencia',
		stateId: states.filter(state => state.name === 'Carabobo')[0].id
	},
	{
		id: 'cf366031-b11a-48c9-9fed-6345864c268c',
		name: 'San Carlos',
		stateId: states.filter(state => state.name === 'Cojedes')[0].id
	},
	{
		id: '825e0853-e310-4a75-9a11-5326c996cff0',
		name: 'Tinaquillo',
		stateId: states.filter(state => state.name === 'Cojedes')[0].id
	},
	{
		id: '7541d252-685c-47b5-88e9-a7a6bdcc0fe4',
		name: 'Casacoima',
		stateId: states.filter(state => state.name === 'Delta Amacuro')[0].id
	},
	{
		id: '63cf9da1-abc9-481d-b6bc-281f674b99e6',
		name: 'Tucupita',
		stateId: states.filter(state => state.name === 'Delta Amacuro')[0].id
	},
	{
		id: '6c4ed5ea-14e0-41dc-9086-f9217652878f',
		name: 'Caracas',
		stateId: states.filter(state => state.name === 'Distrito Capital')[0].id
	},
	{
		id: 'c77c9282-6944-46d1-803c-b8c86a43478c',
		name: 'Coro',
		stateId: states.filter(state => state.name === 'Falcón')[0].id
	},
	{
		id: '203ffe9c-c92e-42a1-9f47-9ca8523f4f1b',
		name: 'Dabajuro',
		stateId: states.filter(state => state.name === 'Falcón')[0].id
	},
	{
		id: 'c2d0ef50-8ca4-45fd-8f95-c6e311bc90e1',
		name: 'Punto FIjo',
		stateId: states.filter(state => state.name === 'Falcón')[0].id
	},
	{
		id: '6a909b7a-7a8a-4b9c-901c-b95f4f1f0452',
		name: 'Calabozo',
		stateId: states.filter(state => state.name === 'Guárico')[0].id
	},
	{
		id: '5b66d890-454e-4647-9f14-49882cf10827',
		name: 'El Sombrero',
		stateId: states.filter(state => state.name === 'Guárico')[0].id
	},
	{
		id: 'f0ca989a-a710-4df7-9173-6eff89d007b0',
		name: 'San Juan de los Morros',
		stateId: states.filter(state => state.name === 'Guárico')[0].id
	},
	{
		id: '6f5ea7f1-76cf-4364-af9a-90b1dab85d07',
		name: 'Tucupido',
		stateId: states.filter(state => state.name === 'Guárico')[0].id
	},
	{
		id: 'e3059983-2703-4624-8897-f1d8e79ca72f',
		name: 'Valle de la Pascua',
		stateId: states.filter(state => state.name === 'Guárico')[0].id
	},
	{
		id: 'a689d020-7bbb-4246-86ad-5504a99b5972',
		name: 'Barquisimeto',
		stateId: states.filter(state => state.name === 'Lara')[0].id
	},
	{
		id: '3ecc5384-2ec8-46b1-9282-12700ecfb7ab',
		name: 'Cabudare',
		stateId: states.filter(state => state.name === 'Lara')[0].id
	},
	{
		id: 'ad9809fb-94ec-4c0d-809f-ef02a0f78b27',
		name: 'Carora',
		stateId: states.filter(state => state.name === 'Lara')[0].id
	},
	{
		id: '9115d78a-d5d7-4331-acb7-9c1fbc5ac160',
		name: 'Quíbor',
		stateId: states.filter(state => state.name === 'Lara')[0].id
	},
	{
		id: '125e92cd-c61d-4a01-9a63-7a649b11223d',
		name: 'El Vigía',
		stateId: states.filter(state => state.name === 'Mérida')[0].id
	},
	{
		id: '37ad2f26-4c9c-44fb-bf9d-e15b3a4b9d0f',
		name: 'Mérida',
		stateId: states.filter(state => state.name === 'Mérida')[0].id
	},
	{
		id: '2dffd58b-d442-42f4-8340-310eca4eecbb',
		name: 'Caracas',
		stateId: states.filter(state => state.name === 'Miranda')[0].id
	},
	{
		id: 'a27b7c13-cf6d-464c-a91c-896c45bdc9d6',
		name: 'Carrizales',
		stateId: states.filter(state => state.name === 'Miranda')[0].id
	},
	{
		id: 'd7b7288b-2313-4a9c-8dc6-05326d039c1b',
		name: 'Caucagua',
		stateId: states.filter(state => state.name === 'Miranda')[0].id
	},
	{
		id: '237ef1ba-6144-46fe-9e9b-4dc912fd2177',
		name: 'Charavalle',
		stateId: states.filter(state => state.name === 'Miranda')[0].id
	},
	{
		id: '6ebb9fae-c13f-4b04-a80f-228549998792',
		name: 'Guarenas',
		stateId: states.filter(state => state.name === 'Miranda')[0].id
	},
	{
		id: '088ab9e4-8ed4-4d3a-80ad-ed11db37fd93',
		name: 'Guatire',
		stateId: states.filter(state => state.name === 'Miranda')[0].id
	},
	{
		id: '620010d3-be4e-4c45-a1a2-1840461fdead',
		name: 'Los Teques',
		stateId: states.filter(state => state.name === 'Miranda')[0].id
	},
	{
		id: '22061a08-77cf-4714-8814-ceaad6867c9d',
		name: 'San Antonio de los Altes',
		stateId: states.filter(state => state.name === 'Miranda')[0].id
	},
	{
		id: 'b3207aeb-f7dd-435a-8cfc-0cc676f42c8d',
		name: 'San José de Rio Chico',
		stateId: states.filter(state => state.name === 'Miranda')[0].id
	},
	{
		id: 'efcb484a-232d-4ba4-a800-1ca13ce98874',
		name: 'Santa Teresa',
		stateId: states.filter(state => state.name === 'Miranda')[0].id
	},
	{
		id: 'c104a9ff-dd72-443c-8651-9d26acb8f1f5',
		name: 'Maturín',
		stateId: states.filter(state => state.name === 'Monagas')[0].id
	},
	{
		id: '914c268e-4f5e-4c56-9d7d-f0c87809f9f9',
		name: 'Juan Griego',
		stateId: states.filter(state => state.name === 'Nueva Esparta')[0].id
	},
	{
		id: '94596686-902c-4e56-a8c4-22c40492e0cd',
		name: 'Pampatar',
		stateId: states.filter(state => state.name === 'Nueva Esparta')[0].id
	},
	{
		id: 'f159bf2d-4ee7-467c-84e8-eb3f5886dd27',
		name: 'Porlamar',
		stateId: states.filter(state => state.name === 'Nueva Esparta')[0].id
	},
	{
		id: 'a6793790-bb57-46c4-a686-140683e1f0ac',
		name: 'Acarigua',
		stateId: states.filter(state => state.name === 'Portuguesa')[0].id
	},
	{
		id: '00fe8ce5-409b-407e-bf87-d4886d51c7eb',
		name: 'Acarigua-Anaure',
		stateId: states.filter(state => state.name === 'Portuguesa')[0].id
	},
	{
		id: 'ed5af202-0ed4-40b0-932c-7b83268eb140',
		name: 'Guanare',
		stateId: states.filter(state => state.name === 'Portuguesa')[0].id
	},
	{
		id: '344f8514-117e-41d7-9b29-91d04ebccd59',
		name: 'Turén',
		stateId: states.filter(state => state.name === 'Portuguesa')[0].id
	},
	{
		id: '3beab800-1203-4350-bdb0-a0417d6a5c42',
		name: 'Carúpano',
		stateId: states.filter(state => state.name === 'Sucre')[0].id
	},
	{
		id: 'c59c4bf4-3cb3-4d94-9e34-970d308585c6',
		name: 'Casanay',
		stateId: states.filter(state => state.name === 'Sucre')[0].id
	},
	{
		id: '1d47a1b5-7460-4ba4-9279-b5434d005cbe',
		name: 'Cumaná',
		stateId: states.filter(state => state.name === 'Sucre')[0].id
	},
	{
		id: '3c8c83d5-bb9a-4275-a59d-8c9c98ef07d2',
		name: 'San Antonio',
		stateId: states.filter(state => state.name === 'Táchira')[0].id
	},
	{
		id: '95601eaa-e256-4718-8b82-c8012e9b9ba6',
		name: 'San Cristóbal',
		stateId: states.filter(state => state.name === 'Táchira')[0].id
	},
	{
		id: 'ffa444e5-d73b-4da5-b0ff-663bc6382601',
		name: 'Boconó',
		stateId: states.filter(state => state.name === 'Trujillo')[0].id
	},
	{
		id: 'f689a313-d9d1-41bc-8e3a-c7a1a3c8546c',
		name: 'La Puerta',
		stateId: states.filter(state => state.name === 'Trujillo')[0].id
	},
	{
		id: '1698b2c7-1d17-487b-afa0-af29cc8812d1',
		name: 'Sabana de Mendoza',
		stateId: states.filter(state => state.name === 'Trujillo')[0].id
	},
	{
		id: '44e2d953-3f81-48be-8461-313f6cf73ca9',
		name: 'San Rafael de Carvajal',
		stateId: states.filter(state => state.name === 'Trujillo')[0].id
	},
	{
		id: '7af3fbf5-dbf8-4947-84f7-bdc6f9fb23da',
		name: 'Santa Isabel',
		stateId: states.filter(state => state.name === 'Trujillo')[0].id
	},
	{
		id: '9017120d-0181-47a9-8483-75659d316fc4',
		name: 'Trujillo',
		stateId: states.filter(state => state.name === 'Trujillo')[0].id
	},
	{
		id: 'd9a8a463-955e-4579-8d2e-8437bb06a1ac',
		name: 'Valera',
		stateId: states.filter(state => state.name === 'Trujillo')[0].id
	},
	{
		id: 'da594a65-c166-44c5-90f8-970b790a1ff7',
		name: 'Catia la Mar',
		stateId: states.filter(state => state.name === 'Vargas')[0].id
	},
	{
		id: '81496094-26af-4b69-b44f-9575f123f478',
		name: 'La Guaira',
		stateId: states.filter(state => state.name === 'Vargas')[0].id
	},
	{
		id: '22d9384c-1b04-41ad-ae05-3a3c9edec437',
		name: 'Naiguatá',
		stateId: states.filter(state => state.name === 'Vargas')[0].id
	},
	{
		id: '629d86e2-cbdb-4fba-b4e9-b87fd0291362',
		name: 'San Felipe',
		stateId: states.filter(state => state.name === 'Yaracuy')[0].id
	},
	{
		id: '0dc9c544-74e6-435e-b2d8-23146eea652f',
		name: 'Yaritagua',
		stateId: states.filter(state => state.name === 'Yaracuy')[0].id
	},
	{
		id: 'eebc4e88-f847-4ca3-9a03-a0f7400d490d',
		name: 'Cabimas',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: '8213c3ad-51cd-46af-abba-54a58006474a',
		name: 'Caja Seca',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: 'bfd46ca1-33d4-4383-b25d-a2342ec09ad7',
		name: 'Carrasquero',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: 'dca35196-15ca-4d3f-bf11-85bddfa6e2e2',
		name: 'Ciudad Ojeda',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: 'ffc7801b-d5a4-4917-8e15-4017086d05fc',
		name: 'La Concepción',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: '5a4b4331-7b39-44fb-a0b5-061ffaa90882',
		name: 'Lagunillas',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: '62f84cbd-9755-408c-82cd-3e6ab55f0ace',
		name: 'Machiques',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: '06a110d8-e5ef-4ccb-8d51-13e6d118faf3',
		name: 'Maracaibo',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: '3ad8d030-13ce-4875-b3ec-6071629cf4e2',
		name: 'Mene Grande',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: 'cefef6ed-6518-4ae4-9a89-dc38030e2360',
		name: 'Puertos de Altagracia',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: 'da861f1b-d0a4-42dc-bff8-df3eebab10fe',
		name: 'San Francisco Maracaibo',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: 'fd99d158-eb20-4c46-9a27-3a140213264f',
		name: 'San Rafael del Moján',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: '5b88e720-99a8-46b5-acda-554942de4520',
		name: 'Santa Bárbara del Zulia',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: '895571e2-942a-4aa5-882e-b413fdb8b3ce',
		name: 'Santa Rita',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	},
	{
		id: '93b510b0-7b31-4508-a37b-bad2d1d038b0',
		name: 'Villa del Rosario',
		stateId: states.filter(state => state.name === 'Zulia')[0].id
	}
]

module.exports = { cities, cityOnlyNames }
