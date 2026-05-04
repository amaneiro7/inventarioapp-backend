function capitalCadena(cadena) {
	return cadena
		.toLowerCase()
		.split('. ')
		.map(text =>
			text
				.split(' ')
				.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
				.join(' ')
		)
		.join('. ')
}

const newUserSinInfo = [
	{
		userName: 'aavila',
		name: 'Andrybel Georgina',
		lastname: 'Avila Gonzalez',
		nationality: 'V',
		cedula: '31798705',
		type: 'regular'
	},
	{
		userName: 'AFIGUEIRA',
		name: 'Alejandro Daniel',
		lastname: 'Figueira Urbina',
		nationality: 'V',
		cedula: '31707628',
		type: 'regular'
	},
	{
		userName: 'amorantes',
		name: 'Adriangel Jose',
		lastname: 'Morantes Gonzalez',
		nationality: 'V',
		cedula: '31806823',
		type: 'regular'
	},
	{
		userName: 'angimartinez',
		name: 'Angie Nazareth ',
		lastname: 'Martinez Castillo',
		nationality: 'V',
		cedula: '24219216',
		type: 'regular'
	},
	{
		userName: 'avelandia',
		name: 'Ariana Valentina',
		lastname: 'Velandia ',
		nationality: 'V',
		cedula: '31088808',
		type: 'regular'
	},
	{
		userName: 'cazambrano',
		name: 'Camila Sabrina',
		lastname: 'Zambrano Quintini',
		nationality: 'V',
		cedula: '30496595',
		type: 'regular'
	},
	{
		userName: 'ccontreras',
		name: 'Carlos Gabriel',
		lastname: 'Contreras Briceno',
		nationality: 'V',
		cedula: '34823102',
		type: 'regular'
	},
	{
		userName: 'dbasanta',
		name: 'Diego Jose',
		lastname: 'Basanta Sulbaran',
		nationality: 'V',
		cedula: '31798160',
		type: 'regular'
	},
	{
		userName: 'deyherrera',
		name: 'Deysimar Alejandra',
		lastname: 'Herrera Lara',
		nationality: 'V',
		cedula: '32190554',
		type: 'regular'
	},
	{
		userName: 'drondon',
		name: 'Diana Paola',
		lastname: 'Rondon Prato',
		nationality: 'V',
		cedula: '31945478',
		type: 'regular'
	},
	{
		userName: 'equintana',
		name: 'Eros Miguel',
		lastname: 'Quintana Zapata',
		nationality: 'V',
		cedula: '31448639',
		type: 'regular'
	},
	{
		userName: 'fratorres',
		name: 'Francheska Valentina',
		lastname: 'Torres Serrano',
		nationality: 'V',
		cedula: '31778074',
		type: 'regular'
	},
	{
		userName: 'gcortez',
		name: 'Gerardo David',
		lastname: 'Cortez Blanco',
		nationality: 'V',
		cedula: '30594313',
		type: 'regular'
	},
	{
		userName: 'gemarquez',
		name: 'Geraldin Yolennis',
		lastname: 'Marquez Rodriguez',
		nationality: 'V',
		cedula: '32529187',
		type: 'regular'
	},
	{
		userName: 'gerojas',
		name: 'Genesis Valeria',
		lastname: 'Rojas Rojas',
		nationality: 'V',
		cedula: '33653389',
		type: 'regular'
	},
	{
		userName: 'gmoya',
		name: 'Genesis Alexandra',
		lastname: 'Moya Perez',
		nationality: 'V',
		cedula: '32498902',
		type: 'regular'
	},
	{
		userName: 'hbarrios',
		name: 'Hilmer Alexander',
		lastname: 'Barrios Reyes',
		nationality: 'V',
		cedula: '6750433',
		type: 'regular'
	},
	{
		userName: 'hevalladares',
		name: 'Heiker Eduardo',
		lastname: 'Delgado Valladares',
		nationality: 'V',
		cedula: '25948490',
		type: 'regular'
	},
	{
		userName: 'hramirez',
		name: 'Heidy ',
		lastname: 'Ramirez Sudeban',
		nationality: 'V',
		cedula: '18363748',
		type: 'generic'
	},
	{
		userName: 'javgarcia',
		name: 'Javier Eduardo',
		lastname: 'Garcia Contreras',
		nationality: 'V',
		cedula: '30815692',
		type: 'regular'
	},
	{
		userName: 'jbarrero',
		name: 'Jonathan Rafael',
		lastname: 'Barrero Maneiro',
		nationality: 'V',
		cedula: '14444673',
		type: 'regular'
	},
	{
		userName: 'jchourio',
		name: 'Jorleanis Anibel',
		lastname: 'Chourio Fernandez',
		nationality: 'V',
		cedula: '32935177',
		type: 'regular'
	},
	{
		userName: 'jdiaz',
		name: 'Juan Grabiel',
		lastname: 'Diaz Villamediana',
		nationality: 'V',
		cedula: '16482217',
		type: 'regular'
	},
	{
		userName: 'jherrera',
		name: 'Jose Miguel',
		lastname: 'Herrera Fermenal',
		nationality: 'V',
		cedula: '31777987',
		type: 'regular'
	},
	{
		userName: 'jmaturel',
		name: 'Jesus Manuel',
		lastname: 'Maturel Padilla',
		nationality: 'V',
		cedula: '19355070',
		type: 'regular'
	},
	{
		userName: 'jnoguera',
		name: 'Jesus Isaac',
		lastname: 'Noguera Centeno',
		nationality: 'V',
		cedula: '18329708',
		type: 'regular'
	},
	{
		userName: 'josanabria',
		name: 'Jose Elias',
		lastname: 'Sanabria Martinez Proveedor De Servicio',
		nationality: 'V',
		cedula: '17474239',
		type: 'generic'
	},
	{
		userName: 'jovargas',
		name: 'Joselyn Andreina',
		lastname: 'Vargas Duran',
		nationality: 'V',
		cedula: '31761486',
		type: 'regular'
	},
	{
		userName: 'jpepper',
		name: 'Jhoanderson Gabriel',
		lastname: 'Pepper Graterol',
		nationality: 'V',
		cedula: '32088751',
		type: 'regular'
	},
	{
		userName: 'jvielma',
		name: 'Jose Daniel',
		lastname: 'Vielma Obando',
		nationality: 'V',
		cedula: '32238457',
		type: 'regular'
	},
	{
		userName: 'lbetancourt',
		name: 'Liset Yanderley',
		lastname: 'Betancourt Ruiz',
		nationality: 'V',
		cedula: '33155997',
		type: 'regular'
	},
	{
		userName: 'ldavila',
		name: 'Luzceidi Sarai',
		lastname: 'Davila Albarran',
		nationality: 'V',
		cedula: '32347649',
		type: 'regular'
	},
	{
		userName: 'lpalazzi',
		name: 'Luis Eduardo',
		lastname: 'Palazzi Celis',
		nationality: 'V',
		cedula: '30750931',
		type: 'apprentice'
	},
	{
		userName: 'lsobrado',
		name: 'Luis Manuel',
		lastname: 'Sobrado Suarez',
		nationality: 'V',
		cedula: '25870517',
		type: 'regular'
	},
	{
		userName: 'lugonzalez',
		name: 'Luis Carlos',
		lastname: 'Gonzalez Medina',
		nationality: 'V',
		cedula: '13692194',
		type: 'regular'
	},
	{
		userName: 'malfonzo',
		name: 'Mariannys Yohanney',
		lastname: 'Alfonzo Fernandez',
		nationality: 'V',
		cedula: '29547820',
		type: 'regular'
	},
	{
		userName: 'mcarrillo',
		name: 'Marilu ',
		lastname: 'Carrillo Silva',
		nationality: 'V',
		cedula: '6143194',
		type: 'regular'
	},
	{
		userName: 'mpinto',
		name: 'Marwill ',
		lastname: 'Pinto Sudeban',
		nationality: 'V',
		cedula: '23947107',
		type: 'generic'
	},
	{
		userName: 'msuarez',
		name: 'Miguel Angel',
		lastname: 'Suarez Porras',
		nationality: 'V',
		cedula: '27693858',
		type: 'regular'
	},
	{
		userName: 'ncontreras',
		name: 'Nalieska Paola',
		lastname: 'Contreras Ramos',
		nationality: 'V',
		cedula: '32435869',
		type: 'regular'
	},
	{
		userName: 'negonzalez',
		name: 'Nelson Enrique',
		lastname: 'Gonzalez Yabrudy',
		nationality: 'V',
		cedula: '17458711',
		type: 'regular'
	},
	{
		userName: 'nipolanco',
		name: 'Nicol Alexandra',
		lastname: 'Polanco Perez',
		nationality: 'V',
		cedula: '32972094',
		type: 'regular'
	},
	{
		userName: 'npolanco',
		name: 'Nohelia Chiquinquira',
		lastname: 'Polanco Pacheco',
		nationality: 'V',
		cedula: '33332875',
		type: 'regular'
	},
	{
		userName: 'nsalgado',
		name: 'Noah Josue',
		lastname: 'Salgado Beleno',
		nationality: 'V',
		cedula: '31693978',
		type: 'regular'
	},
	{
		userName: 'ocarrillo',
		name: 'Oscar Eduardo',
		lastname: 'Carrillo Sandoval',
		nationality: 'V',
		cedula: '28305290',
		type: 'regular'
	},
	{
		userName: 'ohiguera',
		name: 'Oriana Lismar',
		lastname: 'Higuera Suarez',
		nationality: 'V',
		cedula: '31946119',
		type: 'regular'
	},
	{
		userName: 'paudiaz',
		name: 'Paula Yaray',
		lastname: 'Diaz Tamayo',
		nationality: 'V',
		cedula: '32671987',
		type: 'regular'
	},
	{
		userName: 'ruperez',
		name: 'Ruben Alejandro',
		lastname: 'Perez Astudillo',
		nationality: 'V',
		cedula: '32045660',
		type: 'regular'
	},
	{
		userName: 'sgutierrez',
		name: 'Sergio Sebastian',
		lastname: 'Gutierrez Gutierrez',
		nationality: 'V',
		cedula: '28607338',
		type: 'regular'
	},
	{
		userName: 'slecheria',
		name: 'Sala De Junta',
		lastname: 'Lecheria',
		nationality: null,
		cedula: null,
		type: 'genericgular'
	},
	{
		userName: 'ssepulveda',
		name: 'Steven Alexander',
		lastname: 'Sepulveda Chavez',
		nationality: 'V',
		cedula: '34356016',
		type: 'regular'
	},
	{
		userName: 'svidal',
		name: 'Sonsire Cristina',
		lastname: 'Vidal Bermudez',
		nationality: 'V',
		cedula: '13802382',
		type: 'regular'
	},
	{
		userName: 'vnogueroles',
		name: 'Victoria Sagrario',
		lastname: 'Nogueroles Benacerraf',
		nationality: 'V',
		cedula: '21622251',
		type: 'regular'
	},
	{
		userName: 'vsanabria',
		name: 'Valentina Dayalith',
		lastname: 'Sanabria Arocha',
		nationality: 'V',
		cedula: '32629053',
		type: 'regular'
	},
	{
		userName: 'vvarani',
		name: 'Valeria Caterina',
		lastname: 'Varani Vezza',
		nationality: 'V',
		cedula: '25545413',
		type: 'regular'
	},
	{
		userName: 'yecastro',
		name: 'Yeferlix De Jesus ',
		lastname: 'Castro Guacaran',
		nationality: 'V',
		cedula: '34963334',
		type: 'regular'
	},
	{
		userName: 'yefarias',
		name: 'Yesidbel Dorianny',
		lastname: 'Farias Perez',
		nationality: 'V',
		cedula: '31341623',
		type: 'regular'
	},
	{
		userName: 'yefernandez',
		name: 'Yeison Abraham',
		lastname: 'Fernandez Hernandez',
		nationality: 'V',
		cedula: '32572728',
		type: 'regular'
	},
	{
		userName: 'yomoreno',
		name: 'Yohanyelis Greymar',
		lastname: 'Moreno Vargas',
		nationality: 'V',
		cedula: '31988267',
		type: 'regular'
	},
	{
		userName: 'yquintana',
		name: 'Yendrali Orianyeli',
		lastname: 'Quintana Sosa',
		nationality: 'V',
		cedula: '32436223',
		type: 'regular'
	},
	{
		userName: 'ytabares',
		name: 'Yubreidy Yesenia',
		lastname: 'Tabares Ortiz',
		nationality: 'V',
		cedula: '32010688',
		type: 'regular'
	}
]

module.exports = { newUserSinInfo, capitalCadena }
