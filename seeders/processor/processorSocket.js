const socketsName = {
	LGA775: 'LGA 775',
	SOCKETM: 'Socket M',
	LGA771: 'LGA 771',
	SOCKETP: 'Socket P',
	SOCKET478: 'Socket 478',
	LGA1150: 'LGA 1150',
	LGA1151: 'LGA 1151',
	LGA1155: 'LGA 1155',
	LGA1156: 'LGA 1156',
	LGA1366: 'LGA 1366',
	FCBGA1170: 'FCBGA 1170',
	FCBGA1528: 'FCBGA 1528',
	FCPGA988: 'FCPGA 988',
	FCBGA1023: 'FCBGA 1023',
	FCBGA1449: 'FCBGA 1449',
	PGA370: 'PGA 370',
	FCBGA1440: 'FCBGA 1440',
	FCBGA1168: 'FCBGA 1168',
	FCBGA1356: 'FCBGA 1356',
	FCLGA2011: 'FCLGA 2011',
	FCLGA1151: 'FCLGA 1151',
	FCLGA1150: 'FCLGA 1150',
	FCLGA1155: 'FCLGA 1155'
}

const processorSockets = [
	{ id: 'fd6fa672-d52a-46a6-a289-b2c93eaf6333', name: 'LGA 775' },
	{ id: '9e2d6167-f36b-49c1-8e14-2becbfd6d670', name: 'Socket M' },
	{ id: '316fd497-467c-44eb-b645-73888fbaf690', name: 'LGA 771' },
	{ id: '7f5e5879-1b4e-4c47-901d-76823d5d2b32', name: 'Socket P' },
	{ id: 'af29cc24-3bb4-435c-baa8-1cd566a7a944', name: 'Socket 478' },
	{ id: 'ff8b21af-6c5d-421f-a8f4-651a09af2273', name: 'LGA 1150' },
	{ id: 'f5f88635-872d-48eb-b67c-8e326cb7cd2b', name: 'LGA 1151' },
	{ id: '655a5961-1009-47bb-a9cd-0e6f927838c0', name: 'LGA 1155' },
	{ id: 'a887ec75-d01e-4a1a-a6a0-b291e5a0e761', name: 'LGA 1156' },
	{ id: '94325f87-3ead-4425-bacf-e94765baa854', name: 'LGA 1366' },
	{ id: '98a46931-2a52-4ec7-9eb8-fdbfe2b356bc', name: 'FCBGA 1170' },
	{ id: '8cbb3174-2e40-4d3b-aa2b-65c085318343', name: 'FCBGA 1528' },
	{ id: '4876a7f5-c6c5-45aa-bbc2-608e87033f7e', name: 'FCPGA 988' },
	{ id: '4cb017d8-082c-4a2b-9978-cf36c9cb2831', name: 'FCBGA 1023' },
	{ id: '61bf78aa-a094-42b4-8d12-17b2036a8e94', name: 'FCBGA 1449' },
	{ id: '4d275838-617a-403e-88b9-9cb99c7d6dfd', name: 'PGA 370' },
	{ id: 'd5b281ef-09cc-4cd9-9c61-4d43f68d221f', name: 'FCBGA 1440' },
	{ id: 'ef7ce09d-de24-498a-8ebd-c1914b29e43c', name: 'FCBGA 1168' },
	{ id: 'f9f2ed85-b869-4da1-807b-80f57b8a104d', name: 'FCBGA 1356' },
	{ id: '7fb1d2dd-c93f-4ed3-97e4-f452f6cf1cff', name: 'FCLGA 2011' },
	{ id: '5b2dcb34-71f9-44a8-8aa3-c2bb4a73a1b1', name: 'FCLGA 1151' },
	{ id: 'a10b5fb9-ac79-4748-b5de-b02a02324680', name: 'FCLGA 1150' },
	{ id: '7fea7fc0-5c2e-4797-99f8-48c6afdf49fc', name: 'FCLGA 1155' }
]

module.exports = { processorSockets, socketsName }
