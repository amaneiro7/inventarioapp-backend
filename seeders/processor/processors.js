const processorName = {
	J1800: 'J1800',
	J4125: 'J4125',
	I32100: '2100',
	I32120: '2120',
	I32130: '2130',
	I32370M: '2370M',
	I33110M: '3110M',
	I33120M: '3120M',
	I33220: '3220',
	I33240: '3240',
	I34030U: '4030U',
	I34150: '4150',
	I3M380: 'M380',

	I54570: '4570',
	I58500T: '8500T',
	I57200U: '7200U',
	I52400: '2400',
	I52450M: '2450M',
	I53210M: '3210M',
	I53230M: '3230M',
	I53470: '3470',
	I54430S: '4430S',
	I56400: '6400',
	I54460: '4460',
	I54590: '4590',
	I58365U: '8365U',
	I5M520: 'M520',
	I58400T: '8400T',
	915: '915',
	945: '945',
	I77600U: '7600U',
	I78550U: '8550U',
	I78565U: '8565U',
	I78650U: '8650U ',
	I78665U: '8665U',
	I71165G7: '1165G7',
	I710510U: '10510U',
	I72600: '2600',
	I74770: '4770',
	I74790: '4790',
	I76820HQ: '6820HQ',
	I78700: '8700',
	I78700T: '8700T',

	E4600: 'E4600',
	E7200: 'E7200',
	E7500: 'E7500',
	E7400: 'E7400',
	E8400: 'E8400',
	G630: 'G630',
	G620: 'G620',
	P7450: 'P7450',
	T5670: 'T5670',
	T6670: 'T6670',
	T1700: 'T1700',
	E2180: 'E2180',
	E31230V2: 'E3-1230 V2',
	E52603V4: 'E5-2603 V4',
	A99400: 'A9-9400',
	Q8400: 'Q8400',
	G640: 'G640',
	W2133: 'W-2133',
	E2200: 'E2200',
	E5300: 'E5300',
	E5500: 'E5500'
}

