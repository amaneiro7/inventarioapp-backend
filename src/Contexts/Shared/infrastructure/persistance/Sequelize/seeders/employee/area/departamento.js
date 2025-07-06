const { VPData, VPOnlyNames } = require('./vicepresidencia')
const departamentoOnlyNames = {
	'COORDINACIÓN ATENCIÓN AL ACCIONISTA': 'Coordinación Atención Al Accionista',
	'COORDINACION OPERACIONES ACCIONARIAS': 'Coordinacion Operaciones Accionarias',
	'GERENCIA DE ADMINISTRACIÓN PLATAFORMA MEDIA': 'Gerencia De Administración Plataforma Media',
	'GERENCIA DE CONTROL DE CALIDAD': 'Gerencia De Control De Calidad',
	'GERENCIA DE CREACIÓN DE USUARIOS': 'Gerencia De Creación De Usuarios',
	'GERENCIA DE CUMPLIMIENTO': 'Gerencia De Cumplimiento',
	'GERENCIA DE SEGURIDAD AS-400': 'Gerencia De Seguridad AS-400',
	'GERENCIA DE SEGURIDAD PERIMETRAL': 'Gerencia De Seguridad Perimetral',
	'GERENCIA DE ADMINISTRACIÓN ACCESO IDENTIDAD': 'Gerencia De Administración Acceso Identidad',
	'GERENCIA DE AREA DE CONTABILIDAD': 'Gerencia De Area De Contabilidad',
	'GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENERALES': 'Gerencia De Área Compras Y Servicios Generales',
	'GERENCIA DE AREA NEGOCIOS FIDUCIARIOS': 'Gerencia De Area Negocios Fiduciarios',
	'GERENCIA DE DISTRIBUCIÓN': 'Gerencia De Distribución',
	'GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO': 'Gerencia De Area CTRL Contable Y Gestión De Gasto',
	'GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS': 'Gerencia De Area Control De Inmuebles Arrendados',
	'GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES': 'Gerencia De Área De Negocios Internacionales',
	'GERENCIA DE AREA PAGO A PROVEEDORES': 'Gerencia De Area Pago A Proveedores',
	'GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS': 'Gerencia De Area Admin. De Inmuebles Propios',
	'GERENCIA DE AREA CONTABILIDAD FIDUCIARIA': 'Gerencia De Area Contabilidad Fiduciaria',
	'GERENCIA DE AREA CORRESPONSALIA': 'Gerencia De Area Corresponsalia',
	'GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA': 'Gerencia De Área Almacen Y Proveeduría',
	'GERENCIA DE ACTIVOS FIJOS': 'Gerencia De Activos Fijos',
	'GERENCIA DE MERCADO MONETARIO': 'Gerencia De Mercado Monetario',
	'GERENCIA DE AREA SERVICIOS': 'Gerencia De Area Servicios',
	'GERENCIA DE MECANISMOS CAMBIARIOS': 'Gerencia De Mecanismos Cambiarios',
	'GERENCIA DE AREA TRIBUTOS': 'Gerencia De Area Tributos',
	'GERENCIA DE PRESUPUESTO': 'Gerencia De Presupuesto',
	'GERENCIA DE ÁREA PLANIFICACIÓN FINANCIERA': 'Gerencia De Área Planificación Financiera',
	'GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT': 'Gerencia De Área De Infraestructura Y Mantenimient',
	'GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN': 'Gerencia Proyecto Especial Control Y Gestión',
	'GERENCIA DE DOCUMENTACIÓN DE ACTIVOS': 'Gerencia De Documentación De Activos',
	'GERENCIA DE ARA DE CONTRALORÍA DE DATOS': 'Gerencia De Ara De Contraloría De Datos',
	'GERENCIA DE AREA CONTRATOS Y PROVEEDORES': 'Gerencia De Area Contratos Y Proveedores',
	'GERENCIA DE CONTROL PRESUPUESTARIO': 'Gerencia De Control Presupuestario',
	'GERENCIA DE AREA CONTROL DE GESTIÓN': 'Gerencia De Area Control De Gestión',
	'GERENCIA DE AREA CONTROL FINANCIERO': 'Gerencia De Area Control Financiero',
	'GERENCIA DE ÁREA ANALISIS DE GESTIÓN': 'Gerencia De Área Analisis De Gestión',
	'GERENCIA DE RENTA FIJA': 'Gerencia De Renta Fija',
	'GERENCIA DE AREA DE NEGOCIOS SECTOR FINANCIERO': 'Gerencia De Area De Negocios Sector Financiero',
	'GERENCIA DE NEGOCIOS II': 'Gerencia De Negocios II',
	'GERENCIA DE AREA DE NEGOCIOS CORPORATIVA II': 'Gerencia De Area De Negocios Corporativa II',
	'GERENCIA REGIONAL DE NEGOCIOS SECTOR AGROPECUARIO': 'Gerencia Regional De Negocios Sector Agropecuario',
	'GERENCIA DE NEGOCIOS SECTOR SEGUROS': 'Gerencia De Negocios Sector Seguros',
	'GERENCIA CONTROL Y SEGUIMIENTO (BEI)': 'Gerencia Control Y Seguimiento (BEI)',
	'GERENCIA DE AREA DE NEGOCIOS CORPORATIVA CENTRO': 'Gerencia De Area De Negocios Corporativa Centro',
	'GERENCIA DE AREA DE NEGOCIOS CORPORATIVA I': 'Gerencia De Area De Negocios Corporativa I',
	'GERENCIA DE AREA DE NEGOCIOS TELECOMUNICACIONES': 'Gerencia De Area De Negocios Telecomunicaciones',
	'GERENCIA DE NEGOCIOS CAPITAL III': 'Gerencia De Negocios Capital III',
	'GERENCIA DE NEGOCIOS (BEI) I': 'Gerencia De Negocios (BEI) I',
	'GERENCIA DE NEGOCIOS SECTOR CASA DE BOLSA': 'Gerencia De Negocios Sector Casa De Bolsa',
	'GERENCIA DE NEGOCIOS (BEI) II': 'Gerencia De Negocios (BEI) II',
	'GERENCIA DE NEGOCIOS CAPITAL I': 'Gerencia De Negocios Capital I',
	'GERENCIA DE NEGOCIOS CAPITAL (BEI) II': 'Gerencia De Negocios Capital (BEI) II',
	'GERENCIA REGIONAL DE NEGOCIOS SECTOR PÚBLICO I': 'Gerencia Regional De Negocios Sector Público I',
	'GERENCIA DE NEGOCIOS I': 'Gerencia De Negocios I',
	'GERENCIA DE NEGOCIOS CAPITAL II': 'Gerencia De Negocios Capital II',
	'GCIA. REGIONAL DE NEGOCIOS SECTOR PÚBLICO CENTRO': 'Gcia. Regional De Negocios Sector Público Centro',
	'GERENCIA DE NEGOCIOS OCCIDENTE': 'Gerencia De Negocios Occidente',
	'GERENCIA DE NEGOCIOS ORIENTE (BEI)': 'Gerencia De Negocios Oriente (BEI)',
	'GERENCIA DE NEGOCIOS ARAGUA': 'Gerencia De Negocios Aragua',
	'GERENCIA CONTROL Y SEGUIMIENTO': 'Gerencia Control Y Seguimiento',
	'GERENCIA DE NEGOCIOS (BEI) III': 'Gerencia De Negocios (BEI) III',
	'GERENCIA DE NEGOCIOS LOS ANDES': 'Gerencia De Negocios Los Andes',
	'GERENCIA DE NEGOCIOS ORIENTE': 'Gerencia De Negocios Oriente',
	'GERENCIA DE NEGOCIOS CARABOBO I': 'Gerencia De Negocios Carabobo I',
	'GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA': 'Gerencia De Área Análisis Y Supervisión De Op Fina',
	'GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO': 'Gerencia De Área Estadist Y Análisis Estratégico',
	'GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM': 'Gerencia De Área Prev Y Control De Lc-ft-fpadm',
	'V.P. REGIÓN ARAGUA - LOS LLANOS': 'V.P. Región Aragua - Los Llanos',
	'V.P. ZONA CARABOBO': 'V.P. Zona Carabobo',
	'V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II (ADM)': 'V.P. De Zona II Administracion De Agencias II (adm)',
	'V.P. ZONA CENTRO OCCIDENTE': 'V.P. Zona Centro Occidente',
	'V.P. DE NEGOCIOS ZONA III': 'V.P. De Negocios Zona III',
	'V.P. ZONA ARAGUA': 'V.P. Zona Aragua',
	'V.P. DE ZONA I ADMINISTRACION DE AGENCIAS (ADM) I': 'V.P. De Zona I Administracion De Agencias (adm) I',
	'V.P. DE NEGOCIOS ZONA IA': 'V.P. De Negocios Zona IA',
	'V.P. DE NEGOCIOS ZONA IB': 'V.P. De Negocios Zona IB',
	'V.P ZONA ORIENTE': 'V.P. Zona Oriente',
	'COORDINACION CONTROL Y REGISTRO DE OPERACIONES': 'Coordinacion Control Y Registro De Operaciones',
	'V.P. ZONA ZULIA FALCÓN': 'V.P. Zona Zulia Falcón',
	'V.P. ZONA LOS LLANOS': 'V.P. Zona Los Llanos',
	'V.P. DE NEGOCIOS ZONA IIA': 'V.P. De Negocios Zona IIA',
	'GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA':
		'Gerencia Digitalización, Ctrol Archiv. Y Correspondencia',
	'V.P ZONA INSULAR': 'V.P. Zona Insular',
	'V.P. DE NEGOCIOS ZONA IIB': 'V.P. De Negocios Zona IIB',
	'V.P. ZONA LOS ANDES': 'V.P. Zona Los Andes',
	'GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE (ADM)': 'Gerencia De Área Back Office Registro De Cliente (adm)',
	'V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I': 'V.P. De Zona I Administracion De Agencias I',
	'GERENCIA DE EFICIENCIA COMERCIAL': 'Gerencia De Eficiencia Comercial',
	'GERENCIA DE CONTROL Y GESTIÓN': 'Gerencia De Control Y Gestión',
	'GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE': 'Gerencia De Área Back Office Registro De Cliente',
	'V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II': 'V.P. De Zona II Administracion De Agencias II',
	'GERENCIA DE AREA SELECCION DE TALENTO': 'Gerencia De Area Seleccion De Talento',
	'GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL': 'Gerencia De Area Gestion De Servicios Al Personal',
	'GERENCIA GESTIÓN DOCUMENTAL': 'Gerencia Gestión Documental',
	'GCIA DE AREA GESTIÓN DE ESTRUCTURAS DIRECC CENTRAL': 'Gcia De Area Gestión De Estructuras Direcc Central',
	'GERENCIA SALUD OCUPACIONAL': 'Gerencia Salud Ocupacional',
	'GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS': 'Gerencia De Area Compensación Y Beneficios',
	'GERENCIA DE CAJA DE AHORROS': 'Gerencia De Caja De Ahorros',
	'GERENCIA DE SEGURIDAD Y SALUD LABORAL': 'Gerencia De Seguridad Y Salud Laboral',
	'GERENCIA DE AREA FORMACION Y DESARROLLO': 'Gerencia De Area Formacion Y Desarrollo',
	'GERENCIA DE AREA DEF. DE MODELOS DE CALIDAD': 'Gerencia De Area Def. De Modelos De Calidad',
	'GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS': 'Gerencia De Área Arquitectura De Procesos',
	'GCIA. DE ÁREA DE PROYECTOS DE TRANSFORMACIÓN': 'Gcia. De Área De Proyectos De Transformación',
	'GERENCIA DE ÁREA GESTIÓN DE ESTRUCTURAS NEGOCIO': 'Gerencia De Área Gestión De Estructuras Negocio',
	'GERENCIA DE AREA EVAL. DE INDICADORES DE CALIDAD': 'Gerencia De Area Eval. De Indicadores De Calidad',
	'GERENCIA DE PROYECTOS Y SOPORTE TECNICO': 'Gerencia De Proyectos Y Soporte Tecnico',
	'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL': 'Gerencia Monitoreo Y Anti Fraude Capital',
	'GERENCIA NACIONAL DE CONSOLA': 'Gerencia Nacional De Consola',
	'GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA': 'Gerencia De Area Admin. De Seguridad Bancaria',
	'COORDINACIÓN INVESTIGACIONES CARACAS': 'Coordinación Investigaciones Caracas',
	'COORDINACIÓN INVESTIGACIONES MARACAIBO': 'Coordinación Investigaciones Maracaibo',
	'GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC': 'Gerencia De Area Seguridad Industrial Y Contingenc',
	'GERENCIA SOPORTE INV. TECNO. DE SEGURIDAD BANCARIA': 'Gerencia Soporte Inv. Tecno. De Seguridad Bancaria',
	'GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA': 'Gerencia De Área Seguridad Preventiva Y Prot. Física',
	'GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE': 'Gerencia Monitoreo Y Anti Fraude Occidente',
	'GCIA. DE CONTROL ESTADISTICO E INFORME ESPECIALES': 'Gcia. De Control Estadistico E Informe Especiales',
	'GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL': 'Gcia. De Analisis De Credito Banca Comercial',
	'GERENCIA DE CONTROL DE CARTERA DE CREDITO': 'Gerencia De Control De Cartera De Credito',
	'GERENCIA DE VALIDACION': 'Gerencia De Validacion',
	'GERENCIA DE ARCHIVO CENTRAL DE CREDITO': 'Gerencia De Archivo Central De Credito',
	'COORD. COBRANZA DE CREDITOS AL CONSUMO': 'Coord. Cobranza De Creditos Al Consumo',
	'GERENCIA DE FIANZAS Y GARANTIAS': 'Gerencia De Fianzas Y Garantias',
	'GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA': 'Gcia. De Analisis De Credito Banca Corporativa',
	'GCIA. DE CREDITO BANCA ESPECIALIZADA': 'Gcia. De Credito Banca Especializada',
	'COORD. CREDITOS COMERCIALES': 'Coord. Creditos Comerciales',
	'GERENCIA DE AREA CORE BANCARIO': 'Gerencia De Area Core Bancario',
	'GERENCIA DE AREA DE SOPORTE POS': 'Gerencia De Area De Soporte Pos',
	'GERENCIA DE AREA DE SOPORTE DE ATMS': 'Gerencia De Area De Soporte De Atms',
	'GERENCIA DE AREA PRODUCCIÓN': 'Gerencia De Area Producción',
	'GERENCIA DE AREA DE COMUNICACIONES': 'Gerencia De Area De Comunicaciones',
	'GERENCIA DE SOPORTE TECNICO CARACAS': 'Gerencia De Soporte Tecnico Caracas',
	'GERENCIA DE AREA PLATAFORMA ESPECIALIZADA': 'Gerencia De Area Plataforma Especializada',
	'GERENCIA DE AREA SISTEMA DISTRIBUIDO': 'Gerencia De Area Sistema Distribuido',
	'GERENCIA DE AREA GESTIÓN DE CERTIFICACIÓN': 'Gerencia De Area Gestión De Certificación',
	'GERENCIA SISTEMAS DE SUCURSALES': 'Gerencia Sistemas De Sucursales',
	'GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO': 'Gerencia De Area Sistema De Medios De Pago',
	'GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA': 'Gerencia De Area Integración De Plataforma',
	'COORDINACIÓN SOPORTE VIP': 'Coordinación Soporte Vip',
	'GERENCIA DE AREA ENERGÍA': 'Gerencia De Area Energía',
	'GERENCIA DE AREA OFICINA DE PROYECTOS': 'Gerencia De Area Oficina De Proyectos',
	'GERENCIA DE AREA ADMINISTRACIÓN DE BASES DE DATOS': 'Gerencia De Area Administración De Bases De Datos',
	'GERENCIA DE PROYECTOS TI': 'Gerencia De Proyectos Ti',
	'GERENCIA DE AREA BI Y REGULATORIOS': 'Gerencia De Area Bi Y Regulatorios',
	'GERENCIA DE SOPORTE TECNICO OCCIDENTE': 'Gerencia De Soporte Tecnico Occidente',
	'GERENCIA DE AREA PROYECTOS CANALES DIGITALES': 'Gerencia De Area Proyectos Canales Digitales',
	'GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS': 'Gerencia De Area Bi Y Sistemas Regulatorios',
	'GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA': 'Gerencia De Monitoreo Telco E Infraestructura',
	'GERENCIA DE AREA PROYECTOS POS ATMS': 'Gerencia De Area Proyectos Pos Atms',
	'GERENCIA DE AREA PROYECT DE INTEGRAC DE PLATAFORMA': 'Gerencia De Area Proyect De Integrac De Plataforma',
	'GERENCIA DE AREA PROYECTOS CORE BANCARIO': 'Gerencia De Area Proyectos Core Bancario',
	'GERENCIA DE AREA PROYECTOS DE SEGURIDAD TI': 'Gerencia De Area Proyectos De Seguridad Ti',
	'GERENCIA DE ÁREA OPERACIONES DE TESORERÍA': 'Gerencia De Área Operaciones De Tesorería',
	'GERENCIA DE ÁREA DE LIQUIDACIONES Y APLIC DE COBRO': 'Gerencia De Área De Liquidaciones Y Aplic De Cobro',
	'GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS': 'Gerencia De Área Admin De Cuentas Y Estadísticas',
	'GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV': 'Gerencia De Área Recauda De Impuestos Y Otros Serv',
	'GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS': 'Gerencia De Área De Custodia Y Operaciones Cambiarias',
	'GERENCIA DE AREA PLAN MAYOR': 'Gerencia De Area Plan Mayor',
	'GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS': 'Gerencia De Área Reclamos De Canales Electronicos',
	'GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS': 'Gerencia De Área Operaciones Especializadas',
	'GERENCIA DE ÁREA GESTIÓN Y CONTROL OPERATIVO': 'Gerencia De Área Gestión Y Control Operativo',
	'GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO':
		'Gerencia De Área De Transporte De Valores Y Centros De Acopio',
	'GERENCIA DE ÁREA EMISIÓN Y DISTRIBUCIÓN': 'Gerencia De Área Emisión Y Distribución',
	'GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO': 'Gerencia De Área Logística De Efectivo',
	'GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA': 'Gerencia De Procesos Especiales Y Reportería',
	'COORDINACIÓN ATENCIÓN AL CLIENTE': 'Coordinación Atención Al Cliente',
	'GERENCIA DE ÁREA CTROL INSTITUCIONAL Y ASUNTOS CORP.': 'Gerencia De Área Ctrol Institucional Y Asuntos Corp.',
	'GERENCIA DE ÁREA LEGAL DE CRÉDITOS, PRODUCTOS Y SERV.': 'Gerencia De Área Legal De Créditos, Productos Y Serv.',
	'GERENCIA DE ÁREA LEGAL Y ORGANISMOS OFICIALES': 'Gerencia De Área Legal Y Organismos Oficiales',
	'GERENCIA DE ÁREA ASUNTOS TÉCNICOS REGULATORIOS': 'Gerencia De Área Asuntos Técnicos Regulatorios',
	'GERENCIA DE AREA CONTACT CENTER': 'Gerencia De Area Contact Center',
	'GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS': 'Gerencia Servicio Al Cliente Y Recuperaciones Pos',
	'GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC': 'Gerencia De Área Productos Y Servicios Tdc',
	'GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA': 'Gerencia Afiliación Al Servicio Pos Metropolitana',
	'GERENCIA DE ÁREA PRODUCTOS Y SERV TDD Y SOL EMERG': 'Gerencia De Área Productos Y Serv Tdd Y Sol Emerg',
	'GERENCIA OFICINA DIGITAL': 'Gerencia Oficina Digital',
	'GERENCIA SERVICIOS POST VENTA JURÍDICOS': 'Gerencia Servicios Post Venta Jurídicos',
	'GERENCIA DE ÁREA MERCADEO': 'Gerencia De Área Mercadeo',
	'GERENCIA DE DESARROLLO DE CANALES DIGITALES': 'Gerencia De Desarrollo De Canales Digitales',
	'GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR': 'Gerencia Afiliación Al Servicio Pos Interior',
	'COORDINACIÓN INTELIGENCIA DE NEGOCIOS': 'Coordinación Inteligencia De Negocios',
	'GERENCIA DE INNOVACIÓN Y PRODUCTOS': 'Gerencia De Innovación Y Productos',
	'GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS': 'Gerencia De Área De Comunicaciones Corporativas',
	'COORDINACIÓN DISEÑO GRÁFICO': 'Coordinación Diseño Gráfico',
	'GERENCIA ANALÍTICA DIGITAL': 'Gerencia Analítica Digital'
}

