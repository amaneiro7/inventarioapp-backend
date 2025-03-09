const { VPEData, VPEOnlyNames } = require('./vicepresidenciaEjecutiva')

const departamentoOnlyNames = {
	'AUDITORIA INTERNA': 'Auditoria Interna',
	'GERENCIA DE AREA ASUNTOS REGULATORIOS': 'Gerencia De Area Asuntos Regulatorios',
	'GERENCIA DE AREA AUDITORIA DE SISTEMAS': 'Gerencia De Area Auditoria De Sistemas',
	'GERENCIA DE AREA AUDITORIA FINANCIERA': 'Gerencia De Area Auditoria Financiera',
	'GERENCIA DE ÁREA CTRL Y SEGUIMIENTO DE AUDITORÍA': 'Gerencia De Área Ctrl y Seguimiento De Auditoría',
	'GERENCIA DE AREA DE AUDITORIA DE AGENCIAS': 'Gerencia De Area De Auditoria De Agencias',
	'DEFENSORIA DEL CLIENTE': 'Defensoria Del Cliente',
	'GERENCIA APOYO A PRESIDENCIA EJECUTIVA': 'Gerencia Apoyo A Presidencia Ejecutiva',
	'GERENCIA GESTIÓN DE INFORMACIÓN': 'Gerencia Gestión De Información',
	'GERENCIA DE METODOLOGÍA DE RIESGO FINANCIERO': 'Gerencia De Metodología De Riesgo Financiero',
	'GERENCIA DE MONITOREO Y SEG. SOBRE CONT. DE NEG': 'Gerencia De Monitoreo Y Seg. Sobre Cont. De Neg',
	'GERENCIA DE RIESGO DE CREDITO': 'Gerencia De Riesgo De Credito',
	'GERENCIA DE RIESGO DE MERCADO Y LIQUIDEZ': 'Gerencia De Riesgo De Mercado Y Liquidez',
	'GERENCIA DE RIESGO OPERACIONAL MID Y BACK OFFICE': 'Gerencia De Riesgo Operacional Mid Y Back Office',
	'GERENCIA ESTADÍSTICA SOBRE METODOLOGÍA DE RIESGO': 'Gerencia Estadística Sobre Metodología De Riesgo',
	'GERENCIA RIESGO OPERACIONAL FRONT OFFICE': 'Gerencia Riesgo Operacional Front Office',
	'UNIDAD ADMON INTEGRAL DE RIESGOS': 'Unidad Admon Integral De Riesgos',
	'COORDINACIÓN CUMPLIMIENTO NORMATIVO': 'Coordinación Cumplimiento Normativo',
	'COORDINACIÓN INSPECCIÓN Y CAPACITACIÓN': 'Coordinación Inspección Y Capacitación',
	'GERENCIA ANÁLISIS ESTRATÉGICO Y DETECCIÓN DE TIPOL': 'Gerencia Análisis Estratégico Y Detección De Tipol',
	'GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS': 'Gerencia De Análisis De Operaciones Financieras',
	'GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO': 'Gerencia De Área Estadist Y Análisis Estratégico',
	'GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM': 'Gerencia De Área Prev Y Control De LC-FT-FPADM',
	'GERENCIA DE ATENCIÓN DE ORGANISMOS OFICIALES': 'Gerencia De Atención De Organismos Oficiales',
	'GERENCIA DE MONITOREO Y VERIFICACIÓN DE OP INUSUAL': 'Gerencia De Monitoreo Y Verificación De Op Inusual',
	'GERENCIA ESTADÍSTICA Y MANTENIMIENTO DE REGISTROS': 'Gerencia Estadística Y Mantenimiento De Registros',
	'V.P. CUMPLIMIENTO Y CONTROL DE GESTIÓN': 'V.P. Cumplimiento Y Control De Gestión',
	'V.P. UPCLCFTFPADM': 'V.P. UPCLCFTFPADM',
	'COORDINACIÓN ATENCIÓN AL ACCIONISTA': 'Coordinación Atención Al Accionista',
	'COORDINACION OPERACIONES ACCIONARIAS': 'Coordinacion Operaciones Accionarias',
	'GERENCIA DE AREA VALORES Y ACCIONISTAS': 'Gerencia De Area Valores y Accionistas',
	'GERENCIA DE GOBIERNO CORPORATIVO': 'Gerencia De Gobierno Corporativo',
	'SECRETARIA DE LA JUNTA DIRECTIVA': 'Secretaria De La Junta Directiva',
	'COORD. PLATAFORMA DISTRIBUIDA': 'Coord. Plataforma Distribuida',
	'COORDINACION ADM DE ACCESO DE IDENTIDAD': 'Coordinacion Adm De Acceso De Identidad',
	'COORDINACION DE CUMPLIMIENTO': 'Coordinacion De Cumplimiento',
	'COORDINACION DE PLATAFORMA MEDIA': 'Coordinacion De Plataforma Media',
	'COORDINACION SEGURIDAD PERIMETRAL': 'Coordinacion Seguridad Perimetral',
	'GERENCIA DE ADMINISTRACIÓN ACCESO IDENTIDAD': 'Gerencia De Administración Acceso Identidad',
	'GERENCIA DE ADMINISTRACIÓN PLATAFORMA MEDIA': 'Gerencia De Administración Plataforma Media',
	'GERENCIA DE AREA SEGURIDAD INFORMATICA': 'Gerencia De Area Seguridad Informatica',
	'GERENCIA DE CONTROL DE CALIDAD': 'Gerencia De Control De Calidad',
	'GERENCIA DE CREACIÓN DE USUARIOS': 'Gerencia De Creación De Usuarios',
	'GERENCIA DE CUMPLIMIENTO': 'Gerencia De Cumplimiento',
	'GERENCIA DE SEGURIDAD AS-400': 'Gerencia De Seguridad AS-400',
	'GERENCIA DE SEGURIDAD PERIMETRAL': 'Gerencia De Seguridad Perimetral',
	'V.P. SEGURIDAD DE LA INFORMACION': 'V.P. Seguridad De La Informacion',
	'COORD. ALMACÉN Y PROVEEDURÍA (CARACAS)': 'Coord. Almacén Y Proveeduría (caracas)',
	'COORD. ALMACÉN Y PROVEEDURÍA (OCCIDENTE)': 'Coord. Almacén Y Proveeduría (occidente)',
	'COORD. COMPRAS I': 'Coord. Compras I',
	'COORD. CONTROL DE INVENTARIO': 'Coord. Control De Inventario',
	'COORD. DOCUMENTACIÓN DE ACTIVOS': 'Coord. Documentación De Activos',
	'COORD. GESTIÓN Y TRASLADO DE ACTIVOS': 'Coord. Gestión Y Traslado De Activos',
	'COORD. MANTENIMIENTO FISICO SEDES CENTRALES Y AG.': 'Coord. Mantenimiento Fisico Sedes Centrales Y Ag.',
	'COORDINACION ATENCIÓN AL CLIENTE Y OPERACIONES': 'Coordinacion Atención Al Cliente Y Operaciones',
	'COORDINACIÓN CARTERA DE INVERSIONES': 'Coordinación Cartera De Inversiones',
	'COORDINACIÓN CONTABILIDAD TDC AMEX': 'Coordinación Contabilidad TDC Amex',
	'COORDINACION CONTRATOS': 'Coordinacion Contratos',
	'COORDINACIÓN CONTROL CONTABLE': 'Coordinación Control Contable',
	'COORDINACIÓN DE CONTABILIDAD': 'Coordinación De Contabilidad',
	'COORDINACIÓN DE CONTABILIDAD TDC': 'Coordinación De Contabilidad TDC',
	'COORDINACIÓN FACTURACIÓN Y VIÁTICOS': 'Coordinación Facturación Y Viáticos',
	'COORDINACIÓN IMPUESTOS MUNICIPALES': 'Coordinación Impuestos Municipales',
	'COORDINACIÓN IMPUESTOS MUNICIPALES GRAN CCS Y OCCI': 'Coordinación Impuestos Municipales Gran Ccs Y Occi',
	'COORDINACIÓN IMPUESTOS NACIONALES Y ESTADALES': 'Coordinación Impuestos Nacionales Y Estadales',
	'COORDINACION NEGOCIOS INTERNACIONALES': 'Coordinacion Negocios Internacionales',
	'COORDINACION PROVEEDORES': 'Coordinacion Proveedores',
	'COORDINACIÓN PROVEEDORES': 'Coordinación Proveedores',
	'COORDINACION SERVICIOS': 'Coordinacion Servicios',
	'COORDINACIÓN SERVICIOS': 'Coordinación Servicios',
	'COORDINACION TRANSPORTE': 'Coordinacion Transporte',
	'GERENCIA DE ACTIVOS FIJOS': 'Gerencia De Activos Fijos',
	'GERENCIA DE ARA DE CONTRALORÍA DE DATOS': 'Gerencia De Ara De Contraloría De Datos',
	'GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS': 'Gerencia De Area Admin. De Inmuebles Propios',
	'GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA': 'Gerencia De Área Almacen Y Proveeduría',
	'GERENCIA DE ÁREA ANALISIS DE GESTIÓN': 'Gerencia De Área Analisis De Gestión',
	'GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENERALES': 'Gerencia De Área Compras Y Servicios Generales',
	'GERENCIA DE AREA CONTABILIDAD FIDUCIARIA': 'Gerencia De Area Contabilidad Fiduciaria',
	'GERENCIA DE AREA CONTRATOS Y PROVEEDORES': 'Gerencia De Area Contratos Y Proveedores',
	'GERENCIA DE AREA CONTROL DE GESTIÓN': 'Gerencia De Area Control De Gestión',
	'GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS': 'Gerencia De Area Control De Inmuebles Arrendados',
	'GERENCIA DE AREA CONTROL FINANCIERO': 'Gerencia De Area Control Financiero',
	'GERENCIA DE AREA CORRESPONSALIA': 'Gerencia De Area Corresponsalia',
	'GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO': 'Gerencia De Area Ctrl Contable Y Gestión De Gasto',
	'GERENCIA DE AREA DE CONTABILIDAD': 'Gerencia De Area De Contabilidad',
	'GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT': 'Gerencia De Área De Infraestructura Y Mantenimient',
	'GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES': 'Gerencia De Área De Negocios Internacionales',
	'GERENCIA DE AREA NEGOCIOS FIDUCIARIOS': 'Gerencia De Area Negocios Fiduciarios',
	'GERENCIA DE AREA PAGO A PROVEEDORES': 'Gerencia De Area Pago A Proveedores',
	'GERENCIA DE AREA SERVICIOS': 'Gerencia De Area Servicios',
	'GERENCIA DE AREA TRIBUTOS': 'Gerencia De Area Tributos',
	'GERENCIA DE COMPRAS': 'Gerencia De Compras',
	'GERENCIA DE CONTABILIDAD': 'Gerencia De Contabilidad',
	'GERENCIA DE CONTROL CONTABLE': 'Gerencia De Control Contable',
	'GERENCIA DE CONTROL PRESUPUESTARIO': 'Gerencia De Control Presupuestario',
	'GERENCIA DE DEPARTAMENTO GESTIÓN DEL GASTO': 'Gerencia De Departamento Gestión Del Gasto',
	'GERENCIA DE DESARROLLO Y GESTIÓN COMERCIAL': 'Gerencia De Desarrollo Y Gestión Comercial',
	'GERENCIA DE DISTRIBUCIÓN': 'Gerencia De Distribución',
	'GERENCIA DE DOCUMENTACIÓN DE ACTIVOS': 'Gerencia De Documentación De Activos',
	'GERENCIA DE INFORMACIÓN FINANCIERA': 'Gerencia De Información Financiera',
	'GERENCIA DE INVESTIGACIÓN ECONOMICA': 'Gerencia De Investigación Economica',
	'GERENCIA DE MECANISMOS CAMBIARIOS': 'Gerencia De Mecanismos Cambiarios',
	'GERENCIA DE MERCADO MONETARIO': 'Gerencia De Mercado Monetario',
	'GERENCIA DE NEGOCIOS FIDUCIARIOS': 'Gerencia De Negocios Fiduciarios',
	'GERENCIA DE PAGOS': 'Gerencia De Pagos',
	'GERENCIA DE PRESUPUESTO': 'Gerencia De Presupuesto',
	'GERENCIA DE RENTA FIJA': 'Gerencia De Renta Fija',
	'GERENCIA DE VIÁTICOS CONTROL Y REVISORÍA': 'Gerencia De Viáticos Control Y Revisoría',
	'GERENCIA IMPUESTOS MUNICIPALES': 'Gerencia Impuestos Municipales',
	'GERENCIA LEGAL': 'Gerencia Legal',
	'GERENCIA MANTENIMENTO FISICO OCCIDENTE': 'Gerencia Mantenimento Fisico Occidente',
	'GERENCIA NEGOCIOS INTERNACIONALES I': 'Gerencia Negocios Internacionales I',
	'GERENCIA NEGOCIOS INTERNACIONALES II': 'Gerencia Negocios Internacionales II',
	'GERENCIA NEGOCIOS INTERNACIONALES III': 'Gerencia Negocios Internacionales III',
	'GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN': 'Gerencia Proyecto Especial Control Y Gestión',
	'GERENCIA SERVICIOS GENERALES': 'Gerencia Servicios Generales',
	TESORERIA: 'Tesoreria',
	'V.P. CONTRATOS Y SERVICIOS': 'V.P. Contratos Y Servicios',
	'V.P. CONTROL DE INMUEBLES': 'V.P. Control De Inmuebles',
	'V.P. DE CONTRALORÍA': 'V.P. De Contraloría',
	'V.P. DE FIDEICOMISO': 'V.P. De Fideicomiso',
	'V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS': 'V.P. Gestion De Contabilidad Pagos Y Tributos',
	'V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO': 'V.P. Infraestructura Y Mantenimiento Fisico',
	'V.P. PLANIFICACIÓN FINANCIERA Y PRESUPUESTO': 'V.P. Planificación Financiera Y Presupuesto',
	'V.P.E FINANZAS': 'V.p.e Finanzas',
	'GERENCIA DE ÁREA PLAN MAYOR': 'Gerencia De Área Plan Mayor',
	'GERENCIA DE NEGOCIOS BANCA EMPRESA I': 'Gerencia De Negocios Banca Empresa I',
	'GERENCIA DE NEGOCIOS BANCA EMPRESA II': 'Gerencia De Negocios Banca Empresa II',
	'GERENCIA DE NEGOCIOS BANCA EMPRESA III': 'Gerencia De Negocios Banca Empresa III',
	'GERENCIA DE NEGOCIOS BANCA INSTITUCIONAL PRIV I': 'Gerencia De Negocios Banca Institucional Priv I',
	'GERENCIA DE NEGOCIOS BANCA INSTITUCIONAL PRIV II': 'Gerencia De Negocios Banca Institucional Priv II',
	'GERENCIA DE NEGOCIOS BANCA INSTITUCIONAL PRIV III': 'Gerencia De Negocios Banca Institucional Priv III',
	'GERENCIA DE NEGOCIOS BANCA PRIVADA I': 'Gerencia De Negocios Banca Privada I',
	'GERENCIA DE NEGOCIOS BANCA PRIVADA II': 'Gerencia De Negocios Banca Privada II',
	'GERENCIA DE NEGOCIOS BANCA PRIVADA III': 'Gerencia De Negocios Banca Privada III',
	'V.P. BANCA EMPRESAS OCCIDENTE': 'V.P. Banca Empresas Occidente',
	'V.P. DE BANCA EMPRESA CENTRO': 'V.P. De Banca Empresa Centro',
	'V.P. DE BANCA EMPRESAS CAPITAL': 'V.P. De Banca Empresas Capital',
	'V.P. DE BANCA INSTITUCIONAL PRIVADA': 'V.P. De Banca Institucional Privada',
	'V.P. DE BANCA PRIVADA': 'V.P. De Banca Privada',
	'V.P. DE CUENTAS CLAVES Y NUEVOS NEGOCIOS': 'V.P. De Cuentas Claves Y Nuevos Negocios',
	'V.P.BANCA EMPRESAS ORIENTE': 'V.P. banca Empresas Oriente',
	'COORD. ATENCIÓN INTERNA CAI CAPITAL': 'Coord. Atención Interna Cai Capital',
	'COORD. ATENCIÓN INTERNA CAI OCCIDENTE': 'Coord. Atención Interna Cai Occidente',
	'COORD. CORRESPONDENCIA CAPITAL': 'Coord. Correspondencia Capital',
	'COORD. CORRESPONDENCIA OCCIDENTE': 'Coord. Correspondencia Occidente',
	'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA I': 'Coord. Digitalización Y Ctrol De Arch. Aragua I',
	'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA II': 'Coord. Digitalización Y Ctrol De Arch. Aragua II',
	'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL': 'Coord. Digitalización Y Ctrol De Arch. Capital',
	'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. OCCIDENTE': 'Coord. Digitalización Y Ctrol De Arch. Occidente',
	'COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL': 'Coord. Registro De Clientees Región Capital',
	'COORD. REGISTRO DE CLIENTEES REGIÓN CENTRAL': 'Coord. Registro De Clientees Región Central',
	'COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE': 'Coord. Registro De Clientees Región Occidente',
	'COORDINACION CONTROL Y REGISTRO DE OPERACIONES': 'Coordinacion Control Y Registro De Operaciones',
	'COORDINACIÓN OCCIDENTE II': 'Coordinación Occidente II',
	'COORDINACIÓN ZONA ARAGUA': 'Coordinación Zona Aragua',
	'COORDINACIÓN ZONA CAPITAL I': 'Coordinación Zona Capital I',
	'COORDINACIÓN ZONA CAPITAL II': 'Coordinación Zona Capital II',
	'COORDINACIÓN ZONA CAPITAL III': 'Coordinación Zona Capital III',
	'COORDINACIÓN ZONA CARABOBO': 'Coordinación Zona Carabobo',
	'COORDINACIÓN ZONA INSULAR': 'Coordinación Zona Insular',
	'COORDINACIÓN ZONA LOS LLANOS': 'Coordinación Zona Los Llanos',
	'COORDINACIÓN ZONA OCCIDENTE I': 'Coordinación Zona Occidente I',
	'GCIA. REG. OPERACION DE AGENCIAS ARAGUA LOS LLANOS': 'Gcia. Reg. Operacion De Agencias Aragua Los Llanos',
	'GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE': 'Gerencia De Área Back Office Registro De Cliente',
	'GERENCIA DE CONTROL Y GESTIÓN': 'Gerencia De Control Y Gestión',
	'GERENCIA DE DEPARTAMENTO GESTIÓN OPERATIVA ZONA II': 'Gerencia De Departamento Gestión Operativa Zona II',
	'GERENCIA DE EFICIENCIA COMERCIAL': 'Gerencia De Eficiencia Comercial',
	'GERENCIA DE ZONA ANDES I': 'Gerencia De Zona Andes I',
	'GERENCIA DE ZONA ANDES II': 'Gerencia De Zona Andes II',
	'GERENCIA DE ZONA CARABOBO I': 'Gerencia De Zona Carabobo I',
	'GERENCIA DE ZONA CARABOBO II': 'Gerencia De Zona Carabobo II',
	'GERENCIA DE ZONA CENTRO OCCIDENTE': 'Gerencia De Zona Centro Occidente',
	'GERENCIA DE ZONA INSULAR': 'Gerencia De Zona Insular',
	'GERENCIA DE ZONA ORIENTE NORTE I': 'Gerencia De Zona Oriente Norte I',
	'GERENCIA DE ZONA ORIENTE NORTE II': 'Gerencia De Zona Oriente Norte II',
	'GERENCIA DE ZONA ORIENTE NORTE III': 'Gerencia De Zona Oriente Norte III',
	'GERENCIA DE ZONA ORIENTE SUR': 'Gerencia De Zona Oriente Sur',
	'GERENCIA DE ZONA ZULIA FALCÓN I': 'Gerencia De Zona Zulia Falcón I',
	'GERENCIA DE ZONA ZULIA FALCÓN II': 'Gerencia De Zona Zulia Falcón II',
	'GERENCIA DE ZONA ZULIA FALCÓN IV': 'Gerencia De Zona Zulia Falcón IV',
	'GERENCIA DE ZONA ZULIA FALCÓN V': 'Gerencia De Zona Zulia Falcón V',
	'GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA':
		'Gerencia Digitalización, Ctrol Archiv. Y Correspondencia',
	'GERENCIA GESTIÓN OPERATIVA ZONA I': 'Gerencia Gestión Operativa Zona I',
	'GERENCIA REGIONAL OPERACION DE AGENCIAS CARABOBO': 'Gerencia Regional Operacion De Agencias Carabobo',
	'GERENCIA REGIONAL OPERACIÓN DE AGENCIAS CENTRO OCCIDENTE':
		'Gerencia Regional Operación De Agencias Centro Occidente',
	'GERENCIA REGIONAL OPERACION DE AGENCIAS GUAYANA': 'Gerencia Regional Operacion De Agencias Guayana',
	'GERENCIA REGIONAL OPERACION DE AGENCIAS LOS ANDES': 'Gerencia Regional Operacion De Agencias Los Andes',
	'GERENCIA REGIONAL OPERACION DE AGENCIAS OCCIDENTE': 'Gerencia Regional Operacion De Agencias Occidente',
	'GERENCIA REGIONAL OPERACION DE AGENCIAS ORIENTE': 'Gerencia Regional Operacion De Agencias Oriente',
	'V.P ZONA INSULAR': 'V.P. Zona Insular',
	'V.P ZONA ORIENTE': 'V.P. Zona Oriente',
	'V.P. DE NEGOCIOS': 'V.P. De Negocios',
	'V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I': 'V.P. De Zona I Administracion De Agencias I',
	'V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II': 'V.P. De Zona Ii Administracion De Agencias II',
	'V.P. EFICIENCIA COMERCIAL': 'V.P. Eficiencia Comercial',
	'V.P. REGIÓN ARAGUA - LOS LLANOS': 'V.P. Región Aragua - Los Llanos',
	'V.P. REGION CAPITAL I': 'V.P. Region Capital I',
	'V.P. REGION CAPITAL II': 'V.P. Region Capital II',
	'V.P. REGION CAPITAL III': 'V.P. Region Capital III',
	'V.P. REGIÓN CENTRO OCCIDENTE': 'V.P. Región Centro Occidente',
	'V.P. REGIÓN OCCIDENTE': 'V.P. Región Occidente',
	'V.P. REGIÓN ORIENTE': 'V.P. Región Oriente',
	'V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS': 'V.P. Regional Gestión Operativa De Agencias',
	'V.P. ZONA ARAGUA': 'V.P. Zona Aragua',
	'V.P. ZONA CARABOBO': 'V.P. Zona Carabobo',
	'V.P. ZONA CENTRO OCCIDENTE': 'V.P. Zona Centro Occidente',
	'V.P. ZONA LOS ANDES': 'V.P. Zona Los Andes',
	'V.P. ZONA LOS LLANOS': 'V.P. Zona Los Llanos',
	'V.P.E. DE BANCA COMERCIAL': 'V.P.E. De Banca Comercial',
	'GCIA. DE NEGOCIOS SECT AGROPEC RG. ARAGUA-CARABOBO': 'Gcia. De Negocios Sect Agropec Rg. Aragua-carabobo',
	'GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. CAPITAL': 'Gcia. De Negocios Sect Agropecuario Rg. Capital',
	'GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. CENT. OCCI': 'Gcia. De Negocios Sect Agropecuario Rg. Cent. Occi',
	'GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. OCCIDENTE': 'Gcia. De Negocios Sect Agropecuario Rg. Occidente',
	'GERENCIA CONTROL Y SEGUIMIENTO': 'Gerencia Control Y Seguimiento',
	'GERENCIA DE AREA DE NEGOCIOS CENTRO': 'Gerencia De Area De Negocios Centro',
	'GERENCIA DE AREA DE NEGOCIOS MULTINACIONAL': 'Gerencia De Area De Negocios Multinacional',
	'GERENCIA DE AREA DE NEGOCIOS SECTOR FINANCIERO': 'Gerencia De Area De Negocios Sector Financiero',
	'GERENCIA DE AREA DE NEGOCIOS SECTOR NACIONAL': 'Gerencia De Area De Negocios Sector Nacional',
	'GERENCIA DE NEGOCIOS CAPITAL I': 'Gerencia De Negocios Capital I',
	'GERENCIA DE NEGOCIOS CAPITAL II': 'Gerencia De Negocios Capital II',
	'GERENCIA DE NEGOCIOS CONSUMO': 'Gerencia De Negocios Consumo',
	'GERENCIA DE NEGOCIOS CONTROL Y SEGUIMIENTO': 'Gerencia De Negocios Control Y Seguimiento',
	'GERENCIA DE NEGOCIOS GAS Y PETRÓLEO': 'Gerencia De Negocios Gas Y Petróleo',
	'GERENCIA DE NEGOCIOS LOS ANDES': 'Gerencia De Negocios Los Andes',
	'GERENCIA DE NEGOCIOS MEDIOS': 'Gerencia De Negocios Medios',
	'GERENCIA DE NEGOCIOS MULTINACIONAL I': 'Gerencia De Negocios Multinacional I',
	'GERENCIA DE NEGOCIOS MULTINACIONAL II': 'Gerencia De Negocios Multinacional II',
	'GERENCIA DE NEGOCIOS OCCIDENTE': 'Gerencia De Negocios Occidente',
	'GERENCIA DE NEGOCIOS ORIENTE': 'Gerencia De Negocios Oriente',
	'GERENCIA DE NEGOCIOS SECTOR CASA DE BOLSA': 'Gerencia De Negocios Sector Casa De Bolsa',
	'GERENCIA DE NEGOCIOS SECTOR SEGUROS': 'Gerencia De Negocios Sector Seguros',
	'GERENCIA REGIONAL DE NEGOCIOS CENTRO': 'Gerencia Regional De Negocios Centro',
	'GERENCIA REGIONAL DE NEGOCIOS I': 'Gerencia Regional De Negocios I',
	'GERENCIA REGIONAL DE NEGOCIOS II': 'Gerencia Regional De Negocios II',
	'GERENCIA REGIONAL DE NEGOCIOS SECTOR AGROPECUARIO': 'Gerencia Regional De Negocios Sector Agropecuario',
	'V.P. CORPORATIVA GRANDES EMPRESAS': 'V.P. Corporativa Grandes Empresas',
	'V.P. CORPORATIVA SECTOR AGROPECUARIO': 'V.P. Corporativa Sector Agropecuario',
	'V.P. CORPORATIVA SECTOR FINANCIERO': 'V.P. Corporativa Sector Financiero',
	'V.P. CORPORATIVA SECTOR TELECOMUNICACIONES': 'V.P. Corporativa Sector Telecomunicaciones',
	'V.P.E. DE BANCA CORPORATIVA': 'V.P.E. De Banca Corporativa',
	'COORDINACIÓN DE BENEFICIOS': 'Coordinación De Beneficios',
	'COORDINACION DE COMPENSACION SALARIAL': 'Coordinacion De Compensacion Salarial',
	'COORDINACION DE DESARROLLO': 'Coordinacion De Desarrollo',
	'COORDINACION DE FORMACION': 'Coordinacion De Formacion',
	'COORDINACION GESTION DE PERSONAL': 'Coordinacion Gestion De Personal',
	'COORDINACION GESTION NOMINA': 'Coordinacion Gestion Nomina',
	'COORDINACION SELECCION DE TALENTO': 'Coordinacion Seleccion De Talento',
	'GCIA DE AREA GESTIÓN DE ESTRUCTURAS DIRECC CENTRAL': 'Gcia De Area Gestión De Estructuras Direcc Central',
	'GCIA. DE ÁREA DE PROYECTOS DE TRANSFORMACIÓN': 'Gcia. De Área De Proyectos De Transformación',
	'GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS': 'Gerencia De Área Arquitectura De Procesos',
	'GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS': 'Gerencia De Area Compensación Y Beneficios',
	'GERENCIA DE AREA DEF.  DE MODELOS DE CALIDAD': 'Gerencia De Area Def.  De Modelos De Calidad',
	'GERENCIA DE AREA EVAL. DE INDICADORES DE CALIDAD': 'Gerencia De Area Eval. De Indicadores De Calidad',
	'GERENCIA DE ÁREA GESTIÓN DE ESTRUCTURAS NEGOCIO': 'Gerencia De Área Gestión De Estructuras Negocio',
	'GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL': 'Gerencia De Area Gestion De Servicios Al Personal',
	'GERENCIA DE AREA SELECCION DE TALENTO': 'Gerencia De Area Seleccion De Talento',
	'GERENCIA DE AREA TRANSFORMACIÓN': 'Gerencia De Area Transformación',
	'GERENCIA DE CAJA DE AHORROS': 'Gerencia De Caja De Ahorros',
	'GERENCIA DE SEGURIDAD Y SALUD LABORAL': 'Gerencia De Seguridad Y Salud Laboral',
	'GERENCIA GESTIÓN DOCUMENTAL': 'Gerencia Gestión Documental',
	'GERENCIA SALUD OCUPACIONAL': 'Gerencia Salud Ocupacional',
	'V.P. CALIDAD DE SERVICIO': 'V.P. Calidad De Servicio',
	'V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS': 'V.P. Gestión Organizacional Y Procesos',
	'V.P. PMO PLANES ESTRATÉGICOS': 'V.P. Pmo Planes Estratégicos',
	'V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN': 'V.P.E. Desarrollo Organizacional Y Transformación',
	'COORD. (CENTRO - LOS LLANOS)': 'Coord. (centro - Los Llanos)',
	'COORD. (OCCIDENTE - ANDES)': 'Coord. (occidente - Andes)',
	'COORD. CONSOLA TORRE FINANCIERA': 'Coord. Consola Torre Financiera',
	'COORD. SEGURIDAD ALMACENES GUATIRE': 'Coord. Seguridad Almacenes Guatire',
	'COORD. SEGURIDAD FÍSICA REGIÓN CAPITAL': 'Coord. Seguridad Física Región Capital',
	'COORD. SEGURIDAD SAN BERNARDINO': 'Coord. Seguridad San Bernardino',
	'COORDINACIÓN CUSTODIOS Y SISTEMAS DE SEGURIDAD': 'Coordinación Custodios Y Sistemas De Seguridad',
	'COORDINACIÓN DE PROYECTOS Y SOPORTE TECNICO': 'Coordinación De Proyectos Y Soporte Tecnico',
	'COORDINACIÓN INVESTIGACIONES CARACAS': 'Coordinación Investigaciones Caracas',
	'COORDINACIÓN INVESTIGACIONES MARACAIBO': 'Coordinación Investigaciones Maracaibo',
	'CORRD. SEGURIDAD FÍSICA REGIÓN ANDES I': 'Corrd. Seguridad Física Región Andes I',
	'CORRD. SEGURIDAD FÍSICA REGIÓN ANDES II': 'Corrd. Seguridad Física Región Andes II',
	'CORRD. SEGURIDAD FÍSICA REGIÓN CENTRAL': 'Corrd. Seguridad Física Región Central',
	'CORRD. SEGURIDAD FÍSICA REGIÓN FALCÓN': 'Corrd. Seguridad Física Región Falcón',
	'CORRD. SEGURIDAD FÍSICA REGIÓN OCCIDENTE': 'Corrd. Seguridad Física Región Occidente',
	'CORRD. SEGURIDAD FÍSICA REGIÓN ORIENTE': 'Corrd. Seguridad Física Región Oriente',
	'GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA': 'Gerencia De Area Admin. De Seguridad Bancaria',
	'GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC': 'Gerencia De Area Seguridad Industrial Y Contingenc',
	'GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA': 'Gerencia De Área Seguridad Preventiva Y Prot. Física',
	'GERENCIA DE INVESTIGACIONES': 'Gerencia De Investigaciones',
	'GERENCIA DE PROYECTOS Y SOPORTE TECNICO': 'Gerencia De Proyectos Y Soporte Tecnico',
	'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL': 'Gerencia Monitoreo Y Anti Fraude Capital',
	'GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE': 'Gerencia Monitoreo Y Anti Fraude Occidente',
	'GERENCIA NACIONAL DE CONSOLA': 'Gerencia Nacional De Consola',
	'GERENCIA SOPORTE INV. TECNO. DE SEGURIDAD BANCARIA': 'Gerencia Soporte Inv. Tecno. De Seguridad Bancaria',
	'V.P. GESTIÓN DE SEGURIDAD BANCARIA': 'V.P. Gestión De Seguridad Bancaria',
	'V.P. PREVENCIÓN Y CONTROL DEL FRAUDE': 'V.P. Prevención Y Control Del Fraude',
	'V.P. SEGURIDAD PREVENTIVA Y PROTECCIÓN FÍSICA': 'V.P. Seguridad Preventiva Y Protección Física',
	'V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN': 'V.P.E. Gestión De La Seguridad Y Prevención',
	'COORD. COBRANZA DE CREDITOS AL CONSUMO': 'Coord. Cobranza De Creditos Al Consumo',
	'COORD. CREDITOS COMERCIALES': 'Coord. Creditos Comerciales',
	'GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL': 'Gcia. De Analisis De Credito Banca Comercial',
	'GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA': 'Gcia. De Analisis De Credito Banca Corporativa',
	'GCIA. DE CONTROL ESTADISTICO E INFORME ESPECIALES': 'Gcia. De Control Estadistico E Informe Especiales',
	'GCIA. DE CREDITO BANCA ESPECIALIZADA': 'Gcia. De Credito Banca Especializada',
	'GERENCIA DE ARCHIVO CENTRAL DE CREDITO': 'Gerencia De Archivo Central De Credito',
	'GERENCIA DE ÁREA DE COBRANZA Y RECUPERACIONES': 'Gerencia De Área De Cobranza Y Recuperaciones',
	'GERENCIA DE CONTROL DE CARTERA DE CREDITO': 'Gerencia De Control De Cartera De Credito',
	'GERENCIA DE FIANZAS Y GARANTIAS': 'Gerencia De Fianzas Y Garantias',
	'GERENCIA DE VALIDACION': 'Gerencia De Validacion',
	'V.P. ANÁLISIS DE CRÉDITO': 'V.P. Análisis De Crédito',
	'V.P. SEGUIMIENTO Y CONTROL DE CREDITO': 'V.P. Seguimiento Y Control De Credito',
	'COORD. CANALES DIGITALES Y DISTRIBUIDOS': 'Coord. Canales Digitales Y Distribuidos',
	'COORDINACIÓN ADMINISTRACIÓN DE AMBIENTES': 'Coordinación Administración De Ambientes',
	'COORDINACIÓN ARQUITECTURA': 'Coordinación Arquitectura',
	'COORDINACIÓN BASES DE DATOS DISTRIBUIDA': 'Coordinación Bases De Datos Distribuida',
	'COORDINACIÓN CENTRO ALTERNO': 'Coordinación Centro Alterno',
	'COORDINACIÓN DE MONITOREO ATM': 'Coordinación De Monitoreo Atm',
	'COORDINACIÓN DE SOPORTE POS CAPITAL': 'Coordinación De Soporte Pos Capital',
	'COORDINACIÓN MONITOREO POS CARACAS': 'Coordinación Monitoreo Pos Caracas',
	'COORDINACIÓN PLATAFORMA CENTRALIZADA': 'Coordinación Plataforma Centralizada',
	'COORDINACIÓN PLATAFORMA MEDIA': 'Coordinación Plataforma Media',
	'COORDINACIÓN PRODUCCIÓN CARACAS': 'Coordinación Producción Caracas',
	'COORDINACIÓN PRODUCCIÓN OCCIDENTE': 'Coordinación Producción Occidente',
	'COORDINACIÓN PROYECTOS TÉCNICOS': 'Coordinación Proyectos Técnicos',
	'COORDINACIÓN REDES Y COMUNICACIONES CARACAS': 'Coordinación Redes Y Comunicaciones Caracas',
	'COORDINACIÓN REDES Y COMUNICACIONES OCCIDENTE': 'Coordinación Redes Y Comunicaciones Occidente',
	'COORDINACIÓN SISTEMAS POSTILLION': 'Coordinación Sistemas Postillion',
	'COORDINACIÓN SOPORTE VIP': 'Coordinación Soporte Vip',
	'COORDINACIÓN TÉCNICA ATM': 'Coordinación Técnica Atm',
	'GERENCIA BANCA EN LINEA': 'Gerencia Banca En Linea',
	'GERENCIA COMUNICACIÓN PERIMETRAL': 'Gerencia Comunicación Perimetral',
	'GERENCIA DE AREA ADMINISTRACIÓN DE BASES DE DATOS': 'Gerencia De Area Administración De Bases De Datos',
	'GERENCIA DE AREA BI Y REGULATORIOS': 'Gerencia De Area BI Y Regulatorios',
	'GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS': 'Gerencia De Area BI Y Sistemas Regulatorios',
	'GERENCIA DE AREA CORE BANCARIO': 'Gerencia De Area Core Bancario',
	'GERENCIA DE AREA DE COMUNICACIONES': 'Gerencia De Area De Comunicaciones',
	'GERENCIA DE AREA DE SOPORTE DE ATMS': 'Gerencia De Area De Soporte De ATMs',
	'GERENCIA DE AREA DE SOPORTE POS': 'Gerencia De Area De Soporte POS',
	'GERENCIA DE AREA ENERGÍA': 'Gerencia De Area Energía',
	'GERENCIA DE AREA GESTIÓN DE CERTIFICACIÓN': 'Gerencia De Area Gestión De Certificación',
	'GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA': 'Gerencia De Area Integración De Plataforma',
	'GERENCIA DE AREA OFICINA DE PROYECTOS': 'Gerencia De Area Oficina De Proyectos',
	'GERENCIA DE AREA PLATAFORMA ESPECIALIZADA': 'Gerencia De Area Plataforma Especializada',
	'GERENCIA DE AREA PRODUCCIÓN': 'Gerencia De Area Producción',
	'GERENCIA DE AREA PROYECT DE INTEGRAC DE PLATAFORMA': 'Gerencia De Area Proyect De Integrac De Plataforma',
	'GERENCIA DE AREA PROYECTOS CANALES DIGITALES': 'Gerencia De Area Proyectos Canales Digitales',
	'GERENCIA DE AREA PROYECTOS CORE BANCARIO': 'Gerencia De Area Proyectos Core Bancario',
	'GERENCIA DE AREA PROYECTOS DE SEGURIDAD TI': 'Gerencia De Area Proyectos De Seguridad TI',
	'GERENCIA DE AREA PROYECTOS ESPECIALES': 'Gerencia De Area Proyectos Especiales',
	'GERENCIA DE AREA PROYECTOS POS ATMS': 'Gerencia De Area Proyectos Pos ATMs',
	'GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO': 'Gerencia De Area Sistema De Medios De Pago',
	'GERENCIA DE AREA SISTEMA DISTRIBUIDO': 'Gerencia De Area Sistema Distribuido',
	'GERENCIA DE DESARROLLO DE SISTEMAS INTERNOS': 'Gerencia De Desarrollo De Sistemas Internos',
	'GERENCIA DE ENERGÍA CARACAS': 'Gerencia De Energía Caracas',
	'GERENCIA DE ENERGÍA MARACAIBO': 'Gerencia De Energía Maracaibo',
	'GERENCIA DE INTEGRACIÓN PLATAFORMA AS-400': 'Gerencia De Integración Plataforma AS-400',
	'GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA': 'Gerencia De Monitoreo Telco E Infraestructura',
	'GERENCIA DE OPEN BANKING': 'Gerencia De Open Banking',
	'GERENCIA DE PRODUCCIÓN CARACAS': 'Gerencia De Producción Caracas',
	'GERENCIA DE PROYECTOS TI': 'Gerencia De Proyectos TI',
	'GERENCIA DE SISTEMA PRODUCTOS ACTIVOS': 'Gerencia De Sistema Productos Activos',
	'GERENCIA DE SISTEMA PRODUCTOS PASIVOS': 'Gerencia De Sistema Productos Pasivos',
	'GERENCIA DE SISTEMAS POS': 'Gerencia De Sistemas POS',
	'GERENCIA DE SOPORTE TECNICO CARACAS': 'Gerencia De Soporte Tecnico Caracas',
	'GERENCIA DE SOPORTE TECNICO OCCIDENTE': 'Gerencia De Soporte Tecnico Occidente',
	'GERENCIA DESARROLLO DE SISTEMAS DE INTEGRACIÓN': 'Gerencia Desarrollo De Sistemas De Integración',
	'GERENCIA INTEGRACIÓN DE PLATAFORMAS DISTRIBUIDAS': 'Gerencia Integración De Plataformas Distribuidas',
	'GERENCIA REDES Y COMUNICACIÓN': 'Gerencia Redes Y Comunicación',
	'GERENCIA SISTEMAS DE SUCURSALES': 'Gerencia Sistemas De Sucursales',
	'GERENCIA SOPORTE POS CAPITAL': 'Gerencia Soporte Pos Capital',
	'GERENCIA SOPORTE POS OCCIDENTE': 'Gerencia Soporte Pos Occidente',
	'GERENCIA TELEFONÍA': 'Gerencia Telefonía',
	'V.P. DESARROLLO DE SOTWARE': 'V.P. Desarrollo De Sotware',
	'V.P. GESTIÓN DE PROYECTOS TI': 'V.P. Gestión De Proyectos TI',
	'V.P. SOPORTE A CANALES ELECTRÓNICOS': 'V.P. Soporte A Canales Electrónicos',
	'V.P. TECNOLOGÍA': 'V.P. Tecnología',
	'V.P.E. INGENIERIA TECNOLÓGICA': 'V.P.E. Ingenieria Tecnológica',
	'COORD RECAUDACIÓN SENIAT': 'Coord Recaudación Seniat',
	'COORD RECLAMOS DE CANALES ELECTRÓNICOS TDC ZONA 2': 'Coord Reclamos De Canales Electrónicos Tdc Zona 2',
	'COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 1': 'Coord Reclamos De Canales Electrónicos Tdd Zona 1',
	'COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 2': 'Coord Reclamos De Canales Electrónicos Tdd Zona 2',
	'COORD RECLAMOS DE CANALES ELETRÓNICOS TDC ZONA 1': 'Coord Reclamos De Canales Eletrónicos Tdc Zona 1',
	'COORD. ATENCIÓN AL CLIENTE': 'Coord. Atención Al Cliente',
	'COORD. RECAUDACIÓN GOBERNACIONES, ALCALDIAS': 'Coord. Recaudación Gobernaciones, Alcaldias',
	'COORDINACIÓN CONTROL ADM. Y CENTROS DE ACOPIO': 'Coordinación Control Adm. Y Centros De Acopio',
	'COORDINACIÓN CONTROL CONTABLE Y FACTURACIÓN': 'Coordinación Control Contable Y Facturación',
	'COORDINACIÓN CONTROL OPERATIVO': 'Coordinación Control Operativo',
	'COORDINACIÓN CONTROL Y SEGUIMIENTO': 'Coordinación Control Y Seguimiento',
	'COORDINACIÓN CUSTODIA DOCUMENTAL': 'Coordinación Custodia Documental',
	'COORDINACIÓN CUSTODIA TÍTULOS VALORES': 'Coordinación Custodia Títulos Valores',
	'COORDINACIÓN DE IVSS, NÓMINA Y DOMICILIACIONES': 'Coordinación De Ivss, Nómina Y Domiciliaciones',
	'COORDINACIÓN DE LOGÍSTICA MONEDA NACIONAL': 'Coordinación De Logística Moneda Nacional',
	'COORDINACIÓN DE REPORTARÍA Y MONITOREO DE OPERACIONES': 'Coordinación De Reportaría Y Monitoreo De Operaciones',
	'COORDINACIÓN MONEDA EXTRANJERA': 'Coordinación Moneda Extranjera',
	'COORDINACIÓN OPERACIONES BACK OFFICE Y SEGURO': 'Coordinación Operaciones Back Office Y Seguro',
	'COORDINACIÓN OPERACIONES DE CAMBIO': 'Coordinación Operaciones De Cambio',
	'COORDINACIÓNDE LOGÍSTICA MONEDA EXTRANJERA': 'Coordinaciónde Logística Moneda Extranjera',
	'GERENCIA CENTRO DE ACOPIO MARACAIBO': 'Gerencia Centro De Acopio Maracaibo',
	'GERENCIA CENTRO DE ACOPIO MARACAY': 'Gerencia Centro De Acopio Maracay',
	'GERENCIA CENTRO DE ACOPIO VALENCIA': 'Gerencia Centro De Acopio Valencia',
	'GERENCIA DE APLICACIONES DE COBRO Y PROCE MASIVOS': 'Gerencia De Aplicaciones De Cobro Y Proce Masivos',
	'GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS': 'Gerencia De Área Admin De Cuentas Y Estadísticas',
	'GERENCIA DE ÁREA DE LIQUIDACIONES Y APLIC DE COBRO': 'Gerencia De Área De Liquidaciones Y Aplic De Cobro',
	'GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO':
		'Gerencia De Área De Transporte De Valores Y Centros De Acopio',
	'GERENCIA DE ÁREA GESTIÓN Y CONTROL OPERATIVO': 'Gerencia De Área Gestión Y Control Operativo',
	'GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO': 'Gerencia De Área Logística De Efectivo',
	'GERENCIA DE ÁREA OPERACIONES DE TESORERÍA': 'Gerencia De Área Operaciones De Tesorería',
	'GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS': 'Gerencia De Área Operaciones Especializadas',
	'GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV': 'Gerencia De Área Recauda De Impuestos Y Otros Serv',
	'GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS': 'Gerencia De Área Reclamos De Canales Electronicos',
	'GERENCIA DE COMERCIO EXTERIOR Y ATENCIÓN AL EXPORT': 'Gerencia De Comercio Exterior Y Atención Al Export',
	'GERENCIA DE CUSTODIA': 'Gerencia De Custodia',
	'GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA': 'Gerencia De Procesos Especiales Y Reportería',
	'GERENCIA DE PRODUCCIÓN AMEX': 'Gerencia De Producción Amex',
	'GERENCIA DE PRODUCCIÓN VISA Y MASTER': 'Gerencia De Producción Visa Y Master',
	'GERENCIA EMISIÓN Y DISTRIBUCIÓN AMEX': 'Gerencia Emisión Y Distribución Amex',
	'GERENCIA EMISIÓN Y DISTRIBUCIÓN VISA Y MASTER': 'Gerencia Emisión Y Distribución Visa Y Master',
	'GERENCIA OPERACIONES ESPECIALIZADAS': 'Gerencia Operaciones Especializadas',
	'GERENCIA OPERACIONES MONEDA EXTRANJERA': 'Gerencia Operaciones Moneda Extranjera',
	'GERENCIA OPERACIONES MONEDA NACIONAL': 'Gerencia Operaciones Moneda Nacional',
	'GERENCIA RECLAMO DE CANALES ELECTRONICOS ZONA 1': 'Gerencia Reclamo De Canales Electronicos Zona 1',
	'GERENCIA RECLAMOS DE CANALES ELECTRONICOS ZONA 2': 'Gerencia Reclamos De Canales Electronicos Zona 2',
	'V.P. ATENCIÓN AL CLIENTE': 'V.P. Atención Al Cliente',
	'V.P. DE GESTIÓN OPERATIVA INTERNA Y PROYECTOS ESPE': 'V.P. De Gestión Operativa Interna Y Proyectos Espe',
	'V.P. DE LIQUIDACIONES Y SERVICIOS': 'V.P. De Liquidaciones Y Servicios',
	'V.P. EMISIÓN Y DISTRIBUCIÓN': 'V.P. Emisión Y Distribución',
	'V.P. OPERACIONES DE EFECTIVO': 'V.P. Operaciones De Efectivo',
	'V.P. OPERACIONES DE TESORERÍA': 'V.P. Operaciones De Tesorería',
	'COORD. ASUNTOS CORP. Y CONFIRMACIONES BANCARIAS': 'Coord. Asuntos Corp. Y Confirmaciones Bancarias',
	'COORD. LIBERACIONES Y DOCUMENTACIÓN': 'Coord. Liberaciones Y Documentación',
	'GERENCIA ASUNTOS CORP. Y CONFIRMACIONES BANCARIAS': 'Gerencia Asuntos Corp. Y Confirmaciones Bancarias',
	'GERENCIA CONSULTA, DE PRODUCTOS Y CONTRATOS ESPEC.': 'Gerencia Consulta, De Productos Y Contratos Espec.',
	'GERENCIA CONTROL INSTITUCIONAL': 'Gerencia Control Institucional',
	'GERENCIA DE ÁREA ASUNTOS TÉCNICOS REGULATORIOS': 'Gerencia De Área Asuntos Técnicos Regulatorios',
	'GERENCIA DE ÁREA CTROL INSTITUCIONAL Y ASUNTOS CORP.': 'Gerencia De Área Ctrol Institucional Y Asuntos Corp.',
	'GERENCIA DE ÁREA LEGAL Y ORGANISMOS OFICIALES': 'Gerencia De Área Legal Y Organismos Oficiales',
	'GERENCIA GESTIÓN ADMINISTRATIVA': 'Gerencia Gestión Administrativa',
	'GERENCIA LEGAL DE CRÉDITOS': 'Gerencia Legal De Créditos',
	'GERENCIA LIBERACIONES Y DOCUMENTACIÓN': 'Gerencia Liberaciones Y Documentación',
	'GERENCIA SEGUIMIENTO Y CONTROL': 'Gerencia Seguimiento Y Control',
	'V.P. ASEGURAMIENTO NORMATIVO': 'V.P. Aseguramiento Normativo',
	'V.P. ASUNTOS LEGALES': 'V.P. Asuntos Legales',
	'V.P.E. SERVICIOS JURÍDICOS': 'V.P.E. Servicios Jurídicos',
	'COODINACIÓN DE ATENCIÓN POST VENTA': 'Coodinación De Atención Post Venta',
	'COORD SERV AL CLT Y PROCESAMIENTO DE SOLICITUDES': 'Coord Serv Al Clt Y Procesamiento De Solicitudes',
	'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I': 'Coord. Atención Telefónica Al Cliente (m) I',
	'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II': 'Coord. Atención Telefónica Al Cliente (m) II',
	'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) V': 'Coord. Atención Telefónica Al Cliente (n) V',
	'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) VI': 'Coord. Atención Telefónica Al Cliente (n) VI',
	'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) III': 'Coord. Atención Telefónica Al Cliente (t) III',
	'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV': 'Coord. Atención Telefónica Al Cliente (t) IV',
	'COORD. MANTENIMIENTO Y SOPORTE AL CLIENTE': 'Coord. Mantenimiento Y Soporte Al Cliente',
	'COORD. SOLUCIONES INTEGRALES WHATSAPP': 'Coord. Soluciones Integrales Whatsapp',
	'COORDINACIÓN COMUNICACIONES EXTERNAS': 'Coordinación Comunicaciones Externas',
	'COORDINACIÓN COMUNICACIONES INTERNAS': 'Coordinación Comunicaciones Internas',
	'COORDINACIÓN DE EMPRENDEDORES': 'Coordinación De Emprendedores',
	'COORDINACIÓN DE PRODUCTOS': 'Coordinación De Productos',
	'COORDINACIÓN DESARROLLO DE CANALES DIGITALES': 'Coordinación Desarrollo De Canales Digitales',
	'COORDINACIÓN DISEÑO GRÁFICO': 'Coordinación Diseño Gráfico',
	'COORDINACIÓN DOMICILIACIÓN POS': 'Coordinación Domiciliación POS',
	'COORDINACIÓN INTELIGENCIA DE NEGOCIOS': 'Coordinación Inteligencia De Negocios',
	'COORDINACIÓN OFICINA MÓVIL': 'Coordinación Oficina Móvil',
	'COORDINACIÓN OFICINA VIRTUAL BNC': 'Coordinación Oficina Virtual BNC',
	'COORDINACIÓN POS - MERCHANT': 'Coordinación Pos - Merchant',
	'COORDINACIÓN RECUPERACIONES POS': 'Coordinación Recuperaciones POS',
	'COORDINACIÓN SERVICIO AL CLIENTE POS': 'Coordinación Servicio Al Cliente POS',
	'COORDINACIÓN SERVICIOS DE AFILIACIÓN POS': 'Coordinación Servicios De Afiliación POS',
	'GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR': 'Gerencia Afiliación Al Servicio Pos Interior',
	'GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA': 'Gerencia Afiliación Al Servicio Pos Metropolitana',
	'GERENCIA ANALÍTICA DIGITAL': 'Gerencia Analítica Digital',
	'GERENCIA DE AREA CONTACT CENTER': 'Gerencia De Area Contact Center',
	'GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS': 'Gerencia De Área De Comunicaciones Corporativas',
	'GERENCIA DE ÁREA EXPERIENCIA DIGITAL': 'Gerencia De Área Experiencia Digital',
	'GERENCIA DE ÁREA PRODUCTOS Y SERV TDD Y SOL EMERG': 'Gerencia De Área Productos Y Serv Tdd Y Sol Emerg',
	'GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC': 'Gerencia De Área Productos Y Servicios TDC',
	'GERENCIA DE DESARROLLO DE CANALES DIGITALES': 'Gerencia De Desarrollo De Canales Digitales',
	'GERENCIA DE EVENTOS E IMAGEN CORPORATIVAS': 'Gerencia De Eventos E Imagen Corporativas',
	'GERENCIA DE INNOVACIÓN Y PRODUCTOS': 'Gerencia De Innovación Y Productos',
	'GERENCIA DE MARCA': 'Gerencia De Marca',
	'GERENCIA DE MEDIOS DIGITALES': 'Gerencia De Medios Digitales',
	'GERENCIA OFICINA DIGITAL': 'Gerencia Oficina Digital',
	'GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS': 'Gerencia Servicio Al Cliente Y Recuperaciones POS',
	'GERENCIA SERVICIOS POST VENTA JURÍDICOS': 'Gerencia Servicios Post Venta Jurídicos',
	'V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS': 'V.P. De Mercadeo Y Comunicaciones Corporativas',
	'V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS': 'V.P. De Productos Y Servicios De Tarjetas',
	'V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN': 'V.P. Desarollo De Negocios E Innovación',
	'V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL': 'V.P. Inteligencia De Negocios Y Analítica Digital',
	'V.P. SERVICIOS AL CLIENTE': 'V.P. Servicios Al Cliente',
	'V.P. SOLUCIONES ELECTRÓNICAS': 'V.P. Soluciones Electrónicas',
	'V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES': 'V.P.E. Soluciones De Clientes Y Serv. Digitales',
	'SAN BERNARDINO': 'San Bernardino',
	'TRAKI SAN MARTIN': 'Traki San Martin',
	'MARACAIBO CENTRO COMERCIAL GRAN BAZAR': 'Maracaibo Centro Comercial Gran Bazar',
	'CORO SUPERMERCADO EUROFALCON': 'Coro Supermercado Eurofalcon',
	'PUERTO LA CRUZ AV. ALBERTO RAVELL': 'Puerto La Cruz Av. Alberto Ravell',
	'MARACAY AV VARGAS': 'Maracay Av Vargas',
	'CARUPANO CENTRO COMERCIAL CRISTAL': 'Carupano Centro Comercial Cristal',
	'VALENCIA C.C. CONCEPTO LA GRANJA': 'Valencia C.C. Concepto La Granja',
	'PORLAMAR ALCALDIA MARIÑO': 'Porlamar Alcaldia Mariño',
	'BEJUMA AV LOS FUNDADORES': 'Bejuma Av Los Fundadores',
	'LA CANDELARIA-CASABERA': 'La Candelaria-casabera',
	'PUERTO ORDAZ CONTINENTAL': 'Puerto Ordaz Continental',
	'EL VIGIA': 'El Vigia',
	'ALCALDIA DE CASANAY': 'Alcaldia De Casanay',
	VALERA: 'Valera',
	'PUNTO FIJO-FALCÓN': 'Punto Fijo-falcón',
	'LA URBINA': 'La Urbina',
	'CORO I - FALCON': 'Coro I - Falcon',
	'LOS HATICOS - MARACAIBO': 'Los Haticos - Maracaibo',
	'CC PLANETA SOTAVENTOS MAIQUETIA': 'Cc Planeta Sotaventos Maiquetia',
	'MARACAIBO AV. 5 DE JULIO': 'Maracaibo Av. 5 De Julio',
	'VILLA DEL ROSARIO': 'Villa Del Rosario',
	'VALENCIA CAMORUCO': 'Valencia Camoruco',
	'VALENCIA CENTRO': 'Valencia Centro',
	'CIUDAD BOLIVAR II': 'Ciudad Bolivar II',
	'CATIA BOULEVARD': 'Catia Boulevard',
	'CLUB LA LAGUNITA': 'Club La Lagunita',
	CHORONI: 'Choroni',
	'CENTRO MEDICO MARACAY': 'Centro Medico Maracay',
	CHARALLAVE: 'Charallave',
	'LOS DOS CAMINOS': 'Los Dos Caminos',
	'LA VICTORIA PALMA CENTER': 'La Victoria Palma Center',
	PORLAMAR: 'Porlamar',
	'LAS GARCITAS VALENCIA': 'Las Garcitas Valencia',
	'CIUDAD OJEDA CENTRO': 'Ciudad Ojeda Centro',
	'MATURIN II': 'Maturin II',
	'C.C. BABILON CENTRO SUR': 'C.C. Babilon Centro Sur',
	'LA TRINIDAD ZONA INDUSTRIAL': 'La Trinidad Zona Industrial',
	'EUROBUILDING PUERTO ORDAZ': 'Eurobuilding Puerto Ordaz',
	'EUROBUILDING BARINAS': 'Eurobuilding Barinas',
	'CLUB PUERTO AZUL': 'Club Puerto Azul',
	'LOS TAQUES - FALCÓN': 'Los Taques - Falcón',
	'PORLAMAR CENTRO': 'Porlamar Centro',
	'CIUDAD OJEDA': 'Ciudad Ojeda',
	'CENTRO COMERCIAL LOS TEQUES': 'Centro Comercial Los Teques',
	'EL SOMBRERO': 'El Sombrero',
	'CENTRO COMERCIAL METROPOLIS': 'Centro Comercial Metropolis',
	'SANTA MONICA': 'Santa Monica',
	'C.C. METRÓPOLIS VALENCIA': 'C.C. Metrópolis Valencia',
	'TRAKI CABIMAS': 'Traki Cabimas',
	'GUATIRE AV. INTERCOMUNAL': 'Guatire Av. Intercomunal',
	'EL TIGRITO': 'El Tigrito',
	'LA MORITA': 'La Morita',
	LECHERIA: 'Lecheria',
	'TRAKI CUMANA': 'Traki Cumana',
	'SANTA TERESA DEL TUY': 'Santa Teresa Del Tuy',
	'SAN IGNACIO': 'San Ignacio',
	'EL VIÑEDO': 'El Viñedo',
	GUARENAS: 'Guarenas',
	'MARACAIBO III': 'Maracaibo Iii',
	'SAN FELIPE': 'San Felipe',
	BARINAS: 'Barinas',
	'CHARALLAVE - C.C.SUPER LIDER': 'Charallave - C.C.Super Lider',
	'TUMERO C.C. MARIÑO PLAZA': 'Tumero C.C. Mariño Plaza',
	'PALO NEGRO SUPER LIDER': 'Palo Negro Super Lider',
	'YARITAGUA HYPER LIDER': 'Yaritagua Hyper Lider',
	'SAN DIEGO SUPERMERCADO HIPER LIDER': 'San Diego Supermercado Hiper Lider',
	'SAN FERNANDO DE APURE': 'San Fernando De Apure',
	'HIPER LIDER CABUDARE': 'Hiper Lider Cabudare',
	'SAN CARLOS': 'San Carlos',
	'TUCUPITA TRAKI': 'Tucupita Traki',
	'MARACAY C.C. PLATINIUM': 'Maracay C.C. Platinium',
	'DABAJURO II': 'Dabajuro II',
	'TRAKI SAN FERNANDO DE APURE': 'Traki San Fernando De Apure',
	'FRANCISCO SOLANO': 'Francisco Solano',
	'SAMBIL VALENCIA': 'Sambil Valencia',
	'EXCELSIOR GAMA SANTA FE': 'Excelsior Gama Santa Fe',
	'EXCELSIOR GAMA SANTA EUDIVIGIS': 'Excelsior Gama Santa Eudivigis',
	'C.C. LA VIÑA VALENCIA': 'C.C. La Viña Valencia',
	'HIPER LÍDER ARAURE': 'Hiper Líder Araure',
	BOLEITA: 'Boleita',
	'V.P. DE NEGOCIOS ZONA II': 'V.P. De Negocios Zona II',
	'C.C UNICENTRO MARACAY': 'C.C Unicentro Maracay',
	'ANACO AV. MERIDA': 'Anaco Av. Merida',
	'PUERTO PIRITU': 'Puerto Piritu',
	'BARCELONA CENTRO': 'Barcelona Centro',
	'EL TIGRE': 'El Tigre',
	'LECHERIA CENTRO EMPRESARIAL': 'Lecheria Centro Empresarial',
	'C.C. LA VICTORIA': 'C.C. La Victoria',
	'LA MORITA INTERCOMUNAL': 'La Morita Intercomunal',
	'PUERTO ORDAZ CASTILLITO': 'Puerto Ordaz Castillito',
	TOCUYITO: 'Tocuyito',
	MONTALBAN: 'Montalban',
	'SANTA ROSA': 'Santa Rosa',
	'SAN JUAN DE LOS MORROS': 'San Juan De Los Morros',
	TINAQUILLO: 'Tinaquillo',
	'AV. UNIVERSIDAD': 'Av. Universidad',
	'SAN MARTIN C.C. LOS MOLINOS': 'San Martin C.C. Los Molinos',
	'CATIA AV. SUCRE': 'Catia Av. Sucre',
	'LA YAGUARA AV. PRINCIPAL': 'La Yaguara Av. Principal',
	'EL PARAISO': 'El Paraiso',
	'CITY MARKET': 'City Market',
	'UNIVERSIDAD CATOLICA ANDRES BELLO': 'Universidad Catolica Andres Bello',
	'QUINTA CRESPO': 'Quinta Crespo',
	'SAMBIL PARAGUANA': 'Sambil Paraguana',
	'PUNTO FIJO AV. JACINTO LARA': 'Punto Fijo Av. Jacinto Lara',
	'BARQUISIMETO AV. VARGAS': 'Barquisimeto Av. Vargas',
	'SAMBIL BARQUISIMETO': 'Sambil Barquisimeto',
	'BARQUISIMETO ZONA INDUSTRIAL': 'Barquisimeto Zona Industrial',
	QUIBOR: 'Quibor',
	CARORA: 'Carora',
	'PASEO LAS MERCEDES': 'Paseo Las Mercedes',
	'CUMBRES DE CURUMO': 'Cumbres De Curumo',
	'C.C. LA CASCADA': 'C.C. La Cascada',
	'SAMBIL CARACAS': 'Sambil Caracas',
	'GUARENAS C.C. MIRANDA': 'Guarenas C.C. Miranda',
	'EL MARQUES': 'El Marques',
	MACARACUAY: 'Macaracuay',
	'GUATIRE C.C. BUENAVENTURA': 'Guatire C.C. Buenaventura',
	'CASACOIMA DELTA AMACURO': 'Casacoima Delta Amacuro',
	'CENTRO COMERCIAL PARQUE COSTA AZUL': 'Centro Comercial Parque Costa Azul',
	'SAMBIL MARGARITA': 'Sambil Margarita',
	'JUAN GRIEGO': 'Juan Griego',
	GUANARE: 'Guanare',
	TUREN: 'Turen',
	CUMANA: 'Cumana',
	'SAMBIL SAN CRISTOBAL': 'Sambil San Cristobal',
	'SAN CRISTOBAL 7MA. AVENIDA': 'San Cristobal 7ma. Avenida',
	BOCONO: 'Bocono',
	TUCUPIDO: 'Tucupido',
	'SABANA DE MENDOZA': 'Sabana De Mendoza',
	TRUJILLO: 'Trujillo',
	'VALERA LA PLATA': 'Valera La Plata',
	'VALERA LA PUERTA': 'Valera La Puerta',
	'CATIA LA MAR': 'Catia La Mar',
	'EL JUNQUITO': 'El Junquito',
	'MENE GRANDE': 'Mene Grande',
	CABIMAS: 'Cabimas',
	'SANTA BARBARA': 'Santa Barbara',
	'LA CONCEPCION': 'La Concepcion',
	'MARACAIBO LAS DELICIAS': 'Maracaibo Las Delicias',
	CASIGUA: 'Casigua',
	MACHIQUES: 'Machiques',
	CARRASQUERO: 'Carrasquero',
	'MARACAIBO NORTE': 'Maracaibo Norte',
	'INDIO MARA': 'Indio Mara',
	'GALERIAS MALL - MCBO': 'Galerias Mall - Mcbo',
	'CENTRO LAGO MALL': 'Centro Lago Mall',
	'CURVA DE MOLINA': 'Curva De Molina',
	SABANETA: 'Sabaneta',
	'MARACAIBO BELLA VISTA': 'Maracaibo Bella Vista',
	'CALLE 72': 'Calle 72',
	'MARACAIBO ZONA INDUSTRIAL': 'Maracaibo Zona Industrial',
	'LAS MERCEDES': 'Las Mercedes',
	'EL TRANSITO': 'El Transito',
	'SAMBIL MARACAIBO': 'Sambil Maracaibo',
	'PUERTOS DE ALTAGRACIA': 'Puertos De Altagracia',
	'EL SAMAN': 'El Saman',
	'LA LIMPIA': 'La Limpia',
	'SANTA RITA': 'Santa Rita',
	'CAJA SECA': 'Caja Seca',
	'EL MOJAN': 'El Mojan',
	'AV. BLANDIN CHACAO': 'Av. Blandin Chacao',
	'EL MENITO': 'El Menito',
	'PUERTO DE MARACAIBO': 'Puerto De Maracaibo',
	'CAMPO ALEGRE': 'Campo Alegre',
	'EL HATILLO': 'El Hatillo',
	'SAN JORGE EL CEMENTERIO': 'San Jorge El Cementerio',
	'SAN CRISTOBAL': 'San Cristobal',
	'TRAKI VALLE DE LA PASCUA': 'Traki Valle De La Pascua',
	'SAN ANTONIO DE LOS ALTOS': 'San Antonio De Los Altos',
	'SAN FELIX': 'San Felix',
	UNARE: 'Unare',
	ALTAVISTA: 'Altavista',
	'AEROPUERTO CARACAS': 'Aeropuerto Caracas',
	'PARQUE CRISTAL': 'Parque Cristal',
	EUROBUILDING: 'Eurobuilding',
	ALTAMIRA: 'Altamira',
	'SAN ROMAN': 'San Roman',
	CAUCAGUA: 'Caucagua',
	'RIO CHICO': 'Rio Chico',
	'CENTRO COMERCIAL ALTO PRADO': 'Centro Comercial Alto Prado',
	'LA VELA': 'La Vela',
	'C.C. CIUDAD TAMANACO': 'C.C. Ciudad Tamanaco',
	'SANTA ISABEL': 'Santa Isabel',
	NAIGUATÁ: 'Naiguatá',
	'LA GUAIRA': 'La Guaira',
	'V.P. DE NEGOCIOS ZONA III': 'V.P. De Negocios Zona Iii',
	'PLAZA LAS AMÉRICAS': 'Plaza Las Américas',
	'AV. VICTORIA': 'Av. Victoria',
	'C.C. BARQUISIMETO CAPANAPARO': 'C.C. Barquisimeto Capanaparo',
	ACARIGUA: 'Acarigua',
	'CAGUA SUPER LIDER': 'Cagua Super Lider',
	'SUPER LIDER EL LIMON': 'Super Lider El Limon',
	'BARQUISIMETO MERCABAR': 'Barquisimeto Mercabar',
	'PUERTO CABELLO': 'Puerto Cabello',
	'AV PEDRO LEON TORRES': 'Av Pedro Leon Torres',
	'CIUDAD BOLIVAR': 'Ciudad Bolivar',
	'VALENCIA SUR': 'Valencia Sur',
	'SAN SEBASTIAN DE LOS REYES': 'San Sebastian De Los Reyes',
	'MARACAY LAS DELICIAS': 'Maracay Las Delicias',
	'MARACAY CENTRO': 'Maracay Centro',
	'MARACAY ALCALDÍA': 'Maracay Alcaldía',
	'VALENCIA BOLÍVAR NORTE': 'Valencia Bolívar Norte',
	CAGUA: 'Cagua',
	'MARACAY LOS SAMANES': 'Maracay Los Samanes',
	'VILLA DE CURA': 'Villa De Cura',
	'MERIDA LAS AMERICAS': 'Merida Las Americas',
	'SAN ANTONIO DEL TACHIRA': 'San Antonio Del Tachira',
	'LA QUIZANDA': 'La Quizanda',
	'EL ROSAL': 'El Rosal',
	'CALABOZO - GUÁRICO': 'Calabozo - Guárico'
}

