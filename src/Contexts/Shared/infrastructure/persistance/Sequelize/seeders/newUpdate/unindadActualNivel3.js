const { randomUUID } = require('node:crypto')
const { updateNivel2 } = require('./unindadActualNivel2')
const { capitalCadena, cleanText } = require('./capitalCadena')
const now = new Date()

const level3Actual = [
	{
		id: 'eaf1b05b-31f1-4962-a42d-e0ebc5acac42',
		name: capitalCadena('GERENCIA APOYO A PRESIDENCIA EJECUTIVA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10103,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 101)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2a1c8eba-8857-407a-b99d-6f7ab11ae708',
		name: capitalCadena('GERENCIA DE ÁREA CTRL Y SEGUIMIENTO DE AUDITORÍA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10306,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 103)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '72e5ea94-d0e2-49ef-8b2e-b977d5e15f12',
		name: capitalCadena('GERENCIA DE AREA AUDITORIA DE SISTEMAS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10307,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 103)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2374adb0-b2c1-40bc-939c-da2e2e7b5cb5',
		name: capitalCadena('GERENCIA DE AREA AUDITORIA FINANCIERA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10308,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 103)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '76c73cb8-789e-4ffd-96b8-a95d12003a93',
		name: capitalCadena('GERENCIA DE AREA ASUNTOS REGULATORIOS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10309,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 103)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9f7cd1c9-8c86-45ac-9486-b1d14a539783',
		name: capitalCadena('GERENCIA DE AREA DE AUDITORIA DE AGENCIAS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10310,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 103)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cdad7d7f-96bb-437f-b632-4a09a0b37425',
		name: capitalCadena('GERENCIA DE RIESGO DE CREDITO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10602,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '66d575e3-491b-4f06-9166-17b7ac2d17f9',
		name: capitalCadena('GERENCIA DE RIESGO DE MERCADO Y LIQUIDEZ'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10603,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd89c8948-0faa-4413-8e20-f68fc9277101',
		name: capitalCadena('GERENCIA DE RIESGO OPERACIONAL MID Y BACK OFFICE'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10604,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '342f0da0-0ba0-464c-ae46-f78878fca1af',
		name: capitalCadena('GERENCIA DE MONITOREO Y SEG. SOBRE CONT. DE NEG'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10606,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1e7c1faf-8df5-4458-aaa4-44247926822c',
		name: capitalCadena('GERENCIA GESTIÓN DE INFORMACIÓN'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10608,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f87ddeec-af5a-4e0d-a5eb-9dde8e4a0366',
		name: capitalCadena('GERENCIA DE METODOLOGÍA DE RIESGO FINANCIERO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10609,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0caffd06-3961-4d40-831b-d88f42476155',
		name: capitalCadena('GERENCIA ESTADÍSTICA SOBRE METODOLOGÍA DE RIESGO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10610,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '82889b57-0f44-40c6-8fd9-e70430a3ba2c',
		name: capitalCadena('GERENCIA RIESGO OPERACIONAL FRONT OFFICE'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10611,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fcf90e2b-a839-4c7f-8ac0-8738995104bb',
		name: capitalCadena('GERENCIA DE ÁREA VALORES Y ACCIONISTAS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10801,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 108)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd5c5f299-35d1-4b62-b4d0-b2e642e6dcab',
		name: capitalCadena('GERENCIA DE GOBIERNO CORPORATIVO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10802,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 108)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0cf453f8-aade-430a-9bd0-68364b340e5b',
		name: capitalCadena('GCIA DE ÁREA DESARROLLO Y SOSTENIBILIDAD'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 10803,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 108)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '21b0668f-346e-4c06-976a-8c2fbd3fcd3f',
		name: capitalCadena('V.P. ASUNTOS LEGALES'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20411,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 204)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '47cc631a-156e-4a75-8f4b-981eaadc182f',
		name: capitalCadena('V.P. ASEGURAMIENTO NORMATIVO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20412,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 204)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3041529f-fb24-4f76-8134-3f7793cc4334',
		name: capitalCadena('V.P. DE CORRESPONSALIA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20503,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 205)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c3594feb-a38c-4977-9780-e4bdbd030031',
		name: capitalCadena('TESORERIA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20504,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 205)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '04d047d4-7e48-4f8b-b759-b322d792a27e',
		name: capitalCadena('V.P. DE FIDEICOMISO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20510,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 205)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'db7f9f34-7e65-4319-8b63-7f48d9b686a2',
		name: capitalCadena('V.P. DE CONTRALORíA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20511,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 205)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5b484706-da03-4973-bd46-22155d98b77c',
		name: capitalCadena('V.P. PLANIFICACIÓN FINANCIERA Y PRESUPUESTO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20512,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 205)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '41864366-e2c6-4835-93a8-1c4cb06fa5e6',
		name: capitalCadena('V.P. GESTIÓN DE CONTABILIDAD PAGOS Y TRIBUTOS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20513,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 205)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f3083785-391d-4494-b0d3-36acf69344ba',
		name: capitalCadena('V.P. DESARROLLO Y GESTIÓN COMERCIAL'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20514,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 205)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cc1d849c-7151-44c4-8259-b1dfc01ffd89',
		name: capitalCadena('V.P. CORPORATIVA SECTOR AGROPECUARIO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20807,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 208)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3753329a-c55a-443e-841d-ba57c66101ff',
		name: capitalCadena('V.P. CORPORATIVA SECTOR FINANCIERO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20816,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 208)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e1e2f189-791c-4de1-b2ee-d747d48e1492',
		name: capitalCadena('V.P. CORPORATIVA SECTOR SERVICIOS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20819,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 208)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3b73980f-6fa8-484e-8900-24c0fbe1d5b4',
		name: capitalCadena('V.P. CORPORATIVA SECTOR MANUFACTURA Y CONSUMO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20824,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 208)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a968b377-5411-4fc2-a31e-0f1b8410cab7',
		name: capitalCadena('V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20918,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 209)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'bcd41a9c-d2fc-4587-b319-f8aada22e68e',
		name: capitalCadena('V.P. REGIÓN OCCIDENTE'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20919,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 209)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '68cd2df3-5adb-4be8-89d8-9d48b3814302',
		name: capitalCadena('V.P. REGIÓN ARAGUA - LOS LLANOS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20920,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 209)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '917a172a-a2ef-46db-94d0-826bdf6ce989',
		name: capitalCadena('V.P. REGIÓN CENTRO OCCIDENTE'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20921,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 209)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0bfeb201-66ec-4ae6-93f9-f4ef31e37227',
		name: capitalCadena('V.P. REGIÓN ORIENTE'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20922,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 209)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b2f456f7-5fa8-4048-a472-cdb29e2d1374',
		name: capitalCadena('V.P. REGIONAL REGIÓN CAPITAL I'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20923,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 209)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '084a6c88-4322-42e1-a063-912437d77e86',
		name: capitalCadena('V.P. REGIONAL REGIÓN CAPITAL II'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20924,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 209)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '90024835-8409-48d6-9d0c-7059a4e298fb',
		name: capitalCadena('V.P. BANCA PRIVADA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20925,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 209)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a1e0e3f9-836a-4f77-bbe5-d42cfc1dd628',
		name: capitalCadena('V.P. EMPRENDIMIENTOS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20926,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 209)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b5715f31-c2ba-4599-aa1a-06783a8b86be',
		name: capitalCadena('V.P. BEI'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 20927,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 209)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '68522ee6-306e-46d0-80e1-dd3fc12b252a',
		name: capitalCadena('V.P. SOPORTE A CANALES ELECTRÓNICOS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21007,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 210)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '420917bc-9b18-4e19-b494-7f58b7519565',
		name: capitalCadena('V.P. TECNOLOGÍA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21010,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 210)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8fae84f0-909b-490f-96e6-7823503d0fba',
		name: capitalCadena('V.P. DESARROLLO DE SOFTWARE CORE BANCARIO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21016,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 210)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5d0ab41e-47ce-4ec2-94df-5914feb49a4e',
		name: capitalCadena('V.P. ARQUITECTURA Y CONTINGENCIA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21017,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 210)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0b1a2a20-784d-4ca5-b556-6a03b545e8a3',
		name: capitalCadena('V.P. GESTIÓN DE PROYECTOS TI'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21021,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 210)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'aed9bcd1-5334-4ae4-9c9e-41b64aa5660a',
		name: capitalCadena('V.P. DESARROLLO DE SOFTWARE CANALES DIGITALES'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21022,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 210)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '63207e92-7ad3-43e0-9fd0-afed7b46d7ec',
		name: capitalCadena('V.P. SEGUIMIENTO Y CONTROL DE CRÉDITO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21406,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 214)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6bd6a716-778a-4572-86b0-48da6a55fafc',
		name: capitalCadena('V.P. ANÁLISIS DE CRÉDITO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21407,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 214)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9c0e2819-8197-4a8f-a88e-fcd325c0d418',
		name: capitalCadena('GERENCIA DE ÁREA DE COBRANZA Y RECUPERACIONES'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21412,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 214)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cef5a8b7-6db8-4505-a994-3fd537096150',
		name: capitalCadena('V.P. EMISIÓN Y DISTRIBUCIÓN'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21609,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 216)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '17137664-2c97-494b-a686-06e9b168c5a5',
		name: capitalCadena('V.P. DE LIQUIDACIONES Y SERVICIOS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21611,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 216)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd8576eae-069e-471a-a313-84fdb9597568',
		name: capitalCadena('V.P. OPERACIONES DE TESORERÍA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21618,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 216)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c88e5550-08fe-4b8c-8ec3-de9ffbe7b3a5',
		name: capitalCadena('V.P. OPERACIONES DE EFECTIVO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21619,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 216)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '501dd044-806e-480b-b385-0ee99e9fde4d',
		name: capitalCadena('V.P. ATENCIÓN AL CLIENTE'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21620,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 216)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4ed895fc-56ce-45d5-8b96-c312988146eb',
		name: capitalCadena('V.P. CONTRATOS, SERVICIOS Y PAGOS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21621,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 216)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '16a63637-50fc-4c3c-aa37-c45ef0a08968',
		name: capitalCadena('V.P. PROCURA Y SERVICIOS GENERALES'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21622,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 216)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9182c3f4-360d-491f-a9fa-b2701e6cac0e',
		name: capitalCadena('V.P. GESTIÓN DE ACTIVOS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21623,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 216)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a84f9c2e-6e6b-4519-92e0-f9c4e4fac7ad',
		name: capitalCadena('V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISÍCO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 21624,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 216)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '04d7471b-cc7d-41b4-84ce-c4d39f000165',
		name: capitalCadena('V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 22801,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 228)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b0417e71-14bd-482c-a9bb-6103669d2906',
		name: capitalCadena('V.P. DESARROLLO DE NEGOCIOS E INNOVACIÓN'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 22802,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 228)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '110f9eb9-bbc5-4673-9f68-05676a325127',
		name: capitalCadena('V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 22803,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 228)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f3643ba8-bb6d-4e04-a926-83e893eadb73',
		name: capitalCadena('V.P. SERVICIOS AL CLIENTE'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 22804,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 228)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0ed24ac3-189d-4d57-95b9-adecba32f988',
		name: capitalCadena('V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 22805,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 228)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '076acf90-4175-4433-81fb-30b757931d9c',
		name: capitalCadena('V.P. SOLUCIONES ELECTRÓNICAS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 22806,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 228)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '82f48675-435e-4e12-b0a9-bda03176a67d',
		name: capitalCadena('V.P. SEGURIDAD PREVENTIVA Y PROTECCIÓN FÍSICA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23102,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 231)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '82106ec4-2059-490b-a45a-2477427886db',
		name: capitalCadena('V.P. GESTIÓN DE SEGURIDAD BANCARIA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23103,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 231)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3835c6ae-2042-4d8e-ab04-1ff147f9f2e4',
		name: capitalCadena('V.P. PREVENCIÓN DEL FRAUDE'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23104,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 231)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ab16d4df-5323-4d9b-ae94-d814bef1b877',
		name: capitalCadena('V.P. OFICIAL DE SEGURIDAD DE LA INFORMACIÓN (CISO)'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23106,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 231)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2cd63ec4-4f9f-4536-a95a-f03987ad9ce4',
		name: capitalCadena('V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23401,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 234)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'bab14499-e00e-4c07-ba58-6580f50e9f46',
		name: capitalCadena('V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23402,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 234)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5001afeb-dfa0-4757-b31e-c5880943fc71',
		name: capitalCadena('V.P. CALIDAD DE SERVICIO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23403,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 234)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3d3a2723-b836-4fb4-a3b7-50d1e280eedf',
		name: capitalCadena('V.P. PLANIFICACIÓN ESTRATÉGICA PMO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23404,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 234)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9b49dacd-bdf3-4a20-bcd5-d43758c2488b',
		name: capitalCadena('GERENCIA DE ÁREA TRANSFORMACIÓN'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23405,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 234)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '46393972-b44f-4772-bf1e-3de675171a83',
		name: capitalCadena('GCIA DE ÁREA NEG MULTINACIONAL CONSUMO Y MANUFACTU'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23501,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 235)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fe381e2e-e045-4491-b815-11cc4796e386',
		name: capitalCadena('GERENCIA DE ÁREA NEGOCIOS TECNOLOGÍA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23502,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 235)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b9417a2e-02dc-41e8-bce8-33d8cec4b1d0',
		name: capitalCadena('V.P. ENERGÍA'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23503,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 235)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '89059a5d-6976-47e7-82f2-0180a091d083',
		name: capitalCadena('GERENCIA DE ÁREA CORPORATIVA CENTRO'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23504,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 235)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '636be038-77d5-4d40-84e3-2bd43e8a4a46',
		name: capitalCadena('V.P. CUMPLIMIENTO Y CONTROL DE GESTIÓN'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23601,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 236)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f85a5f87-49b3-4661-b167-370dea5f5252',
		name: capitalCadena('V.P. UPCLCFTFPADM'),
		level: 3,
		centro_de_costo: null,
		codigoInterno: 23602,
		isUnitActive: true,
		parent_id: updateNivel2.find(d => d.codigoInterno === 236)?.id,
		created_at: now,
		updated_at: now
	}
]

// 1. Actualizamos los elementos existentes en unionCoord que coinciden con vpActual
const updatedFromUnion = updateNivel2.map(unis => {
	const found = level3Actual.find(d => d.name.toLowerCase() === unis.name.toLowerCase())
	if (found) {
		return {
			...unis,
			level: found.level,
			codigoInterno: found.codigoInterno,
			isUnitActive: found.isUnitActive,
			parent_id: found.parent_id,
			updated_at: found.updated_at
		}
	}
	return unis
})

// 2. Identificamos los elementos en vpActual que NO están en unionCoord para agregarlos
const missingInUnion = level3Actual
	.filter(vp => !updateNivel2.some(u => cleanText(u.name) === cleanText(vp.name)))
	.map(vp => ({
		id: vp.id || randomUUID(),
		name: vp.name,
		level: vp.level,
		codigoInterno: vp.codigoInterno,
		isUnitActive: vp.isUnitActive,
		parent_id: vp.parent_id,
		created_at: now,
		updated_at: now
	}))

// 3. Combinamos ambos resultados para obtener la lista final
const updateNivel3 = [...updatedFromUnion, ...missingInUnion]

console.log('Level 3 Tiene:', level3Actual.length)

/**
 * Función para identificar qué unidades no lograron encontrar a su padre
 */
function checkOrphanUnits(units) {
	const orphans = units.filter(u => !u.parent_id)
	if (orphans.length > 0) {
		console.error(`\n❌ Se encontraron ${orphans.length} unidades de Nivel 3 sin parent_id:`)
		orphans.forEach(o => {
			console.log(`  - Nombre: "${o.name}" | Código: ${o.codigoInterno}`)
		})
	} else {
		console.log('\n✅ Todas las unidades de Nivel 3 tienen un parent_id asignado.')
	}
	return orphans
}

// Ejecutar validación al cargar el módulo
if (require.main === module || process.env.NODE_ENV === 'development') {
	checkOrphanUnits(level3Actual)
}

module.exports = { updateNivel3, level3Actual }