const departamentoData = [
	{
		id: '6269eb53-a62c-4d30-ba02-386f7818d091',
		name: 'Coordinación Atención Al Accionista',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA VALORES Y ACCIONISTAS'])[0].id
	},
	{
		id: 'dc2dd18e-87a3-490d-bc58-ee12c1e4afce',
		name: 'Coordinacion Operaciones Accionarias',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA VALORES Y ACCIONISTAS'])[0].id
	},
	{
		id: 'ea74ce28-13c5-42e3-82e6-fcee25c441f6',
		name: 'Gerencia De Administración Plataforma Media',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE USUARIOS']
		)[0].id
	},
	{
		id: '3844135e-7bd2-4d03-82c5-996ae23a2cc4',
		name: 'Gerencia De Control De Calidad',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA CALIDAD Y CUMPLIMIENTO'])[0].id
	},
	{
		id: '8c4998ab-5a50-47c9-9a3f-2d70066e7a38',
		name: 'Gerencia De Creación De Usuarios',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE USUARIOS']
		)[0].id
	},
	{
		id: '10674989-42cd-4908-9767-4860a5659b24',
		name: 'Gerencia De Cumplimiento',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA CALIDAD Y CUMPLIMIENTO'])[0].id
	},
	{
		id: 'cf907904-41b5-4065-970a-935994480ae2',
		name: 'Gerencia De Seguridad AS-400',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA SEGURIDAD INFORMATICA'])[0].id
	},
	{
		id: 'd8643089-42b7-4bcc-9187-8691dddb73cd',
		name: 'Gerencia De Seguridad Perimetral',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA SEGURIDAD INFORMATICA'])[0].id
	},
	{
		id: '282ff0fd-acf8-4a25-b3c7-4fd003e0fa1c',
		name: 'Gerencia De Administración Acceso Identidad',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE USUARIOS']
		)[0].id
	},
	{
		id: '6ae613d9-8cd7-4526-8e32-a8de3f93722f',
		name: 'Gerencia De Area De Contabilidad',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id
	},
	{
		id: '4be72974-b23c-44a2-b3ff-fb8e095caabd',
		name: 'Gerencia De Área Compras Y Servicios Generales',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PROCURA, ALMACÉN Y SERVICIOS GENERALES']
		)[0].id
	},
	{
		id: '30f10052-cb40-4c86-a9b0-2f2e3dcbc457',
		name: 'Gerencia De Area Negocios Fiduciarios',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE FIDEICOMISO'])[0].id
	},
	{
		id: '4899b5fd-a28b-457b-8e65-878796fa78bd',
		name: 'Gerencia De Distribución',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['TESORERIA'])[0].id
	},
	{
		id: 'cc6eb036-e877-4b1b-a383-b7c047794f42',
		name: 'Gerencia De Area CTRL Contable Y Gestión De Gasto',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id
	},
	{
		id: '428b2554-bcd4-4b98-b240-24646cb0a40b',
		name: 'Gerencia De Area Control De Inmuebles Arrendados',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE INMUEBLES'])[0].id
	},
	{
		id: 'f3934dda-b40e-4951-a998-6c61e406c67c',
		name: 'Gerencia De Área De Negocios Internacionales',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE BANCA INTERNACIONAL'])[0].id
	},
	{
		id: '6f2a99ad-9688-417b-9c50-f2b738d9421b',
		name: 'Gerencia De Area Pago A Proveedores',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id
	},
	{
		id: 'f4130ab0-306f-4566-bde4-5897a7e6c220',
		name: 'Gerencia De Area Admin. De Inmuebles Propios',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE INMUEBLES'])[0].id
	},
	{
		id: '3028e2a8-510d-4a3b-a0ff-b2c0ce99d2e2',
		name: 'Gerencia De Area Contabilidad Fiduciaria',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE FIDEICOMISO'])[0].id
	},
	{
		id: 'd75cfc66-2744-4314-b253-13c2e57741d5',
		name: 'Gerencia De Area Corresponsalia',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE BANCA INTERNACIONAL'])[0].id
	},
	{
		id: 'c6c97618-90de-4e15-aa3f-9e8a28d128f5',
		name: 'Gerencia De Área Almacen Y Proveeduría',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PROCURA, ALMACÉN Y SERVICIOS GENERALES']
		)[0].id
	},
	{
		id: 'b03fdafa-295b-4a54-8416-39bb3beed668',
		name: 'Gerencia De Activos Fijos',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE ACTIVOS'])[0].id
	},
	{
		id: '7999bf31-3c35-49d5-9421-76ac5481d6ec',
		name: 'Gerencia De Mercado Monetario',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['TESORERIA'])[0].id
	},
	{
		id: '83826c49-c062-4144-ae08-2d656c86d353',
		name: 'Gerencia De Area Servicios',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id
	},
	{
		id: '56e2d966-176f-4228-bbeb-95a240caa22b',
		name: 'Gerencia De Mecanismos Cambiarios',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['TESORERIA'])[0].id
	},
	{
		id: '96fdf818-b8bb-4f1e-8c54-d49af730c52d',
		name: 'Gerencia De Area Tributos',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id
	},
	{
		id: '2ae42d29-a81d-4bf5-872c-6fa158a04d8a',
		name: 'Gerencia De Presupuesto',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PLANIFICACIÓN FINANCIERA Y PRESUPUESTO']
		)[0].id
	},
	{
		id: '51df20d9-57be-4319-8a1e-2ed3897fdd03',
		name: 'Gerencia De Área Planificación Financiera',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PLANIFICACIÓN FINANCIERA Y PRESUPUESTO']
		)[0].id
	},
	{
		id: '7540f950-12db-4466-9484-fda75197ac05',
		name: 'Gerencia De Área De Infraestructura Y Mantenimient',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO']
		)[0].id
	},
	{
		id: 'e442892b-4c8a-4272-b1ad-35965b456408',
		name: 'Gerencia Proyecto Especial Control Y Gestión',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id
	},
	{
		id: '651eaec0-40fb-4595-a251-4cbe1b425a9f',
		name: 'Gerencia De Documentación De Activos',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE ACTIVOS'])[0].id
	},
	{
		id: '9a6ad8b8-7622-42e7-aaaa-8e655d5b827b',
		name: 'Gerencia De Ara De Contraloría De Datos',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id
	},
	{
		id: 'e61f164b-3356-4017-b745-fc7189cd1a5e',
		name: 'Gerencia De Area Contratos Y Proveedores',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id
	},
	{
		id: 'd94ebafb-3afe-464f-b51d-a743e2ef9d81',
		name: 'Gerencia De Control Presupuestario',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id
	},
	{
		id: 'a083cac2-8f6a-4cb0-a1eb-82eedd46a7e0',
		name: 'Gerencia De Area Control De Gestión',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id
	},
	{
		id: '5827241b-c45d-4e6a-a26e-3e3764889a28',
		name: 'Gerencia De Area Control Financiero',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id
	},
	{
		id: '540970b7-3330-4d11-ae86-50dd422228a2',
		name: 'Gerencia De Área Analisis De Gestión',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE ACTIVOS'])[0].id
	},
	{
		id: 'f6cb3b9e-ce7e-4b4a-90a5-d49e9d53d969',
		name: 'Gerencia De Renta Fija',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['TESORERIA'])[0].id
	},
	{
		id: '9edfc5e3-d33f-498b-8afe-d4fb57e0b67a',
		name: 'Gerencia De Area De Negocios Sector Financiero',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR FINANCIERO'])[0].id
	},
	{
		id: 'd92d1279-5925-44ad-bd6c-89ac67524c8d',
		name: 'Gerencia De Negocios II',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA DE RELACIÓN'])[0].id
	},
	{
		id: 'ed9576db-f6b0-4c50-9906-c8f154fb014c',
		name: 'Gerencia De Area De Negocios Corporativa II',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id
	},
	{
		id: 'b67efe0d-1390-4ad0-836a-18a25d3491f8',
		name: 'Gerencia Regional De Negocios Sector Agropecuario',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR AGROPECUARIO'])[0]
			.id
	},
	{
		id: 'f2721076-6b5d-4d81-b2e3-615c9637810b',
		name: 'Gerencia De Negocios Sector Seguros',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR FINANCIERO'])[0].id
	},
	{
		id: 'f1a804a5-690e-44c5-97cb-82f226c71ea9',
		name: 'Gerencia Control Y Seguimiento (BEI)',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR AGROPECUARIO'])[0]
			.id
	},
	{
		id: 'eb919280-ffb4-4a13-bd29-19892c504b02',
		name: 'Gerencia De Area De Negocios Corporativa Centro',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id
	},
	{
		id: '1e37c77a-5fad-45cc-82e9-01dde81bb3af',
		name: 'Gerencia De Area De Negocios Corporativa I',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id
	},
	{
		id: '21a8dece-5f88-4067-8416-9f7c30c9eacc',
		name: 'Gerencia De Area De Negocios Telecomunicaciones',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id
	},
	{
		id: 'b9692964-7d50-4d38-b7ff-c97f9e825130',
		name: 'Gerencia De Negocios Capital III',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id
	},
	{
		id: '81384a14-33d3-4016-9bea-6ae40a1690b5',
		name: 'Gerencia De Negocios I',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA DE RELACIÓN'])[0].id
	},
	{
		id: '741664f7-3675-4666-9245-1b2e26ae3e98',
		name: 'Gerencia De Negocios Sector Casa De Bolsa',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR FINANCIERO'])[0].id
	},
	{
		id: '4af87601-bcb1-4e0a-a273-d8d1d8c640b7',
		name: 'Gerencia De Negocios (BEI) II',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI II'])[0].id
	},
	{
		id: '221ddd0c-7491-4edb-ac92-75b8a13bfd47',
		name: 'Gerencia De Negocios Capital I',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id
	},
	{
		id: '1a0a7f37-ce02-485a-ae52-94ba353d06c4',
		name: 'Gerencia De Negocios Capital (BEI) II',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id
	},
	{
		id: '54fcc440-2e8a-45b4-891a-05bf6af0cbfc',
		name: 'Gerencia Regional De Negocios Sector Público I',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id
	},
	{
		id: '5012098b-ece5-4f05-9f9c-e939ab72648e',
		name: 'Gerencia De Negocios (BEI) I',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI II'])[0].id
	},
	{
		id: 'ab3961ff-4421-4dfa-902a-6f479cf7b0fd',
		name: 'Gerencia De Negocios Capital II',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id
	},
	{
		id: '8cd65d23-eb07-4b3e-82aa-ab6e4ba4a3df',
		name: 'Gcia. Regional De Negocios Sector Público Centro',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id
	},
	{
		id: 'de20be93-b50b-40c5-9ad1-6f79c7cccfdb',
		name: 'Gerencia De Negocios Occidente',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id
	},
	{
		id: 'e06c20d8-201a-445d-bc62-e79c02fcccb5',
		name: 'Gerencia De Negocios Oriente',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id
	},
	{
		id: '03948e79-c9ff-4626-b758-c44e37b95466',
		name: 'Gerencia De Negocios Aragua',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI IV'])[0].id
	},
	{
		id: 'a7ebc895-735e-4c02-ab38-2e771f996c36',
		name: 'Gerencia Control Y Seguimiento',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id
	},
	{
		id: 'b2aa4796-4602-4e26-ba54-c196731ad5ef',
		name: 'Gerencia De Negocios (BEI) III',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI II'])[0].id
	},
	{
		id: '85a50a6b-9122-4372-9c41-97c178c368f4',
		name: 'Gerencia De Negocios Los Andes',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id
	},
	{
		id: '07c66938-4c8c-4af4-94b5-efbdaeea7822',
		name: 'Gerencia De Negocios Oriente (BEI)',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id
	},
	{
		id: 'ef89d4d8-36ef-4db3-bd65-acbda8f92747',
		name: 'Gerencia De Negocios Carabobo I',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI IV'])[0].id
	},
	{
		id: '36e00d2a-261c-4c5c-b17d-de677e598587',
		name: 'Gerencia De Área Análisis Y Supervisión De Op Fina',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id
	},
	{
		id: 'cd77f7c0-45a4-4e4b-9808-39ff13affc4d',
		name: 'Gerencia De Área Estadist Y Análisis Estratégico',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id
	},
	{
		id: '78a02301-a94e-4978-878e-9a1d2f44e89c',
		name: 'Gerencia De Área Prev Y Control De Lc-ft-fpadm',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id
	},
	{
		id: '267ed445-5d80-46c7-bc58-bd26d8949e91',
		name: 'V.P. Región Aragua - Los Llanos',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE NEGOCIOS'])[0].id
	},
	{
		id: 'a022e0d4-efd6-46c3-b498-a225228705bf',
		name: 'V.P. Zona Carabobo',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id
	},
	{
		id: '19acd60c-1e3b-4cd2-824b-ffd0770e1f35',
		name: 'V.P. De Zona II Administracion De Agencias II',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id
	},
	{
		id: 'df4823c9-879d-4ef8-a9b3-40c33db80007',
		name: 'V.P. Zona Centro Occidente',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE'])[0].id
	},
	{
		id: 'b9536d34-54aa-4240-83d8-3d37e1b7baea',
		name: 'V.P. De Negocios Zona III',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id
	},
	{
		id: '9fa19305-d9d7-403b-9454-c82c5b87198a',
		name: 'V.P. Zona Aragua',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id
	},
	{
		id: '93178b7c-febd-4a01-8110-0343f615a0e8',
		name: 'V.P. De Zona I Administracion De Agencias I',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id
	},
	{
		id: '1db0e8a8-73e1-4285-b622-481efdbb1a8c',
		name: 'V.P. De Negocios Zona IA',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id
	},
	{
		id: '9c28d6ed-a017-4af3-8a77-929d194ccae0',
		name: 'V.P. De Negocios Zona IB',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id
	},
	{
		id: '6b565809-92d6-4c94-a01c-5fafc228b102',
		name: 'V.P. Zona Oriente',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id
	},
	{
		id: 'a4e3d335-a346-4104-9edc-a0c7134e2769',
		name: 'Coordinacion Control Y Registro De Operaciones',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id
	},
	{
		id: '8147b9e6-0ea6-4f3c-8f1f-d8764c884edb',
		name: 'V.P. Zona Zulia Falcón',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id
	},
	{
		id: '42a198d8-778b-4acb-b41f-522f408661d1',
		name: 'V.P. Zona Los Llanos',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS'])[0].id
	},
	{
		id: 'e9278213-4fca-447b-8b50-e083b338165e',
		name: 'V.P. De Negocios Zona IIB',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id
	},
	{
		id: '6f0442ae-ee95-422a-9c13-2ec76dd64f02',
		name: 'Gerencia Digitalización, Ctrol Archiv. Y Correspondencia',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id
	},
	{
		id: 'dc177b74-948f-47c2-a786-2998fe278956',
		name: 'V.P. Zona Insular',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN ORIENTE'])[0].id
	},
	{
		id: '7e9d576d-72aa-4c3d-b704-0469b472faaf',
		name: 'V.P. De Negocios Zona IIA',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id
	},
	{
		id: 'e26fac58-95cf-436a-8ca6-2113b8571da2',
		name: 'V.P. Zona Los Andes',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id
	},
	{
		id: '82ee4431-3f78-4620-ba6d-832f9cdf731d',
		name: 'Gerencia De Área Back Office Registro De Cliente',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id
	},
	{
		id: '6211bfea-995c-4242-b107-410cec53ad18',
		name: 'V.P. De Zona I Administracion De Agencias (adm) I',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS'])[0]
			.id
	},
	{
		id: '405ff16f-fbe8-4b7c-8979-9a1e927f9173',
		name: 'Gerencia De Eficiencia Comercial',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EFICIENCIA COMERCIAL'])[0].id
	},
	{
		id: 'eefe86cc-d258-4fce-912f-561c6fccecd9',
		name: 'Gerencia De Control Y Gestión',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EFICIENCIA COMERCIAL'])[0].id
	},
	{
		id: '1fb66b7b-7f8a-45d5-9e85-7fe934b347dc',
		name: 'Gerencia De Área Back Office Registro De Cliente (adm)',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS'])[0]
			.id
	},
	{
		id: '0b83c7c0-09b8-4722-801f-683720dcc472',
		name: 'V.P. De Zona II Administracion De Agencias II (adm)',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS'])[0]
			.id
	},
	{
		id: 'ed501994-4ecc-413a-8a3c-f76ed1b3ad95',
		name: 'Gerencia De Area Seleccion De Talento',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id
	},
	{
		id: '46f0ce1d-13d7-4079-8295-f7f4530c39fe',
		name: 'Gerencia De Area Gestion De Servicios Al Personal',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id
	},
	{
		id: 'b8451967-43cf-4aef-bcb4-bd5f1eca8c58',
		name: 'Gerencia Gestión Documental',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id
	},
	{
		id: '93b241db-19f1-4b8c-8917-b3730f7f2c35',
		name: 'Gcia De Area Gestión De Estructuras Direcc Central',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id
	},
	{
		id: '4238c895-07b1-4f89-9a89-ea0d916e1730',
		name: 'Gerencia Salud Ocupacional',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id
	},
	{
		id: '2c0fb079-03f5-4539-adbf-2275b60f0fad',
		name: 'Gerencia De Area Compensación Y Beneficios',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id
	},
	{
		id: 'a0740dce-1935-46de-8c26-6d37e8c257dc',
		name: 'Gerencia De Caja De Ahorros',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id
	},
	{
		id: 'cc3c9aef-a56d-4016-adb3-7e72b64727f9',
		name: 'Gerencia De Seguridad Y Salud Laboral',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id
	},
	{
		id: '49a792d5-b566-4733-b19c-65aa42baaef7',
		name: 'Gerencia De Area Formacion Y Desarrollo',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id
	},
	{
		id: 'b5e5dafc-c139-4009-a34e-32b37d7c90cb',
		name: 'Gerencia De Area Def. De Modelos De Calidad',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CALIDAD DE SERVICIO'])[0].id
	},
	{
		id: '48e36517-b653-45fd-bb4a-9fe0d19d7480',
		name: 'Gerencia De Área Arquitectura De Procesos',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id
	},
	{
		id: 'cd0e74d0-3835-40d7-a0f0-5c13a1ebb31e',
		name: 'Gcia. De Área De Proyectos De Transformación',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PMO PLANES ESTRATÉGICOS'])[0].id
	},
	{
		id: '6acbbd34-f51f-41e1-a58f-d62b349e5970',
		name: 'Gerencia De Área Gestión De Estructuras Negocio',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id
	},
	{
		id: 'fdfa901e-23f5-418e-b20c-b6bded9d93af',
		name: 'Gerencia De Area Eval. De Indicadores De Calidad',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CALIDAD DE SERVICIO'])[0].id
	},
	{
		id: '48dab536-7fd7-4f96-90da-03c77bcc2dcd',
		name: 'Gerencia De Proyectos Y Soporte Tecnico',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id
	},
	{
		id: '17219ac2-9e02-48db-8b2a-6d3210bc59c3',
		name: 'Gerencia Monitoreo Y Anti Fraude Capital',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id
	},
	{
		id: 'fe42f5ec-ae4b-4cf7-8038-a5c6af13cff5',
		name: 'Gerencia Nacional De Consola',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id
	},
	{
		id: 'e708dde8-5ab9-4d28-923b-dea645784266',
		name: 'Gerencia De Area Admin. De Seguridad Bancaria',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id
	},
	{
		id: 'c2f8d6d0-bade-4f83-8d8d-fde749f40dc4',
		name: 'Coordinación Investigaciones Caracas',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE INVESTIGACIONES'])[0].id
	},
	{
		id: '04f40df1-0b8f-4dd0-9420-50541914f5b8',
		name: 'Coordinación Investigaciones Maracaibo',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE INVESTIGACIONES'])[0].id
	},
	{
		id: 'd6139e9a-6641-40b7-92c0-4d961b703b7e',
		name: 'Gerencia De Area Seguridad Industrial Y Contingenc',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. SEGURIDAD PREVENTIVA Y PROTECCIÓN FÍSICA']
		)[0].id
	},
	{
		id: '10bebd23-f411-4b51-88ec-60094db8b50a',
		name: 'Gerencia Soporte Inv. Tecno. De Seguridad Bancaria',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id
	},
	{
		id: '07f66633-66ea-43d6-aeeb-6ab4b5c81157',
		name: 'Gerencia De Área Seguridad Preventiva Y Prot. Física',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. SEGURIDAD PREVENTIVA Y PROTECCIÓN FÍSICA']
		)[0].id
	},
	{
		id: '08f15f61-b14f-4d65-afec-ef1994f87c21',
		name: 'Gerencia Monitoreo Y Anti Fraude Occidente',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id
	},
	{
		id: '1ebb783d-fc30-403f-9e93-a28099a03e2e',
		name: 'Gcia. De Control Estadistico E Informe Especiales',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id
	},
	{
		id: '433c778d-e1be-4a3d-8b04-b312132adc84',
		name: 'Gcia. De Analisis De Credito Banca Comercial',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id
	},
	{
		id: 'f5053476-b9dc-4ec9-86a2-fe453d6bb200',
		name: 'Gerencia De Control De Cartera De Credito',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id
	},
	{
		id: 'd0cc71f3-1dcf-4214-82aa-30253994f23a',
		name: 'Gerencia De Validacion',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id
	},
	{
		id: '793e8980-76ef-41a0-82c3-20c2141efae1',
		name: 'Gerencia De Archivo Central De Credito',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id
	},
	{
		id: '0b61db0a-5b24-4790-b890-f5b4543ad67b',
		name: 'Coord. Cobranza De Creditos Al Consumo',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE ÁREA DE COBRANZA Y RECUPERACIONES']
		)[0].id
	},
	{
		id: 'fdfa661d-d30d-4024-b0fb-1c9339407a64',
		name: 'Gerencia De Fianzas Y Garantias',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id
	},
	{
		id: '244e832d-0898-4f2f-b8b0-a8d74b23ea9c',
		name: 'Gcia. De Analisis De Credito Banca Corporativa',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id
	},
	{
		id: '88da5ebf-d525-4949-8585-b51c27fb3460',
		name: 'Gcia. De Credito Banca Especializada',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id
	},
	{
		id: '32b90cd4-28f4-47f5-8fdd-9eddd45c55a8',
		name: 'Coord. Creditos Comerciales',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE ÁREA DE COBRANZA Y RECUPERACIONES']
		)[0].id
	},
	{
		id: '3a61b15e-881d-4567-88ec-d8b511c4ebd9',
		name: 'Gerencia De Area Core Bancario',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id
	},
	{
		id: '07eed8b2-33fe-41d6-999f-d4f326d49c7c',
		name: 'Gerencia De Area De Soporte Pos',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id
	},
	{
		id: 'e96385cb-00d1-40dc-8b9f-913653a0f306',
		name: 'Gerencia De Area De Soporte De Atms',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id
	},
	{
		id: '8481029e-b3d7-4acc-bd38-493f9d39c843',
		name: 'Gerencia De Area Producción',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id
	},
	{
		id: '31544433-0389-4960-a70f-5ebf27429450',
		name: 'Gerencia De Area De Comunicaciones',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id
	},
	{
		id: '071fb58c-bd7f-4cec-bde9-2c50f6008cec',
		name: 'Gerencia De Soporte Tecnico Caracas',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id
	},
	{
		id: '21c6d636-f06c-44bc-a885-ecef7af40f5a',
		name: 'Gerencia De Area Plataforma Especializada',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id
	},
	{
		id: '253c3f49-a76f-42ed-8e0c-8194771a52d1',
		name: 'Gerencia De Area Sistema Distribuido',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id
	},
	{
		id: 'd4328b57-95da-4027-8956-4821e74195ae',
		name: 'Gerencia De Area Gestión De Certificación',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id
	},
	{
		id: '44a61220-c739-4fb9-a1e9-61c7bb75d57f',
		name: 'Gerencia Sistemas De Sucursales',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id
	},
	{
		id: '9ba69eb9-9c11-48dc-8c4b-d4f2804c85b4',
		name: 'Gerencia De Area Sistema De Medios De Pago',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id
	},
	{
		id: '51477917-b627-49ee-980c-f43fd67ba076',
		name: 'Gerencia De Area Integración De Plataforma',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id
	},
	{
		id: '93f1522f-f370-40cc-a3d5-0914e6e13d07',
		name: 'Coordinación Soporte Vip',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id
	},
	{
		id: '51465c83-294f-4203-8491-5f542c731645',
		name: 'Gerencia De Area Energía',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id
	},
	{
		id: 'd87b4edf-2485-4352-8c11-9c90e2ddd4d7',
		name: 'Gerencia De Area Oficina De Proyectos',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id
	},
	{
		id: '7fae03b2-0b74-46f9-93b3-d2e1d0e19571',
		name: 'Gerencia De Area Administración De Bases De Datos',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id
	},
	{
		id: '379052c3-0587-412d-89f9-2ae61e320809',
		name: 'Gerencia De Proyectos Ti',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id
	},
	{
		id: '69685089-09c4-44f9-baab-989d17b37cec',
		name: 'Gerencia De Area Bi Y Regulatorios',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id
	},
	{
		id: 'dc30014b-0d61-4904-b2c5-eca4b9d83c4a',
		name: 'Gerencia De Soporte Tecnico Occidente',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id
	},
	{
		id: 'fb66a351-fbe8-40e7-b3b4-96afc004ff45',
		name: 'Gerencia De Area Proyectos Canales Digitales',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id
	},
	{
		id: 'c4d3603c-5d52-44c7-a890-97217a045af5',
		name: 'Gerencia De Area Bi Y Sistemas Regulatorios',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id
	},
	{
		id: 'cbfbcbce-337d-400b-97f6-b92b19289229',
		name: 'Gerencia De Monitoreo Telco E Infraestructura',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id
	},
	{
		id: '9d452cac-29d2-4700-87af-43ff09770e34',
		name: 'Gerencia De Area Proyectos Pos Atms',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id
	},
	{
		id: '0253a9e5-c57e-46f2-8217-97e6487cc625',
		name: 'Gerencia De Area Proyect De Integrac De Plataforma',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id
	},
	{
		id: 'fa79417b-6483-47a3-b08e-8b89802d777e',
		name: 'Gerencia De Area Proyectos Core Bancario',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id
	},
	{
		id: 'f9aafc3c-e94f-4e3a-b497-f464f025d6e4',
		name: 'Gerencia De Area Proyectos De Seguridad Ti',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id
	},
	{
		id: 'b1d6bfb8-4b33-4076-8d35-61f0a53c3c9c',
		name: 'Gerencia De Área Operaciones De Tesorería',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id
	},
	{
		id: 'a05c15e8-8b4c-45b2-9ee6-6cc297d1d660',
		name: 'Gerencia De Área De Liquidaciones Y Aplic De Cobro',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id
	},
	{
		id: '6f0f02fc-e992-490b-b350-1a283821de7e',
		name: 'Gerencia De Área Admin De Cuentas Y Estadísticas',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN'])[0].id
	},
	{
		id: '67d0cb30-55aa-4782-ab6a-b82edab0beac',
		name: 'Gerencia De Área Recauda De Impuestos Y Otros Serv',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id
	},
	{
		id: 'bc0ae83d-5f5e-4f5a-ac4a-738ee1c68122',
		name: 'Gerencia De Área De Custodia Y Operaciones Cambiarias',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id
	},
	{
		id: 'e44541ad-9c1b-4c47-9a1a-3ed813c020df',
		name: 'Gerencia De Area Plan Mayor',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id
	},
	{
		id: '9ebc553a-c446-46d4-838e-b9c6e87f10cd',
		name: 'Gerencia De Área Reclamos De Canales Electronicos',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id
	},
	{
		id: '4c59d246-0fb1-4bf2-9e01-82dbd74bbae4',
		name: 'Gerencia De Área Operaciones Especializadas',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id
	},
	{
		id: 'be8d76b8-4bc5-4c88-976e-a1f9ee0829dc',
		name: 'Gerencia De Área Gestión Y Control Operativo',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE GESTIÓN OPERATIVA INTERNA Y PROYECTOS ESPE']
		)[0].id
	},
	{
		id: '1671fb99-7406-42c7-8f27-0d5a7dbb960d',
		name: 'Gerencia De Área De Transporte De Valores Y Centros De Acopio',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id
	},
	{
		id: 'a14db896-e51d-443b-a4b0-9943364abb61',
		name: 'Gerencia De Área Emisión Y Distribución',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN'])[0].id
	},
	{
		id: '2037cdfd-31da-4874-ba31-763fc2115a13',
		name: 'Gerencia De Área Logística De Efectivo',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id
	},
	{
		id: '35280857-0c75-4ab6-b7b8-679447c4b1bd',
		name: 'Gerencia De Procesos Especiales Y Reportería',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE GESTIÓN OPERATIVA INTERNA Y PROYECTOS ESPE']
		)[0].id
	},
	{
		id: '8912966f-c6cd-482d-bf72-bc7cc7853851',
		name: 'Coordinación Atención Al Cliente',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id
	},
	{
		id: '9d6e4ad6-dafe-44d8-a989-0522e843dd29',
		name: 'Gerencia De Área Ctrol Institucional Y Asuntos Corp.',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASUNTOS LEGALES'])[0].id
	},
	{
		id: '78fee5e0-4917-4187-85d7-4e6a234387cb',
		name: 'Gerencia De Área Legal De Créditos, Productos Y Serv.',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id
	},
	{
		id: 'd73564dc-8464-45b2-84e6-eb433a39e48b',
		name: 'Gerencia De Área Legal Y Organismos Oficiales',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASUNTOS LEGALES'])[0].id
	},
	{
		id: '2454974a-e82c-4a44-a56d-a8df9883f8ae',
		name: 'Gerencia De Área Asuntos Técnicos Regulatorios',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id
	},
	{
		id: 'defc8346-4275-4f00-8ad1-9f4ab60f9a47',
		name: 'Gerencia De Area Contact Center',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id
	},
	{
		id: 'f1862200-0abd-4224-9956-a0d1ad02d8f4',
		name: 'Gerencia Servicio Al Cliente Y Recuperaciones Pos',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id
	},
	{
		id: 'ae8bcfb9-f44e-4c5a-8c2e-638f503d6622',
		name: 'Gerencia De Área Productos Y Servicios Tdc',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'])[0]
			.id
	},
	{
		id: 'f0ef1045-f5c5-4a6c-a1a8-069acee519a9',
		name: 'Gerencia Afiliación Al Servicio Pos Metropolitana',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id
	},
	{
		id: 'c31fbead-c9e9-4f97-9527-d9b3235da13b',
		name: 'Gerencia De Área Productos Y Serv Tdd Y Sol Emerg',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'])[0]
			.id
	},
	{
		id: '737d45aa-850d-479e-8050-920eaa17011a',
		name: 'Gerencia Oficina Digital',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0].id
	},
	{
		id: '254b3ea9-43ba-4ab9-ba81-da116b7a28d0',
		name: 'Gerencia Servicios Post Venta Jurídicos',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id
	},
	{
		id: 'e4eeca95-5bdd-4ccf-9f8d-65d04688e11d',
		name: 'Gerencia De Área Mercadeo',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id
	},
	{
		id: '3194db12-cb61-4178-8734-2dff9c7059b6',
		name: 'Gerencia De Desarrollo De Canales Digitales',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0].id
	},
	{
		id: 'd80f5a12-8289-4534-ae5b-6e3963fb7d8d',
		name: 'Gerencia Afiliación Al Servicio Pos Interior',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id
	},
	{
		id: '01673c53-f909-438d-a3dd-38242aa3e421',
		name: 'Coordinación Inteligencia De Negocios',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL']
		)[0].id
	},
	{
		id: '1e01740f-4a1b-4915-86b1-fe89ca347401',
		name: 'Gerencia De Innovación Y Productos',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0].id
	},
	{
		id: '2a42e72b-8b41-4fcf-9ac8-52f30694d5d5',
		name: 'Gerencia De Área De Comunicaciones Corporativas',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id
	},
	{
		id: 'fabde7d1-3083-4c5b-8853-97903a3390f7',
		name: 'Coordinación Diseño Gráfico',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id
	},
	{
		id: '932b2d87-4fef-4faa-be74-e8a6f3d54be4',
		name: 'Gerencia Analítica Digital',
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL']
		)[0].id
	}
]

module.exports = { departamentoOnlyNames, departamentoData }

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
