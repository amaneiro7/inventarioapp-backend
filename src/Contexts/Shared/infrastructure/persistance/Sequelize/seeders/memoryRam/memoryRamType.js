const memoryRamTypeName = {
	DDR1: 'DDR1 DIMM',
	DDR1L: 'DDR1 SODIMM',
	DDR2: 'DDR2 DIMM',
	DDR2L: 'DDR2 SODIMM',
	DDR3: 'DDR3 DIMM',
	DDR3L: 'DDR3 SODIMM',
	DDR4: 'DDR4 DIMM',
	DDR4L: 'DDR4 SODIMM',
	DDR5: 'DDR5 DIMM',
	DDR5L: 'DDR5 SODIMM',
	LPDDR3: 'LPDDR3 Row of chips',
	LPDDR4: 'LPDDR4 Row of chips',
	LPDDR5: 'LPDDR5 Row of chips'
}

const memoryRamType = [
	{ id: '1', name: 'DDR2 DIMM' },
	{ id: '2', name: 'DDR2 SODIMM' },
	{ id: '3', name: 'DDR3 DIMM' },
	{ id: '4', name: 'DDR3 SODIMM' },
	{ id: '5', name: 'DDR4 DIMM' },
	{ id: '6', name: 'DDR4 SODIMM' },
	{ id: '7', name: 'DDR5 DIMM' },
	{ id: '8', name: 'DDR5 SODIMM' },
	{ id: '9', name: 'DDR1 DIMM' },
	{ id: '10', name: 'DDR1 SODIMM' },
	{ id: '11', name: 'LPDDR3 Row of chips' },
	{ id: '12', name: 'LPDDR4 Row of chips' },
	{ id: '13', name: 'LPDDR5 Row of chips' }
]

module.exports = { memoryRamType, memoryRamTypeName }
