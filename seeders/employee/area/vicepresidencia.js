const { VPEOnlyNames, VPEData } = require("./vicepresidenciaEjecutiva")

const VPOnlyNames = {
	'GERENCIA APOYO A PRESIDENCIA EJECUTIVA': 'Gerencia de área proyectos de desarrollo sostenible',
	'GERENCIA DE AREA ASUNTOS REGULATORIOS': 'Gerencia apoyo a presidencia ejecutiva',
	'GERENCIA DE AREA AUDITORIA DE SISTEMAS': 'Gerencia de area asuntos regulatorios',
	'GERENCIA DE AREA AUDITORIA FINANCIERA': 'Gerencia de area auditoria de sistemas',
	'GERENCIA DE ÁREA CTRL Y SEGUIMIENTO DE AUDITORÍA': 'Gerencia de area auditoria financiera',
	'GERENCIA DE AREA DE AUDITORIA DE AGENCIAS': 'Gerencia de área ctrl y seguimiento de auditoría',
	'GERENCIA DE ÁREA DE COBRANZA Y RECUPERACIONES': 'Gerencia de area de auditoria de agencias',
	'GERENCIA DE ÁREA PROYECTOS DE DESARROLLO SOSTENIBLE': 'Gerencia de área de cobranza y recuperaciones',
	'GERENCIA DE AREA PROYECTOS ESPECIALES': 'Gerencia de area proyectos especiales',
	'GERENCIA DE AREA SEGURIDAD INFORMATICA': 'Gerencia de area seguridad informatica',
	'GERENCIA DE AREA TRANSFORMACIÓN': 'Gerencia de area transformación',
	'GERENCIA DE AREA VALORES Y ACCIONISTAS': 'Gerencia de area valores y accionistas',
	'GERENCIA DE GOBIERNO CORPORATIVO': 'Gerencia de gobierno corporativo',
	'GERENCIA DE INVESTIGACIONES': 'Gerencia de investigaciones',
	'GERENCIA DE METODOLOGÍA DE RIESGO FINANCIERO': 'Gerencia de metodología de riesgo financiero',
	'GERENCIA DE MONITOREO Y SEG. SOBRE CONT. DE NEG': 'Gerencia de monitoreo y SEG. sobre CONT. de neg',
	'GERENCIA DE RIESGO DE CREDITO': 'Gerencia de riesgo de credito',
	'GERENCIA DE RIESGO DE MERCADO Y LIQUIDEZ': 'Gerencia de riesgo de mercado y liquidez',
	'GERENCIA DE RIESGO OPERACIONAL MID Y BACK OFFICE': 'Gerencia de riesgo operacional mid y back office',
	'GERENCIA ESTADÍSTICA SOBRE METODOLOGÍA DE RIESGO': 'Gerencia estadística sobre metodología de riesgo',
	'GERENCIA GESTIÓN DE INFORMACIÓN': 'Gerencia gestión de información',
	'GERENCIA RIESGO OPERACIONAL FRONT OFFICE': 'Gerencia riesgo operacional front office',
	'TESORERIA': 'Tesoreria',
	'V.P REGIONAL REGIÓN CAPITAL I': 'V.P. Regional región capital I',
	'V.P. ANÁLISIS DE CRÉDITO': 'V.P. Análisis de crédito',
	'V.P. APOYO A LA PRESIDENCIA': 'V.P. Apoyo a la presidencia',
	'V.P. ASEGURAMIENTO NORMATIVO': 'V.P. Aseguramiento normativo',
	'V.P. ASUNTOS LEGALES': 'V.P. Asuntos legales',
	'V.P. ATENCIÓN AL CLIENTE': 'V.P. Atención al cliente',
	'V.P. BANCA CORPORATIVA': 'V.P. Banca corporativa',
	'V.P. BANCA DE RELACIÓN': 'V.P. Banca de relación',
	'V.P. BEI I': 'V.P. BEI I',
	'V.P. BEI II': 'V.P. BEI II',
	'V.P. BEI III': 'V.P. BEI III',
	'V.P. CALIDAD DE SERVICIO': 'V.P. Calidad de servicio',
	'V.P. CONTRATOS Y SERVICIOS': 'V.P. Contratos y servicios',
	'V.P. CONTROL DE INMUEBLES': 'V.P. Control de inmuebles',
	'V.P. CORPORATIVA BEI SECTOR AGROPECUARIO': 'V.P. Corporativa bei sector agropecuario',
	'V.P. CORPORATIVA BEI SECTOR FINANCIERO': 'V.P. Corporativa bei sector financiero',
	'V.P. CORPORATIVA BEI SECTOR PÚBLICO': 'V.P. Corporativa bei sector público',
	'V.P. CUMPLIMIENTO Y CONTROL DE GESTIÓN': 'V.P. Cumplimiento y control de gestión',
	'V.P. DE CONTRALORÍA': 'V.P. De contraloría',
	'V.P. DE FIDEICOMISO': 'V.P. De fideicomiso',
	'V.P. DE LIQUIDACIONES Y SERVICIOS': 'V.P. De liquidaciones y servicios',
	'V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS': 'V.P. De mercadeo y comunicaciones corporativas',
	'V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS': 'V.P. De productos y servicios de tarjetas',
	'V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL': 'V.P. De recursos humanos y cultura organizacional',
	'V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN': 'V.P. Desarollo de negocios e innovación',
	'V.P. DESARROLLO DE SOTWARE': 'V.P. Desarrollo de sotware',
	'V.P. EFICIENCIA COMERCIAL': 'V.P. Eficiencia comercial',
	'V.P. EMISIÓN Y DISTRIBUCIÓN': 'V.P. Emisión y distribución',
	'V.P. EMPRENDIMIENTOS': 'V.P. Emprendimientos',
	'V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS': 'V.P. Gestion de contabilidad pagos y tributos',
	'V.P. GESTIÓN DE PROYECTOS TI': 'V.P. Gestión de proyectos ti',
	'V.P. GESTIÓN DE SEGURIDAD BANCARIA': 'V.P. Gestión de seguridad bancaria',
	'V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS': 'V.P. Gestión organizacional y procesos',
	'V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO': 'V.P. Infraestructura y mantenimiento fisico',
	'V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL': 'V.P. Inteligencia de negocios y analítica digital',
	'V.P. OPERACIONES DE EFECTIVO': 'V.P. Operaciones de efectivo',
	'V.P. OPERACIONES DE TESORERÍA': 'V.P. Operaciones de tesorería',
	'V.P. PLANIFICACIÓN FINANCIERA Y PRESUPUESTO': 'V.P. Planificación financiera y presupuesto',
	'V.P. PMO PLANES ESTRATÉGICOS': 'V.P. PMO planes estratégicos',
	'V.P. PREVENCIÓN Y CONTROL DEL FRAUDE': 'V.P. Prevención y control del fraude',
	'V.P. REGIÓN ARAGUA - LOS LLANOS': 'V.P. Región aragua - los llanos',
	'V.P. REGIÓN CENTRO OCCIDENTE': 'V.P. Región centro occidente',
	'V.P. REGIÓN OCCIDENTE': 'V.P. Región occidente',
	'V.P. REGIÓN ORIENTE': 'V.P. Región oriente',
	'V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS': 'V.P. Regional administración de agencias',
	'V.P. SEGUIMIENTO Y CONTROL DE CREDITO': 'V.P. Seguimiento y control de credito',
	'V.P. SEGURIDAD PREVENTIVA Y PROTECCIÓN FÍSICA': 'V.P. Seguridad preventiva y protección física',
	'V.P. SERVICIOS AL CLIENTE': 'V.P. Servicios al cliente',
	'V.P. SOLUCIONES ELECTRÓNICAS': 'V.P. Soluciones electrónicas',
	'V.P. SOPORTE A CANALES ELECTRÓNICOS': 'V.P. Soporte a canales electrónicos',
	'V.P. TECNOLOGÍA': 'V.P. Tecnología',
	'V.P. UPCLCFTFPADM	': 'V.P. UPCLCFTFPADM',
}