const processors = [
	{
		id: '37a5fc25-5261-4d35-b6a9-ec5d9b9bb6a9',
		product_collection: 'Intel(R) Celeron(R)',
		number_model: 'J1800',
		frequency: '2.41GHz',
		cores: 2,
		threads: false
	},
	{
		id: 'fe981a8b-d0af-4049-93d6-19fdabebe844',
		product_collection: 'Intel(R) Celeron(R)',
		number_model: 'J4125',
		frequency: '2.00GHz',
		cores: 2,
		threads: false
	},
	{
		id: 'b3a3224c-9b77-4653-944f-bc991e411917',
		product_collection: 'Intel(R) Core(TM) i3',
		number_model: '2100',
		frequency: '3.10GHz',
		cores: 2,
		threads: true
	},
	{
		id: '42081811-67fa-497b-9c54-ccb473a50ed4',
		product_collection: 'Intel(R) Core(TM) i3',
		number_model: '2120',
		frequency: '3.30GHz',
		cores: 2,
		threads: true
	},
	{
		id: '23ea3171-0163-4235-9061-5e199523bca3',
		product_collection: 'Intel(R) Core(TM) i3',
		number_model: '2130',
		frequency: '3.40GHz',
		cores: 2,
		threads: true
	},
	{
		id: 'c7d515bf-7419-4ba4-a6fc-4ecfb786e6fd',
		product_collection: 'Intel(R) Core(TM) i3',
		number_model: '2370M',
		frequency: '2.40GHz',
		cores: 2,
		threads: true
	},
	{
		id: '9ad9a6a8-9906-415b-bfe6-e5231d8fbe8b',
		product_collection: 'Intel(R) Core(TM) i3',
		number_model: '3110M',
		frequency: '2.40GHz',
		cores: 2,
		threads: true
	},
	{
		id: 'ea6d8d8e-7cee-42fb-82be-6ffbad0379af',
		product_collection: 'Intel(R) Core(TM) i3',
		number_model: '3120M',
		frequency: '2.50GHz',
		cores: 2,
		threads: true
	},
	{
		id: '0a787f22-2325-49a5-b7c6-8446a3abdab0',
		product_collection: 'Intel(R) Core(TM) i3',
		number_model: '3220',
		frequency: '3.30GHz',
		cores: 2,
		threads: true
	},
	{
		id: '6a80928d-ba0a-41ab-9c49-3d429cb637ce',
		product_collection: 'Intel(R) Core(TM) i3',
		number_model: '3240',
		frequency: '3.40GHz',
		cores: 2,
		threads: true
	},
	{
		id: '7bd1fe16-44ac-4fe9-86ae-59348026174e',
		product_collection: 'Intel(R) Core(TM) i3',
		number_model: '4030U',
		frequency: '1.90GHz',
		cores: 2,
		threads: false
	},
	{
		id: 'de2af95c-f81e-4555-aa14-18269537212d',
		product_collection: 'Intel(R) Core(TM) i3',
		number_model: '4150',
		frequency: '3.50GHz',
		cores: 4,
		threads: false
	},
	{
		id: '8778d460-5f17-4adb-904d-1124585f3e44',
		product_collection: 'Intel(R) Core(TM) i3',
		number_model: 'M380',
		frequency: '2.53GHz',
		cores: 2,
		threads: true
	},
	{
		id: '1229f9dd-9039-45b9-8eef-e1ac7a4aeef4',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '2400',
		frequency: '3.10GHz',
		cores: 4,
		threads: false
	},
	{
		id: 'beea8cd2-448f-4d0f-848b-60cf2b205aca',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '2450M',
		frequency: '2.50GHz',
		cores: 2,
		threads: true
	},
	{
		id: '19aa5315-38d6-4a16-a755-eb7bd9f91593',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '3210M',
		frequency: '2.50GHz',
		cores: 2,
		threads: true
	},
	{
		id: '8ebe5645-8c29-4498-9f2e-ad1c8034e8ce',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '3230M',
		frequency: '2.60GHz',
		cores: 2,
		threads: true
	},
	{
		id: 'ebeb94f8-c476-4ddc-829f-5bca0f8d211e',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '3470',
		frequency: '3.20GHz',
		cores: 4,
		threads: false
	},
	{
		id: 'e55d3e4b-60e2-49bb-ada9-fa73ffa8d0ec',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '4430S',
		frequency: '2.70GHz',
		cores: 4,
		threads: false
	},
	{
		id: 'f16ad44a-52cf-48af-851e-a267a541ec07',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '4460',
		frequency: '3.20GHz',
		cores: 4,
		threads: false
	},
	{
		id: 'bae0337d-8a8e-4a47-b8ae-97166fd127d2',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '4570',
		frequency: '3.20GHz',
		cores: 4,
		threads: false
	},
	{
		id: '0d00997d-c5dd-4e35-96cd-26c34d087edb',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '4590',
		frequency: '3.30GHz',
		cores: 4,
		threads: false
	},
	{
		id: 'f0788dd7-ae62-48b7-9ef2-d5455adaeadc',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '6400',
		frequency: '2.70GHz',
		cores: 4,
		threads: false
	},
	{
		id: 'bb9442e7-d2b6-4aff-80d3-430a29c35db6',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '7200U',
		frequency: '2.50GHz',
		cores: 2,
		threads: true
	},
	{
		id: 'd6605993-3dc4-4790-ba01-05a8795077fe',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '8365U',
		frequency: '1.60GHz',
		cores: 4,
		threads: true
	},
	{
		id: '8ee4e438-f193-4e30-9411-512bf1dbcfbd',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '8400T',
		frequency: '1.70GHz',
		cores: 6,
		threads: true
	},
	{
		id: '75f4cdcd-53a4-4df1-94d5-f09a5c2705ae',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '8500T',
		frequency: '2.10GHz',
		cores: 6,
		threads: true
	},
	{
		id: '7605513c-7398-4ef9-a8de-97cb162a6745',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: 'M520',
		frequency: '2.40GHz',
		cores: 2,
		threads: true
	},
	{
		id: 'b659b18c-70fa-4b3c-9fca-903d434c0bd8',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '2600',
		frequency: '3.40GHz',
		cores: 4,
		threads: true
	},
	{
		id: '1f76d8de-5563-4420-9ad9-46833890ce0c',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '4770',
		frequency: '3.40GHz',
		cores: 4,
		threads: true
	},
	{
		id: '7d82f1b0-cd92-470d-b9a7-acf6186903b1',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '4790',
		frequency: '3.60GHz',
		cores: 4,
		threads: true
	},
	{
		id: '7fe7e42d-4632-4fb8-99a1-467ce7d5a4b4',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '6820HQ',
		frequency: '2.70GHz',
		cores: 4,
		threads: true
	},
	{
		id: '12991195-1133-4753-a3b3-c78fa65496bb',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '7600U',
		frequency: '2.80GHz',
		cores: 2,
		threads: true
	},
	{
		id: 'c4e89235-6849-478e-8148-1e7b49fe5673',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '8550U',
		frequency: '1.80GHz',
		cores: 4,
		threads: true
	},
	{
		id: '7e2de7e3-82e5-48a8-8f73-8a3e68f5bc32',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '8565U',
		frequency: '1.80GHz',
		cores: 4,
		threads: true
	},
	{
		id: '9d242eff-d34d-40c5-9feb-f52ab1b91ec7',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '8650U ',
		frequency: '1.90GHz',
		cores: 4,
		threads: true
	},
	{
		id: 'dcef0870-35cf-4900-8404-7c78bc975d73',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '8665U',
		frequency: '1.90GHz',
		cores: 4,
		threads: true
	},
	{
		id: '3a48933e-d75c-460c-ba5c-a7ebd3de7e43',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '8700',
		frequency: '3.20GHz',
		cores: 6,
		threads: true
	},
	{
		id: 'f4446fd3-224b-4433-bb90-309ad7affcda',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '8700T',
		frequency: '2.40GHz',
		cores: 6,
		threads: true
	},
	{
		id: 'b81e7750-50b9-4fac-9a94-55a00a9b430e',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '10510U',
		frequency: '1.80GHz',
		cores: 4,
		threads: true
	},
	{
		id: 'a267cc70-f597-4e91-9330-003a89e19240',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '1165G7',
		frequency: '2.80GHz',
		cores: 4,
		threads: true
	},
	{
		id: '7917eafc-83ff-4866-be19-7072adfea1ee',
		product_collection: 'Intel(R) Core(TM) 2 Duo',
		number_model: 'E4600',
		frequency: '2.40GHz',
		cores: 2,
		threads: false
	},
	{
		id: '7df16a14-b113-4786-8623-7e8a2d544d2f',
		product_collection: 'Intel(R) Core(TM) 2 Duo',
		number_model: 'E7200',
		frequency: '2.53GHz',
		cores: 2,
		threads: false
	},
	{
		id: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		product_collection: 'Intel(R) Core(TM) 2 Duo',
		number_model: 'E7400',
		frequency: '2.80GHz',
		cores: 2,
		threads: false
	},
	{
		id: 'ae641ecb-838a-45bb-8d30-9a2df9a4560f',
		product_collection: 'Intel(R) Core(TM) 2 Duo',
		number_model: 'E7500',
		frequency: '2.93GHz',
		cores: 2,
		threads: false
	},
	{
		id: 'f099dba9-06d2-4b1c-89f1-1795a945df9e',
		product_collection: 'Intel(R) Core(TM) 2 Duo',
		number_model: 'E8400',
		frequency: '3.00GHz',
		cores: 2,
		threads: false
	},
	{
		id: '71982363-de6c-48e4-957e-7609eefe05b9',
		product_collection: 'Intel(R) Core(TM) 2 Duo',
		number_model: 'T1700',
		frequency: '1.80GHz',
		cores: 2,
		threads: false
	},
	{
		id: '6912f593-a87b-466c-aa42-ee5374648599',
		product_collection: 'Intel(R) Core(TM) 2 Duo',
		number_model: 'T5670',
		frequency: '1.80GHz',
		cores: 2,
		threads: false
	},
	{
		id: 'ed64272a-a523-4ddc-bc27-67414abde56e',
		product_collection: 'Intel(R) Core(TM) 2 Duo',
		number_model: 'T6670',
		frequency: '2.20GHz',
		cores: 2,
		threads: false
	},
	{
		id: '29c1d3df-752f-4deb-b451-ecfef9a2ac98',
		product_collection: 'Intel(R) Core(TM) 2 Duo',
		number_model: 'P7450',
		frequency: '2.13GHz',
		cores: 2,
		threads: false
	},
	{
		id: '024a2af4-ddd3-46d1-865c-69ec28d48dcf',
		product_collection: 'Intel(R) Core(TM) 2 Quad',
		number_model: 'Q8400',
		frequency: '2.66GHz',
		cores: 4,
		threads: false
	},
	{
		id: '731b7cc5-5a97-47b2-898e-320a4001dffb',
		product_collection: 'Intel(R) Core(TM)',
		number_model: 'G630',
		frequency: '2.70GHz',
		cores: 2,
		threads: false
	},
	{
		id: '7f3ad88a-6ba7-46c9-93c8-b527fa47d444',
		product_collection: 'Intel(R) Core(TM)',
		number_model: 'G620',
		frequency: '2.60GHz',
		cores: 2,
		threads: false
	},
	{
		id: '2f796b9a-7fde-4e1b-bacf-c9ca2b5e9bbc',
		product_collection: 'Intel(R) Core(TM)',
		number_model: 'G640',
		frequency: '2.80GHz',
		cores: 2,
		threads: false
	},
	{
		id: 'f17b4901-346a-4099-889b-4e46b804755a',
		product_collection: 'Intel(R) Pentium(R) Dual',
		number_model: 'E2180',
		frequency: '2.00GHz',
		cores: 2,
		threads: false
	},
	{
		id: '73999ba7-43c4-4551-9d3d-fbaa8217f9be',
		product_collection: 'Intel(R) Pentium(R) Dual',
		number_model: 'E2200',
		frequency: '2.20GHz',
		cores: 2,
		threads: false
	},
	{
		id: '56aa40a7-2504-4058-ba46-db8dca0f4674',
		product_collection: 'Intel(R) Pentium(R) Dual-Core',
		number_model: 'E5300',
		frequency: '2.60GHz',
		cores: 2,
		threads: false
	},
	{
		id: 'e28f150a-8490-4595-a261-9ca317d51406',
		product_collection: 'Intel(R) Pentium(R) Dual-Core',
		number_model: 'E5500',
		frequency: '2.80GHz',
		cores: 2,
		threads: false
	},
	{
		id: 'ba77275f-6e39-465e-a5eb-810c6aa58b36',
		product_collection: 'Intel(R) Pentium(R) D',
		number_model: '915',
		frequency: '2.80GHz',
		cores: 2,
		threads: false
	},
	{
		id: '3ad56003-fb41-469a-b5e7-efa8df50a337',
		product_collection: 'Intel(R) Pentium(R) D',
		number_model: '945',
		frequency: '3.40GHz',
		cores: 2,
		threads: false
	},
	{
		id: 'e7bcb9c9-e843-42f2-98a0-7010e8ce7473',
		product_collection: 'Intel(R) Xeon(R)',
		number_model: 'E3-1230 V2',
		frequency: '3.30GHz',
		cores: 4,
		threads: true
	},
	{
		id: '3fbc8e5c-27fa-4f82-a0d6-c80055545cf2',
		product_collection: 'Intel(R) Xeon(R)',
		number_model: 'E5-2603 V4',
		frequency: '1.70GHz',
		cores: 6,
		threads: false
	},
	{
		id: '8479dd10-f58c-4271-99db-95be4dccffb4',
		product_collection: 'Intel(R) Xeon(R)',
		number_model: 'W-2133',
		frequency: '3.60GHz',
		cores: 6,
		threads: true
	},
	{
		id: '38192362-b306-474b-a411-259fe64cd481',
		product_collection: 'AMD(R) Radeon R5',
		number_model: 'A9-9400',
		frequency: '2.40GHz',
		cores: 4,
		threads: false
	}
]

module.exports = { processors, processorName }