const departamentoData = [
	{
		id: '508cedef-e7be-4f28-abdd-07108be74ab5',
		name: 'Auditoria Interna',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['AUDITORIA INTERNA'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '1939a6c2-7396-4568-9ca8-b2d6699e9816',
		name: 'Gerencia De Area Asuntos Regulatorios',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['AUDITORIA INTERNA'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'f5293500-1617-4d92-bf99-782e3ce210a9',
		name: 'Gerencia De Area Auditoria De Sistemas',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['AUDITORIA INTERNA'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '7f7c027c-e549-460a-bcb4-4886355f723e',
		name: 'Gerencia De Area Auditoria Financiera',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['AUDITORIA INTERNA'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '733c8dec-ca4c-4054-a8af-41554b4b0e98',
		name: 'Gerencia De Área Ctrl y Seguimiento De Auditoría',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['AUDITORIA INTERNA'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'dfcf5891-fcc4-4587-b463-4c7ffa5720af',
		name: 'Gerencia De Area De Auditoria De Agencias',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['AUDITORIA INTERNA'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '94ae6fe5-9e13-441a-ad6e-501c68e8fb60',
		name: 'Defensoria Del Cliente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['DEFENSORIA DEL CLIENTE']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '8576cc65-b149-48be-beda-92dddf4861fd',
		name: 'Gerencia Apoyo A Presidencia Ejecutiva',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['PRESIDENCIA'])[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd5a0a3f1-2f79-48cf-936a-d741ddb782dd',
		name: 'Gerencia Gestión De Información',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '20916b8d-267f-491f-a102-92aa2bd89aff',
		name: 'Gerencia De Metodología De Riesgo Financiero',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '1a92e2e6-a4cc-4139-ad80-5b26e1d1030c',
		name: 'Gerencia De Monitoreo Y Seg. Sobre Cont. De Neg',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '8aa42e1d-b128-49a0-99b7-4b95284a4c98',
		name: 'Gerencia De Riesgo De Credito',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '8f6bb491-83ca-4e58-873a-55438cabe65e',
		name: 'Gerencia De Riesgo De Mercado Y Liquidez',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '9c7dfa10-0ce1-435a-be26-47dd5abf8b4e',
		name: 'Gerencia De Riesgo Operacional Mid Y Back Office',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '190f5960-d219-4380-be4c-bf6aee5eba54',
		name: 'Gerencia Estadística Sobre Metodología De Riesgo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '571aa05f-37a8-4020-ae5f-16dc0c2ae98e',
		name: 'Gerencia Riesgo Operacional Front Office',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'bcb08e87-0ac9-4f0b-8202-065a83cbbe4e',
		name: 'Unidad Admon Integral De Riesgos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '6bc235e9-7785-479a-9b00-0f8eef6d4355',
		name: 'Coordinación Cumplimiento Normativo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '03da9769-729a-4450-844f-e674904578b5',
		name: 'Coordinación Inspección Y Capacitación',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '6480a86b-6cf7-48d8-bda6-504400520246',
		name: 'Gerencia Análisis Estratégico Y Detección De Tipol',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '73741d98-ac8d-478e-ba42-b81ed2bfb883',
		name: 'Gerencia De Análisis De Operaciones Financieras',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f73eefb9-a435-4d9e-951f-410afb95833a',
		name: 'Gerencia De Área Estadist Y Análisis Estratégico',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a53406c8-a30c-4418-ace0-42ce90b97bfd',
		name: 'Gerencia De Área Prev Y Control De LC-FT-FPADM',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '9a542f83-cb2d-4afe-97a2-155cbc7e1fa7',
		name: 'Gerencia De Atención De Organismos Oficiales',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '704887b6-8517-4bdc-9fec-7687a9851566',
		name: 'Gerencia De Monitoreo Y Verificación De Op Inusual',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '0df663f4-d374-4ca6-b7b9-1219f222c557',
		name: 'Gerencia Estadística Y Mantenimiento De Registros',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '1bcd3051-20f6-453d-b5df-02832adbe94e',
		name: 'V.P. Cumplimiento Y Control De Gestión',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e722fc99-4d9f-4b49-9a54-8a8bcb3d2bc4',
		name: 'V.P. UPCLCFTFPADM',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a017fffc-1ae1-4cd1-b9b1-b34091f241c8',
		name: 'Coordinación Atención Al Accionista',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '63b91758-3601-4197-b168-d69d7594bd37',
		name: 'Coordinacion Operaciones Accionarias',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'feb0dde5-ac8c-459c-9a9b-3a024360bf59',
		name: 'Gerencia De Area Valores y Accionistas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '18fc9e23-ff3f-4ae3-9e20-67348080dcbc',
		name: 'Gerencia De Gobierno Corporativo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '91a2d3df-f6d7-40d1-89b8-aae690931b00',
		name: 'Secretaria De La Junta Directiva',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '517451aa-9b2c-4d0b-a87a-53e336b62e23',
		name: 'Coord. Plataforma Distribuida',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f31f9257-437f-45a8-abd2-bf8c779ed11c',
		name: 'Coordinacion Adm De Acceso De Identidad',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '80caa07a-e840-4323-9977-103fc1fc5623',
		name: 'Coordinacion De Cumplimiento',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3657da59-607b-4d31-9c95-766a55057275',
		name: 'Coordinacion De Plataforma Media',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c93f9edf-9b8d-43c7-b06d-e31338a75faa',
		name: 'Coordinacion Seguridad Perimetral',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c675b4c1-5021-42f2-9c37-0bb104fd88c2',
		name: 'Gerencia De Administración Acceso Identidad',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a7dc13dc-66e4-429e-b485-fda96018d113',
		name: 'Gerencia De Administración Plataforma Media',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd57a566c-5e5c-4cbf-b7a3-b020bd712ac1',
		name: 'Gerencia De Area Seguridad Informatica',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e2546666-b115-4f98-99cf-0eab08853db3',
		name: 'Gerencia De Control De Calidad',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '4a8a474d-75d4-4984-9f10-b71e24ccfa9c',
		name: 'Gerencia De Creación De Usuarios',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5fcd14f9-6a17-4a8b-87e5-de486cce2100',
		name: 'Gerencia De Cumplimiento',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f98b73a5-00a2-4c75-8321-c0bfd9ba5a1c',
		name: 'Gerencia De Seguridad AS-400',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '9a55cee1-70b0-40cb-8a29-01dcf28bcc3e',
		name: 'Gerencia De Seguridad Perimetral',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5300676e-2ac5-4e2b-9ae9-02bd5fd2e9ad',
		name: 'V.P. Seguridad De La Informacion',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3b70084c-54ba-4a8d-8183-b7229e2d00bb',
		name: 'Coord. Almacén Y Proveeduría (caracas)',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '753f1d1e-f828-42ab-be34-11d6ddbbff18',
		name: 'Coord. Almacén Y Proveeduría (occidente)',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '57d43e6a-9695-46c9-b21c-89ea3786450d',
		name: 'Coord. Compras I',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '373bec3b-e1eb-4ec4-b474-e71c8286455d',
		name: 'Coord. Control De Inventario',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '7f31b7f6-fc82-4891-bea4-594ff23cb08f',
		name: 'Coord. Documentación De Activos',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '087ce06a-cf71-4976-bb46-48d172daae8b',
		name: 'Coord. Gestión Y Traslado De Activos',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '2ec8839c-af76-4a34-a272-f4d5db0aafd5',
		name: 'Coord. Mantenimiento Fisico Sedes Centrales Y Ag.',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '55aab798-bff1-4709-8c79-24f9b69dc6a3',
		name: 'Coordinacion Atención Al Cliente Y Operaciones',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '94b3d66e-654e-4e5c-b895-42e142c52791',
		name: 'Coordinación Cartera De Inversiones',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '871e15a8-30cb-4573-8ec8-2c3ffd472bc3',
		name: 'Coordinación Contabilidad TDC Amex',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '868953c2-2f1a-4a23-b09d-ea7f6ed7f8db',
		name: 'Coordinacion Contratos',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '04bb419d-0004-4857-9b59-dd56ddf05457',
		name: 'Coordinación Control Contable',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '66c2178a-f61b-4df6-9302-a446905e4970',
		name: 'Coordinación De Contabilidad',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '7a44123f-135b-4368-977b-a1f5e3265d28',
		name: 'Coordinación De Contabilidad TDC',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'a9abf693-cf81-48b6-bce5-772241d76b30',
		name: 'Coordinación Facturación Y Viáticos',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '9a934eab-f50c-49cd-aa6e-40fde7ec7bb1',
		name: 'Coordinación Impuestos Municipales',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '8f386261-3463-4458-94ca-1ee788a18127',
		name: 'Coordinación Impuestos Municipales Gran Ccs Y Occi',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'fb267df0-5d55-41d0-9a9e-61275f2c8b6b',
		name: 'Coordinación Impuestos Nacionales Y Estadales',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '35f7899e-db8d-48d3-9aa7-93a3d40111b9',
		name: 'Coordinacion Negocios Internacionales',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'c3628334-72de-4f5b-a2b7-e8e8e1d68f4b',
		name: 'Coordinacion Proveedores',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '9ff2ede3-d54e-4d76-a75d-78b6429f7fb2',
		name: 'Coordinación Proveedores',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'f976e6cb-8027-4856-a5dd-3a3000f669bc',
		name: 'Coordinacion Servicios',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '947d6d13-1cb2-4776-9f91-0417e155a881',
		name: 'Coordinación Servicios',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'bc01ce6d-d2db-46a0-ada9-2ec3002588ca',
		name: 'Coordinacion Transporte',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '962b8d4d-0450-458f-97b3-bc8f895464f2',
		name: 'Gerencia De Activos Fijos',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '442e0e82-6062-405e-922a-c832268cfc38',
		name: 'Gerencia De Ara De Contraloría De Datos',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'cb5a6dd2-81e7-4546-8d94-4d9ee4714c1f',
		name: 'Gerencia De Area Admin. De Inmuebles Propios',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '01018b0b-b15c-4ec4-b76b-d3b94c299976',
		name: 'Gerencia De Área Almacen Y Proveeduría',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '58d44f05-c24f-4c29-8c09-48fa9973c0d8',
		name: 'Gerencia De Área Analisis De Gestión',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'd835d023-99cd-438c-bdf7-0941c33c1746',
		name: 'Gerencia De Área Compras Y Servicios Generales',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '108d6089-12a0-47ea-9fff-4b988e69b97d',
		name: 'Gerencia De Area Contabilidad Fiduciaria',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'add2c243-4347-49df-b6cd-9a050f39ab60',
		name: 'Gerencia De Area Contratos Y Proveedores',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '73171fa4-0c21-47c7-80a4-a3eceb389057',
		name: 'Gerencia De Area Control De Gestión',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '878bb244-d2b9-4443-a68e-4e5311c0dbfc',
		name: 'Gerencia De Area Control De Inmuebles Arrendados',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '62730ca4-dbca-47f4-b880-1e690603441e',
		name: 'Gerencia De Area Control Financiero',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '81a31fa2-eb99-4183-9727-6e528fe5d1e4',
		name: 'Gerencia De Area Corresponsalia',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'fdf474ba-060d-450d-a13a-5bd6d9e6e092',
		name: 'Gerencia De Area Ctrl Contable Y Gestión De Gasto',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '7fb3feff-2722-4868-8101-a3d8677f613b',
		name: 'Gerencia De Area De Contabilidad',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '2462a3c3-82e3-40f5-adce-def690cb428b',
		name: 'Gerencia De Área De Infraestructura Y Mantenimient',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '29ab01db-b218-48e8-9cb7-f7a4caf26572',
		name: 'Gerencia De Área De Negocios Internacionales',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'd449ca14-178c-4b2b-89b2-3ca040042c5e',
		name: 'Gerencia De Area Negocios Fiduciarios',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'b1743385-4062-4c13-aabc-092e4d39bded',
		name: 'Gerencia De Area Pago A Proveedores',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'd2b47699-6788-4186-8bb8-75652f683c78',
		name: 'Gerencia De Area Servicios',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '882e8eda-c6ff-4dfa-89c3-8325e35c7a7b',
		name: 'Gerencia De Area Tributos',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '15986123-07e0-48d6-acdf-253cc3da90d5',
		name: 'Gerencia De Compras',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'bf39a93c-0ccd-46b6-a572-7975e67bd056',
		name: 'Gerencia De Contabilidad',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'eb1af405-2f19-4ea1-a844-ace81a1a1120',
		name: 'Gerencia De Control Contable',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '8c206cc9-91e8-4f9b-b519-997fad6e65bd',
		name: 'Gerencia De Control Presupuestario',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '10570c3f-b45e-43d3-aa85-d56b7374be54',
		name: 'Gerencia De Departamento Gestión Del Gasto',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'cbe831c2-54d3-47e3-be5e-94cafd2e5fab',
		name: 'Gerencia De Desarrollo Y Gestión Comercial',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '7f8066e1-1069-40c8-975c-eead535b27ec',
		name: 'Gerencia De Distribución',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'c10f547f-a0f6-4dbf-91dc-d30bfe2bce7c',
		name: 'Gerencia De Documentación De Activos',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'abfb4fa5-9f0d-4815-8e42-c38e638964c2',
		name: 'Gerencia De Información Financiera',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '39f63122-c65b-47aa-90a1-9930c74e2e72',
		name: 'Gerencia De Investigación Economica',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '35238a60-1bb2-49e5-8fbd-3f2d9abb592e',
		name: 'Gerencia De Mecanismos Cambiarios',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '03cb8add-25ce-4f7c-8bff-b8bac1dbf91c',
		name: 'Gerencia De Mercado Monetario',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '2d7754b9-1505-40ce-965e-d9af50686af5',
		name: 'Gerencia De Negocios Fiduciarios',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'cabbd2cf-5844-4511-99b9-fc56bbf7158a',
		name: 'Gerencia De Pagos',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '59981902-8b1e-4392-a6e0-23aefde32035',
		name: 'Gerencia De Presupuesto',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'f4319e92-90f4-49a3-aa18-b59f2feb25ff',
		name: 'Gerencia De Renta Fija',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '42320363-b5c3-49d5-a6d8-1d364705d5ee',
		name: 'Gerencia De Viáticos Control Y Revisoría',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '779c845d-8708-4dfb-b15d-e4a222088213',
		name: 'Gerencia Impuestos Municipales',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'ddcbefdf-27b2-46b0-9eb2-1b21f4644a0a',
		name: 'Gerencia Legal',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'e282d92e-3cd8-40c9-b311-338140173902',
		name: 'Gerencia Mantenimento Fisico Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '414d2ac0-48b3-4ea5-9d0a-ac87b5758823',
		name: 'Gerencia Negocios Internacionales I',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '0e3ab199-5c95-427f-bb87-2c11dc705251',
		name: 'Gerencia Negocios Internacionales II',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '80857dd8-789f-4e8c-8adb-fabdf9f9e511',
		name: 'Gerencia Negocios Internacionales III',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'ba206a94-0148-4f68-ba9a-955b507093c0',
		name: 'Gerencia Proyecto Especial Control Y Gestión',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '9638fb6c-53d7-4ce3-b003-805bd31382dd',
		name: 'Gerencia Servicios Generales',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '1e6b645b-7e79-47c9-a26c-6595e0244d4e',
		name: 'Tesoreria',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'f91d5add-9171-4e07-8796-38e1fea77ecd',
		name: 'V.P. Contratos Y Servicios',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '048bec00-a692-4b13-8f0b-e6a3988f7810',
		name: 'V.P. Control De Inmuebles',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '83178bef-6c43-4d9a-936d-dab1c1961a34',
		name: 'V.P. De Contraloría',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '6d7014f3-6fd3-4522-9644-5c7dfadeaa5a',
		name: 'V.P. De Fideicomiso',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'cb859132-5fbd-400e-98c1-f797171a9d50',
		name: 'V.P. Gestion De Contabilidad Pagos Y Tributos',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: 'd8fd28af-93cb-449c-8555-5978488d031a',
		name: 'V.P. Infraestructura Y Mantenimiento Fisico',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '7a225ba0-187c-46dc-b0c1-acc8e738c0e8',
		name: 'V.P. Planificación Financiera Y Presupuesto',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '2b76be9b-61fb-4096-99a7-727483fc0ced',
		name: 'V.p.e Finanzas',
		vicepresidenciaEjecutivaId: VPEData.filter(directiva => directiva.name === VPEOnlyNames['V.P.E FINANZAS'])[0]
			.id,
		centroCostoId: '95'
	},
	{
		id: '3689207d-7eaa-4296-9c7c-069ca6a19460',
		name: 'Gerencia De Área Plan Mayor',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '97c31e34-41b8-414c-b8fe-06985312b26f',
		name: 'Gerencia De Negocios Banca Empresa I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '9838db85-eeb4-4f92-842b-d12b016ff125',
		name: 'Gerencia De Negocios Banca Empresa II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '80f63783-209d-4f2a-94cc-40a7440be145',
		name: 'Gerencia De Negocios Banca Empresa III',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '0133c356-374a-429c-91e1-a7b3ac13c5b5',
		name: 'Gerencia De Negocios Banca Institucional Priv I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'eff9546d-8e14-42a7-843b-32074ca8189a',
		name: 'Gerencia De Negocios Banca Institucional Priv II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '46c6272f-03e3-4189-b4d0-13d01ed17169',
		name: 'Gerencia De Negocios Banca Institucional Priv III',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'ec02b996-6f59-4803-9d67-a8d5f88620da',
		name: 'Gerencia De Negocios Banca Privada I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'ef8f0798-2b82-4d6a-9ac1-1e22ee4c4dcb',
		name: 'Gerencia De Negocios Banca Privada II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '8378eeaf-ac8c-48bf-b1bb-77a4e5854170',
		name: 'Gerencia De Negocios Banca Privada III',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '8baa5d25-c49c-4579-98a6-a86bf12b1b41',
		name: 'V.P. Banca Empresas Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd04fdd7d-edec-43d4-9cf7-c51d14b85e30',
		name: 'V.P. De Banca Empresa Centro',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'eb49f7a9-3f9e-49ac-aef0-279aa98950a3',
		name: 'V.P. De Banca Empresas Capital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3ae38661-c175-45eb-9a11-cbac7ea32e7a',
		name: 'V.P. De Banca Institucional Privada',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e70b0363-df8c-43ad-9293-8148ac454a93',
		name: 'V.P. De Banca Privada',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'dc6a63c1-6cf5-41c9-87ce-e9084ff22b4d',
		name: 'V.P. De Cuentas Claves Y Nuevos Negocios',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd11f47de-4ef3-4b2d-9329-9089bec5139d',
		name: 'V.P. banca Empresas Oriente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '0b9edc46-f845-4726-bcda-e561317c8669',
		name: 'Coord. Atención Interna Cai Capital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '474034ff-b078-4e07-a196-b07ec33e61c7',
		name: 'Coord. Atención Interna Cai Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '1e807d3a-e74a-403f-8e71-393e949cdd42',
		name: 'Coord. Correspondencia Capital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a030b9bc-80d9-4a67-a8f4-32a5f71d643e',
		name: 'Coord. Correspondencia Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '9df73944-03be-48d0-bb6e-231722743845',
		name: 'Coord. Digitalización Y Ctrol De Arch. Aragua I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd493882a-c265-410d-8ed6-d57dfe9ca317',
		name: 'Coord. Digitalización Y Ctrol De Arch. Aragua II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e7266e3a-807f-4537-8aab-f694dab323c9',
		name: 'Coord. Digitalización Y Ctrol De Arch. Capital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'aeb46e31-d543-4028-aad4-a9c6603475c8',
		name: 'Coord. Digitalización Y Ctrol De Arch. Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '8c1925f0-c4dc-42fd-b2c0-7c75ca91ab54',
		name: 'Coord. Registro De Clientees Región Capital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'bd0db78a-9aa9-4289-ab3f-dd699e50d90d',
		name: 'Coord. Registro De Clientees Región Central',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '46f8008d-2dbc-42d5-ae03-a039899b4f18',
		name: 'Coord. Registro De Clientees Región Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'aa73ce1e-7b9f-4339-bf0a-3c557d9e935a',
		name: 'Coordinacion Control Y Registro De Operaciones',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '79519d08-e64c-4b2a-8dd1-cd493d92bcd0',
		name: 'Coordinación Occidente II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '63e2fca3-6b44-4792-b9e5-b0c000b9c63f',
		name: 'Coordinación Zona Aragua',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '48dad493-99fc-43d6-9e28-add36f562c89',
		name: 'Coordinación Zona Capital I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '0f2fc8ad-5be4-4f63-9ce1-f0e55d88d498',
		name: 'Coordinación Zona Capital II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '1801b32c-195d-46d6-a963-208b7814732c',
		name: 'Coordinación Zona Capital III',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '2feda522-f047-4c1a-9f2c-24a9f29c5612',
		name: 'Coordinación Zona Carabobo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '448f6add-9fc8-4aed-95dc-7a55f2f4d156',
		name: 'Coordinación Zona Insular',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '6c4ddf34-a300-405d-84ff-bb9a70ca3560',
		name: 'Coordinación Zona Los Llanos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f791e861-d0c6-443c-ac97-505dbe7a2b40',
		name: 'Coordinación Zona Occidente I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'ba65d2ab-5e10-4b69-99f0-3762f191968e',
		name: 'Gcia. Reg. Operacion De Agencias Aragua Los Llanos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'de0efb0d-adc0-4b59-9ad9-9295aa0e2992',
		name: 'Gerencia De Área Back Office Registro De Cliente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '89e3c7a1-94d7-4532-bbfc-756cd581c16c',
		name: 'Gerencia De Control Y Gestión',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '99b80358-a612-4f94-a862-75bb4ab03c95',
		name: 'Gerencia De Departamento Gestión Operativa Zona II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f4ab47f1-a401-49dd-b2b8-ed5597dcd920',
		name: 'Gerencia De Eficiencia Comercial',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '956517ee-7ed9-451e-a77d-8b3646407969',
		name: 'Gerencia De Zona Andes I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '43e03710-c782-441e-ad0f-c04973ee10b7',
		name: 'Gerencia De Zona Andes II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a89a0e41-86c7-477e-a7ad-2931439e5853',
		name: 'Gerencia De Zona Carabobo I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e115e87b-e6ce-4d6a-a212-8caa8379c916',
		name: 'Gerencia De Zona Carabobo II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '7616c021-8096-4d7d-b918-aa8b08f6341b',
		name: 'Gerencia De Zona Centro Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '9fcf6533-c5f8-4ecf-8e68-57b841b8e788',
		name: 'Gerencia De Zona Insular',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd6b84eed-51bb-4ee2-b43f-84e6d33de0da',
		name: 'Gerencia De Zona Oriente Norte I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '331194a4-a917-4442-92d4-6f0e170cc532',
		name: 'Gerencia De Zona Oriente Norte II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'bcf457b1-7db8-4799-acb8-171cd7cf3c06',
		name: 'Gerencia De Zona Oriente Norte III',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c418b148-9dc9-41fc-97c5-63f21dae28fa',
		name: 'Gerencia De Zona Oriente Sur',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'eeff5768-5925-4c7d-ada0-c2cf3df0e870',
		name: 'Gerencia De Zona Zulia Falcón I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '05a7c715-8c78-4fb8-94b9-3dd984b9b061',
		name: 'Gerencia De Zona Zulia Falcón II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '130efec2-6a70-49fb-b198-65ac00663f6d',
		name: 'Gerencia De Zona Zulia Falcón IV',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '90925a7c-420c-4e30-9c43-9676ef7d4a2f',
		name: 'Gerencia De Zona Zulia Falcón V',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '9e6e7434-54ed-446f-b1ce-5864133ed60f',
		name: 'Gerencia Digitalización, Ctrol Archiv. Y Correspondencia',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a362164b-a96f-4bc2-a228-b74891bd8139',
		name: 'Gerencia Gestión Operativa Zona I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'cbf2da19-ad03-4170-83f4-85ea3f96eed8',
		name: 'Gerencia Regional Operacion De Agencias Carabobo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3b758047-15db-40d4-9aba-3d0aaf4a2158',
		name: 'Gerencia Regional Operación De Agencias Centro Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '16c9d662-ab6a-4e31-9d74-7c9477d27502',
		name: 'Gerencia Regional Operacion De Agencias Guayana',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'b503f83b-3b3f-4b3b-aee8-874101f0af20',
		name: 'Gerencia Regional Operacion De Agencias Los Andes',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '58099132-061e-4f37-b39c-0c4063eb37cd',
		name: 'Gerencia Regional Operacion De Agencias Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f2e4ff19-6942-40fe-8661-d813abf09ca9',
		name: 'Gerencia Regional Operacion De Agencias Oriente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e59e21e1-d76a-41b7-b0cf-f14c725e275b',
		name: 'V.P. Zona Insular',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '7ac95146-519b-4fcf-895d-9307c1248b3d',
		name: 'V.P. Zona Oriente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'dfd9f9e1-aef2-4f81-9e54-f9b7ed719cbc',
		name: 'V.P. De Negocios',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'eb721b5b-d52c-4cc4-bec0-b05c776a8706',
		name: 'V.P. De Zona I Administracion De Agencias I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e283d3e0-63e6-46aa-96b4-b463ab794270',
		name: 'V.P. De Zona Ii Administracion De Agencias II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'bfe02bcf-d15e-42f0-8e83-cad7b5d154f0',
		name: 'V.P. Eficiencia Comercial',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'aba693a4-29fc-4d50-80de-a92033840996',
		name: 'V.P. Región Aragua - Los Llanos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '001bf0d4-f421-4c01-b61c-7a858c7e176e',
		name: 'V.P. Region Capital I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd9cb854f-2da6-4952-9c12-7f0a5a46d9b7',
		name: 'V.P. Region Capital II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '2f6c2246-3d9e-467c-ae84-b598af532039',
		name: 'V.P. Region Capital III',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '657c7963-e8e8-4fc8-829d-0aa008cffce2',
		name: 'V.P. Región Centro Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '310c2e13-03ae-4eb4-b9b0-0eca0723a962',
		name: 'V.P. Región Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '521e5822-a8b4-4d5a-86df-01625fde07d7',
		name: 'V.P. Región Oriente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'ad035c81-fa55-49c1-848e-a3028253c2e8',
		name: 'V.P. Regional Gestión Operativa De Agencias',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '77749f4d-a20c-4827-953a-cf62baa026b9',
		name: 'V.P. Zona Aragua',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '72a7a36a-f955-4e0c-b8b0-3b409fb7e2bf',
		name: 'V.P. Zona Carabobo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '30f9ab13-0de8-4409-9c84-17c8a1102823',
		name: 'V.P. Zona Centro Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f749f5e1-9ee8-4a9a-a95a-8ef46cc81e7b',
		name: 'V.P. Zona Los Andes',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5c8355b9-7c91-4de3-b27c-27c8ad8dba67',
		name: 'V.P. Zona Los Llanos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '4a23102d-0a3b-4a8a-aa56-7b52c48532dc',
		name: 'V.P.E. De Banca Comercial',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5bb23fb7-8f86-46c6-8870-36ec2741c193',
		name: 'Gcia. De Negocios Sect Agropec Rg. Aragua-carabobo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '81b64750-17fa-4a08-b9b6-ed13a32614c3',
		name: 'Gcia. De Negocios Sect Agropecuario Rg. Capital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3c9da340-8e30-4708-8704-c511995e5446',
		name: 'Gcia. De Negocios Sect Agropecuario Rg. Cent. Occi',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e397c3d6-e496-4d0d-a7ab-4b3dd811ccbb',
		name: 'Gcia. De Negocios Sect Agropecuario Rg. Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f2e45a59-bf82-4920-a5a1-a0a904fc0b9b',
		name: 'Gerencia Control Y Seguimiento',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '64e9117d-cacb-4b14-b2df-9eb614a8a38e',
		name: 'Gerencia De Area De Negocios Centro',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c4027108-fa8c-4dbe-bbe4-6ec6a3675741',
		name: 'Gerencia De Area De Negocios Multinacional',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '6bf46028-c09f-4123-b191-bdf544f34fad',
		name: 'Gerencia De Area De Negocios Sector Financiero',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '410a313b-da82-4907-9f9a-d21b0f48557c',
		name: 'Gerencia De Area De Negocios Sector Nacional',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'dffc457f-078f-45a7-bf72-95cfdf3fbad7',
		name: 'Gerencia De Negocios Capital I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'cb7e6097-aae7-4910-a192-59e01f6dc745',
		name: 'Gerencia De Negocios Capital II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'de2b702b-e0d9-4e3c-a70c-8df525be9d66',
		name: 'Gerencia De Negocios Consumo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '7897bc68-34f7-4022-a2ee-c7ac5cbed37a',
		name: 'Gerencia De Negocios Control Y Seguimiento',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'b821d1bb-d76e-4c82-b2a6-608e3fc52097',
		name: 'Gerencia De Negocios Gas Y Petróleo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '291e1fab-e682-496d-b4d2-dc02171706e6',
		name: 'Gerencia De Negocios Los Andes',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '7a226c52-4bd8-4e7a-a443-1b20c01277d7',
		name: 'Gerencia De Negocios Medios',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '4292e9b2-56fc-4bae-bf2f-c3e1038a6b7b',
		name: 'Gerencia De Negocios Multinacional I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c87726de-ac35-4fbe-acf8-63cd4ed85a69',
		name: 'Gerencia De Negocios Multinacional II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '8c51e173-de66-4281-adb3-64159fc45074',
		name: 'Gerencia De Negocios Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5e7e03ae-4807-477b-95e4-8218e2cb58d7',
		name: 'Gerencia De Negocios Oriente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5e7bc606-5df2-4483-bdbe-b06f5381220f',
		name: 'Gerencia De Negocios Sector Casa De Bolsa',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd8ffc453-6b81-4272-bd98-40fd280d366b',
		name: 'Gerencia De Negocios Sector Seguros',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3ee92881-d63c-481c-a5e2-a56d499b02f2',
		name: 'Gerencia Regional De Negocios Centro',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a0d20c72-38c0-48e8-837b-724e8ef21f7e',
		name: 'Gerencia Regional De Negocios I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '865a188f-25ea-48d3-85d4-cd83ee0e4876',
		name: 'Gerencia Regional De Negocios II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '459a044d-e080-49f9-a39c-49922b06e5fa',
		name: 'Gerencia Regional De Negocios Sector Agropecuario',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd954ee6a-493a-4f59-a1f7-cfb09209a615',
		name: 'V.P. Corporativa Grandes Empresas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '163933c4-61ee-4fee-b4ed-9f0c5cec2b26',
		name: 'V.P. Corporativa Sector Agropecuario',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3194ce35-11f0-4b3d-9fa2-b27a461dc092',
		name: 'V.P. Corporativa Sector Financiero',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e41514b8-2c83-47ab-bbaa-0355ef7caedc',
		name: 'V.P. Corporativa Sector Telecomunicaciones',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '6e20e253-b210-4514-9edb-d0b499e04fc8',
		name: 'V.P.E. De Banca Corporativa',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c7e15eb7-8dbc-4f9f-b1a6-9923c9414291',
		name: 'Coordinación De Beneficios',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '1e81bf6f-c714-4b36-a719-edc59de18534',
		name: 'Coordinacion De Compensacion Salarial',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '1dae94a3-25e7-46f7-a84c-c4324c29e4ca',
		name: 'Coordinacion De Desarrollo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '4eb58d3f-0ea9-4aa9-b6a9-c93ae2849355',
		name: 'Coordinacion De Formacion',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '29379213-a7a2-4a91-bb69-0398e8489407',
		name: 'Coordinacion Gestion De Personal',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a880f125-a712-496a-84ef-51031a06f7a1',
		name: 'Coordinacion Gestion Nomina',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'de14f740-873e-46de-b923-51f4b8f84d6d',
		name: 'Coordinacion Seleccion De Talento',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd8ee932e-d6b4-4d88-b740-ea1a124ffae1',
		name: 'Gcia De Area Gestión De Estructuras Direcc Central',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c0da1b73-c4e6-440c-b6e2-91a19ebf03ad',
		name: 'Gcia. De Área De Proyectos De Transformación',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '374218ab-504a-4d7e-b7de-82f85d357a6e',
		name: 'Gerencia De Área Arquitectura De Procesos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5201ccee-7d47-48a6-b873-fa06d2e24905',
		name: 'Gerencia De Area Compensación Y Beneficios',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5fba1cac-273b-424c-b8f1-5b0f88fd5826',
		name: 'Gerencia De Area Def.  De Modelos De Calidad',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '0e50a8f8-94cf-4b18-b84c-e46b668a9cf1',
		name: 'Gerencia De Area Eval. De Indicadores De Calidad',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'ef8824ca-0fdf-4d12-8455-95e84afe93a0',
		name: 'Gerencia De Área Gestión De Estructuras Negocio',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e2fcc086-4de8-4bec-aa36-95ded2103acf',
		name: 'Gerencia De Area Gestion De Servicios Al Personal',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'ad18940f-8b9c-4eab-804a-f9b450346f54',
		name: 'Gerencia De Area Seleccion De Talento',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '432278f0-115b-4948-9433-4a25d87cfd10',
		name: 'Gerencia De Area Transformación',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '156f3874-96ed-4c2c-ba5a-b650265c8695',
		name: 'Gerencia De Caja De Ahorros',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd16779a1-435f-4dfb-a3c4-73427f66af2a',
		name: 'Gerencia De Seguridad Y Salud Laboral',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '04a0ca0c-b2b9-4aee-8c11-ced28388077e',
		name: 'Gerencia Gestión Documental',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '88f05960-4588-4ba9-b173-19aecfb13020',
		name: 'Gerencia Salud Ocupacional',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '8f2eacce-e384-41ef-859d-9ec7f1f89619',
		name: 'V.P. Calidad De Servicio',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'af35fed1-fcd3-4ea4-8130-4a4d932c8e3a',
		name: 'V.P. Gestión Organizacional Y Procesos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '99859110-ace9-478e-adca-a0b8e54f1046',
		name: 'V.P. Pmo Planes Estratégicos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e11da37d-343e-49cd-a258-2aaf54657930',
		name: 'V.P.E. Desarrollo Organizacional Y Transformación',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'b16a898d-632a-41e2-bdea-edfe2eadce5c',
		name: 'Coord. (centro - Los Llanos)',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '8a5abf6d-db03-4195-a9c1-1607a1df7023',
		name: 'Coord. (occidente - Andes)',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '95161a80-2e76-4ca0-9073-8659de5b88e5',
		name: 'Coord. Consola Torre Financiera',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '31e7dd7d-c66d-4dbf-a2b6-b53ac835564b',
		name: 'Coord. Seguridad Almacenes Guatire',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '46fb4e28-3e38-4978-b830-ce135e273d18',
		name: 'Coord. Seguridad Física Región Capital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '58008750-e957-4a0a-ba6a-45b0fbf17f5b',
		name: 'Coord. Seguridad San Bernardino',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '281c42f9-40f0-4ae2-a5b8-c631f2215902',
		name: 'Coordinación Custodios Y Sistemas De Seguridad',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '4a766886-a3fd-4e80-aa14-65b72227fba2',
		name: 'Coordinación De Proyectos Y Soporte Tecnico',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'b5fcbca0-a775-4282-8fda-24cc45792972',
		name: 'Coordinación Investigaciones Caracas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e20d33f5-c6d8-4e2a-8f5f-e47ca7222fcf',
		name: 'Coordinación Investigaciones Maracaibo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'ea7a3e4e-6e41-46c4-9ec0-97b83051ff95',
		name: 'Corrd. Seguridad Física Región Andes I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c9ebd952-890a-40e5-90ee-6d5e098a3267',
		name: 'Corrd. Seguridad Física Región Andes II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f72b7437-a9b7-45c5-8088-40f6a09c50d3',
		name: 'Corrd. Seguridad Física Región Central',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '11ed59b0-79a2-43a7-9735-6be464602899',
		name: 'Corrd. Seguridad Física Región Falcón',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '114ad050-f638-4952-982b-41793d75c95b',
		name: 'Corrd. Seguridad Física Región Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '2332555b-ed80-49e8-9f03-4c4432e4cde7',
		name: 'Corrd. Seguridad Física Región Oriente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '0d649ef9-fe14-4a85-9b2f-6887ffc0b80b',
		name: 'Gerencia De Area Admin. De Seguridad Bancaria',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '0f7ff8f2-78f2-4d79-ae8e-efed11b79d55',
		name: 'Gerencia De Area Seguridad Industrial Y Contingenc',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a3017b0b-5ebc-4987-bb70-96d3163166b7',
		name: 'Gerencia De Área Seguridad Preventiva Y Prot. Física',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'ece9bba7-92b6-494e-86a0-9a871425cbd3',
		name: 'Gerencia De Investigaciones',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5073672a-3803-46f1-8d9e-07f4b32dda0b',
		name: 'Gerencia De Proyectos Y Soporte Tecnico',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'cd265b01-0752-4065-a191-a2429b196b49',
		name: 'Gerencia Monitoreo Y Anti Fraude Capital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5b2466fd-7e92-4392-94b0-70d4ace17461',
		name: 'Gerencia Monitoreo Y Anti Fraude Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '16f12170-8e88-4af7-bd31-a15512282a32',
		name: 'Gerencia Nacional De Consola',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '340b1fc9-53f4-4ebf-a7de-45a8cb8436c9',
		name: 'Gerencia Soporte Inv. Tecno. De Seguridad Bancaria',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '7ff646d6-fc4e-4ece-ae76-12d92ac8e828',
		name: 'V.P. Gestión De Seguridad Bancaria',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '4086ae0a-a4c8-48e4-96dd-404d92e2140c',
		name: 'V.P. Prevención Y Control Del Fraude',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '9b82ebd6-b907-4400-8e01-92c769f78e55',
		name: 'V.P. Seguridad Preventiva Y Protección Física',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '2a27dfad-8d6c-4daa-8a61-00e5ebe60b29',
		name: 'V.P.E. Gestión De La Seguridad Y Prevención',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e8bd40aa-ede6-4587-99c2-7ba1460f0e46',
		name: 'Coord. Cobranza De Creditos Al Consumo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'fa27b7f9-bb8d-4367-bd87-4700468719ba',
		name: 'Coord. Creditos Comerciales',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'bd2a9426-ea6d-40c2-82f1-e9bf4a758cff',
		name: 'Gcia. De Analisis De Credito Banca Comercial',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '304eacf5-413c-4a9a-94f7-2d041b1d886e',
		name: 'Gcia. De Analisis De Credito Banca Corporativa',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e133e791-b3a4-4c54-8366-d6ae5a74de93',
		name: 'Gcia. De Control Estadistico E Informe Especiales',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '0d599ec1-32ad-46d5-9504-f74a7a7ab3d3',
		name: 'Gcia. De Credito Banca Especializada',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'df64db54-4a27-447b-9674-05c5ac55b482',
		name: 'Gerencia De Archivo Central De Credito',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '2ac7cea1-06b7-40b3-9d8e-19012e589425',
		name: 'Gerencia De Área De Cobranza Y Recuperaciones',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '4d1abd64-71b5-4577-afab-9a6794c238b2',
		name: 'Gerencia De Control De Cartera De Credito',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '2be2da03-3d46-47da-9e3b-403311bdcb7e',
		name: 'Gerencia De Fianzas Y Garantias',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c275d247-385d-43f7-a3ef-7a1c22b45a74',
		name: 'Gerencia De Validacion',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'ff623912-43f0-42e0-9263-8452e46a6caa',
		name: 'V.P. Análisis De Crédito',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '65f4fbae-803c-4849-92cc-847fab0cc7e7',
		name: 'V.P. Seguimiento Y Control De Credito',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '276e34b6-a886-4c46-969a-908835b0f4b7',
		name: 'Coord. Canales Digitales Y Distribuidos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '82ceeafa-10c3-4e06-a654-a850ab4e48a0',
		name: 'Coordinación Administración De Ambientes',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5371208e-a2e6-4fc1-bdf0-555d2a59eb01',
		name: 'Coordinación Arquitectura',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '870de676-9391-49bd-838d-33bc61f0b1c4',
		name: 'Coordinación Bases De Datos Distribuida',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c67078dc-9250-48e5-94d3-c8abb9c82dcb',
		name: 'Coordinación Centro Alterno',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '9a187d74-b9f9-4ef3-a360-8de733d158d5',
		name: 'Coordinación De Monitoreo Atm',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '08c14913-5025-4906-bceb-670bfb47c153',
		name: 'Coordinación De Soporte Pos Capital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'b4d17e8e-7f8b-48c1-ac80-b0b0309da553',
		name: 'Coordinación Monitoreo Pos Caracas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '9f957340-aaac-4066-bc40-0bedde601d47',
		name: 'Coordinación Plataforma Centralizada',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '64410dd1-c110-4d2f-a0ed-5251d7a4b8b8',
		name: 'Coordinación Plataforma Media',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'dd65c1c3-a71f-4d32-a395-40801073b4f9',
		name: 'Coordinación Producción Caracas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e5d141bf-6756-4f01-baa7-67aef3dff270',
		name: 'Coordinación Producción Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3892411b-1115-4388-a90d-cce49796ec4b',
		name: 'Coordinación Proyectos Técnicos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5a38f1f0-8a17-4cd6-9c50-3d686cf73ec0',
		name: 'Coordinación Redes Y Comunicaciones Caracas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3552a306-43a0-4911-a86d-0ca85b47c878',
		name: 'Coordinación Redes Y Comunicaciones Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f38e23c4-0b2c-4395-9845-15254e286afa',
		name: 'Coordinación Sistemas Postillion',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '14e2cda1-edd5-44e0-841d-3935a49ce41c',
		name: 'Coordinación Soporte Vip',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'af25b7df-f49f-4260-845a-3a17eb5061ec',
		name: 'Coordinación Técnica Atm',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a28f5061-fce8-437a-a318-1707e4b84b45',
		name: 'Gerencia Banca En Linea',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '28d6cb0d-3775-4b2e-9b6e-43eaaa6a1353',
		name: 'Gerencia Comunicación Perimetral',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '70d3eb7a-a2c7-44a6-85f9-7b94b8da305c',
		name: 'Gerencia De Area Administración De Bases De Datos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3f50dea7-6838-4540-9692-606734bb8dd5',
		name: 'Gerencia De Area BI Y Regulatorios',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '9fa3ccf4-46f3-40d3-8188-144be365c4e6',
		name: 'Gerencia De Area BI Y Sistemas Regulatorios',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '267161ab-85ce-4384-a098-79015419e8a8',
		name: 'Gerencia De Area Core Bancario',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '641634d5-6e60-4854-af8b-9f4a7acbd653',
		name: 'Gerencia De Area De Comunicaciones',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'ce5ff141-f5a3-4f3e-a424-9b23dd061632',
		name: 'Gerencia De Area De Soporte De ATMs',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3651820d-4baf-4146-9b1b-b4073b14546c',
		name: 'Gerencia De Area De Soporte POS',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f688c784-d8ac-45b4-a39d-79a4212a669a',
		name: 'Gerencia De Area Energía',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '4dcc402d-20f8-4432-b335-557cc21ce190',
		name: 'Gerencia De Area Gestión De Certificación',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e3f60c65-786b-4a36-885a-ff6d8e1f5b84',
		name: 'Gerencia De Area Integración De Plataforma',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'bb8f48a3-2843-4984-a6a1-6884139db125',
		name: 'Gerencia De Area Oficina De Proyectos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '50ad74d5-57fc-4642-8c0e-a1f77008286e',
		name: 'Gerencia De Area Plataforma Especializada',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5c5512c6-5c66-43e2-abef-d1f5abb500a8',
		name: 'Gerencia De Area Producción',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '7fa5d9d3-43dc-482e-96fa-6d8c88320d1b',
		name: 'Gerencia De Area Proyect De Integrac De Plataforma',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd45bf2f1-0568-46b9-aa58-ea93cfe3de8f',
		name: 'Gerencia De Area Proyectos Canales Digitales',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e48171e2-fe8c-489f-95d1-60308e9432d1',
		name: 'Gerencia De Area Proyectos Core Bancario',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '12caf6da-d0be-4857-8ab0-dea741f8ee73',
		name: 'Gerencia De Area Proyectos De Seguridad TI',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '485b0e40-2ded-4950-952d-dadabf3ce881',
		name: 'Gerencia De Area Proyectos Especiales',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '532035c9-e303-46b6-84b5-d713e76b11e4',
		name: 'Gerencia De Area Proyectos Pos ATMs',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'aa055f7e-bbdd-4572-88b5-f84fcffee6ee',
		name: 'Gerencia De Area Sistema De Medios De Pago',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '683913a2-8c96-40ba-948e-53c4b1b1460b',
		name: 'Gerencia De Area Sistema Distribuido',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '4fbbab96-4926-407a-92ef-a8f8d56ab8ec',
		name: 'Gerencia De Desarrollo De Sistemas Internos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '564343eb-6ee2-4ba4-bc71-5e21d4a6a635',
		name: 'Gerencia De Energía Caracas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '2fad4c59-e8d9-4ee1-8080-79dcf8bd2e26',
		name: 'Gerencia De Energía Maracaibo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd960bcf0-57d5-4c29-9c3b-01a89f3fe79b',
		name: 'Gerencia De Integración Plataforma AS-400',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'ba7b5ed0-be2b-4833-9d40-04e51fcd3bdf',
		name: 'Gerencia De Monitoreo Telco E Infraestructura',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '0bcc8822-149f-41a7-80c1-1937d5aa805b',
		name: 'Gerencia De Open Banking',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '98e3ca7b-c755-4706-a27f-6200ea37c9a8',
		name: 'Gerencia De Producción Caracas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '9dd928a3-4079-4e08-ad58-a21e39b5e4dd',
		name: 'Gerencia De Proyectos TI',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'af34c175-0386-431f-bc02-9e0b3b922131',
		name: 'Gerencia De Sistema Productos Activos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'b707557e-3427-45bd-89ab-5fae471ff480',
		name: 'Gerencia De Sistema Productos Pasivos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '161732af-5c35-4f69-b86d-4ab5b8aa9a1b',
		name: 'Gerencia De Sistemas POS',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '599ef510-2ed6-4381-be25-1466eba8d86e',
		name: 'Gerencia De Soporte Tecnico Caracas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '298bffbf-4a43-4a9e-8f5d-ae09e612760e',
		name: 'Gerencia De Soporte Tecnico Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '035bdc61-325c-4530-889a-06b4e085b832',
		name: 'Gerencia Desarrollo De Sistemas De Integración',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c327025d-c456-4511-8e24-c3bffc508976',
		name: 'Gerencia Integración De Plataformas Distribuidas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c2b236cf-820a-4bec-975e-a50ae9c1d748',
		name: 'Gerencia Redes Y Comunicación',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c3eb2840-5bc4-4f01-845e-0e232d36c952',
		name: 'Gerencia Sistemas De Sucursales',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5e6daf71-875f-49a8-80d9-8d14455434ec',
		name: 'Gerencia Soporte Pos Capital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '56e234e4-79c9-45a1-a738-44f55c39965b',
		name: 'Gerencia Soporte Pos Occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '617521d1-6a5f-4687-a8e3-09c12426639d',
		name: 'Gerencia Telefonía',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '15f2bc67-ec85-416f-9129-5f7d62f0ab70',
		name: 'V.P. Desarrollo De Sotware',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '317d2ded-e194-4484-b414-4dbc2cdf90b2',
		name: 'V.P. Gestión De Proyectos TI',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd846d1b0-dbbc-4f1e-bca1-e445126f9053',
		name: 'V.P. Soporte A Canales Electrónicos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '24fceff7-dff2-4aac-90a1-cd8c52490bac',
		name: 'V.P. Tecnología',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a4919498-aff5-4959-aed1-13ddb394ac46',
		name: 'V.P.E. Ingenieria Tecnológica',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'bb6f9c60-9d7b-4561-8916-0bf3b8a05eaa',
		name: 'Coord Recaudación Seniat',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '68c101b7-713f-4545-a719-ddefa2c96a60',
		name: 'Coord Reclamos De Canales Electrónicos Tdc Zona 2',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '23ce54dc-f0f6-4303-b9a3-6bb1a1ccb968',
		name: 'Coord Reclamos De Canales Electrónicos Tdd Zona 1',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '6026596e-6c04-46f3-8cef-1ca2895a42ca',
		name: 'Coord Reclamos De Canales Electrónicos Tdd Zona 2',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5c47382e-9b75-4578-acdc-5cb1c4d11c63',
		name: 'Coord Reclamos De Canales Eletrónicos Tdc Zona 1',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '37f588cd-1e09-472d-9836-1236335780c4',
		name: 'Coord. Atención Al Cliente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '14e2c479-4e7d-4d8e-96a3-ae2125e95837',
		name: 'Coord. Recaudación Gobernaciones, Alcaldias',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '4a5d30e6-81d1-4e65-be93-c4c481daf25b',
		name: 'Coordinación Control Adm. Y Centros De Acopio',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '426d4fd4-fd72-4460-b28d-dd29d6cd4f07',
		name: 'Coordinación Control Contable Y Facturación',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5f84686b-3e70-4118-a250-56e437e8a9d7',
		name: 'Coordinación Control Operativo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '76352912-3472-4ba5-8f37-9befd2a9844b',
		name: 'Coordinación Control Y Seguimiento',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '16c38fc6-c549-4116-81fe-7240b86fc5f3',
		name: 'Coordinación Custodia Documental',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a0f67fbe-ea90-45e3-9445-86b91fe9b6d6',
		name: 'Coordinación Custodia Títulos Valores',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '2811a585-b4f3-44f2-bd11-034c92aca9f0',
		name: 'Coordinación De Ivss, Nómina Y Domiciliaciones',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c5591b9f-7062-4af9-9055-5a279f0e8732',
		name: 'Coordinación De Logística Moneda Nacional',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5fa4dbe9-599a-4971-80c5-26b0a1afc31d',
		name: 'Coordinación De Reportaría Y Monitoreo De Operaciones',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'ea5dcf59-9517-4e06-974c-1b606df1e5b1',
		name: 'Coordinación Moneda Extranjera',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '28795481-d435-46ff-ab85-c201de8e17bf',
		name: 'Coordinación Operaciones Back Office Y Seguro',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '16d4bc78-4f15-4e96-85c6-16e6b7090347',
		name: 'Coordinación Operaciones De Cambio',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '16692c74-80ea-4e83-a649-4680d68c20bf',
		name: 'Coordinaciónde Logística Moneda Extranjera',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '91cb8998-e11c-4a9d-8815-3fa958f5efbb',
		name: 'Gerencia Centro De Acopio Maracaibo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '62550ca0-1031-44df-a258-65d662312ad3',
		name: 'Gerencia Centro De Acopio Maracay',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '4b93b535-90ed-431f-b862-948f1bf4d472',
		name: 'Gerencia Centro De Acopio Valencia',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '56b14319-7b41-4bfc-bd62-bb6f4f3b5dbe',
		name: 'Gerencia De Aplicaciones De Cobro Y Proce Masivos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '317541f8-7af8-428f-8388-7dc5abb65530',
		name: 'Gerencia De Área Admin De Cuentas Y Estadísticas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '87d43fb3-8af7-4cca-bddc-9ace1a8b4bea',
		name: 'Gerencia De Área De Liquidaciones Y Aplic De Cobro',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '2d326ef0-b83a-4ca7-834b-5efc46a9a65c',
		name: 'Gerencia De Área De Transporte De Valores Y Centros De Acopio',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '4f17108f-16a2-4397-b3fb-7d44e999af8d',
		name: 'Gerencia De Área Gestión Y Control Operativo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '70d80d75-5216-43fb-98fd-de8f17bd4bd2',
		name: 'Gerencia De Área Logística De Efectivo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e1f5e9fc-3dbe-4f24-be2b-c6931389ac87',
		name: 'Gerencia De Área Operaciones De Tesorería',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '2cbce859-188b-4cd4-b808-5ac4f34b4bfb',
		name: 'Gerencia De Área Operaciones Especializadas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e8d131c7-0a07-4cf1-aae1-f122189c109c',
		name: 'Gerencia De Área Recauda De Impuestos Y Otros Serv',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '95d921d5-57bb-412d-a39f-2a5302f2a09c',
		name: 'Gerencia De Área Reclamos De Canales Electronicos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e692c28e-c15b-4431-9861-943450e14d12',
		name: 'Gerencia De Comercio Exterior Y Atención Al Export',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'bfea1bc9-ef5f-4b9a-8baa-a88891a193f5',
		name: 'Gerencia De Custodia',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '829e0489-2a40-4652-8c0a-e489cf564fab',
		name: 'Gerencia De Procesos Especiales Y Reportería',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd130578a-cd25-44c9-a22d-3006a9a09d52',
		name: 'Gerencia De Producción Amex',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd696017e-f845-4637-b723-bef741df69c8',
		name: 'Gerencia De Producción Visa Y Master',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '6b376155-fb2c-44e1-ac72-7a54abcc59e0',
		name: 'Gerencia Emisión Y Distribución Amex',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '404af6f6-268a-4787-bfd3-8b29d30ba071',
		name: 'Gerencia Emisión Y Distribución Visa Y Master',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e339e382-754d-462a-863a-6e76313735bd',
		name: 'Gerencia Operaciones Especializadas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5d2ebb64-a9ec-4495-accf-749cd5c23c79',
		name: 'Gerencia Operaciones Moneda Extranjera',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'faf26ff1-4ff0-41b8-b09d-77cb6608504d',
		name: 'Gerencia Operaciones Moneda Nacional',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '89b88a48-f632-484c-85c5-e717b6d2adf3',
		name: 'Gerencia Reclamo De Canales Electronicos Zona 1',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'eaeddd8c-9427-4d69-b9e4-40cfee22bb9a',
		name: 'Gerencia Reclamos De Canales Electronicos Zona 2',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '75308c29-5066-4c90-84c8-bf0b836e7d32',
		name: 'V.P. Atención Al Cliente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3fdc9324-e992-40d3-843b-f54ef9e8bf36',
		name: 'V.P. De Gestión Operativa Interna Y Proyectos Espe',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd93d8135-71e9-4c4e-8991-c12c4e3e3010',
		name: 'V.P. De Liquidaciones Y Servicios',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '31abeb6e-ebbb-4a00-83ba-eca66a0625e0',
		name: 'V.P. Emisión Y Distribución',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a4bd3ba1-c126-4db2-b83d-92a320870b21',
		name: 'V.P. Operaciones De Efectivo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '493d9375-2775-4489-b90f-9bc3baf80d41',
		name: 'V.P. Operaciones De Tesorería',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd6d28ad1-436a-4c46-9da2-d1abb7d22a9c',
		name: 'Coord. Asuntos Corp. Y Confirmaciones Bancarias',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'b75d493c-2732-4e4c-a1e8-0273d8f29ab3',
		name: 'Coord. Liberaciones Y Documentación',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '7f3f666f-da51-456f-a6f3-4a7431f80cfa',
		name: 'Gerencia Asuntos Corp. Y Confirmaciones Bancarias',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '156adbc8-af3d-4927-adfb-413ea14ebe64',
		name: 'Gerencia Consulta, De Productos Y Contratos Espec.',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'b5bd5f84-ea65-4af4-a0bd-751acae87d9e',
		name: 'Gerencia Control Institucional',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a07b5aff-0cf3-4136-8ec8-34b71ff68b8e',
		name: 'Gerencia De Área Asuntos Técnicos Regulatorios',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '72d620c7-2088-48a8-8be9-0c88ede8734d',
		name: 'Gerencia De Área Ctrol Institucional Y Asuntos Corp.',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'dcd32aec-f0d3-4cd1-8a37-59b9637a027b',
		name: 'Gerencia De Área Legal Y Organismos Oficiales',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '03dd9c03-4db2-4c16-93f1-e5a87ddc5439',
		name: 'Gerencia Gestión Administrativa',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f5dfdba8-3020-4001-9da3-139493c43348',
		name: 'Gerencia Legal De Créditos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '25b3f058-1a6d-47cf-9a68-f66602cb741c',
		name: 'Gerencia Liberaciones Y Documentación',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'cc4fc5b0-d931-4aa2-a7ac-2856d15d2d22',
		name: 'Gerencia Seguimiento Y Control',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e30b3322-125b-4011-b18b-35853a13d949',
		name: 'V.P. Aseguramiento Normativo',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '44e64c91-a82c-45da-a28a-a50a18a6da89',
		name: 'V.P. Asuntos Legales',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '81ceea59-6489-4d87-b2c6-f2128a2498c5',
		name: 'V.P.E. Servicios Jurídicos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '32dac7e1-a471-43b1-a1d4-7d667bdc80a6',
		name: 'Coodinación De Atención Post Venta',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f6b262cc-5300-498f-a8d7-50d48255e9e4',
		name: 'Coord Serv Al Clt Y Procesamiento De Solicitudes',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '35af32d6-377d-4418-abfe-9d722ab7fdc1',
		name: 'Coord. Atención Telefónica Al Cliente (m) I',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '852917fd-f39e-4223-96d8-11bd0cfd71d9',
		name: 'Coord. Atención Telefónica Al Cliente (m) II',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'eaa451cc-d319-4c92-bf42-fca0c20f1465',
		name: 'Coord. Atención Telefónica Al Cliente (n) V',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'b5d703b4-b86f-4ad1-a429-c8e4bcb4502d',
		name: 'Coord. Atención Telefónica Al Cliente (n) VI',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '86c2264d-a9a8-421c-8ff4-1283e93af333',
		name: 'Coord. Atención Telefónica Al Cliente (t) III',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd8531c71-db4b-4959-9949-5fe9a8916d5b',
		name: 'Coord. Atención Telefónica Al Cliente (t) IV',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '238904fb-4b18-43a3-b3b2-9d894f5b1c8c',
		name: 'Coord. Mantenimiento Y Soporte Al Cliente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '7dd45b53-8622-4b03-980b-0006abb41c32',
		name: 'Coord. Soluciones Integrales Whatsapp',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '56d4fc8f-136e-4096-9d9b-1d6fb71df8a6',
		name: 'Coordinación Comunicaciones Externas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '830b14b7-9256-4b01-92e3-f19c06a1db28',
		name: 'Coordinación Comunicaciones Internas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f30243c5-2401-425a-a333-6195c56e0b4d',
		name: 'Coordinación De Emprendedores',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd401a3f8-9d5e-4330-9add-5a28095898a4',
		name: 'Coordinación De Productos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '48da0932-6dc2-4e63-95eb-11d1905197c9',
		name: 'Coordinación Desarrollo De Canales Digitales',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd731cdc2-5e23-40eb-9f74-4b563be6c859',
		name: 'Coordinación Diseño Gráfico',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '920de21b-91ac-4c56-9ec7-8ac5a351aa9c',
		name: 'Coordinación Domiciliación POS',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '93adcf8d-7ec4-4529-9690-9b5b89fabeba',
		name: 'Coordinación Inteligencia De Negocios',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '18a98396-d294-4c8b-bd53-5c3b8671bb60',
		name: 'Coordinación Oficina Móvil',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'eb49ed53-a608-491b-bddd-41a381b34305',
		name: 'Coordinación Oficina Virtual BNC',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'e0c145b9-7957-4062-9e79-01c6c1715d97',
		name: 'Coordinación Pos - Merchant',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'bbdc9544-889f-4d39-80b1-91fecbc07284',
		name: 'Coordinación Recuperaciones POS',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '05b793ca-3b3b-4e8e-85fa-7a797e698245',
		name: 'Coordinación Servicio Al Cliente POS',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'd7686623-506d-491b-a9b1-9ca7768c8c8d',
		name: 'Coordinación Servicios De Afiliación POS',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'c923c185-d9a6-4ddd-9950-6a96345d4ce1',
		name: 'Gerencia Afiliación Al Servicio Pos Interior',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '20bffdb1-0797-49d9-88b1-305da2c17d96',
		name: 'Gerencia Afiliación Al Servicio Pos Metropolitana',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '64b8f6ab-d9d4-4304-a0bc-7ababd6243cf',
		name: 'Gerencia Analítica Digital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'b2fcf87c-f792-43aa-93a6-acb40f01bc8e',
		name: 'Gerencia De Area Contact Center',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5c67ff45-e92a-470e-a165-475a3ecfd2e5',
		name: 'Gerencia De Área De Comunicaciones Corporativas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '6543994f-4bc0-40a8-9552-364dc6eb6808',
		name: 'Gerencia De Área Experiencia Digital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3974d359-faa7-484f-b4b8-3db122302fe3',
		name: 'Gerencia De Área Productos Y Serv Tdd Y Sol Emerg',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '4b623e8f-4b12-43de-95e2-1f507374111b',
		name: 'Gerencia De Área Productos Y Servicios TDC',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'a7b4fe5d-67bf-442d-ba8b-369007cd74ba',
		name: 'Gerencia De Desarrollo De Canales Digitales',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'f4db3c5a-37ed-4ad1-97c8-be8d026e08f6',
		name: 'Gerencia De Eventos E Imagen Corporativas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '3f93435a-e0eb-46e5-9abe-0691875b316a',
		name: 'Gerencia De Innovación Y Productos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '85edf0ae-e456-4dcd-91e9-d07d87963e57',
		name: 'Gerencia De Marca',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'fe8c9cee-5648-4670-9347-93536b7a4414',
		name: 'Gerencia De Medios Digitales',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '1b4aaf34-257a-43fa-9a6f-3c0561f9142a',
		name: 'Gerencia Oficina Digital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '7fecb549-884f-48bd-b7d2-4284ee664064',
		name: 'Gerencia Servicio Al Cliente Y Recuperaciones POS',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'ff5effc2-3d29-42d5-b977-84fd07147726',
		name: 'Gerencia Servicios Post Venta Jurídicos',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '23edd4e4-540b-4e02-8804-f0e4fa3bb62e',
		name: 'V.P. De Mercadeo Y Comunicaciones Corporativas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '2b7b22c5-f184-49ab-8a00-68eb86a6e665',
		name: 'V.P. De Productos Y Servicios De Tarjetas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '8cf3cc6b-3e47-438d-9dd5-56902a79e7f0',
		name: 'V.P. Desarollo De Negocios E Innovación',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '86b7476e-e5cb-4257-8d41-69ed0aa5fc01',
		name: 'V.P. Inteligencia De Negocios Y Analítica Digital',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '7a3f8b1f-9f0b-4009-9003-911f731d0b31',
		name: 'V.P. Servicios Al Cliente',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: 'b863d79c-2a82-4763-900d-c608b0ac47ae',
		name: 'V.P. Soluciones Electrónicas',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '5f51303c-c6a2-4eb0-a6d1-b99d18f326e1',
		name: 'V.P.E. Soluciones De Clientes Y Serv. Digitales',
		vicepresidenciaEjecutivaId: VPEData.filter(
			directiva => directiva.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		centroCostoId: '95'
	},
	{
		id: '69e48403-a8ad-496f-bafc-c5189a7087ff',
		name: 'San Bernardino',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '1'
	},
	{
		id: 'c0026f22-b182-4ab2-8972-a59487c7cbdc',
		name: 'Traki San Martin',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '10'
	},
	{
		id: '682059be-bd03-4edb-a7e2-624e4b4cb453',
		name: 'Maracaibo Centro Comercial Gran Bazar',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '101'
	},
	{
		id: 'fe62bd8c-8568-45ab-ab21-342bbd3e9a21',
		name: 'Coro Supermercado Eurofalcon',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '102'
	},
	{
		id: '1006d886-13ef-4317-a876-340e3a74b9b8',
		name: 'Puerto La Cruz Av. Alberto Ravell',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '103'
	},
	{
		id: 'a01d8817-0e38-4cdf-abfe-f44472ed47a5',
		name: 'Maracay Av Vargas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '104'
	},
	{
		id: '8380efe7-0a3d-4dd5-8eb2-85859c0fc3fd',
		name: 'Carupano Centro Comercial Cristal',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '106'
	},
	{
		id: '00106cfb-3636-4595-86f9-66617b35748b',
		name: 'Valencia C.C. Concepto La Granja',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '107'
	},
	{
		id: 'f304319f-e356-4bdf-9a9e-30ab445d053e',
		name: 'Porlamar Alcaldia Mariño',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '108'
	},
	{
		id: 'baf6a4f6-c745-45c3-b743-1df1a02e4b23',
		name: 'Bejuma Av Los Fundadores',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '109'
	},
	{
		id: '0a45a274-cf38-4ef2-a6b8-66431b0cac78',
		name: 'La Candelaria-casabera',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '11'
	},
	{
		id: 'a3a9ee7b-3e56-49b4-a1e2-8c678a8342bc',
		name: 'Puerto Ordaz Continental',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '110'
	},
	{
		id: 'c3f7bd55-54fd-4af2-8744-94b55497c439',
		name: 'El Vigia',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '112'
	},
	{
		id: '60978241-53d7-4cd3-be86-14c7875ede73',
		name: 'Alcaldia De Casanay',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '115'
	},
	{
		id: '24b9bca2-3c5a-424b-8e59-7a42b73d45fc',
		name: 'Valera',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '117'
	},
	{
		id: 'e5e0214a-19db-4b8d-9fdd-62addedb9fd8',
		name: 'Punto Fijo-falcón',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '119'
	},
	{
		id: 'ccc5fb8b-0d5e-46d1-9fec-4136a1dfacd4',
		name: 'La Urbina',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '12'
	},
	{
		id: 'c4bf9859-d3f4-4019-88ea-bb6f2490ef6c',
		name: 'Coro I - Falcon',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '122'
	},
	{
		id: '365d181d-6252-49d9-987d-d5a523b5e855',
		name: 'Los Haticos - Maracaibo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '123'
	},
	{
		id: 'a0853833-c8e4-4c6a-b4b7-eba6af9eb1e8',
		name: 'Cc Planeta Sotaventos Maiquetia',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '124'
	},
	{
		id: '89be9678-b4ad-4149-aa4b-faf11d767926',
		name: 'Maracaibo Av. 5 De Julio',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '125'
	},
	{
		id: '41582041-92ba-4201-ab91-156a8f91718b',
		name: 'Villa Del Rosario',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '126'
	},
	{
		id: '17d23bc2-9ebf-44ff-8d03-35c9651a1d75',
		name: 'Valencia Camoruco',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '127'
	},
	{
		id: '5ae7e07d-32c1-4dae-bb61-475d0c3cfa3e',
		name: 'Valencia Centro',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '128'
	},
	{
		id: '28f2fe3f-7c2d-4397-abcf-bf2b1b0aea49',
		name: 'Ciudad Bolivar II',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '129'
	},
	{
		id: '584545e3-923a-4593-bb88-635579e78574',
		name: 'Catia Boulevard',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '13'
	},
	{
		id: '248e28e6-d55c-4f1b-97e9-4421fa69aa73',
		name: 'Club La Lagunita',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '130'
	},
	{
		id: '36986dfc-ab1c-4765-bf4e-d86f5320ecbf',
		name: 'Choroni',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '133'
	},
	{
		id: '1ef8c4ea-47c4-4fdd-a148-d5206124e42b',
		name: 'Centro Medico Maracay',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '135'
	},
	{
		id: 'cda174b5-9a24-4dc1-91d2-8f1e17557926',
		name: 'Charallave',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '14'
	},
	{
		id: 'bd09760e-03c1-4c66-9555-ae6146b0a30c',
		name: 'Los Dos Caminos',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '142'
	},
	{
		id: '002a9881-5e06-4ebe-8359-c8abb3cd940b',
		name: 'La Victoria Palma Center',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '144'
	},
	{
		id: '74a06d77-3e68-4576-9b2e-3273bd7e3057',
		name: 'Porlamar',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '146'
	},
	{
		id: '67e85837-5b3d-486d-bb2f-63acc4a9c457',
		name: 'Las Garcitas Valencia',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '148'
	},
	{
		id: 'ea450172-64ca-40ba-83f8-7e8a155a6e0e',
		name: 'Ciudad Ojeda Centro',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '15'
	},
	{
		id: 'd900c97d-1ec8-4322-bf87-44cbeffd4550',
		name: 'Maturin II',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '151'
	},
	{
		id: '960cac80-8893-478b-96b8-8c5c09713b0d',
		name: 'C.C. Babilon Centro Sur',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '152'
	},
	{
		id: '55fd6d6c-3e66-4c83-9f86-e8d0b862b737',
		name: 'La Trinidad Zona Industrial',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '153'
	},
	{
		id: '6a8bd459-4b6f-4a0b-be75-3748648a6796',
		name: 'Eurobuilding Puerto Ordaz',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '155'
	},
	{
		id: 'a3efa61f-a742-4b2b-ae83-c5e73da57232',
		name: 'Eurobuilding Barinas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '156'
	},
	{
		id: 'a38f3980-8b3e-4147-bdc5-21e4971d7c8f',
		name: 'Club Puerto Azul',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '159'
	},
	{
		id: '5172dfd4-f665-46b8-8fca-42fa1acad1cd',
		name: 'Los Taques - Falcón',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '16'
	},
	{
		id: '22463962-d0be-4ae9-aa9f-6aa45a7985ab',
		name: 'Porlamar Centro',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '161'
	},
	{
		id: 'cc6b34e5-dc03-4c0f-9a3e-4583e17beb53',
		name: 'Ciudad Ojeda',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '162'
	},
	{
		id: '3b03841e-20d7-44e6-9861-a4111476721b',
		name: 'Centro Comercial Los Teques',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '163'
	},
	{
		id: 'f9e3016c-8dde-426f-bd91-f4b61d41d8ba',
		name: 'El Sombrero',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '164'
	},
	{
		id: '6758cb60-f3ec-47dd-b834-62923b5c7f9e',
		name: 'Centro Comercial Metropolis',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '165'
	},
	{
		id: '055e1bb0-2f94-4288-a719-73e8bd9b08de',
		name: 'Santa Monica',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '166'
	},
	{
		id: 'cfe907b2-4938-4b31-a75a-9f7277dd0a89',
		name: 'C.C. Metrópolis Valencia',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '168'
	},
	{
		id: 'e430eed4-fe2f-4d64-8ede-c5117e430a90',
		name: 'Traki Cabimas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '169'
	},
	{
		id: '3967c37d-74d3-4ec3-8422-58825a539c51',
		name: 'Guatire Av. Intercomunal',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '171'
	},
	{
		id: '8111d34c-32ee-4918-9e4d-4981bf4c5656',
		name: 'El Tigrito',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '172'
	},
	{
		id: '241bb754-690b-48e4-ac42-4df0cfab9a57',
		name: 'La Morita',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '175'
	},
	{
		id: '6deaa9db-ee03-4119-8ea9-f23e59305e52',
		name: 'Lecheria',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '176'
	},
	{
		id: '69ae6390-62c2-454d-9ea3-8cb242bf4b68',
		name: 'Traki Cumana',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '178'
	},
	{
		id: '1d8756ed-2dd8-4423-a376-0fd224a6a068',
		name: 'Santa Teresa Del Tuy',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '18'
	},
	{
		id: 'dad11fb3-aa51-4a47-8a82-6238c53f453f',
		name: 'San Ignacio',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '181'
	},
	{
		id: '3b79119c-d046-4499-bdb7-78fe443e9d98',
		name: 'El Viñedo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '185'
	},
	{
		id: '39fa7a07-efbf-4207-94d4-60f6e5163f1e',
		name: 'Guarenas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '19'
	},
	{
		id: '68061f9d-dfb9-44b3-8e01-38645a1cd022',
		name: 'Maracaibo Iii',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '192'
	},
	{
		id: '12c176f3-8c3e-4d00-95ea-198bada8cb53',
		name: 'San Felipe',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '194'
	},
	{
		id: 'ac7aa25f-6c81-4a1c-8891-7fd5e36d8936',
		name: 'Barinas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '196'
	},
	{
		id: '58c27cf0-16a0-403c-8b54-8cb1f95522b8',
		name: 'Charallave - C.C.Super Lider',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '197'
	},
	{
		id: '5ce1ea65-43f4-4610-a394-cd82ab270c6d',
		name: 'Tumero C.C. Mariño Plaza',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '199'
	},
	{
		id: '2abffba4-7fa2-4096-86aa-3ee4ef2f6bc7',
		name: 'Palo Negro Super Lider',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '20'
	},
	{
		id: '3aadb856-59bd-4d91-8572-a4d2e2b3b72d',
		name: 'Yaritagua Hyper Lider',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '202'
	},
	{
		id: '943d285e-4700-48ae-aad3-e8a83c933972',
		name: 'San Diego Supermercado Hiper Lider',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '203'
	},
	{
		id: '6d9cfac3-fd31-4f79-9fec-b0e9f8009f97',
		name: 'San Fernando De Apure',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '206'
	},
	{
		id: '86be09d6-eda4-46aa-8959-6d6f894ff7cb',
		name: 'Hiper Lider Cabudare',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '207'
	},
	{
		id: 'a1fa067b-4bd0-46fb-a9af-be938fb7579b',
		name: 'San Carlos',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '208'
	},
	{
		id: '434f818e-6b99-45d1-a170-76a52fce1545',
		name: 'Tucupita Traki',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '209'
	},
	{
		id: '1273c086-6d09-484f-ab0f-eea3aa70a765',
		name: 'Maracay C.C. Platinium',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '21'
	},
	{
		id: '0c620c7a-b266-47d3-83ec-8516c373f82a',
		name: 'Dabajuro II',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '210'
	},
	{
		id: '120fb653-0d9f-431e-b524-3b053272c42b',
		name: 'Traki San Fernando De Apure',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '213'
	},
	{
		id: '21f3a481-a336-4ba8-ac0d-3f0df4964ba8',
		name: 'Francisco Solano',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '214'
	},
	{
		id: 'af4c5c15-2505-47ae-b3bf-21bb821bee50',
		name: 'Sambil Valencia',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '215'
	},
	{
		id: '941884c8-62b7-4238-8b17-869e313f80de',
		name: 'Excelsior Gama Santa Fe',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '216'
	},
	{
		id: '4104e110-88e7-443c-948c-5d1c76098d57',
		name: 'Excelsior Gama Santa Eudivigis',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '217'
	},
	{
		id: 'c140ba82-41fd-48b5-86e7-df6742f98ff0',
		name: 'C.C. La Viña Valencia',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '218'
	},
	{
		id: 'f57ac0eb-8ec3-4651-baaf-e773e815113f',
		name: 'Hiper Líder Araure',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '219'
	},
	{
		id: '7ff41376-6584-4902-bff2-bafa8129adff',
		name: 'Boleita',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '220'
	},
	{
		id: '62e59b1d-d659-4941-a925-6dac72164e56',
		name: 'V.P. De Negocios Zona II',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '220'
	},
	{
		id: '80b247f1-853f-4ca7-8c0c-7da72923d7a5',
		name: 'C.C Unicentro Maracay',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '221'
	},
	{
		id: '5dad3efc-5799-49f6-a4e6-5ff95c49f1bd',
		name: 'Anaco Av. Merida',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '230'
	},
	{
		id: '43b38100-f082-4b40-95d5-ca1f3a4b4901',
		name: 'Puerto Piritu',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '231'
	},
	{
		id: '98c86446-2b9f-463d-b876-37c92ce9f24c',
		name: 'Barcelona Centro',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '233'
	},
	{
		id: '165c1c1a-858a-4b7c-bad6-9c176f1ac4e3',
		name: 'El Tigre',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '234'
	},
	{
		id: 'de2fcdbf-fe71-4181-8b4b-dbcaeaa84b3c',
		name: 'Lecheria Centro Empresarial',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '235'
	},
	{
		id: 'ab32bfab-1a6a-4542-bcbe-b52b324de42a',
		name: 'C.C. La Victoria',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '239'
	},
	{
		id: 'f5243622-c28d-41ad-a17b-1fa39c98b404',
		name: 'La Morita Intercomunal',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '240'
	},
	{
		id: '41b5025a-cc6e-4401-955a-3534beae6f52',
		name: 'Puerto Ordaz Castillito',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '242'
	},
	{
		id: 'ea381e2f-be0d-4790-9561-511463d45549',
		name: 'Tocuyito',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '244'
	},
	{
		id: 'edd91b59-c9fc-428f-9d80-e88a9c817e7a',
		name: 'Montalban',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '246'
	},
	{
		id: '130fbb9f-dc61-4f75-8da4-f42dec95f89d',
		name: 'Santa Rosa',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '248'
	},
	{
		id: 'd3c0b4fa-197a-4d73-a37c-2acf7545e6ca',
		name: 'San Juan De Los Morros',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '25'
	},
	{
		id: '399c48ba-af27-427e-9df8-f708b8a87e05',
		name: 'Tinaquillo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '253'
	},
	{
		id: 'd49476be-2c20-43fc-9891-e14c2e00fa51',
		name: 'Av. Universidad',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '254'
	},
	{
		id: '3a8189ea-494e-4979-a5b9-5c360366cbbf',
		name: 'San Martin C.C. Los Molinos',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '255'
	},
	{
		id: 'e8e98bce-27d1-4a54-a128-bc81fc3aa777',
		name: 'Catia Av. Sucre',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '256'
	},
	{
		id: 'b03acb23-8d72-4ed2-ada1-e33830447799',
		name: 'La Yaguara Av. Principal',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '257'
	},
	{
		id: '2c60f5a7-255c-470c-9418-cdac887cf007',
		name: 'El Paraiso',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '258'
	},
	{
		id: '562b6ef7-7054-479a-b155-2d97f3ff2852',
		name: 'City Market',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '259'
	},
	{
		id: 'd820ec98-609b-4eff-9494-9f866738040d',
		name: 'Universidad Catolica Andres Bello',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '260'
	},
	{
		id: '53e60faa-3952-4619-ba89-b8394fc22f95',
		name: 'Quinta Crespo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '261'
	},
	{
		id: 'ed64d4c7-8aeb-49c0-8d1b-dbd12645a1b8',
		name: 'Sambil Paraguana',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '262'
	},
	{
		id: '3f0c87d3-91cf-448f-9a43-96ab02533337',
		name: 'Punto Fijo Av. Jacinto Lara',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '263'
	},
	{
		id: '7091a94e-535c-4ace-a230-2a5301fbb5e3',
		name: 'Barquisimeto Av. Vargas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '264'
	},
	{
		id: '012c6227-f52b-4a4c-a98f-6c8095c9bed6',
		name: 'Sambil Barquisimeto',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '265'
	},
	{
		id: '5136c0a9-fc6e-417c-a173-33bb8348c530',
		name: 'Barquisimeto Zona Industrial',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '266'
	},
	{
		id: '9d875322-c5c6-45aa-a3c5-e79fa761b9b5',
		name: 'Quibor',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '267'
	},
	{
		id: 'a7d1dbbd-c33b-413d-8e9d-373d9555782a',
		name: 'Carora',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '268'
	},
	{
		id: '67a79fbf-29bb-4422-a63a-5097d532992c',
		name: 'Paseo Las Mercedes',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '270'
	},
	{
		id: 'd5b72833-20d9-47f6-ae5d-57d1c4e4b52b',
		name: 'Cumbres De Curumo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '271'
	},
	{
		id: '856605d5-f470-4b2c-97ab-1ba0ba004bc2',
		name: 'C.C. La Cascada',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '272'
	},
	{
		id: '585f8694-1d89-43d3-b3e0-0c26b5190ae8',
		name: 'Sambil Caracas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '273'
	},
	{
		id: '90af81c7-9c57-4feb-8503-4f602a97d5bd',
		name: 'Guarenas C.C. Miranda',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '275'
	},
	{
		id: '0980cb48-6061-4d65-936a-04904355dc65',
		name: 'El Marques',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '276'
	},
	{
		id: '495f578e-0556-4d51-adab-2ec6e85d8d0f',
		name: 'Macaracuay',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '277'
	},
	{
		id: '77c08d61-b598-46fe-a840-3f391e1fec81',
		name: 'Guatire C.C. Buenaventura',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '279'
	},
	{
		id: 'c5bf9fee-82d2-47b3-8708-bd1f5b703b57',
		name: 'Casacoima Delta Amacuro',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '28'
	},
	{
		id: '06db4b0a-25ad-42f3-9f2b-f7c6cbc50288',
		name: 'Centro Comercial Parque Costa Azul',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '280'
	},
	{
		id: '255cd955-6c61-46e1-a0c6-10a74922234f',
		name: 'Sambil Margarita',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '281'
	},
	{
		id: 'de5310f8-b5f7-44e4-8833-c9c0cac4f870',
		name: 'Juan Griego',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '282'
	},
	{
		id: 'e223ae68-c849-4bf8-a1aa-87766291d7a0',
		name: 'Guanare',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '283'
	},
	{
		id: 'f13e9c46-bc5d-45e1-bbd2-1d5c00a70d2f',
		name: 'Turen',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '284'
	},
	{
		id: '43fe5e0c-590b-4b09-9169-e42217b74ade',
		name: 'Cumana',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '285'
	},
	{
		id: '05c78a2e-4f10-4d8d-a8fb-685be1ba2163',
		name: 'Sambil San Cristobal',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '286'
	},
	{
		id: 'd9cf522b-3aa5-4eaa-82b1-d8777a21f2ef',
		name: 'San Cristobal 7ma. Avenida',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '287'
	},
	{
		id: '8f752a14-2cfb-4f83-a19c-cd81a327ecfc',
		name: 'Bocono',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '288'
	},
	{
		id: '49200fe2-d3b6-4615-a9b7-ddd32e387996',
		name: 'Tucupido',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '29'
	},
	{
		id: '25362f3b-c353-410c-b42d-ba57492c424a',
		name: 'Sabana De Mendoza',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '290'
	},
	{
		id: '08ba0da0-3a0e-4256-8391-17e04c2cac63',
		name: 'Trujillo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '291'
	},
	{
		id: '36c8a1e9-7b3c-4d72-abb2-273358d1b5be',
		name: 'Valera La Plata',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '292'
	},
	{
		id: 'bd762061-4366-496f-b61a-3e4b73fb457a',
		name: 'Valera La Puerta',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '293'
	},
	{
		id: '76899bfd-d258-4dcf-ac35-039345b2429a',
		name: 'Catia La Mar',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '294'
	},
	{
		id: '4d6d25c8-1a96-4f8f-b46b-00e968f6b6c6',
		name: 'El Junquito',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '295'
	},
	{
		id: '7b58d543-d7a4-402d-845f-98fdb750c0d6',
		name: 'Mene Grande',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '296'
	},
	{
		id: '3518f1f5-39ce-400f-b381-d476236bf8a8',
		name: 'Cabimas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '297'
	},
	{
		id: '11a17584-9111-4e75-91e2-28e8caaf2691',
		name: 'Santa Barbara',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '298'
	},
	{
		id: '596d9449-7ffe-4ef8-9b51-3007a8e91472',
		name: 'La Concepcion',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '299'
	},
	{
		id: '7e6da277-7b0a-4ec3-99d0-a73fc6bc003a',
		name: 'Maracaibo Las Delicias',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '30'
	},
	{
		id: 'cae1e924-38d7-4fe7-9888-f105afca8fba',
		name: 'Casigua',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '300'
	},
	{
		id: 'ec213d50-ea24-4e2e-ae77-a9f7768af9aa',
		name: 'Machiques',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '301'
	},
	{
		id: '888965a2-c40a-45de-ba6a-5bbfd77cafa9',
		name: 'Carrasquero',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '302'
	},
	{
		id: '1e8ce71c-b0a5-45f0-bb8d-5880c3e1f7ac',
		name: 'Maracaibo Norte',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '303'
	},
	{
		id: '93faa66b-1bea-4f43-973c-9956312fb3b8',
		name: 'Indio Mara',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '304'
	},
	{
		id: '395c4685-39fa-48c0-a6c0-c11405bc8f6a',
		name: 'Galerias Mall - Mcbo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '305'
	},
	{
		id: '5d82cf8b-5ee6-4430-960e-97b63228bfa2',
		name: 'Centro Lago Mall',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '306'
	},
	{
		id: 'f80c9f4f-fe8c-4c86-a071-3be9ef4a3b60',
		name: 'Curva De Molina',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '308'
	},
	{
		id: '9c27071e-6b6c-46c4-8d52-6d8fe99a58f8',
		name: 'Sabaneta',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '309'
	},
	{
		id: 'f8a27ac6-4ab4-44a7-bece-cacae7be6e32',
		name: 'Maracaibo Bella Vista',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '31'
	},
	{
		id: 'c4f6c5a5-6b15-4bd8-9a9b-0ef1ea37bd85',
		name: 'Calle 72',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '311'
	},
	{
		id: '0dac7e2e-5466-4e16-b3c7-f31e0ef4fc96',
		name: 'Maracaibo Zona Industrial',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '313'
	},
	{
		id: '21cdde10-dbea-4598-8298-7b0c43e75ae8',
		name: 'Las Mercedes',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '314'
	},
	{
		id: '86e465d4-cf47-4afc-822a-c5ff5ba69e98',
		name: 'El Transito',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '315'
	},
	{
		id: 'bc044545-4960-4bc0-9acd-07de831b2c2b',
		name: 'Sambil Maracaibo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '316'
	},
	{
		id: '6ce526cf-01c1-4c20-90dd-5e7544824577',
		name: 'Puertos De Altagracia',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '317'
	},
	{
		id: 'c30edf9a-143e-4e3a-8365-8fd2af6bbf75',
		name: 'El Saman',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '318'
	},
	{
		id: '6b4215e6-1b3f-4452-b817-83fc15b7d141',
		name: 'La Limpia',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '32'
	},
	{
		id: '9a138a57-e0bc-4ec5-a273-1f96acba99e4',
		name: 'Santa Rita',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '321'
	},
	{
		id: 'c7888623-1fc9-41e7-a082-cd5ad49c4b8c',
		name: 'Caja Seca',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '322'
	},
	{
		id: '73f68473-56ea-41af-80d6-4436ecea4926',
		name: 'El Mojan',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '323'
	},
	{
		id: '18ab268f-9b07-4301-b6fd-c7b5c889111a',
		name: 'Av. Blandin Chacao',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '324'
	},
	{
		id: '9e9fd0fe-da5f-4ccd-99cb-9460524ba93f',
		name: 'El Menito',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '326'
	},
	{
		id: '8040244f-69a4-433e-b813-32fd4a631a66',
		name: 'Puerto De Maracaibo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '327'
	},
	{
		id: '5369f440-6e48-45d4-b60c-59813cdab2e0',
		name: 'Campo Alegre',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '328'
	},
	{
		id: '5dc14cb8-d7ea-4377-a675-5261e7edc345',
		name: 'El Hatillo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '35'
	},
	{
		id: 'd49a9e5c-3f2d-4d83-a412-c9b14e7f0d1b',
		name: 'San Jorge El Cementerio',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '36'
	},
	{
		id: 'c64e16ab-72f5-4d0c-8314-9ec18bccceda',
		name: 'San Cristobal',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '40'
	},
	{
		id: '49b4e579-488e-418d-a831-a78c18c5fa06',
		name: 'Traki Valle De La Pascua',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '42'
	},
	{
		id: '678cd77e-b9c1-4431-a462-81d7f9768bad',
		name: 'San Antonio De Los Altos',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '43'
	},
	{
		id: 'ff26afbf-5766-4824-9326-2dd53289f345',
		name: 'San Felix',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '44'
	},
	{
		id: 'fa6409f3-5ca2-4e31-aef6-ab0ca8e9b357',
		name: 'Unare',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '45'
	},
	{
		id: '7751b176-5382-4446-a2e6-ea27d7c57a9b',
		name: 'Altavista',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '47'
	},
	{
		id: 'c4af3602-cb72-4e1a-8e8c-22c620f4b7b1',
		name: 'Aeropuerto Caracas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '49'
	},
	{
		id: 'd269d034-289b-46c6-b04a-7d00c65e1b25',
		name: 'Parque Cristal',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '50'
	},
	{
		id: 'ac62bdc2-02d9-4731-89b3-b5f8a13e97b9',
		name: 'Eurobuilding',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '51'
	},
	{
		id: '292ef792-e908-47c5-a50b-2e7556c295c5',
		name: 'Altamira',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '52'
	},
	{
		id: '3eab7aee-2d84-41eb-9aeb-116aaf562c76',
		name: 'San Roman',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '53'
	},
	{
		id: 'f78aea5d-f5a4-43e7-9c41-b26de0b7deaf',
		name: 'Caucagua',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '534'
	},
	{
		id: 'd1d02fb4-6b66-4adc-b638-96e9fbd1dd00',
		name: 'Rio Chico',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '535'
	},
	{
		id: '8b3cdf38-6f59-4c1b-adee-8af2328bf26d',
		name: 'Centro Comercial Alto Prado',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '54'
	},
	{
		id: '2f2cbd48-52a7-45ef-bb00-f5b5c552541f',
		name: 'La Vela',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '541'
	},
	{
		id: 'b3341fc0-0e7f-45d4-a8d6-9e7458de2906',
		name: 'C.C. Ciudad Tamanaco',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '55'
	},
	{
		id: 'c13ef463-0db4-411b-9574-f66910d5c611',
		name: 'Santa Isabel',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '550'
	},
	{
		id: 'ec2c56c5-c908-4f47-b461-f4f54b9db41d',
		name: 'Naiguatá',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '552'
	},
	{
		id: '6d8ed237-1ad8-4df3-a669-bb7217b25581',
		name: 'La Guaira',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '56'
	},
	{
		id: '3974028b-66df-440e-91a1-c4c17f4e9cb6',
		name: 'V.P. De Negocios Zona Iii',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '56'
	},
	{
		id: 'a0bcb813-5055-47fb-bf60-9c3450aa1009',
		name: 'Plaza Las Américas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '57'
	},
	{
		id: '73e832bb-f694-40aa-a4e0-62e274c66e03',
		name: 'Av. Victoria',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '59'
	},
	{
		id: '1024fb40-f050-4be4-bd8c-7b85261144ac',
		name: 'C.C. Barquisimeto Capanaparo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '60'
	},
	{
		id: 'ae35b2c7-81ac-4fdd-954d-32f8bab05edd',
		name: 'Acarigua',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '63'
	},
	{
		id: 'a32e833d-364d-4f07-8d1a-56849741fd39',
		name: 'Cagua Super Lider',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '67'
	},
	{
		id: 'ceed9dfb-cadf-429b-b6be-df5d0d681c72',
		name: 'Super Lider El Limon',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '68'
	},
	{
		id: '18a8821d-e7e9-4e28-b72d-ca14796110a2',
		name: 'Barquisimeto Mercabar',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '69'
	},
	{
		id: '0edb1bca-0245-4406-b0b6-ca478a286d8b',
		name: 'Puerto Cabello',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '71'
	},
	{
		id: '9c192d09-74c0-4bbb-a6c5-47e7d8df9184',
		name: 'Av Pedro Leon Torres',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '73'
	},
	{
		id: '5b2b5351-b373-4237-88cf-d8580d1ad26c',
		name: 'Ciudad Bolivar',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '74'
	},
	{
		id: '1ff85190-d2ff-466d-893f-1e99346adcac',
		name: 'Valencia Sur',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '76'
	},
	{
		id: 'c12f50cd-e28a-4924-9264-7966e0f230e3',
		name: 'San Sebastian De Los Reyes',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '79'
	},
	{
		id: '2c065944-69e1-40fd-9da0-7f84bf14b698',
		name: 'Maracay Las Delicias',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '80'
	},
	{
		id: '6c0f4086-ea04-4873-be7c-bab380c1dd42',
		name: 'Maracay Centro',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '81'
	},
	{
		id: 'cd37bd9d-f41c-4a29-b6a1-c9222074d27a',
		name: 'Maracay Alcaldía',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '83'
	},
	{
		id: '680f9915-b04e-4d08-9b50-28d4d3c8abea',
		name: 'Valencia Bolívar Norte',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '85'
	},
	{
		id: 'bbe71a7a-9613-4bb9-b7d5-29085894d1bb',
		name: 'Cagua',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '88'
	},
	{
		id: '1764158b-c9b4-4bb2-af4d-dfd3464a356c',
		name: 'Maracay Los Samanes',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '89'
	},
	{
		id: '1464d12a-ec7e-469e-8aa9-c7631dcd34e5',
		name: 'Villa De Cura',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '91'
	},
	{
		id: 'cae65b8f-3ffb-43b2-8b63-27da7c44f1ca',
		name: 'Merida Las Americas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '93'
	},
	{
		id: '0deebff2-7859-469c-915f-8065d5b20ffb',
		name: 'San Antonio Del Tachira',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '96'
	},
	{
		id: 'fd5ebb72-3567-47ea-917a-902caa19d4fb',
		name: 'La Quizanda',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '97'
	},
	{
		id: '4fd9cf23-fd8b-4472-a031-ade170abecbc',
		name: 'El Rosal',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '98'
	},
	{
		id: '7edc89db-85f9-42bf-8a3d-cb4d731d8c0e',
		name: 'Calabozo - Guárico',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		centroCostoId: '99'
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