const VPData = [
	{
		id: '8565fd0f-46aa-4ee0-8aed-fce34edbe593',
		name: 'Gerencia de área proyectos de desarrollo sostenible',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['PRESIDENCIA'])[0].id
	},
	{
		id: '48689b6e-cf5d-434a-bf0d-645c068cd0e8',
		name: 'Gerencia apoyo a presidencia ejecutiva',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['AUDITORIA INTERNA'])[0].id
	},
	{
		id: '10d80e46-7bf4-400e-9a25-0954df41f552',
		name: 'Gerencia de area asuntos regulatorios',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['AUDITORIA INTERNA'])[0].id
	},
	{
		id: '8c55dffa-d709-4fd7-b401-2546209f4599',
		name: 'Gerencia de area auditoria de sistemas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['AUDITORIA INTERNA'])[0].id
	},
	{
		id: '4be486c7-4278-44b6-b1b3-17013b065636',
		name: 'Gerencia de area auditoria financiera',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['AUDITORIA INTERNA'])[0].id
	},
	{
		id: '9edf81fc-7fe4-4e20-80a8-6d8618afe415',
		name: 'Gerencia de área ctrl y seguimiento de auditoría',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['AUDITORIA INTERNA'])[0].id
	},
	{
		id: '38107fbd-c837-4b9c-a237-ab3de35b6490',
		name: 'Gerencia de area de auditoria de agencias',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id
	},
	{
		id: '3c00d7c1-49f0-46a3-8154-d0c4a0fa6c0b',
		name: 'Gerencia de área de cobranza y recuperaciones',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA'])[0].id
	},
	{
		id: '63ed74c1-29af-4e7d-b376-fb0c51cc18f0',
		name: 'Gerencia de area proyectos especiales',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].id
	},
	{
		id: '93b55310-419a-4078-8258-3dd13e380177',
		name: 'Gerencia de area seguridad informatica',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0].id
	},
	{
		id: 'a49cbb15-db1a-4b94-b6f7-06fc0c551cc0',
		name: 'Gerencia de area transformación',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN'])[0].id
	},
	{
		id: '79aec376-44f1-4bef-9567-b6a55054fd47',
		name: 'Gerencia de area valores y accionistas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA'])[0].id
	},
	{
		id: 'bf890eb6-8ebb-439b-9e1d-8a4a691a5199',
		name: 'Gerencia de gobierno corporativo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA'])[0].id
	},
	{
		id: 'f1d12210-d8f5-4189-865d-5333c45c71de',
		name: 'Gerencia de investigaciones',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0].id
	},
	{
		id: 'fbe79f67-7121-4bf7-bcc0-30feabb9db57',
		name: 'Gerencia de metodología de riesgo financiero',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS'])[0].id
	},
	{
		id: 'a8dc634f-dfdf-4172-b951-1eb306c28669',
		name: 'Gerencia de monitoreo y SEG. sobre CONT. de neg',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS'])[0].id
	},
	{
		id: '5abb4d4f-fb6e-4fd3-8b08-d2f135ee01b1',
		name: 'Gerencia de riesgo de credito',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS'])[0].id
	},
	{
		id: '57a41c7b-e7dc-4205-bc70-2c9e5f986025',
		name: 'Gerencia de riesgo de mercado y liquidez',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS'])[0].id
	},
	{
		id: '45801a12-ec08-4bca-8713-0476f2248a41',
		name: 'Gerencia de riesgo operacional mid y back office',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS'])[0].id
	},
	{
		id: '790ca8bc-215d-4f3c-aec8-a231788d0859',
		name: 'Gerencia estadística sobre metodología de riesgo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS'])[0].id
	},
	{
		id: '56a7a35e-85d1-4c83-8b50-d31fd3ec3cff',
		name: 'Gerencia gestión de información',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS'])[0].id
	},
	{
		id: '5b4bb7f9-506e-4bfc-a234-67416984f558',
		name: 'Gerencia riesgo operacional front office',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS'])[0].id
	},
	{
		id: '17f66e1c-040d-42fd-87d1-f73cf2f7a5bd',
		name: 'Tesoreria',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id
	},
	{
		id: '46668196-e0bf-44df-8827-e138c2ea9d66',
		name: 'V.P. Regional región capital I',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id
	},
	{
		id: '4bd51cdb-bb21-4cbb-898e-f45d0ae33c0f',
		name: 'V.P. Análisis de crédito',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id
	},
	{
		id: 'b1d0ddaa-d855-451f-94c8-341a44f4eb5a',
		name: 'V.P. Apoyo a la presidencia',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['PRESIDENCIA'])[0].id
	},
	{
		id: 'cea270f3-e9af-45e6-818a-ae450df73b5d',
		name: 'V.P. Aseguramiento normativo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].id
	},
	{
		id: '18be753f-fb12-43ba-9de8-e3779eabff5b',
		name: 'V.P. Asuntos legales',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].id
	},
	{
		id: '58a503c7-1703-4b21-a706-2ae2ccd9e12c',
		name: 'V.P. Atención al cliente',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0].id
	},
	{
		id: 'c5695dcd-2549-42d5-b640-9d0d936ad24e',
		name: 'V.P. Banca corporativa',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA, EMPRESAS E INSTITUCIONES'])[0].id
	},
	{
		id: '01be4a1a-99cb-40fb-b53a-991ce204f016',
		name: 'V.P. Banca de relación',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA, EMPRESAS E INSTITUCIONES'])[0].id
	},
	{
		id: '3207c00f-56f4-4d39-ac07-a65d853ca720',
		name: 'V.P. BEI I',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA, EMPRESAS E INSTITUCIONES'])[0].id
	},
	{
		id: '966967d1-5d8e-499f-9265-317beaa96023',
		name: 'V.P. BEI II',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA, EMPRESAS E INSTITUCIONES'])[0].id
	},
	{
		id: '7c835fac-aa42-496e-b90d-7a2a7954a4e6',
		name: 'V.P. BEI III',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA, EMPRESAS E INSTITUCIONES'])[0].id
	},
	{
		id: '0971e8f6-9cd9-40d2-94dd-0311363eb970',
		name: 'V.P. Calidad de servicio',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN'])[0].id
	},
	{
		id: '23c1e674-c1c5-4a78-b967-69ab2c25ea6a',
		name: 'V.P. Contratos y servicios',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id
	},
	{
		id: '11b818d0-7a1d-47e0-87e4-a7c52ffe3ed6',
		name: 'V.P. Control de inmuebles',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id
	},
	{
		id: '39764533-c5af-48f3-9237-7d97c361521a',
		name: 'V.P. Corporativa bei sector agropecuario',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA, EMPRESAS E INSTITUCIONES'])[0].id
	},
	{
		id: 'ea43ed81-f92b-487c-b59b-8e73d470ed73',
		name: 'V.P. Corporativa bei sector financiero',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA, EMPRESAS E INSTITUCIONES'])[0].id
	},
	{
		id: '6babbcc6-418b-4dfb-a64e-20d3b2b1dbd0',
		name: 'V.P. Corporativa bei sector público',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA, EMPRESAS E INSTITUCIONES'])[0].id
	},
	{
		id: '5a0a84f4-25e2-4890-b2b9-c2b75a61e984',
		name: 'V.P. Cumplimiento y control de gestión',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id
	},
	{
		id: '6d6167dc-ccc7-407e-9218-45ee3b95768a',
		name: 'V.P. De contraloría',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id
	},
	{
		id: '88da36e8-70bc-4233-b994-63e1753f87f8',
		name: 'V.P. De fideicomiso',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id
	},
	{
		id: '842272f7-3f71-4676-9122-ea8f7bbd3e9e',
		name: 'V.P. De liquidaciones y servicios',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0].id
	},
	{
		id: 'b89d9ed8-dead-41dd-980b-3446b5f2f847',
		name: 'V.P. De mercadeo y comunicaciones corporativas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES'])[0].id
	},
	{
		id: '67c83ec4-135f-4112-a0f6-cf750321e433',
		name: 'V.P. De productos y servicios de tarjetas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES'])[0].id
	},
	{
		id: 'd66d1dda-2e99-4914-836c-5e6627d67780',
		name: 'V.P. De recursos humanos y cultura organizacional',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN'])[0].id
	},
	{
		id: 'c0e9d33c-6729-44ab-9c78-152069b1832d',
		name: 'V.P. Desarollo de negocios e innovación',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES'])[0].id
	},
	{
		id: '90dceec7-d97d-4871-bbcd-fe8d2dbe006d',
		name: 'V.P. Desarrollo de sotware',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].id
	},
	{
		id: '069e3026-9ca8-4e32-be22-73a2b3a123ae',
		name: 'V.P. Eficiencia comercial',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id
	},
	{
		id: '6c617337-dc74-443d-ab62-cec323082c59',
		name: 'V.P. Emisión y distribución',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0].id
	},
	{
		id: '3589c293-2ddc-4a61-a97f-cd42251c32a1',
		name: 'V.P. Emprendimientos',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA, EMPRESAS E INSTITUCIONES'])[0].id
	},
	{
		id: '5e4da987-03b1-4366-928b-3e23ad851fd9',
		name: 'V.P. Gestion de contabilidad pagos y tributos',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id
	},
	{
		id: 'e8bf34db-478b-484f-a1e5-45493f748a25',
		name: 'V.P. Gestión de proyectos ti',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].id
	},
	{
		id: '6eae5610-40d6-44c6-8080-657566d5fdc0',
		name: 'V.P. Gestión de seguridad bancaria',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0].id
	},
	{
		id: 'fa2f4ec6-f6a6-465f-891a-01273931229e',
		name: 'V.P. Gestión organizacional y procesos',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN'])[0].id
	},
	{
		id: 'c4bb47f8-9f4b-48df-8101-abd0fa4a608e',
		name: 'V.P. Infraestructura y mantenimiento fisico',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id
	},
	{
		id: '8a200483-b93d-4017-ae74-ea80017cbbd5',
		name: 'V.P. Inteligencia de negocios y analítica digital',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES'])[0].id
	},
	{
		id: '59a045c8-16a6-4ef9-9e4b-83bb623674d8',
		name: 'V.P. Operaciones de efectivo',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0].id
	},
	{
		id: 'b948fd0a-9261-4234-afa7-cf775227452d',
		name: 'V.P. Operaciones de tesorería',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0].id
	},
	{
		id: '938f090d-e9ba-4706-89ba-19efa9585424',
		name: 'V.P. Planificación financiera y presupuesto',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id
	},
	{
		id: '17d3cd50-e9c3-40b2-b2b8-4aa136158550',
		name: 'V.P. PMO planes estratégicos',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN'])[0].id
	},
	{
		id: '8aaa89c4-63c3-4dc6-849c-8568ddbeed2c',
		name: 'V.P. Prevención y control del fraude',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0].id
	},
	{
		id: '5641f88a-47d7-4431-b082-8b8941b754a9',
		name: 'V.P. Región aragua - los llanos',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id
	},
	{
		id: '437488ec-4eb4-48e4-a31c-9e2b754a0f72',
		name: 'V.P. Región centro occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id
	},
	{
		id: '5e2da0c0-1a63-4016-86f9-0384dd977842',
		name: 'V.P. Región occidente',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id
	},
	{
		id: 'ea48feba-29b3-41d7-91af-eeac411f9c79',
		name: 'V.P. Región oriente',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id
	},
	{
		id: 'fd65ee48-db0f-4b7c-8279-8e91abc0e516',
		name: 'V.P. Regional administración de agencias',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id
	},
	{
		id: '33c92fe0-0ed6-4a00-bbc6-77395c6774af',
		name: 'V.P. Seguimiento y control de credito',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id
	},
	{
		id: '07d786f3-a317-4d2c-ab7f-c4840452ca6f',
		name: 'V.P. Seguridad preventiva y protección física',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0].id
	},
	{
		id: 'd928571d-ac60-4ec6-93f0-a25e9b2d04f3',
		name: 'V.P. Servicios al cliente',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES'])[0].id
	},
	{
		id: '4ace7df1-f85a-43e3-a6b5-22b12e496616',
		name: 'V.P. Soluciones electrónicas',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES'])[0].id
	},
	{
		id: '919fbd6d-1b3f-406e-85c6-3cfa0ed080aa',
		name: 'V.P. Soporte a canales electrónicos',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].id
	},
	{
		id: '570187bc-d77d-4648-a7d2-cb0dfc3c4976',
		name: 'V.P. Tecnología',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].id
	},
	{
		id: '0f56d307-73d8-4bcb-86ff-0f5e9285b109',
		name: 'V.P. UPCLCFTFPADM',
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id
	},

]

module.exports = { VPData, VPOnlyNames }

